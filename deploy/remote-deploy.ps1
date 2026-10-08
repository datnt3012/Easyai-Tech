# Runs on the Windows VPS itself, invoked over SSH by .github/workflows/deploy-vps.yml.
# By the time this runs, the workflow has already scp'd into $DeployPath:
#   - site-dist.tar.gz   (index.html + assets/ + web.config)
#   - this script
#
# Requires tar.exe (built into Windows since Server 2019 / Win10 1803).
param(
    [string]$DeployPath = "C:\easyai-deploy",
    [string]$WebRoot = "C:\inetpub\easyai"
)

$ErrorActionPreference = "Stop"

if ($DeployPath) { $DeployPath = $DeployPath.Trim(" `t`r`n") }
if ($WebRoot) { $WebRoot = $WebRoot.Trim(" `t`r`n") }

# robocopy /MIR deletes whatever is not in the source, so never let a blank or
# drive-root value through.
if ([string]::IsNullOrWhiteSpace($WebRoot) -or $WebRoot.TrimEnd('\', '/') -match '^[A-Za-z]:$') {
    throw "-WebRoot is blank or a drive root ('$WebRoot') - refusing to mirror into it."
}

$archive = Join-Path $DeployPath "site-dist.tar.gz"
if (-not (Test-Path -PathType Leaf $archive)) {
    throw "$archive not found - the scp step did not deliver the build."
}

$staging = Join-Path $DeployPath "staging"
if (Test-Path $staging) { Remove-Item -Recurse -Force $staging }
New-Item -ItemType Directory -Path $staging -Force | Out-Null

Write-Host "==> Extracting build"
tar -xzf $archive -C $staging
if ($LASTEXITCODE -ne 0) { throw "tar extraction failed (exit code $LASTEXITCODE)" }
if (-not (Test-Path -PathType Leaf (Join-Path $staging "index.html"))) {
    throw "Archive has no index.html - refusing to deploy an empty site."
}

New-Item -ItemType Directory -Path $WebRoot -Force | Out-Null

# Two passes so the live index.html never points at an asset that has not landed yet:
# assets first, then the root files (index.html, web.config) and removal of stray root files.
Write-Host "==> Syncing assets to $WebRoot"
robocopy (Join-Path $staging "assets") (Join-Path $WebRoot "assets") /MIR /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -ge 8) { throw "robocopy (assets) failed (exit code $LASTEXITCODE)" }

Write-Host "==> Syncing root files to $WebRoot"
robocopy $staging $WebRoot /MIR /XD assets /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -ge 8) { throw "robocopy (root) failed (exit code $LASTEXITCODE)" }
$global:LASTEXITCODE = 0

Remove-Item -Recurse -Force $staging
Remove-Item -Force $archive

Write-Host "==> Deploy finished."
