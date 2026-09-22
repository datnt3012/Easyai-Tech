    // Bilingual Dictionary
    const translations = {
      vi: {
        "topbar.verified": "ĐÃ XÁC MINH",
        "topbar.dunsLabel": "Đăng ký D-U-N-S®:",
        "topbar.security": "Bảo mật chuẩn Enterprise",
        "nav.langLabel": "Ngôn ngữ:",
        "nav.problem": "Vấn đề",
        "nav.solution": "Giải pháp Bento",
        "nav.diff": "Khác biệt AI & Web3",
        "nav.trust": "Tín hiệu uy tín",
        "nav.cases": "Case Study",
        "nav.process": "Lộ trình",
        "nav.faq": "FAQ",
        "btn.demo": "Đặt lịch demo",
        "hero.badge": "Không phải chatbot gắn mác · Kiến trúc AI Native sâu vào Core Data",
        "hero.title": "CRM Xây Trên Nền Tảng <span class='text-brand-primary underline decoration-brand-primary/30 underline-offset-8'>AI Thực Sự</span> Cho Doanh Nghiệp Lớn",
        "hero.subtitle": "Giải phóng đội ngũ kinh doanh khỏi 65% thao tác thủ công, tự động chấm điểm cơ hội và dự báo chính xác hành vi khách hàng bằng trí tuệ nhân tạo tích hợp sâu vào quy trình nghiệp vụ.",
        "hero.cta": "Đặt lịch demo cùng Chuyên gia",
        "hero.cta.secondary": "Một vài dự án tiêu biểu",
        "hero.trustnote": "Demo 1:1 theo bài toán riêng · Cam kết bảo mật NDA",
        "hero.stat1.val": "42.6%",
        "hero.stat1.label": "Tăng Win Rate B2B",
        "hero.stat2.val": "65%",
        "hero.stat2.label": "Giảm việc thủ công",
        "hero.stat3.val": "ISO 27001",
        "hero.stat3.label": "On-Premise Vault",
        "hero.banner.link": "dự án tiêu biểu triển khai theo ngành",
        "showcase.badge": "THỰC TẾ TRIỂN KHAI · DOANH NGHIỆP LỚN",
        "showcase.title": "Một Vài Dự Án Tiêu Biểu Của Easy&nbsp;AI",
        "showcase.subtitle": "Khám phá dữ liệu nghiệp vụ thực tế, cấu trúc KPI theo ngành và các hành động tự động hóa AI đã vận hành tại các đối tác quy mô lớn.",
        "proj.p0.flagship": "⭐ Dự án Flagship",
        "proj.p0.title": "Themis — Trợ Lý Pháp Lý AI",
        "proj.p0.client": "Triển khai thực tế tại một Tập đoàn Năng lượng & Xây dựng hàng đầu (Audit danh mục HĐ $185M+)",
        "proj.p0.status": "AI Engine: Legal LLM Fine-Tuned · On-Premise Isolated · VIAC / ICC Ready",
        "proj.p0.nba.btn": "Trải nghiệm thử Themis Legal AI →",
        "proj.p1.title": "HL Warehouse",
        "proj.p1.client": "Triển khai thực tế tại HL Warehouse",
        "proj.p1.status": "AI Engine: v4.2 Active · Đồng bộ WMS Realtime",
        "proj.sync": "Dữ liệu thời gian thực: Đồng bộ 12:45:00",
        "proj.p1.nba.btn": "Xem demo bài toán Quản lý Kho vận của bạn →",
        "proj.p2.title": "HL Contract Hub",
        "proj.p2.client": "Triển khai thực tế tại HL Contract Hub",
        "proj.p2.status": "AI Engine: v4.2 Active · Đồng bộ Chữ ký số Realtime",
        "proj.p2.nba.btn": "Xem demo bài toán Quản lý Hợp đồng của bạn →",
        "proj.p1.badge.short": "Quản lý Kho vận",
        "proj.p2.badge.short": "Quản lý Hợp đồng",
        "dash.copilot.b2": "• <strong>Người có tiếng nói quyết định:</strong> Giám đốc Chuyển đổi số (Đã đồng ý ngân sách) & Trưởng phòng An ninh thông tin (Cần xem xét chứng nhận D-U-N-S và ISO 27001).",
        "problem.tag": "Thực trạng nhức nhối",
        "problem.title": "Vì sao 80% dự án CRM hiện nay không mang lại giá trị thực?",
        "problem.subtitle": "Lãnh đạo doanh nghiệp đầu tư hàng tỷ đồng nhưng đội ngũ bán hàng vẫn dùng Excel, và các giải pháp 'AI' quảng cáo rầm rộ chỉ là chatbot trả lời câu hỏi thông thường.",
        "problem.p1.title": "Dữ liệu phân mảnh, cô lập",
        "problem.p1.desc": "Thông tin nằm rải rác ở Zalo, email, phần mềm kế toán và file cá nhân. Giám đốc kinh doanh không thể có cái nhìn 360° về phễu bán hàng.",
        "problem.p2.title": "Lãng phí giờ làm vì nhập liệu",
        "problem.p2.desc": "Sales dành hơn 65% thời lượng chỉ để gõ lại thông tin sau cuộc gặp, dẫn đến chán nản và dữ liệu cập nhật đối phó, thiếu chính xác.",
        "problem.p3.title": "Không dự đoán được rủi ro",
        "problem.p3.desc": "Chỉ biết khách hàng rời đi khi họ đã hủy gia hạn hợp đồng. Không có cảnh báo định lượng về nguy cơ sụt giảm tương tác hay hành vi tiêu cực.",
        "problem.p4.title": "'Bẫy AI bề mặt'",
        "problem.p4.desc": "Các sản phẩm dán nhãn AI nhưng bản chất chỉ tích hợp API chatbot bên ngoài, hoàn toàn không hiểu quy trình ERP và không thể phân tích dữ liệu chuyên sâu.",
        "sol.tag": "Kiến trúc Giải pháp",
        "sol.title": "Hệ Thống Tính Năng Xây Dựng Xung Quanh Kết Quả Kinh Doanh",
        "sol.subtitle": "Không liệt kê tính năng sáo rỗng. Mỗi module của Easy AI được thiết kế để giải quyết trực tiếp một nút thắt chuyển đổi cụ thể.",
        "sol.b1.title": "Tự Động Chấm Điểm & Phân Hạng Khách Hàng Tiềm Năng",
        "sol.b1.desc": "Thuật toán máy học phân tích hơn 30 biến số thời gian thực (tần suất phản hồi, quy mô công ty, hành vi đọc báo giá, lịch sử ngành) để lọc ra 20% khách hàng mang lại 80% doanh thu.",
        "sol.b1.stat": "Tỷ lệ chính xác xếp hạng phễu",
        "sol.b2.title": "Dự Đoán Khách Hàng Rời Bỏ Trước 30 Ngày",
        "sol.b2.desc": "Cảnh báo sớm khi tài khoản doanh nghiệp có dấu hiệu suy giảm mức độ tương tác hoặc thay đổi nhân sự chủ chốt, giúp đội ngũ CSKH can thiệp kịp thời bảo toàn doanh thu gia hạn.",
        "sol.b2.stat": "Tỷ lệ giữ chân khách hàng (Retention)",
        "sol.b2.val": "Tăng +22%",
        "sol.b3.title": "Copilot CSKH Đa Kênh",
        "sol.b3.desc": "Tổng hợp tức thì lịch sử email, tin nhắn và cuộc gọi thành bản tóm tắt 3 dòng, tự động đề xuất câu trả lời chuẩn nghiệp vụ cho nhân viên.",
        "sol.b3.stat": "Tốc độ phản hồi: &lt; 10 giây",
        "sol.b4.title": "Tự Động Hóa Quy Trình Bán Hàng (Workflow AI)",
        "sol.b4.desc": "Tự động phân bổ cơ hội theo chuyên môn tư vấn, nhắc nhở lịch chăm sóc và tự động kích hoạt tài liệu báo giá cá nhân hóa không cần nhập liệu thủ công.",
        "sol.b4.stat": "Tiết kiệm trung bình 18.5 giờ/nhân viên/tháng",
        "sol.b5.title": "Dự Báo Doanh Thu Chuẩn Xác",
        "sol.b5.desc": "Không còn báo cáo dự phóng dựa trên phán đoán cảm tính. AI phân tích vận tốc phễu thực tế để đưa ra khoảng dự báo tài chính tin cậy cho Hội đồng quản trị.",
        "sol.b5.stat": "Độ lệch sai số &lt; 5%",
        "diff.tag": "Thế mạnh độc bản",
        "diff.title": "Tổ Hợp Hiếm Thấy: Trí Tuệ Nhân Tạo Đi Cùng Kiến Trúc Dữ Liệu Web3",
        "diff.subtitle": "Chúng tôi không chỉ là công ty viết phần mềm CRM. Easy AI kết hợp năng lực tính toán thông minh của AI với tính toàn vẹn, bảo mật phân tán và bất biến của công nghệ Web3.",
        "diff.boxhead": "Cam kết không qua trung gian:",
        "diff.boxbody": "Làm việc trực tiếp với đội ngũ Solution Architect & Business Analyst có kinh nghiệm triển khai ERP doanh nghiệp lớn, đảm bảo bài toán thực tế được hiện thực hóa chính xác.",
        "diff.p1.title": "Synergy AI + Web3 Độc Đáo",
        "diff.p1.desc": "Khả năng tích hợp hợp đồng thông minh (smart contract) xác thực giao dịch, ghi nhật ký kiểm toán không thể giả mạo (audit trail) và quản lý định danh khách hàng phi tập trung (DID).",
        "diff.p2.title": "Tùy Biến Sâu Theo Nghiệp Vụ Ngành",
        "diff.p2.desc": "Không ép buộc doanh nghiệp phải thay đổi quy trình để theo khuôn mẫu phần mềm. Chúng tôi tinh chỉnh mô hình AI phù hợp riêng cho từng ngành: Bán lẻ, Sản xuất công nghiệp, Dịch vụ B2B & Tài chính.",
        "diff.p3.title": "Đội Ngũ Tư Vấn Trực Tiếp Có Kinh Nghiệm ERP",
        "diff.p3.desc": "Khách hàng làm việc trực tiếp với kỹ sư giải pháp cấp cao đã từng triển khai các hệ thống SAP, Oracle, Microsoft Dynamics. Không có rào cản thông dịch trung gian gây chậm trễ.",
        "trust.badge": "Pháp Nhân Minh Bạch · Chuẩn Quốc Tế",
        "trust.title": "Tín Hiệu Uy Tín Đã Được Xác Minh Cho Đối Tác Toàn Cầu",
        "trust.desc": "Chúng tôi hiểu rằng việc lựa chọn đối tác công nghệ là quyết định chiến lược nhiều rủi ro. Easy AI được đăng ký pháp nhân rõ ràng và sở hữu mã định danh doanh nghiệp toàn cầu D-U-N-S, cam kết các tiêu chuẩn bảo mật dữ liệu cao nhất.",
        "trust.legal1": "<strong>Pháp nhân:</strong> EASY AI TECHNOLOGY JOINT STOCK COMPANY",
        "trust.legal2": "<strong>Mã D-U-N-S®:</strong> 67-384-8050 (Dun & Bradstreet)",
        "trust.legal3": "<strong>Bảo mật dữ liệu:</strong> Cam kết không dùng dữ liệu khách hàng để huấn luyện model công cộng",
        "trust.legal4": "<strong>Mô hình triển khai:</strong> Hỗ trợ On-premise hoặc Private VPC theo quy định pháp lý",
        "trust.cert.reg": "CHỨNG NHẬN D-U-N-S® TOÀN CẦU",
        "trust.cert.desc": "Định danh doanh nghiệp toàn cầu do Dun & Bradstreet cấp, bảo đảm khả năng ký kết và làm việc với các tập đoàn đa quốc gia.",
        "trust.cert.iso": "Chuẩn ISO 27001",
        "trust.cert.gdpr": "Tuân thủ GDPR",
        "trust.cert.onprem": "Sẵn sàng On-Premise",
        "case.tag": "Bằng chứng thực tế",
        "case.title": "Kết Quả Định Lượng Thay Cho Lời Nói",
        "case.subtitle": "Những con số được xác nhận sau khi các doanh nghiệp đối tác triển khai hệ thống Easy AI vào quy trình vận hành hàng ngày.",
        "case.stat1.title": "Tỷ lệ chốt hợp đồng (Win Rate)",
        "case.stat1.desc": "Nhờ AI Lead Scoring lọc bỏ 80% thời gian phân tích thủ công để tập trung vào cơ hội chất lượng.",
        "case.stat2.title": "Thời gian nhập liệu & báo cáo",
        "case.stat2.desc": "Tự động đồng bộ lịch sử tương tác đa kênh và tạo báo cáo dự báo doanh thu định kỳ tự động.",
        "case.stat3.title": "Tốc độ xử lý yêu cầu khách hàng",
        "case.stat3.desc": "Trợ lý Copilot AI tóm tắt hồ sơ và chuẩn bị phương án trả lời trước khi nhân sự nhấc máy.",
        "case.study.cat": "CASE STUDY · NGÀNH BÁN LẺ VÀ PHÂN PHỐI QUY MÔ 1,200 NHÂN SỰ",
        "case.study.heading": "Giải bài toán dữ liệu phân tán tại 85 chi nhánh và kho vận",
        "case.study.quote": "\"Trước khi có Easy AI, ban giám đốc phải chờ 5 ngày để tổng hợp dữ liệu từ các chi nhánh. Hiện tại toàn bộ luồng khách hàng B2B được chấm điểm tự động, tỷ lệ tái ký hợp đồng tăng 24% trong 6 tháng đầu tiên.\"",
        "case.study.author": "Nguyễn Văn A",
        "case.study.authorTitle": "Giám đốc Chuyển đổi số & Vận hành",
        "case.study.btn": "Xem bản demo phân tích ngành của bạn →",
        "process.tag": "Lộ trình tinh gọn",
        "process.title": "Từ Đánh Giá Hiện Trạng Đến Go-Live Trong&nbsp;4&nbsp;Bước",
        "process.subtitle": "Quy trình tinh chỉnh chuẩn enterprise, hạn chế tối đa rủi ro gián đoạn vận hành và đảm bảo tỷ lệ tiếp nhận người dùng cao nhất.",
        "process.s1.time": "3 — 5 Ngày",
        "process.s1.title": "Khảo Sát & Thẩm Định",
        "process.s1.desc": "Chuyên gia giải pháp trực tiếp rà soát kiến trúc dữ liệu hiện có (ERP, CRM cũ, cơ sở dữ liệu) và xác định rõ bài toán cần giải quyết bằng AI.",
        "process.s2.time": "1 — 2 Tuần",
        "process.s2.title": "Thiết Kế & Triển Khai PoC",
        "process.s2.desc": "Xây dựng bản Proof of Concept (PoC) chạy thử nghiệm trên dữ liệu mẫu của doanh nghiệp để kiểm chứng độ chính xác thuật toán trước khi ký kết diện rộng.",
        "process.s3.time": "2 — 4 Tuần",
        "process.s3.title": "Tích Hợp Sâu & UAT",
        "process.s3.desc": "Đấu nối API bảo mật với hệ thống nội bộ, cấu hình phân quyền dữ liệu nhiều tầng và tổ chức kiểm thử chấp nhận người dùng (UAT).",
        "process.s4.time": "Liên tục",
        "process.s4.title": "Go-Live & Đồng Hành 24/7",
        "process.s4.desc": "Đào tạo chuyển giao toàn diện cho đội ngũ kinh doanh, giám sát hiệu năng AI và có kỹ sư chuyên trách hỗ trợ theo cam kết SLA doanh nghiệp.",
        "process.action.view": "Xem tài liệu bàn giao",
        "process.detail.teamLabel": "Đội ngũ chuyên trách:",
        "process.detail.teamVal": "Lead Solution Architect & Business Analyst",
        "process.detail.tasksHead": "Nội Dung Triển Khai Chi Tiết Của Đội Ngũ Kỹ Sư:",
        "process.detail.deliverHead": "Tài Liệu Bàn Giao (Deliverables):",
        "process.detail.cta": "Đặt lịch triển khai bước này cùng Chuyên gia →",
        "process.detail.step0.badge": "BƯỚC 01 / 04 · 3 — 5 NGÀY",
        "process.detail.step0.sla": "✓ Cam kết bảo mật NDA trước khi tiếp cận dữ liệu",
        "process.detail.step0.t1Title": "Rà soát hạ tầng ERP & Kho dữ liệu hiện hữu",
        "process.detail.step0.t1Desc": "Audit kiến trúc kết nối API của SAP, Oracle, SQL Server hoặc hệ thống CRM cũ để đo lường độ trễ và tính toàn vẹn dữ liệu.",
        "process.detail.step0.t2Title": "Làm việc trực tiếp cùng Khối Nghiệp vụ & C-Level",
        "process.detail.step0.t2Desc": "Xác định chính xác các điểm nghẽn chuyển đổi, rủi ro khách hàng rời bỏ và chỉ số ROI tối thiểu kỳ vọng cho dự án AI.",
        "process.detail.step0.t3Title": "Đề xuất Mô hình AI & Phương án Hạ tầng",
        "process.detail.step0.t3Desc": "Tư vấn lựa chọn giữa triển khai On-Premise đơn nhiệm (bảo mật tuyệt đối) hoặc Private VPC tối ưu chi phí hạ tầng GPU.",
        "process.detail.step0.d1": "Báo cáo khảo sát & Khả thi AI (Feasibility Audit)",
        "process.detail.step0.d2": "Sơ đồ kiến trúc kết nối dữ liệu (Data Pipeline Architecture)",
        "process.detail.step0.d3": "Thoả thuận pháp lý NDA bảo mật dữ liệu doanh nghiệp",
        "process.detail.step1.badge": "BƯỚC 02 / 04 · 1 — 2 TUẦN",
        "process.detail.step1.sla": "✓ Kiểm chứng độ chính xác thuật toán trên dữ liệu thực",
        "process.detail.step1.t1Title": "Chuẩn hóa & Ẩn danh hóa dữ liệu mẫu (Data Sanitization)",
        "process.detail.step1.t1Desc": "Làm sạch bộ dữ liệu mẫu (500 - 1,000 giao dịch lịch sử) và mã hóa hoàn toàn thông tin định danh cá nhân nhạy cảm.",
        "process.detail.step1.t2Title": "Huấn luyện & Fine-tune Model theo bài toán doanh nghiệp",
        "process.detail.step1.t2Desc": "Chạy thử nghiệm mô hình AI Scoring, Churn Radar hoặc Trích xuất Hợp đồng để hiệu chỉnh trọng số bài toán riêng.",
        "process.detail.step1.t3Title": "Kiểm thử Benchmark song song cùng đội ngũ nội bộ",
        "process.detail.step1.t3Desc": "So sánh kết quả dự đoán của AI với quyết định thực tế của chuyên viên nội bộ để đo lường độ chính xác thực tế.",
        "process.detail.step1.d1": "Bản Demo PoC tương tác trực tiếp với dữ liệu mẫu",
        "process.detail.step1.d2": "Báo cáo Benchmark độ chính xác (Precision & Recall)",
        "process.detail.step1.d3": "Bản dự phóng kinh tế & ROI định lượng cho dự án",
        "process.detail.step2.badge": "BƯỚC 03 / 04 · 2 — 4 TUẦN",
        "process.detail.step2.sla": "✓ Đấu nối an toàn không gián đoạn hệ thống đang vận hành",
        "process.detail.step2.t1Title": "Đấu nối API bảo mật hai chiều (Bidirectional Sync)",
        "process.detail.step2.t1Desc": "Triển khai kết nối API bảo mật với ERP/CRM nội bộ, cấu hình webhook thời gian thực và hàng đợi dữ liệu dự phòng.",
        "process.detail.step2.t2Title": "Phân quyền dữ liệu nhiều tầng & Quản trị RBAC",
        "process.detail.step2.t2Desc": "Thiết lập ma trận phân quyền chi tiết theo phòng ban, chi nhánh và cấp bậc quản lý, bảo đảm an toàn dữ liệu nội bộ.",
        "process.detail.step2.t3Title": "Tổ chức kiểm thử chấp nhận người dùng (UAT Phased)",
        "process.detail.step2.t3Desc": "Chạy thử nghiệm có kiểm soát với nhóm người dùng tiên phong (Pilot User Group) trước khi triển khai toàn công ty.",
        "process.detail.step2.d1": "Tài liệu kỹ thuật API & Hướng dẫn tích hợp hệ thống",
        "process.detail.step2.d2": "Biên bản nghiệm thu kỹ thuật UAT & Báo cáo an toàn thông tin",
        "process.detail.step2.d3": "Sổ tay ma trận phân quyền dữ liệu (Data Access Matrix)",
        "process.detail.step3.badge": "BƯỚC 04 / 04 · LIÊN TỤC 24/7",
        "process.detail.step3.sla": "✓ Cam kết thời gian phản hồi sự cố & Uptime 99.9%",
        "process.detail.step3.t1Title": "Đào tạo chuyển giao toàn diện & Onboarding thực chiến",
        "process.detail.step3.t1Desc": "Tổ chức các buổi đào tạo thực hành trực tiếp cho toàn thể nhân sự kinh doanh và quản lý, cung cấp video hướng dẫn tác vụ.",
        "process.detail.step3.t2Title": "Giám sát hiệu năng AI 24/7 & Giảm thiểu Drift Model",
        "process.detail.step3.t2Desc": "Theo dõi độ chính xác thuật toán liên tục, tự động cảnh báo khi có sự thay đổi xu hướng dữ liệu để tái huấn luyện mô hình.",
        "process.detail.step3.t3Title": "Kỹ sư giải pháp chuyên trách đồng hành theo cam kết SLA",
        "process.detail.step3.t3Desc": "Cử riêng kỹ sư giải pháp hỗ trợ kỹ thuật nhanh trong 15 phút cho các sự cố ưu tiên cao, họp đánh giá định kỳ hàng tháng.",
        "process.detail.step3.d1": "Sổ tay vận hành & Tài liệu đào tạo người dùng cuối",
        "process.detail.step3.d2": "Cam kết chất lượng dịch vụ chính thức (Enterprise SLA 99.9%)",
        "process.detail.step3.d3": "Báo cáo đo lường hiệu quả kinh doanh định kỳ (Monthly Executive Report)",
        "faq.tag": "Giải đáp thắc mắc",
        "faq.title": "Câu Hỏi Thường Gặp Về Bảo Mật & Kỹ Thuật",
        "faq.subtitle": "Những băn khoăn hàng đầu của các CIO, Giám đốc Vận hành và Trưởng bộ phận An toàn thông tin.",
        "faq.q1": "Dữ liệu khách hàng của chúng tôi có bị sử dụng để huấn luyện mô hình công cộng không?",
        "faq.a1": "<strong>Tuyệt đối không.</strong> Easy AI cam kết điều khoản pháp lý NDA nghiêm ngặt. Toàn bộ mô hình học máy được triển khai trong môi trường biệt lập (Isolated Tenant) hoặc Private VPC của riêng doanh nghiệp bạn. Dữ liệu kinh doanh là tài sản độc quyền của khách hàng, không bao giờ được chia sẻ hay tái sử dụng cho bất kỳ bên thứ ba nào.",
        "faq.q2": "Easy AI có tích hợp được với các hệ thống ERP hoặc phần mềm cũ hiện có không?",
        "faq.a2": "Có. Nền tảng được xây dựng theo kiến trúc API-first hiện đại, sẵn sàng tích hợp hai chiều với SAP, Oracle ERP, Microsoft Dynamics, Salesforce, cũng như các cơ sở dữ liệu nội bộ (SQL Server, PostgreSQL) hoặc các ứng dụng nhắn tin phổ biến (Zalo ZNS, Telegram, Microsoft Teams, Slack).",
        "faq.q3": "Thời gian triển khai trung bình mất bao lâu để đưa vào sử dụng thực tế?",
        "faq.a3": "Một quy trình PoC kiểm chứng thường chỉ mất từ 7-14 ngày. Quá trình triển khai chính thức toàn doanh nghiệp dao động từ 3 đến 6 tuần tùy thuộc vào mức độ phức tạp của dữ liệu lịch sử và các yêu cầu tùy biến nghiệp vụ riêng.",
        "faq.q4": "Công ty có hỗ trợ ký hợp đồng quốc tế và xuất hóa đơn VAT đầy đủ không?",
        "faq.a4": "Có. <strong>EASY AI TECHNOLOGY JOINT STOCK COMPANY</strong> là pháp nhân chính thức tại Việt Nam, đã được cấp mã <strong>D-U-N-S® 67-384-8050</strong>, đáp ứng đầy đủ năng lực ký kết hợp đồng thương mại quốc tế, xuất hóa đơn VAT điện tử và tuân thủ các quy chuẩn tài chính doanh nghiệp.",
        "form.badge": "Tư vấn chuyên sâu 1:1",
        "form.title": "Trải Nghiệm Easy AI Với Dữ Liệu Thực Doanh Nghiệp",
        "form.desc": "Điền thông tin để đặt lịch làm việc trực tiếp cùng Solution Architect của chúng tôi. Chúng tôi sẽ phân tích hiện trạng và chuẩn bị bản demo giải pháp may đo riêng cho doanh nghiệp bạn trong vòng 2 giờ làm việc.",
        "form.benefit1": "Phân tích rủi ro & tiềm năng số hóa dữ liệu miễn phí",
        "form.benefit2": "Cam kết bảo mật thông tin với thỏa thuận NDA",
        "form.benefit3": "Không phát sinh chi phí cho phiên khảo sát PoC đầu tiên",
        "form.hotline": "Hotline trực tiếp:",
        "form.email": "Email:",
        "form.field.name": "Họ và tên của bạn <span class='text-red-500'>*</span>",
        "form.field.email": "Email doanh nghiệp <span class='text-red-500'>*</span>",
        "form.field.phone": "Số điện thoại liên hệ <span class='text-red-500'>*</span>",
        "form.field.size": "Quy mô nhân sự doanh nghiệp <span class='text-red-500'>*</span>",
        "form.field.note": "Nhu cầu trọng tâm hoặc hệ thống cần tích hợp (Không bắt buộc)",
        "form.size.default": "Chọn khoảng quy mô",
        "form.size.opt1": "50 — 200 nhân sự",
        "form.size.opt2": "200 — 500 nhân sự",
        "form.size.opt3": "500 — 1,000 nhân sự",
        "form.size.opt4": "Trên 1,000 nhân sự (Enterprise)",
        "form.placeholder.name": "Ví dụ: Nguyễn Văn An",
        "form.placeholder.email": "an.nguyen@company.com",
        "form.placeholder.phone": "0912 345 678",
        "form.placeholder.note": "Ví dụ: Cần tích hợp với ERP nội bộ, tự động chấm điểm lead cho 30 sales...",
        "form.btn.submit": "Gửi thông tin — Đặt lịch demo ngay",
        "form.disclaimer": "Bằng việc gửi thông tin, bạn đồng ý với chính sách bảo mật thông tin doanh nghiệp của Easy AI.",
        "form.success.title": "Đăng ký lịch demo thành công!",
        "form.success.desc": "Đội ngũ Solution Architect của Easy AI đã nhận được thông tin. Chúng tôi sẽ chủ động liên hệ qua điện thoại/email trong vòng 2 giờ làm việc để xác nhận khung giờ demo phù hợp nhất.",
        "form.error.desc": "Gửi thông tin thất bại do lỗi kết nối. Vui lòng thử lại, hoặc gọi trực tiếp hotline (84) 86 8646966.",
        "footer.desc": "Đơn vị tiên phong cung cấp giải pháp CRM doanh nghiệp tích hợp trí tuệ nhân tạo (AI-Native) và giải pháp dữ liệu Web3 chuyên sâu tại Việt Nam và khu vực.",
        "footer.duns": "Mã D-U-N-S®:",
        "footer.contactHead": "Trụ Sở & Thông Tin Liên Hệ",
        "footer.address": "Số 57 Ngõ 898 Phố Láng, Phường Láng, Hà Nội, Việt Nam",
        "footer.navHead": "Hành Động Chính",
        "footer.link1": "→ Đặt lịch Demo 1:1 với Chuyên gia",
        "footer.link2": "→ Đánh giá thực trạng CRM",
        "footer.link3": "→ Khám phá Bento Grid tính năng",
        "footer.link4": "→ Năng lực kết hợp AI & Web3",
        "footer.link5": "→ Tiêu chuẩn an toàn & Bảo mật",
        "footer.privacy": "Chính Sách Bảo Mật",
        "footer.sla": "Thỏa Thuận Dịch Vụ (SLA)",
        "footer.dunsVerified": "Xác thực D-U-N-S"
      },
      en: {
        "topbar.verified": "VERIFIED",
        "topbar.dunsLabel": "D-U-N-S® Registered:",
        "topbar.security": "Enterprise Grade Security",
        "nav.langLabel": "Language:",
        "nav.problem": "Problem",
        "nav.solution": "Bento Solutions",
        "nav.diff": "AI & Web3",
        "nav.trust": "Enterprise Trust",
        "nav.cases": "Case Studies",
        "nav.process": "Roadmap",
        "nav.faq": "FAQ",
        "btn.demo": "Schedule Demo",
        "hero.badge": "Not a Superficial Chatbot · Native AI Integrated Deeply into Core Data",
        "hero.title": "Enterprise CRM Built on <span class='text-brand-primary underline decoration-brand-primary/30 underline-offset-8'>Genuine AI</span> for Large Organizations",
        "hero.subtitle": "Liberate your sales and CS teams from 65% of manual administrative tasks, automate predictive lead scoring, and prevent churn with deeply integrated artificial intelligence.",
        "hero.cta": "Schedule 1-on-1 Expert Demo",
        "hero.cta.secondary": "Explore Selected Deployments",
        "hero.trustnote": "Tailored demo on your workflow · Protected by enterprise NDA",
        "hero.stat1.val": "42.6%",
        "hero.stat1.label": "B2B Win Rate Growth",
        "hero.stat2.val": "65%",
        "hero.stat2.label": "Manual Tasks Reduced",
        "hero.stat3.val": "ISO 27001",
        "hero.stat3.label": "On-Premise Vault",
        "hero.banner.link": "selected enterprise AI deployments",
        "showcase.badge": "PRODUCTION DEPLOYMENTS · ENTERPRISE TIER",
        "showcase.title": "Selected Enterprise AI Deployments by Easy&nbsp;AI",
        "showcase.subtitle": "Explore live production metrics, industry-specific KPIs, and autonomous AI actions deployed across enterprise partners.",
        "proj.p0.flagship": "⭐ Flagship Project",
        "proj.p0.title": "Themis — AI Legal Intelligence",
        "proj.p0.client": "Live deployment at a leading Energy & Infrastructure Group ($185M+ contract audit portfolio)",
        "proj.p0.status": "AI Engine: Legal LLM Fine-Tuned · On-Premise Isolated · VIAC / ICC Ready",
        "proj.p0.nba.btn": "Explore Themis Legal AI Demo →",
        "proj.p1.title": "HL Warehouse",
        "proj.p1.client": "Live deployment at HL Warehouse",
        "proj.p1.status": "AI Engine: v4.2 Active · Realtime WMS Sync",
        "proj.sync": "Real-time data: Synced 12:45:00",
        "proj.p1.nba.btn": "Explore Warehouse Management Demo →",
        "proj.p2.title": "HL Contract Hub",
        "proj.p2.client": "Live deployment at HL Contract Hub",
        "proj.p2.status": "AI Engine: v4.2 Active · Realtime E-Signature Sync",
        "proj.p2.nba.btn": "Explore Contract Management Demo →",
        "proj.p1.badge.short": "Warehouse Management",
        "proj.p2.badge.short": "Contract Management",
        "dash.copilot.b2": "• <strong>Key Decision Makers:</strong> Chief Digital Officer (Budget approved) & CISO (Reviewing D-U-N-S and ISO 27001 credentials).",
        "problem.tag": "The Enterprise Reality",
        "problem.title": "Why 80% of Enterprise CRM Projects Fail to Deliver ROI",
        "problem.subtitle": "Leaders invest millions into systems only for sales reps to rely on spreadsheets, while marketed 'AI' tools turn out to be basic chatbot wrappers.",
        "problem.p1.title": "Fragmented, Siloed Data",
        "problem.p1.desc": "Information is scattered across emails, chat apps, accounting software, and personal files. Commercial leadership lacks a unified 360° pipeline view.",
        "problem.p2.title": "Wasted Manual Entry Hours",
        "problem.p2.desc": "Sales teams spend over 65% of their working hours manually typing call logs and meeting summaries, leading to poor adoption and stale data.",
        "problem.p3.title": "Unforeseen Churn Risks",
        "problem.p3.desc": "Companies only discover client churn after renewal notices are cancelled. No quantitative early warning indicators exist to flag declining engagement.",
        "problem.p4.title": "Superficial AI Wrappers",
        "problem.p4.desc": "Most 'AI' tools merely re-package generic public LLMs. They fail to understand enterprise ERP logic, security protocols, or nuanced B2B sales cycles.",
        "sol.tag": "Architectural Solution",
        "sol.title": "Enterprise Capabilities Built Directly Around Business Outcomes",
        "sol.subtitle": "Zero feature bloat. Every single module in Easy AI is engineered to solve a specific revenue and conversion bottleneck.",
        "sol.b1.title": "Multi-Dimensional AI Lead Scoring",
        "sol.b1.desc": "Machine learning algorithms evaluate 30+ dynamic behavioral signals in real-time to pinpoint the top 20% of opportunities driving 80% of enterprise ARR.",
        "sol.b1.stat": "Pipeline ranking accuracy",
        "sol.b2.title": "Predictive Churn Detection 30 Days in Advance",
        "sol.b2.desc": "Receive early warnings when enterprise accounts show drop-offs in platform activity or leadership changes, enabling proactive retention workflows.",
        "sol.b2.stat": "Customer Retention Rate",
        "sol.b2.val": "+22% Increase",
        "sol.b3.title": "Omnichannel Support Copilot",
        "sol.b3.desc": "Synthesizes multi-channel interactions into 3 actionable bullets and drafts domain-accurate responses in under 10 seconds.",
        "sol.b3.stat": "Response speed: &lt; 10 seconds",
        "sol.b4.title": "Intelligent Sales Workflow Automation",
        "sol.b4.desc": "Automatically dispatches leads to specialized solution consultants, schedules cadences, and compiles customized enterprise proposals hands-free.",
        "sol.b4.stat": "Avg. 18.5 hours saved/employee/month",
        "sol.b5.title": "High-Precision Revenue Forecasting",
        "sol.b5.desc": "Replace guesswork with empirical forecasting based on real-time deal velocity and historic conversion rates, keeping your Board informed.",
        "sol.b5.stat": "Forecast error margin &lt; 5%",
        "diff.tag": "Core Differentiator",
        "diff.title": "A Rare Combination: Artificial Intelligence Meets Web3 Data Integrity",
        "diff.subtitle": "We are not another generic CRM vendor. Easy AI blends predictive machine learning with the immutability, tamper-proof audit trails, and decentralized trust of Web3.",
        "diff.boxhead": "Direct Senior Engagement:",
        "diff.boxbody": "Collaborate directly with senior Solution Architects and BAs who have implemented large-scale ERP transformations. Zero middleman sales fluff.",
        "diff.p1.title": "Proprietary AI + Web3 Synergy",
        "diff.p1.desc": "Ability to integrate smart contracts for automated SLA validation, tamper-proof audit trails, and decentralized identity (DID) management.",
        "diff.p2.title": "Deep Industry Customization",
        "diff.p2.desc": "No rigid one-size-fits-all software. We fine-tune models to the specific vocabulary and workflow of Retail, Industrial Manufacturing, and B2B Financial Services.",
        "diff.p3.title": "Direct Enterprise ERP Veterans",
        "diff.p3.desc": "You communicate directly with senior engineers with hands-on SAP, Oracle, and Dynamics integration credentials. No translation layers.",
        "trust.badge": "Verified Corporate Entity · Global Standard",
        "trust.title": "Verified Trust Signals for Worldwide Enterprise Partnerships",
        "trust.desc": "Selecting an enterprise technology vendor is a strategic decision with zero room for error. Easy AI is fully registered with Dun & Bradstreet (D-U-N-S®), upholding the highest data security and governance standards.",
        "trust.legal1": "<strong>Legal Entity:</strong> EASY AI TECHNOLOGY JOINT STOCK COMPANY",
        "trust.legal2": "<strong>D-U-N-S® Number:</strong> 67-384-8050 (Dun & Bradstreet)",
        "trust.legal3": "<strong>Data Privacy:</strong> Zero customer data used for public model training",
        "trust.legal4": "<strong>Deployment:</strong> Full On-Premise or Private VPC isolation support",
        "trust.cert.reg": "D-U-N-S® REGISTERED™",
        "trust.cert.desc": "Globally recognized enterprise identifier by Dun & Bradstreet, certifying cross-border commercial contracting.",
        "trust.cert.iso": "ISO 27001 Ready",
        "trust.cert.gdpr": "GDPR Compliant",
        "trust.cert.onprem": "On-Premise Ready",
        "case.tag": "Quantifiable Proof",
        "case.title": "Real Metrics That Speak for Themselves",
        "case.subtitle": "Empirical results documented across enterprise clients after deploying Easy AI into daily mission-critical operations.",
        "case.stat1.title": "Deal Win Rate Increase",
        "case.stat1.desc": "AI Lead Scoring cuts out 80% of low-converting prospecting noise, focusing sales attention on high-intent deals.",
        "case.stat2.title": "Reduction in Manual Admin Hours",
        "case.stat2.desc": "Automated syncing of omnichannel interactions and automatic executive forecasting reports.",
        "case.stat3.title": "Faster Customer Query Resolution",
        "case.stat3.desc": "Copilot AI summarizes account context and prepares tailored responses before the agent picks up the phone.",
        "case.study.cat": "CASE STUDY · RETAIL & DISTRIBUTION (1,200+ EMPLOYEES)",
        "case.study.heading": "Solving Data Fragmentation Across 85 Retail Branches & Warehouses",
        "case.study.quote": "\"Before Easy AI, executive leadership waited 5 days to consolidate branch data. Today, every B2B prospect is automatically scored, and client renewal rates increased by 24% in the first 6 months.\"",
        "case.study.author": "Nguyen Van A",
        "case.study.authorTitle": "Chief Digital & Operations Officer",
        "case.study.btn": "View demo tailored to your industry →",
        "process.tag": "Concise Deployment",
        "process.title": "From Assessment to Go-Live in 4 Phased Steps",
        "process.subtitle": "An enterprise-grade deployment methodology designed to mitigate operational disruptions and ensure 100% user adoption.",
        "process.s1.time": "3 — 5 Days",
        "process.s1.title": "Assessment & Architecture Review",
        "process.s1.desc": "Our architects audit your existing data infrastructure (ERP, legacy CRM, databases) and pinpoint high-ROI AI integration points.",
        "process.s2.time": "1 — 2 Weeks",
        "process.s2.title": "Proof of Concept (PoC) in 2 Weeks",
        "process.s2.desc": "We build a functioning PoC on your anonymized sample data to validate scoring and prediction accuracy before wide-scale rollout.",
        "process.s3.time": "2 — 4 Weeks",
        "process.s3.title": "Deep Integration & UAT",
        "process.s3.desc": "Secure API connectivity with internal systems, granular RBAC configuration, and comprehensive User Acceptance Testing.",
        "process.s4.time": "Continuous",
        "process.s4.title": "Go-Live & 24/7 Enterprise SLA",
        "process.s4.desc": "Full staff training, performance monitoring, and dedicated named engineers guaranteeing high-availability SLAs.",
        "process.action.view": "View Deliverables",
        "process.detail.teamLabel": "Dedicated Team:",
        "process.detail.teamVal": "Lead Solution Architect & Business Analyst",
        "process.detail.tasksHead": "Detailed Engineering Execution Activities:",
        "process.detail.deliverHead": "Deliverables & Artifacts:",
        "process.detail.cta": "Schedule Deployment for this Step with Experts →",
        "process.detail.step0.badge": "STEP 01 / 04 · 3 — 5 DAYS",
        "process.detail.step0.sla": "✓ Strict NDA data privacy guarantee before access",
        "process.detail.step0.t1Title": "Legacy ERP & Data Infrastructure Audit",
        "process.detail.step0.t1Desc": "Audit connection APIs across SAP, Oracle, SQL Server, or legacy CRMs to benchmark latency and data integrity.",
        "process.detail.step0.t2Title": "Direct Discovery with Business Units & C-Level",
        "process.detail.step0.t2Desc": "Identify conversion bottlenecks, account churn patterns, and establish baseline quantitative ROI milestones.",
        "process.detail.step0.t3Title": "AI Model Architecture & Infrastructure Blueprint",
        "process.detail.step0.t3Desc": "Determine optimal deployment mode: isolated single-tenant On-Premise vault vs Private VPC GPU infrastructure.",
        "process.detail.step0.d1": "AI Feasibility & Gap Analysis Report",
        "process.detail.step0.d2": "Data Pipeline Architecture Blueprint",
        "process.detail.step0.d3": "Bilateral Enterprise NDA Agreement",
        "process.detail.step1.badge": "STEP 02 / 04 · 1 — 2 WEEKS",
        "process.detail.step1.sla": "✓ Validate algorithm precision against production sample data",
        "process.detail.step1.t1Title": "Sample Data Sanitization & Anonymization",
        "process.detail.step1.t1Desc": "Cleanse and anonymize historic sample records (500 - 1,000 data rows) ensuring zero PII exposure.",
        "process.detail.step1.t2Title": "Model Fine-Tuning on Enterprise Domain Vocabulary",
        "process.detail.step1.t2Desc": "Calibrate scoring algorithms, churn prediction thresholds, or legal redline engines to your specific workflow.",
        "process.detail.step1.t3Title": "Parallel Blind Benchmark Testing",
        "process.detail.step1.t3Desc": "Run double-blind evaluations comparing AI outputs with senior analyst decisions to verify empirical accuracy.",
        "process.detail.step1.d1": "Interactive Working PoC on Sample Data",
        "process.detail.step1.d2": "Precision & Recall Benchmark Report",
        "process.detail.step1.d3": "Definitive Economic ROI Projection Model",
        "process.detail.step2.badge": "STEP 03 / 04 · 2 — 4 WEEKS",
        "process.detail.step2.sla": "✓ Zero-downtime integration without operational disruption",
        "process.detail.step2.t1Title": "Bidirectional Secure API Integration",
        "process.detail.step2.t1Desc": "Implement encrypted webhooks and enterprise message queues with internal ERP/CRM databases.",
        "process.detail.step2.t2Title": "Granular Multi-Tier RBAC Configuration",
        "process.detail.step2.t2Desc": "Configure strict role-based access control by department, branch, and managerial tier.",
        "process.detail.step2.t3Title": "Phased User Acceptance Testing (UAT)",
        "process.detail.step2.t3Desc": "Run controlled pilot deployments across selected core teams before full organization-wide rollout.",
        "process.detail.step2.d1": "Comprehensive API & Integration Handbook",
        "process.detail.step2.d2": "Signed UAT Acceptance Protocol & Security Audit",
        "process.detail.step2.d3": "Enterprise Data Governance Matrix",
        "process.detail.step3.badge": "STEP 04 / 04 · CONTINUOUS 24/7",
        "process.detail.step3.sla": "✓ 99.9% Uptime Guarantee with 15-Minute Response SLA",
        "process.detail.step3.t1Title": "Comprehensive Hands-on Staff Training",
        "process.detail.step3.t1Desc": "Deliver interactive live training sessions for sales reps and leadership, complemented by role-based video playbooks.",
        "process.detail.step3.t2Title": "24/7 AI Performance & Model Drift Monitoring",
        "process.detail.step3.t2Desc": "Continuously track inference latency and score distributions with automated retrain alerts on drift.",
        "process.detail.step3.t3Title": "Dedicated Named Solution Engineer Support",
        "process.detail.step3.t3Desc": "Direct escalation channel with a dedicated Solution Architect guaranteeing 15-minute response times for critical tickets.",
        "process.detail.step3.d1": "End-User Playbook & Video Walkthrough Library",
        "process.detail.step3.d2": "Official Enterprise Service Level Agreement (SLA)",
        "process.detail.step3.d3": "Monthly Executive Business Review & Model Health Report",
        "faq.tag": "Clear Answers",
        "faq.title": "Frequently Asked Security & Architectural Questions",
        "faq.subtitle": "Addressing the top inquiries from CIOs, COOs, and Chief Information Security Officers.",
        "faq.q1": "Will our proprietary customer data be used to train public models?",
        "faq.a1": "<strong>Absolutely not.</strong> Easy AI commits to strict enterprise NDAs. All machine learning models run in isolated single-tenant environments or inside your own private VPC. Your business data remains your exclusive sovereign property.",
        "faq.q2": "Can Easy AI connect with legacy ERP or on-premise systems?",
        "faq.a2": "Yes. Built with a modern API-first architecture, Easy AI natively integrates bidirectionally with SAP, Oracle ERP, Microsoft Dynamics, Salesforce, as well as on-premise SQL databases and enterprise chat tools (Teams, Slack, Telegram, Zalo ZNS).",
        "faq.q3": "What is the typical timeframe from kickoff to production?",
        "faq.a3": "A focused PoC validation typically takes 7 to 14 business days. Full enterprise-wide deployment spans between 3 to 6 weeks depending on legacy data migration needs and custom workflow complexity.",
        "faq.q4": "Do you support international commercial contracts and invoicing?",
        "faq.a4": "Yes. <strong>EASY AI TECHNOLOGY JOINT STOCK COMPANY</strong> is a fully registered entity with verified <strong>D-U-N-S® Number 67-384-8050</strong>, certified to enter into cross-border enterprise agreements and issue official VAT / e-invoices.",
        "form.badge": "1-on-1 Strategic Consultation",
        "form.title": "Experience Easy AI with Your Own Operational Data",
        "form.desc": "Schedule a direct consultation with our Lead Solution Architect. We will review your current CRM architecture and prepare a tailored demo within 2 business hours.",
        "form.benefit1": "Free enterprise data audit and AI feasibility report",
        "form.benefit2": "Complete NDA data protection commitment",
        "form.benefit3": "Zero financial commitment for the initial architectural PoC",
        "form.hotline": "Direct Hotline:",
        "form.email": "Official Email:",
        "form.field.name": "Full Name <span class='text-red-500'>*</span>",
        "form.field.email": "Corporate Email <span class='text-red-500'>*</span>",
        "form.field.phone": "Contact Phone Number <span class='text-red-500'>*</span>",
        "form.field.size": "Company Headcount <span class='text-red-500'>*</span>",
        "form.field.note": "Key Pain Point or Systems to Integrate (Optional)",
        "form.size.default": "Select company headcount",
        "form.size.opt1": "50 — 200 employees",
        "form.size.opt2": "200 — 500 employees",
        "form.size.opt3": "500 — 1,000 employees",
        "form.size.opt4": "1,000+ employees (Enterprise)",
        "form.placeholder.name": "e.g. Johnathan Miller",
        "form.placeholder.email": "john@enterprise.com",
        "form.placeholder.phone": "+1 (555) 019-2834",
        "form.placeholder.note": "e.g. Need integration with existing ERP, automated lead scoring for 30 sales reps...",
        "form.btn.submit": "Submit Information — Schedule Demo Now",
        "form.disclaimer": "By submitting, you agree to Easy AI enterprise data privacy policies.",
        "form.success.title": "Demo Consultation Scheduled!",
        "form.success.desc": "Easy AI's Lead Solution Architect has received your request. We will reach out within 2 business hours via phone/email to confirm your custom demo.",
        "form.error.desc": "Submission failed due to a connection error. Please try again, or call our hotline at (84) 86 8646966.",
        "footer.desc": "Pioneering enterprise AI-Native CRM and Web3 data integrity architecture for forward-thinking organizations.",
        "footer.duns": "D-U-N-S® Number:",
        "footer.contactHead": "Headquarters & Contact",
        "footer.address": "No. 57, Lane 898 Lang Street, Lang Ward, Hanoi, Vietnam",
        "footer.navHead": "Quick Actions",
        "footer.link1": "→ Schedule 1-on-1 Expert Demo",
        "footer.link2": "→ Evaluate CRM Pain Points",
        "footer.link3": "→ Explore Bento Grid Capabilities",
        "footer.link4": "→ AI & Web3 Architecture",
        "footer.link5": "→ Enterprise Security Standards",
        "footer.privacy": "Privacy Policy",
        "footer.sla": "Service Level Agreement (SLA)",
        "footer.dunsVerified": "D-U-N-S Verified"
      }
    };

    // Switch Language function
    function setLanguage(lang) {
      const dict = translations[lang];
      if (!dict) return;

      // 1. Update text/HTML in elements with data-i18n attribute
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.innerHTML = dict[key];
        }
      });

      // 2. Update placeholder in elements with data-i18n-placeholder attribute
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
          el.setAttribute('placeholder', dict[key]);
        }
      });

      // 3. Update language toggle buttons visual state (Desktop & Mobile)
      const activeClass = 'px-3 py-1 rounded-full bg-brand-primary text-white shadow-sm font-bold transition-all duration-200 flex items-center gap-1.5';
      const inactiveClass = 'px-3 py-1 rounded-full text-slate-600 hover:text-brand-navy hover:bg-slate-200/50 font-medium transition-all duration-200 flex items-center gap-1.5';

      const viBtn = document.getElementById('lang-vi');
      const enBtn = document.getElementById('lang-en');
      const mViBtn = document.getElementById('m-lang-vi');
      const mEnBtn = document.getElementById('m-lang-en');

      if (lang === 'vi') {
        if (viBtn) { viBtn.className = activeClass; viBtn.setAttribute('aria-pressed', 'true'); }
        if (enBtn) { enBtn.className = inactiveClass; enBtn.setAttribute('aria-pressed', 'false'); }
        if (mViBtn) { mViBtn.className = activeClass; mViBtn.setAttribute('aria-pressed', 'true'); }
        if (mEnBtn) { mEnBtn.className = inactiveClass; mEnBtn.setAttribute('aria-pressed', 'false'); }
        document.documentElement.lang = 'vi';
        document.title = "Easy AI — Nền Tảng Enterprise CRM Tích Hợp AI Toàn Diện";
      } else {
        if (enBtn) { enBtn.className = activeClass; enBtn.setAttribute('aria-pressed', 'true'); }
        if (viBtn) { viBtn.className = inactiveClass; viBtn.setAttribute('aria-pressed', 'false'); }
        if (mEnBtn) { mEnBtn.className = activeClass; mEnBtn.setAttribute('aria-pressed', 'true'); }
        if (mViBtn) { mViBtn.className = inactiveClass; mViBtn.setAttribute('aria-pressed', 'false'); }
        document.documentElement.lang = 'en';
        document.title = "Easy AI — Enterprise AI-Native CRM Platform";
      }

      // 4. Save preferred language
      try {
        localStorage.setItem('easyai_lang', lang);
      } catch (e) {}

      // 5. Re-render dynamic components in new language
      if (typeof switchProjectView === 'function') switchProjectView(currentProject);
      if (typeof switchProcessStep === 'function') switchProcessStep(currentProcessStep);
    }

    // Toggle Mobile Navigation Menu
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    // 3 Enterprise Project Showcase Views Switcher
    let currentProject = 0;
    const projectConfigs = [
      {
        url: "themis.easyai.internal/contract-audit-redline",
        statusKey: "proj.p0.status",
        clientKey: "proj.p0.client"
      },
      {
        url: "warehub-hl.easyai-wallet.com",
        statusKey: "proj.p1.status",
        clientKey: "proj.p1.client"
      },
      {
        url: "contracthub.hl.com/dashboard",
        statusKey: "proj.p2.status",
        clientKey: "proj.p2.client"
      }
    ];

    function switchProjectView(index) {
      currentProject = (index + 3) % 3;
      const currentLang = document.documentElement.lang || 'vi';
      const dict = translations[currentLang] || translations.vi;

      for (let i = 0; i < 3; i++) {
        const view = document.getElementById(`project-view-${i}`);
        const btn = document.getElementById(`project-btn-${i}`);
        if (i === currentProject) {
          if (view) {
            view.classList.remove('hidden');
            view.classList.remove('tab-content-enter');
            void view.offsetWidth;
            view.classList.add('tab-content-enter');
          }
          if (btn) {
            btn.className = "project-pill p-3.5 rounded-xl bg-white text-brand-navy shadow-sm border border-brand-border font-bold text-sm flex items-center gap-3 transition-all min-w-0";
            btn.setAttribute('aria-selected', 'true');
            const title = btn.querySelector('[data-i18n$=".title"]');
            if (title) title.className = "font-bold text-brand-navy truncate";
          }
        } else {
          if (view) view.classList.add('hidden');
          if (btn) {
            btn.className = "project-pill p-3.5 rounded-xl bg-slate-100/80 text-slate-600 hover:text-brand-navy hover:bg-white font-medium text-sm flex items-center gap-3 transition-all min-w-0";
            btn.setAttribute('aria-selected', 'false');
            const title = btn.querySelector('[data-i18n$=".title"]');
            if (title) title.className = "font-medium text-brand-navy truncate";
          }
        }
      }

      // Update Carousel Dots
      const dots = document.querySelectorAll('#project-dots span');
      dots.forEach((dot, idx) => {
        dot.className = (idx === currentProject)
          ? "w-3 h-2.5 rounded-full bg-brand-primary transition-all cursor-pointer"
          : "w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400 transition-all cursor-pointer";
      });

      // Update Mockup Bar Info
      const cfg = projectConfigs[currentProject];
      const urlEl = document.getElementById('project-mockup-url');
      const statusEl = document.getElementById('project-mockup-status');
      const clientEl = document.getElementById('project-mockup-client');

      if (urlEl) urlEl.textContent = cfg.url;
      if (statusEl) {
        statusEl.setAttribute('data-i18n', cfg.statusKey);
        statusEl.innerHTML = dict[cfg.statusKey] || '';
      }
      if (clientEl) {
        clientEl.setAttribute('data-i18n', cfg.clientKey);
        clientEl.innerHTML = dict[cfg.clientKey] || '';
      }

      // Sync 3D deck card focus state
      for (let i = 0; i < 3; i++) {
        const card = document.getElementById(`deck-card-${i}`);
        if (card) {
          if (i === currentProject) card.classList.add('focused');
          else card.classList.remove('focused');
        }
      }
    }

    function stepProjectView(dir) {
      switchProjectView(currentProject + dir);
    }

    function focusProjectView(index) {
      switchProjectView(index);
      const el = document.getElementById('showcase-details');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Real product screenshot galleries (per project)
    const projectGalleries = [
      ['assets/img/projects/verdict-01.png', 'assets/img/projects/verdict-02.png', 'assets/img/projects/verdict-03.png', 'assets/img/projects/verdict-04.png'],
      ['assets/img/projects/logistics-01.png', 'assets/img/projects/logistics-02.png', 'assets/img/projects/logistics-03.png'],
      ['assets/img/projects/contracthub-01.png', 'assets/img/projects/contracthub-02.png', 'assets/img/projects/contracthub-03.png']
    ];
    let currentGalleryIndex = [0, 0, 0];

    function setGalleryImage(projectIdx, imgIdx) {
      const imgs = projectGalleries[projectIdx];
      currentGalleryIndex[projectIdx] = (imgIdx + imgs.length) % imgs.length;
      const imgEl = document.getElementById(`gallery-img-${projectIdx}`);
      if (imgEl) imgEl.src = imgs[currentGalleryIndex[projectIdx]];

      const dots = document.querySelectorAll(`#gallery-dots-${projectIdx} span`);
      dots.forEach((dot, i) => {
        const active = i === currentGalleryIndex[projectIdx];
        dot.className = active
          ? "w-3 h-2.5 rounded-full bg-brand-primary cursor-pointer transition-all"
          : "w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400 cursor-pointer transition-all";
        dot.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    }

    function stepGalleryImage(projectIdx, dir) {
      setGalleryImage(projectIdx, currentGalleryIndex[projectIdx] + dir);
    }

    // 4 Process Step Data and Switcher
    let currentProcessStep = 0;
    const processStepsData = [
      {
        badgeKey: "process.detail.step0.badge",
        slaKey: "process.detail.step0.sla",
        t1TitleKey: "process.detail.step0.t1Title",
        t1DescKey: "process.detail.step0.t1Desc",
        t2TitleKey: "process.detail.step0.t2Title",
        t2DescKey: "process.detail.step0.t2Desc",
        t3TitleKey: "process.detail.step0.t3Title",
        t3DescKey: "process.detail.step0.t3Desc",
        d1Key: "process.detail.step0.d1",
        d2Key: "process.detail.step0.d2",
        d3Key: "process.detail.step0.d3"
      },
      {
        badgeKey: "process.detail.step1.badge",
        slaKey: "process.detail.step1.sla",
        t1TitleKey: "process.detail.step1.t1Title",
        t1DescKey: "process.detail.step1.t1Desc",
        t2TitleKey: "process.detail.step1.t2Title",
        t2DescKey: "process.detail.step1.t2Desc",
        t3TitleKey: "process.detail.step1.t3Title",
        t3DescKey: "process.detail.step1.t3Desc",
        d1Key: "process.detail.step1.d1",
        d2Key: "process.detail.step1.d2",
        d3Key: "process.detail.step1.d3"
      },
      {
        badgeKey: "process.detail.step2.badge",
        slaKey: "process.detail.step2.sla",
        t1TitleKey: "process.detail.step2.t1Title",
        t1DescKey: "process.detail.step2.t1Desc",
        t2TitleKey: "process.detail.step2.t2Title",
        t2DescKey: "process.detail.step2.t2Desc",
        t3TitleKey: "process.detail.step2.t3Title",
        t3DescKey: "process.detail.step2.t3Desc",
        d1Key: "process.detail.step2.d1",
        d2Key: "process.detail.step2.d2",
        d3Key: "process.detail.step2.d3"
      },
      {
        badgeKey: "process.detail.step3.badge",
        slaKey: "process.detail.step3.sla",
        t1TitleKey: "process.detail.step3.t1Title",
        t1DescKey: "process.detail.step3.t1Desc",
        t2TitleKey: "process.detail.step3.t2Title",
        t2DescKey: "process.detail.step3.t2Desc",
        t3TitleKey: "process.detail.step3.t3Title",
        t3DescKey: "process.detail.step3.t3Desc",
        d1Key: "process.detail.step3.d1",
        d2Key: "process.detail.step3.d2",
        d3Key: "process.detail.step3.d3"
      }
    ];

    function switchProcessStep(stepIndex) {
      currentProcessStep = Math.max(0, Math.min(3, stepIndex));
      const currentLang = document.documentElement.lang || 'vi';
      const dict = translations[currentLang] || translations.vi;

      for (let i = 0; i < 4; i++) {
        const card = document.getElementById(`process-card-${i}`);
        if (card) {
          if (i === currentProcessStep) {
            card.classList.add('active-step');
          } else {
            card.classList.remove('active-step');
          }
        }
      }

      const step = processStepsData[currentProcessStep];
      const updateEl = (id, key) => {
        const el = document.getElementById(id);
        if (el) {
          el.setAttribute('data-i18n', key);
          el.innerHTML = dict[key] || '';
        }
      };

      updateEl('process-detail-badge', step.badgeKey);
      updateEl('process-detail-sla', step.slaKey);
      updateEl('task-1-title', step.t1TitleKey);
      updateEl('task-1-desc', step.t1DescKey);
      updateEl('task-2-title', step.t2TitleKey);
      updateEl('task-2-desc', step.t2DescKey);
      updateEl('task-3-title', step.t3TitleKey);
      updateEl('task-3-desc', step.t3DescKey);
      updateEl('deliverable-1', step.d1Key);
      updateEl('deliverable-2', step.d2Key);
      updateEl('deliverable-3', step.d3Key);

      const detailEl = document.getElementById('process-step-detail');
      if (detailEl && window.innerWidth < 768) {
        detailEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    // FAQ Accordion Toggle
    function toggleFaq(index) {
      const answer = document.getElementById(`faq-answer-${index}`);
      const icon = document.getElementById(`faq-icon-${index}`);
      if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.textContent = '✕';
      } else {
        answer.classList.add('hidden');
        icon.textContent = '＋';
      }
    }

    // Contact & Booking Form Submission
    function handleFormSubmit(e) {
      e.preventDefault();
      const submitBtn = document.getElementById('submitBtn');
      const form = document.getElementById('contactForm');
      const successToast = document.getElementById('formSuccess');
      const errorToast = document.getElementById('formError');
      const currentLang = document.documentElement.lang || 'vi';

      errorToast.classList.add('hidden');
      submitBtn.disabled = true;
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = (currentLang === 'en') ? 'Processing request…' : 'Đang xử lý thông tin…';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(response => {
          if (!response.ok) throw new Error('submit_failed');
          form.classList.add('hidden');
          successToast.classList.remove('hidden');
        })
        .catch(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
          errorToast.classList.remove('hidden');
        });
    }

    // Intersection Observer for Scroll Reveal & Number Counting
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Restore saved language if available
      try {
        const savedLang = localStorage.getItem('easyai_lang');
        if (savedLang === 'en' || savedLang === 'vi') {
          setLanguage(savedLang);
        }
      } catch (e) {}

      // 2. Reveal Elements on Scroll
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

      // 3. Animate Number Counters
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseFloat(el.getAttribute('data-target'));
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            const decimals = parseInt(el.getAttribute('data-decimals') || '0');
            const duration = 1400; // ms
            const startTime = performance.now();

            const updateCount = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // EaseOutQuad formula
              const easeProgress = 1 - (1 - progress) * (1 - progress);
              const currentVal = (target * easeProgress).toFixed(decimals);
              el.textContent = prefix + currentVal + suffix;

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                el.textContent = prefix + target.toFixed(decimals) + suffix;
              }
            };
            requestAnimationFrame(updateCount);
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.5 });

      document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));
    });
