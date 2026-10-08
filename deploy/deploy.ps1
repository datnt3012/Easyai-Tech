<#
  Deploy the Easy AI landing page to IIS. Run by a Scheduled Task every few minutes.
  Pulls origin/main into a private clone, copies only publishable files to the IIS web root,
  then purges the Cloudflare cache. Does nothing when there is no new commit (use -Force to redeploy).
#>
param(
    [string]$RepoUrl = 'https://github.com/datnt3012/Easyai-Tech.git',
    [string]$Branch  = 'main',
    [string]$RepoDir = 'C:\deploy\Easyai-Tech',
    [string]$WebRoot = 'C:\inetpub\easyai',
    [switch]$Force
)

$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$LogFile = 'C:\deploy\deploy.log'
New-Item -ItemType Directory -Force -Path (Split-Path $LogFile) | Out-Null

function Log([string]$Message) {
    $line = '{0} {1}' -f (Get-Date -Format 's'), $Message
    Add-Content -Path $LogFile -Value $line
    Write-Host $line
}

function Git {
    & git -c safe.directory='*' @args
    if ($LASTEXITCODE -ne 0) { throw "git $($args -join ' ') failed (exit $LASTEXITCODE)" }
}

try {
    if (-not (Test-Path (Join-Path $RepoDir '.git'))) {
        Git clone --quiet --branch $Branch $RepoUrl $RepoDir
        $changed = $true
    }
    else {
        Git -C $RepoDir fetch --quiet origin $Branch
        $local  = (Git -C $RepoDir rev-parse HEAD).Trim()
        $remote = (Git -C $RepoDir rev-parse "origin/$Branch").Trim()
        $changed = $local -ne $remote
        if ($changed) { Git -C $RepoDir reset --quiet --hard "origin/$Branch" }
    }

    $indexMissing = -not (Test-Path (Join-Path $WebRoot 'index.html'))
    if (-not ($changed -or $Force -or $indexMissing)) {
        Log 'No change.'
        return
    }

    $sha = (Git -C $RepoDir rev-parse --short HEAD).Trim()
    Log "Deploying $sha"
    New-Item -ItemType Directory -Force -Path $WebRoot | Out-Null

    # Assets first, index.html last, so the page never points at a missing file mid-deploy.
    # Brand source files (AI / PDF / design folders) stay out of the public web root.
    robocopy (Join-Path $RepoDir 'assets') (Join-Path $WebRoot 'assets') /MIR /XD AI PDF 2x 3x SVG /XF *.ai *.pdf .DS_Store /NFL /NDL /NJH /NJS /NP | Out-Null
    if ($LASTEXITCODE -ge 8) { throw "robocopy failed (exit $LASTEXITCODE)" }

    Copy-Item (Join-Path $RepoDir 'deploy\web.config') $WebRoot -Force
    Copy-Item (Join-Path $RepoDir 'index.html') $WebRoot -Force

    $token = [Environment]::GetEnvironmentVariable('CF_API_TOKEN', 'Machine')
    $zone  = [Environment]::GetEnvironmentVariable('CF_ZONE_ID', 'Machine')
    if ($token -and $zone) {
        try {
            Invoke-RestMethod -Method Post -Uri "https://api.cloudflare.com/client/v4/zones/$zone/purge_cache" `
                -Headers @{ Authorization = "Bearer $token" } -ContentType 'application/json' `
                -Body '{"purge_everything":true}' | Out-Null
            Log 'Cloudflare cache purged.'
        }
        catch {
            Log "Cloudflare purge failed: $($_.Exception.Message)"
        }
    }
    else {
        Log 'CF_API_TOKEN / CF_ZONE_ID not set, skipping Cloudflare purge.'
    }

    Log "Deployed $sha"
}
catch {
    Log "ERROR: $($_.Exception.Message)"
    exit 1
}
