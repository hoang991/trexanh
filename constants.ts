import { TranslationData } from './types';

export const TRANSLATIONS: Record<string, TranslationData> = {
  vi: {
    hero: {
      title: "BAMBOO LEGACY",
      subtitle: "Rễ Xanh. Tương Lai Vàng. Sẵn sàng IPO.",
      description: "Sự kết hợp chiến lược giữa quỹ đất, nông nghiệp, du lịch và công nghệ. Chúng tôi chuyển đổi 250ha tre thành một hệ sinh thái đa nguồn thu, hướng tới mục tiêu IPO trong vòng 3 năm.",
      tags: {
        esg: "ESG Tập trung",
        growth: "Tăng trưởng cao",
        carbon: "Tín chỉ Carbon"
      }
    },
    foundation: {
      title: "Nền tảng vững chắc",
      description: "Bamboo Legacy được xây dựng trên cơ sở thực tế. Chúng tôi kết hợp tài sản hữu hình (250ha tại Hòa Bình) với tài sản vô hình (Chuyên môn, Quan hệ và Công nghệ).",
      stats: {
        land: "Héc-ta Đất",
        pillars: "Trụ cột sáng lập",
        yearsToIpo: "Năm tới IPO",
        exp: "Năm kinh nghiệm"
      },
      chartTitle: "Chiến lược phân bổ quỹ đất",
      chartLabels: ['Lõi sản xuất', 'Du lịch', 'R&D']
    },
    culture: {
      title: "Giá trị Văn hóa & Đạo đức",
      description: "Chúng tôi chuyển hóa các triết lý nhân sinh bền vững thành bộ quy tắc ứng xử thực tiễn trong kinh doanh.",
      items: [
        { icon: "🌱", title: "Gieo hạt - Gặt quả", desc: "Mọi kết quả kinh doanh đều bắt nguồn từ hành động chính trực hôm nay." },
        { icon: "🌊", title: "Thích nghi linh hoạt", desc: "Hiểu rõ quy luật thay đổi để biến thách thức thành cơ hội mới." },
        { icon: "🤝", title: "Lợi mình - Lợi người", desc: "Tạo ra giá trị cho cộng đồng và môi trường là nền tảng của lợi nhuận." },
        { icon: "🧘", title: "Tập trung tuyệt đối", desc: "Làm việc với sự hiện diện trọn vẹn để đạt hiệu suất và chất lượng cao nhất." },
        { icon: "🔥", title: "Nỗ lực không ngừng", desc: "Kiên trì vượt khó với tinh thần cầu tiến và ý chí mạnh mẽ như tre xanh." }
      ]
    },
    team: {
      title: "Hội đồng sáng lập & Vận hành",
      description: "Sự hội tụ của 5 chuyên gia nòng cốt đảm bảo dự án vận hành đúng tiến độ và minh bạch tài chính cho mục tiêu IPO.",
      members: [
        { role: "IPO & Chiến lược", name: "Chủ tịch", exp: "Hơn 15 năm KN tư vấn niêm yết & M&A" },
        { role: "Tài chính (CFO)", name: "Trụ cột Tài chính", exp: "Kiểm soát dòng tiền & Minh bạch đầu tư" },
        { role: "Vận hành (COO)", name: "Trụ cột Vận hành", exp: "Triển khai dự án thực địa & Hệ thống" },
        { role: "Lâm nghiệp (R&D)", name: "Trụ cột Kỹ thuật", exp: "Chuyên gia giống tre & Quy trình hữu cơ" },
        { role: "Công nghệ (CTO)", name: "Trụ cột Số hóa", exp: "Phát triển App & Hệ thống quản lý Carbon" }
      ]
    },
    ecosystem: {
      title: "Hệ sinh thái 5 Trụ cột",
      description: "Đa dạng hóa rủi ro bằng 5 dòng doanh thu liên kết. Sử dụng mô hình \"Trả trước\" để tài trợ cho các tài sản dài hạn.",
      chartLabels: ["Nông nghiệp", "Du lịch", "Dịch vụ CO2", "Tín chỉ QT", "App Tech"],
      pillars: [
        { title: "Nông nghiệp Xuất khẩu", desc: "Dòng tiền ổn định từ lá tre và nước tre xuất khẩu." },
        { title: "Du lịch Giáo dục", desc: "Tour trường học & membership tạo dòng tiền dương ngay lập tức." },
        { title: "Dịch vụ CO2 Nội địa", desc: "Xây dựng hàng rào xanh cho KCN & bãi rác." },
        { title: "Tín chỉ Carbon QT", desc: "Thu nhập thụ động thông qua sàn giao dịch quốc tế." },
        { title: "App Công nghệ", desc: "Định danh cây xanh & game hóa giúp nhân cấp giá trị IPO." }
      ]
    },
    market: {
      leafTitle: "Cơ hội thị trường: Lá tre",
      leafDesc: "Giá xuất khẩu lá tre khô/chế biến tăng mạnh nhờ nhu cầu bao bì xanh toàn cầu.",
      carbonTitle: "\"Vàng xanh\": Doanh thu Carbon",
      carbonDesc: "Dự báo doanh thu Carbon hàng năm trên 200ha dựa trên biến động giá thị trường.",
      carbonLabels: ['$15 (Hiện tại)', '$25 (Mục tiêu)', '$40 (Tương lai)']
    },
    investment: {
      title: "Cấu trúc đầu tư đặc biệt",
      description: "Mô hình \"Dòng tiền cao, Thoát vốn lớn\". Nhà đầu tư hưởng phần lớn lợi nhuận vận hành để thu hồi vốn nhanh.",
      chartLabels: ['Nhà đầu tư', 'Sáng lập'],
      labels: ['Lợi nhuận vận hành', 'Giá trị IPO'],
      perks: [
        { title: "Quyền lợi Nhà đầu tư (70%)", items: ["Ưu tiên thu hồi vốn sớm", "60-70% Lợi nhuận dòng", "30% Cổ phần khi Exit"] },
        { title: "Động lực Sáng lập (30%)", items: ["Toàn quyền điều hành", "Tập trung xây dựng giá trị", "70% Cổ phần khi IPO"] }
      ]
    },
    roadmap: {
      title: "Lộ trình chiến lược (3 Năm)",
      steps: [
        { year: "Năm 1: Nền tảng", items: ["Ký kết hợp đồng 250ha tại Hòa Bình.", "Ra mắt thẻ Membership du lịch."] },
        { year: "Năm 2: Công nghệ", items: ["Ra mắt App: Định danh cây.", "Kiểm định Carbon quốc tế."] },
        { year: "Năm 3: IPO & Thoát vốn", items: ["Hợp nhất nguồn thu để Kiểm toán.", "Thực thi IPO hoặc M&A house."] }
      ]
    },
    footer: {
      cta: "Sẵn sàng gieo mầm tương lai?",
      btn: "Liên hệ đội ngũ sáng lập"
    }
  },
  en: {
    hero: {
      title: "BAMBOO LEGACY",
      subtitle: "Green Roots. Golden Future. IPO Ready.",
      description: "A strategic consolidation of land, agriculture, tourism, and technology. Transforming 250ha of bamboo into a multi-revenue ecosystem, targeting an IPO within 3 years.",
      tags: {
        esg: "ESG Focused",
        growth: "High Growth",
        carbon: "Carbon Credit"
      }
    },
    foundation: {
      title: "The Foundation",
      description: "Bamboo Legacy is built on reality. We combine tangible assets (250ha) with professional expertise and technology.",
      stats: {
        land: "Hectares Land",
        pillars: "Founding Pillars",
        yearsToIpo: "Years to IPO",
        exp: "Years Exp."
      },
      chartTitle: "Land Allocation Strategy",
      chartLabels: ['Production Core', 'Tourism', 'R&D']
    },
    culture: {
      title: "Culture & Ethics",
      description: "We transform sustainable life philosophies into practical business conduct rules.",
      items: [
        { icon: "🌱", title: "Seeds & Harvest", desc: "All business outcomes stem from integrity-driven actions today." },
        { icon: "🌊", title: "Fluid Adaptation", desc: "Understanding change to turn challenges into new opportunities." },
        { icon: "🤝", title: "Mutual Prosperity", desc: "Creating value for community & planet is the foundation of profit." },
        { icon: "🧘", title: "Total Focus", desc: "Working with full presence to achieve peak performance & quality." },
        { icon: "🔥", title: "Relentless Effort", desc: "Persistently overcoming hurdles with growth mindset and bamboo-like grit." }
      ]
    },
    team: {
      title: "Founding Board & Operations",
      description: "A convergence of 5 core experts ensuring project milestones and financial transparency for the IPO goal.",
      members: [
        { role: "IPO & Strategy", name: "Chairman", exp: "15+ yrs in IPO advisory & M&A" },
        { role: "Finance (CFO)", name: "Financial Pillar", exp: "Cashflow control & Transparency" },
        { role: "Operations (COO)", name: "Operations Pillar", exp: "Project execution & Systems" },
        { role: "Forestry (R&D)", name: "Technical Pillar", exp: "Bamboo species & Organic processes" },
        { role: "Technology (CTO)", name: "Digital Pillar", exp: "App Dev & Carbon Management System" }
      ]
    },
    ecosystem: {
      title: "The 5-Pillar Ecosystem",
      description: "Diversifying risk with 5 interconnected revenue streams.",
      chartLabels: ["Export Agri", "Edu-Tourism", "Local CO2", "Int'l Credits", "Agri-Tech"],
      pillars: [
        { title: "Export Agriculture", desc: "Stable cash flow from bamboo exports." },
        { title: "Edu-Tourism", desc: "School tours & memberships for immediate positive cash flow." },
        { title: "Local CO2 Services", desc: "Green barriers for industrial zones." },
        { title: "Int'l Carbon Credits", desc: "High-margin passive income via global exchanges." },
        { title: "Agri-Tech App", desc: "Tree IDs & tech layer driving IPO multipliers." }
      ]
    },
    market: {
      leafTitle: "Market Opportunity: Leaves",
      leafDesc: "Export prices rising due to eco-packaging trends.",
      carbonTitle: "Green Gold: Carbon Revenue",
      carbonDesc: "Projected annual revenue based on credit price.",
      carbonLabels: ['$15 (Current)', '$25 (Target)', '$40 (Future)']
    },
    investment: {
      title: "Unique Deal Structure",
      description: "Investors get fast payback from cash flow, while Founders build IPO value.",
      chartLabels: ['Investors', 'Founders'],
      labels: ['Operating Profit', 'Equity Value at IPO'],
      perks: [
        { title: "Investor Benefits (70%)", items: ["Priority early payback", "60-70% Net cash flow", "30% Equity at Exit"] },
        { title: "Founder Incentives (30%)", items: ["Operational Control", "Focus on valuation", "70% Equity at IPO"] }
      ]
    },
    roadmap: {
      title: "Strategic Roadmap (3 Years)",
      steps: [
        { year: "Year 1: Foundation", items: ["Secure 250ha land contracts.", "Launch Tourism Membership."] },
        { year: "Year 2: Tech & Scale", items: ["Launch App: Tree IDs.", "Int'l Carbon Audit."] },
        { year: "Year 3: Exit & IPO", items: ["Consolidate revenue for Audit.", "Execute IPO or M&A."] }
      ]
    },
    footer: {
      cta: "Ready to plant the future?",
      btn: "Contact Founder Team"
    }
  }
};