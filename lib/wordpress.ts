/**
 * Mock Headless WordPress API
 * Provides product data and persona-aware recommendations
 * In production, this would fetch from a real WordPress REST API
 */

export type PersonaType = "cafe-owner" | "office-worker" | "fashion-lover" | null;

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: string;
  personas: PersonaType[];
  featured: boolean;
  updatedAt?: string; // ISO date string for sitemap lastModified
  specs?: { label: string; value: string; hasTooltip?: boolean }[];
  sizes?: { label: string; value: string }[];
  purposes?: string[];
  deliveryDate?: string;
  gallery?: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Mock product database
const PRODUCTS: Product[] = [
  {
    id: "decal-giay",
    title: "Decal giấy",
    description: "Tem nhãn decal giấy cán màng bóng hoặc mờ, bám dính tốt trên bề mặt khô. Phù hợp cho nhãn chai lọ, hộp quà, túi giấy.",
    category: "nhan-dan",
    image: "/nhandan/decal_giay.png",
    price: "1500",
    personas: ["cafe-owner", "fashion-lover"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Decal Giấy AL Thường" },
      { label: "Màu in", value: "Đa sắc màu (in offset/KTS)" },
      { label: "Gia công", value: "Cán màng bóng/mờ, bế đứt rời" },
      { label: "Độ bền", value: "Bám dính cao trên bề mặt khô ráo" }
    ],
    sizes: [
      { label: "Tròn 4cm", value: "4x4" },
      { label: "Tròn 5cm", value: "5x5" },
      { label: "Chữ nhật 5x8cm", value: "5x8" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Dán hộp giấy", "Dán ly nhựa/thủy tinh khô", "Nhãn bao bì sản phẩm", "Tem logo thương hiệu"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/nhandan/decal_giay.png", "/nhandan/danhmuc1.png"]
  },
  {
    id: "decal-giay-kraft",
    title: "Decal giấy kraft",
    description: "Decal giấy xi măng màu nâu mộc mạc, đậm chất vintage và thân thiện môi trường. Phù hợp cho sản phẩm handmade, hữu cơ.",
    category: "nhan-dan",
    image: "/nhandan/decal_kraft.png",
    price: "1800",
    personas: ["cafe-owner", "fashion-lover"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Giấy Kraft màu nâu tự nhiên" },
      { label: "Màu in", value: "In màu thường (hoặc lót trắng)" },
      { label: "Gia công", value: "Bế hình dáng tùy chỉnh" },
      { label: "Độ bền", value: "Không chống nước, bám dính tốt" }
    ],
    sizes: [
      { label: "Tròn 4cm", value: "4x4" },
      { label: "Tròn 5cm", value: "5x5" },
      { label: "Chữ nhật 4x6cm", value: "4x6" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Sản phẩm handmade", "Hộp quà vintage", "Sản phẩm hữu cơ", "Ly cafe giấy bảo vệ môi trường"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/nhandan/decal_kraft.png", "/nhandan/danhmuc5.png"]
  },
  {
    id: "decal-nhua-trong",
    title: "Decal nhựa / trong",
    description: "Decal nhựa trong suốt hoặc nhựa sữa chống nước 100%, dẻo dai khó xé rách. Phù hợp cho các sản phẩm ướp lạnh, mỹ phẩm.",
    category: "nhan-dan",
    image: "/nhandan/decal_trong.png",
    price: "2500",
    personas: ["cafe-owner", "fashion-lover"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Decal Nhựa PVC (Trong/Sữa)" },
      { label: "Khả năng", value: "Chống nước 100%, không rách" },
      { label: "Gia công", value: "Cán màng bảo vệ, bế đứt" },
      { label: "Công nghệ", value: "In UV chất lượng cao hoặc in KTS" }
    ],
    sizes: [
      { label: "Tròn 4cm", value: "4x4" },
      { label: "Tròn 5cm", value: "5x5" },
      { label: "Chữ nhật 5x10cm", value: "5x10" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Chai nước ép/trà sữa lạnh", "Chai dầu gội, mỹ phẩm", "Hộp thực phẩm đông lạnh", "Nhãn dán ngoài trời"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/nhandan/decal_trong.png", "/nhandan/danhmuc2.png"]
  },
  {
    id: "decal-xi-bac-vang",
    title: "Decal xi bạc / xi vàng",
    description: "Decal phủ lớp kim loại bạc bóng/mờ hoặc vàng sang trọng, bền bỉ, chịu nhiệt tốt. Thích hợp dán máy móc, linh kiện điện tử.",
    category: "nhan-dan",
    image: "/nhandan/decal_xi_bac.png",
    price: "3500",
    personas: ["office-worker"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Decal Xi Bạc / Vàng bóng" },
      { label: "Độ bền", value: "Chịu nhiệt, chống trầy, chống nước" },
      { label: "Gia công", value: "Bế demi theo hình dáng" },
      { label: "Công nghệ", value: "In mực chất lượng cao siêu bám" }
    ],
    sizes: [
      { label: "2x4 cm", value: "2x4" },
      { label: "3x5 cm", value: "3x5" },
      { label: "Chữ nhật 5x8cm", value: "5x8" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Linh kiện điện tử", "Nhãn thông số máy móc", "Sản phẩm điện gia dụng", "Tem bảo hành cao cấp"],
    deliveryDate: "Giao hàng từ 2-3 ngày",
    gallery: ["/nhandan/decal_xi_bac.png", "/nhandan/danhmuc6.png"]
  },
  {
    id: "decal-uv-dtf",
    title: "Decal UV DTF",
    description: "Công nghệ in UV DTF chuyển nhiệt trực tiếp, chỉ giữ lại phần mực nổi trên sản phẩm, chống nước và chống trầy xước tuyệt đối.",
    category: "nhan-dan",
    image: "/nhandan/decal_uv_dtf.png",
    price: "5000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Công nghệ", value: "In UV DTF chuyển nhiệt nổi" },
      { label: "Đặc điểm", value: "Không có viền decal nền, mực nổi 3D" },
      { label: "Độ bền", value: "Chống xước cực cao, không bong tróc" },
      { label: "Bề mặt dán", value: "Thủy tinh, kim loại, nhựa cứng, sứ" }
    ],
    sizes: [
      { label: "Tròn 4cm", value: "4x4" },
      { label: "Tròn 5cm", value: "5x5" },
      { label: "Khổ A4", value: "a4" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Dán logo nón bảo hiểm", "Dán ly thủy tinh sang trọng", "Dán bình giữ nhiệt, cốc sứ", "Dán logo máy tính, điện thoại"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/nhandan/decal_uv_dtf.png", "/nhandan/danhmuc3.png"]
  },
  {
    id: "tem-be-bao-hanh",
    title: "Tem bể bảo hành",
    description: "Chất liệu decal giòn, khi đã dán vào bóc ra sẽ tự vỡ vụn thành các mảnh nhỏ, chống tháo gỡ hoặc tái sử dụng.",
    category: "nhan-dan",
    image: "/nhandan/tem_bao_hanh.png",
    price: "500",
    personas: ["office-worker"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Decal Bể (Tem Vỡ)" },
      { label: "Đặc tính", value: "Tự vỡ khi bóc ra, chỉ dùng 1 lần" },
      { label: "Màu sắc", value: "In đa màu, cực sắc nét chữ nhỏ" },
      { label: "Gia công", value: "Bế demi đứt sẵn, dễ bóc dán" }
    ],
    sizes: [
      { label: "Tròn 1cm", value: "1x1" },
      { label: "Chữ nhật 1x2cm", value: "1x2" },
      { label: "Chữ nhật 1x3cm", value: "1x3" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Tem niêm phong hộp sản phẩm", "Tem bảo hành linh kiện điện tử", "Tem niêm phong nắp chai", "Tem chứng nhận chính hãng"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/nhandan/tem_bao_hanh.png", "/nhandan/danhmuc4.png"]
  },
  {
    id: "decal-kho-lon",
    title: "Decal khổ lớn",
    description: "Decal khổ lớn dùng trong nhà hoặc ngoài trời, phủ keo bám dính chắc, in chất lượng cao khổ lớn để dán tường, kính, xe.",
    category: "nhan-dan",
    image: "/nhandan/decal_kho_lon.png",
    price: "80000",
    personas: ["office-worker", "cafe-owner"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Decal trắng sữa / trong khổ lớn" },
      { label: "Màu sắc", value: "In màu ngoài trời cực bền bỉ" },
      { label: "Gia công", value: "Cán màng bóng/mờ chống tia UV" },
      { label: "Độ rộng", value: "Khổ in lên đến 1.52m x chiều dài" }
    ],
    sizes: [
      { label: "1m x 1m", value: "1x1" },
      { label: "1.2m x 2m", value: "1.2x2" },
      { label: "1.5m x 3m", value: "1.5x3" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Dán trang trí kính cửa hàng", "Dán quảng cáo xe tải, ô tô", "Tranh dán tường trang trí", "Biển quảng cáo decal bồi formex"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/nhandan/decal_kho_lon.png", "/danhmuc2.png"]
  },
  {
    id: "brochure-1",
    title: "Bao thư A4",
    description:
      "High-quality tri-fold and multi-page brochures with vibrant colors and professional finishes.",
    category: "office-products",
    image: "/2.jpg",
    price: "From $0.50/unit",
    personas: ["office-worker", "cafe-owner"],
    featured: true,
  },
  {
    id: "labels-1",
    title: "Catalogue chuẩn",
    description:
      "Durable, waterproof labels perfect for product branding and packaging.",
    category: "labels",
    image: "/34.jpg",
    price: "From $0.15/unit",
    personas: ["cafe-owner", "fashion-lover"],
    featured: true,
  },
  {
    id: "packaging-1",
    title: "Custom Packaging",
    description:
      "Branded boxes, bags, and packaging solutions that elevate your product presentation.",
    category: "packaging",
    image: "/37-1500x1500.jpg",
    price: "From $0.75/unit",
    personas: ["cafe-owner", "fashion-lover"],
    featured: true,
  },
  {
    id: "catalogue-4-trang",
    title: "Catalogue 4 trang",
    description: "Catalogue 4 trang khổ A4, giấy C300 cán mờ, phù hợp giới thiệu sản phẩm ngắn gọn và chuyên nghiệp.",
    category: "catalogue",
    image: "/bannercatalog/anphamtiepthi.jpeg",
    price: "8000",
    personas: ["office-worker", "cafe-owner"],
    featured: false,
  },
  {
    id: "catalogue-8-trang",
    title: "Catalogue 8 trang",
    description: "Catalogue 8 trang khổ A4, giấy C250 cán mờ, trình bày bộ sưu tập sản phẩm hoặc dịch vụ rõ ràng.",
    category: "catalogue",
    image: "/anphamtiepthi/catalogue/background.jpeg",
    price: "15000",
    personas: ["office-worker", "cafe-owner"],
    featured: false,
  },
  {
    id: "catalogue-12-trang",
    title: "Catalogue 12 trang",
    description: "Catalogue 12 trang khổ A4, giấy C250 cán mờ, phù hợp hồ sơ bán hàng nhiều nội dung.",
    category: "catalogue",
    image: "/brochure/section 1.png",
    price: "22000",
    personas: ["office-worker", "cafe-owner"],
    featured: false,
  },
  {
    id: "catalogue-16-trang",
    title: "Catalogue 16 trang",
    description: "Catalogue 16 trang khổ A4, giấy C200 cán mờ, cân bằng giữa nội dung dày và chi phí hợp lý.",
    category: "catalogue",
    image: "/anphamtiepthi/voucher/anh1.png",
    price: "28000",
    personas: ["office-worker", "cafe-owner"],
    featured: false,
  },
  {
    id: "catalogue-24-trang",
    title: "Catalogue 24 trang",
    description: "Catalogue 24 trang khổ A4, giấy C200 cán mờ, phù hợp catalogue sản phẩm nhiều nhóm hàng.",
    category: "catalogue",
    image: "/anphamtiepthi/voucher/anh2.png",
    price: "38000",
    personas: ["office-worker", "cafe-owner"],
    featured: false,
  },
  {
    id: "catalogue-bia-cung",
    title: "Catalogue bìa cứng",
    description: "Catalogue bìa cứng với giấy C300 và bìa 350gsm, tạo cảm giác chắc chắn và cao cấp.",
    category: "catalogue",
    image: "/brochure/background1.jpeg",
    price: "45000",
    personas: ["office-worker", "fashion-lover"],
    featured: false,
  },
  {
    id: "catalogue-ep-kim-logo",
    title: "Catalogue ép kim logo",
    description: "Catalogue giấy mỹ thuật ép kim logo, phù hợp thương hiệu cần ấn phẩm sang trọng và khác biệt.",
    category: "catalogue",
    image: "/bannercatalog/anphamtiepthi.jpeg",
    price: "55000",
    personas: ["office-worker", "fashion-lover"],
    featured: false,
  },
  {
    id: "catalogue-giay-my-thuat",
    title: "Catalogue giấy mỹ thuật",
    description: "Catalogue giấy mỹ thuật Conqueror 250gsm, bề mặt đẹp, màu in tinh tế và cảm giác cầm cao cấp.",
    category: "catalogue",
    image: "/danhmuc6.png",
    price: "48000",
    personas: ["office-worker", "fashion-lover"],
    featured: false,
  },
  {
    id: "business-cards-1",
    title: "Backdrop sự kiện",
    description:
      "Premium business cards with various finishes: matte, glossy, or textured.",
    category: "office-products",
    image: "/180-1.jpg",
    price: "From $0.08/unit",
    personas: ["office-worker"],
    featured: false,
  },
  {
    id: "flyers-1",
    title: "Marketing Flyers",
    description:
      "Eye-catching flyers for events, promotions, and announcements.",
    category: "marketing",
    image: "/214-1.jpg",
    price: "From $0.12/unit",
    personas: ["office-worker", "cafe-owner"],
    featured: false,
  },
  {
    id: "standee-1",
    title: "Display Standees",
    description:
      "Large-format standees for retail displays and event promotions.",
    category: "display",
    image: "/219.jpg",
    price: "From $5.00/unit",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "hang-tags-1",
    title: "Hang Tags & Price Tags",
    description:
      "Professional hang tags for clothing, accessories, and retail products.",
    category: "labels",
    image: "/225.jpg",
    price: "From $0.10/unit",
    personas: ["fashion-lover"],
    featured: false,
  },
  {
    id: "menus-1",
    title: "Restaurant Menus",
    description:
      "Laminated and bound menus with custom designs for cafes and restaurants.",
    category: "office-products",
    image: "/247.jpg",
    price: "From $1.50/unit",
    personas: ["cafe-owner"],
    featured: false,
  },
  {
    id: "menu-1-to-can-mang",
    title: "Menu 1 tờ cán màng",
    description: "Menu 1 tờ khổ A4, giấy C300 cán bóng, phù hợp quán cafe, trà sữa và nhà hàng cần menu gọn đẹp.",
    category: "menu",
    image: "/anphamtiepthi/menu/anh1.png",
    price: "250000",
    personas: ["cafe-owner"],
    featured: false,
  },
  {
    id: "bang-ron-hiflex-3m",
    title: "Băng rôn Hiflex 3m",
    description: "Băng rôn bạt Hiflex 300x100cm, in kỹ thuật số sắc nét, chống nước, phù hợp banner cửa hàng và sự kiện.",
    category: "hiflex",
    image: "/danhmuc2.png",
    price: "270000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "bang-ron-hiflex-5m",
    title: "Băng rôn Hiflex 5m",
    description: "Băng rôn bạt Hiflex 500x100cm, in kỹ thuật số, chống nước, phù hợp biển hiệu lớn và sự kiện.",
    category: "hiflex",
    image: "/danhmuc4.png",
    price: "450000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "banner-hiflex-co-den-3m",
    title: "Banner Hiflex có đèn 3m",
    description: "Banner bạt Hiflex hở đèn 300x100cm kèm đèn LED, nổi bật cả ban ngày và ban đêm.",
    category: "hiflex",
    image: "/danhmuc5.png",
    price: "540000",
    personas: ["cafe-owner"],
    featured: false,
  },
  {
    id: "banner-hiflex-co-den-5m",
    title: "Banner Hiflex có đèn 5m",
    description: "Banner bạt Hiflex hở đèn 500x100cm kèm đèn LED, thu hút mọi ánh nhìn ban đêm.",
    category: "hiflex",
    image: "/danhmuc3.png",
    price: "900000",
    personas: ["cafe-owner"],
    featured: false,
  },
  {
    id: "backdrop-hiflex-boi-formex",
    title: "Backdrop Hiflex bồi formex",
    description: "Backdrop bạt Hiflex 200x100cm bồi formex 5mm, cứng cáp, phù hợp sự kiện và hội nghị.",
    category: "hiflex",
    image: "/danhmuc2.png",
    price: "500000",
    personas: ["cafe-owner", "office-worker"],
    featured: false,
  },
  {
    id: "billboard-hiflex-boi-formex",
    title: "Billboard Hiflex bồi formex",
    description: "Billboard bạt Hiflex 300x150cm bồi formex 5mm, dùng ngoài trời bền bỉ, màu sắc nổi bật.",
    category: "hiflex",
    image: "/danhmuc4.png",
    price: "1125000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "menu-2-to-gap-can-mang",
    title: "Menu 2 tờ gấp cán màng",
    description: "Menu A4 gấp đôi, giấy C300 cán mờ, trình bày nhiều nhóm món nhưng vẫn gọn tay.",
    category: "menu",
    image: "/anphamtiepthi/menu/anh2.png",
    price: "300000",
    personas: ["cafe-owner"],
    featured: false,
  },
  {
    id: "menu-3-to-can-mang",
    title: "Menu 3 tờ cán màng",
    description: "Menu A4 gấp 3, giấy C300 cán mờ, phù hợp menu nhiều món, combo và hình ảnh minh họa.",
    category: "menu",
    image: "/anphamtiepthi/menu/background1.jpeg",
    price: "380000",
    personas: ["cafe-owner"],
    featured: false,
  },
  {
    id: "menu-1-to-boi-carton",
    title: "Menu 1 tờ bồi carton",
    description: "Menu 1 tờ khổ A4 bồi carton, cứng cáp, sang trọng và bền khi sử dụng tại bàn.",
    category: "menu",
    image: "/anphamtiepthi/menu/backgound.jpeg",
    price: "350000",
    personas: ["cafe-owner"],
    featured: false,
  },
  {
    id: "menu-2-to-gap-boi-carton",
    title: "Menu 2 tờ gấp bồi carton",
    description: "Menu A4 gấp đôi bồi carton, cầm chắc tay, phù hợp nhà hàng và quán đồ uống cao cấp.",
    category: "menu",
    image: "/anphamtiepthi/menu/anh1.png",
    price: "420000",
    personas: ["cafe-owner"],
    featured: false,
  },
  {
    id: "menu-3-to-boi-carton",
    title: "Menu 3 tờ bồi carton",
    description: "Menu A4 gấp 3 bồi carton, nhiều không gian trình bày, độ bền cao và hình ảnh sắc nét.",
    category: "menu",
    image: "/anphamtiepthi/menu/anh2.png",
    price: "520000",
    personas: ["cafe-owner"],
    featured: false,
  },
  {
    id: "voucher-1-mat",
    title: "Voucher 1 mặt",
    description: "Voucher 1 mặt giấy C300, phù hợp chương trình giảm giá, khai trương và chăm sóc khách hàng.",
    category: "voucher",
    image: "/anphamtiepthi/voucher/anh1.png",
    price: "85000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "voucher-2-mat",
    title: "Voucher 2 mặt",
    description: "Voucher 2 mặt giấy C300, có thêm không gian điều kiện sử dụng, logo và thông tin liên hệ.",
    category: "voucher",
    image: "/anphamtiepthi/voucher/anh2.png",
    price: "120000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "voucher-can-mo",
    title: "Voucher cán mờ",
    description: "Voucher cán mờ cao cấp, bề mặt mịn, chống trầy nhẹ và tạo cảm giác sang trọng.",
    category: "voucher",
    image: "/anphamtiepthi/voucher/anh3.png",
    price: "150000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "voucher-can-bong",
    title: "Voucher cán bóng",
    description: "Voucher cán bóng nổi bật, màu sắc tươi, phù hợp các chương trình khuyến mãi cần thu hút.",
    category: "voucher",
    image: "/anphamtiepthi/voucher/anh1.png",
    price: "150000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "the-tich-diem",
    title: "Thẻ tích điểm",
    description: "Thẻ tích điểm kích thước namecard, giấy C300, hỗ trợ chăm sóc khách hàng quay lại.",
    category: "voucher",
    image: "/anphamtiepthi/voucher/anh2.png",
    price: "95000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "gift-voucher",
    title: "Gift voucher",
    description: "Gift voucher giấy mỹ thuật, in màu sắc nét, phù hợp quà tặng dịch vụ và chiến dịch tri ân.",
    category: "voucher",
    image: "/anphamtiepthi/voucher/anh3.png",
    price: "180000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "hashtag-form-don",
    title: "Hashtag form đơn",
    description: "Hashtag cầm tay PP bồi formex 3mm, cán mờ, phù hợp sự kiện nhỏ, khai trương và booth check-in.",
    category: "hashtag-cam-tay",
    image: "/danhmuc2.png",
    price: "25000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "hashtag-form-lon",
    title: "Hashtag form lớn",
    description: "Hashtag cầm tay form lớn, bồi formex 5mm chắc tay, phù hợp sự kiện đông người và khu vực chụp ảnh.",
    category: "hashtag-cam-tay",
    image: "/standee/section1_1.png",
    price: "45000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "hashtag-check-in",
    title: "Hashtag check-in",
    description: "Hashtag check-in bế theo logo, slogan hoặc tên thương hiệu, giúp hình ảnh sự kiện nổi bật hơn.",
    category: "hashtag-cam-tay",
    image: "/standee/section1_2.png",
    price: "35000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "hashtag-can-bong",
    title: "Hashtag cán bóng",
    description: "Hashtag cán bóng có màu sắc tươi, bề mặt sáng và dễ thu hút khi chụp ảnh sự kiện.",
    category: "hashtag-cam-tay",
    image: "/danhmuc4.png",
    price: "30000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "hashtag-theo-bo",
    title: "Hashtag theo bộ",
    description: "Bộ hashtag cầm tay nhiều mẫu cho booth chụp ảnh, khai trương, sinh nhật và chiến dịch quảng bá.",
    category: "hashtag-cam-tay",
    image: "/danhmuc5.png",
    price: "150000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "hashtag-custom",
    title: "Hashtag custom",
    description: "Hashtag cầm tay thiết kế riêng theo nhận diện thương hiệu, bế form theo yêu cầu và gia công chỉn chu.",
    category: "hashtag-cam-tay",
    image: "/danhmuc6.png",
    price: "0",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
  },
  {
    id: "business-card-1",
    title: "Danh Thiếp Offset Cao Cấp",
    description: "Danh thiếp in offset chất lượng cao, sắc nét, bền màu cho doanh nghiệp.",
    category: "office-products",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
    price: "150000",
    personas: ["office-worker", "cafe-owner"],
    featured: true,
  },
  {
    id: "business-card-2",
    title: "Danh Thiếp Nổi 3D",
    description: "Danh thiếp với hiệu ứng nổi 3D độc đáo, tạo ấn tượng mạnh từ cái nhìn đầu tiên.",
    category: "office-products",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
    price: "250000",
    personas: ["office-worker", "fashion-lover"],
    featured: false,
  },
  {
    id: "business-card-3",
    title: "Danh Thiếp Mạ Vàng",
    description: "Danh thiếp mạ vàng sang trọng, khẳng định đẳng cấp và vị thế của bạn.",
    category: "office-products",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
    price: "350000",
    personas: ["office-worker"],
    featured: true,
  },
  {
    id: "envelope-1",
    title: "Bao Thư Trắng Tiêu Chuẩn",
    description: "Bao thư trắng tiêu chuẩn A4, phù hợp cho mọi nhu cầu văn phòng.",
    category: "office-products",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
    price: "50000",
    personas: ["office-worker", "cafe-owner"],
    featured: false,
  },
  {
    id: "folder-1",
    title: "Folder Bìa Cứng",
    description: "Folder bìa cứng chuyên nghiệp, giúp bảo quản tài liệu ngăn nắp và sang trọng.",
    category: "office-products",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
    price: "80000",
    personas: ["office-worker"],
    featured: false,
  },
  {
    id: "bao-thu-a4",
    title: "Bao thư A4",
    description: "Bao thư lớn A4 kích thước 25x35cm đựng tài liệu, hợp đồng, hồ sơ công ty, dán sẵn băng keo nắp cực tiện lợi.",
    category: "bao-thu",
    image: "/anphamvanphong/baothu/sanpham1.png",
    price: "2800",
    personas: ["office-worker", "cafe-owner"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Giấy Ford 120gsm / 150gsm hoặc Couche 150gsm" },
      { label: "Kích thước", value: "25 x 35 cm (nắp gập 3cm)" },
      { label: "Gia công", value: "Bế dán thành phẩm, nắp có sẵn băng keo" },
      { label: "Công nghệ", value: "In offset sắc nét màu sắc trung thực" }
    ],
    sizes: [
      { label: "Khổ A4 (25x35cm)", value: "25x35" }
    ],
    purposes: ["Đựng hồ sơ công ty", "Gửi hợp đồng đối tác", "Đựng catalogue sản phẩm", "Đựng tài liệu quảng cáo"],
    deliveryDate: "Giao hàng từ 3-5 ngày",
    gallery: ["/anphamvanphong/baothu/sanpham1.png", "/anphamvanphong/baothu/sanpham.webp"]
  },
  {
    id: "bao-thu-a5",
    title: "Bao thư A5",
    description: "Bao thư trung A5 kích thước 16x23cm thích hợp đựng hóa đơn, tài liệu cỡ trung bình, in offset chuẩn màu thương hiệu.",
    category: "bao-thu",
    image: "/anphamvanphong/baothu/sanpham1.png",
    price: "1800",
    personas: ["office-worker", "cafe-owner"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Giấy Ford 100gsm / 120gsm" },
      { label: "Kích thước", value: "16 x 23 cm (nắp gập 3cm)" },
      { label: "Gia công", value: "Bế dán thành phẩm, nắp có sẵn băng keo" },
      { label: "Công nghệ", value: "In offset/Kỹ thuật số chất lượng cao" }
    ],
    sizes: [
      { label: "Khổ A5 (16x23cm)", value: "16x23" }
    ],
    purposes: ["Đựng hóa đơn", "Đựng thư ngỏ", "Gửi tài liệu A5", "Đựng phiếu quà tặng voucher"],
    deliveryDate: "Giao hàng từ 3-5 ngày",
    gallery: ["/anphamvanphong/baothu/sanpham1.png", "/anphamvanphong/baothu/sanpham.webp"]
  },
  {
    id: "bao-thu-a6",
    title: "Bao thư A6",
    description: "Bao thư nhỏ A6 kích thước 12x22cm cực kỳ thông dụng cho việc gửi thư mời sự kiện, thiệp chúc mừng, hóa đơn VAT nhỏ.",
    category: "bao-thu",
    image: "/anphamvanphong/baothu/sanpham1.png",
    price: "1200",
    personas: ["office-worker", "cafe-owner"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Giấy Ford 100gsm / 120gsm" },
      { label: "Kích thước", value: "12 x 22 cm (nắp gập 2cm)" },
      { label: "Gia công", value: "Bế dán thành phẩm, nắp có sẵn băng keo" },
      { label: "Công nghệ", value: "In offset/Kỹ thuật số sắc nét" }
    ],
    sizes: [
      { label: "Khổ A6 (12x22cm)", value: "12x22" }
    ],
    purposes: ["Đựng thư mời sự kiện", "Đựng thiệp chúc mừng", "Đựng hóa đơn nhỏ", "Gửi thư từ hàng ngày"],
    deliveryDate: "Giao hàng từ 3-5 ngày",
    gallery: ["/anphamvanphong/baothu/sanpham1.png", "/anphamvanphong/baothu/sanpham.webp"]
  },
  {
    id: "anh-ep-nhua-pvc-10x15",
    title: "Ảnh ép PVC 10x15cm",
    description: "Ảnh ép nhựa PVC kích thước 10x15cm, in laser sắc nét, chống nước, phù hợp ảnh chân dung nhỏ và ảnh gia đình.",
    category: "anh-ep-nhua",
    image: "/inanh/epnhua/sanpham1.webp",
    price: "15000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Nhựa PVC mỏng" },
      { label: "Kích thước", value: "10 x 15 cm" },
      { label: "Gia công", value: "In laser, cán màng" },
      { label: "Độ bền", value: "Chống nước, bền màu trên 10 năm" }
    ],
    sizes: [
      { label: "10x15cm", value: "10x15" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh chân dung", "Ảnh gia đình nhỏ", "Ảnh decor", "Ảnh quà tặng"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/inanh/epnhua/sanpham1.webp", "/inanh/epnhua/sanpham2.png"]
  },
  {
    id: "anh-ep-nhua-pvc-13x18",
    title: "Ảnh ép PVC 13x18cm",
    description: "Ảnh ép nhựa PVC dày 0.5mm, màu sắc trung thực, phù hợp ảnh cưới và ảnh chân dung studio.",
    category: "anh-ep-nhua",
    image: "/inanh/epnhua/sanpham2.png",
    price: "25000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Nhựa PVC dày 0.5mm" },
      { label: "Kích thước", value: "13 x 18 cm" },
      { label: "Gia công", value: "In laser, cán màng chống trầy" },
      { label: "Độ bền", value: "Chống nước, chống trầy" }
    ],
    sizes: [
      { label: "13x18cm", value: "13x18" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh cưới", "Ảnh chân dung studio", "Ảnh gia đình", "Ảnh decor phòng"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/inanh/epnhua/sanpham2.png", "/inanh/epnhua/background.jpeg"]
  },
  {
    id: "anh-ep-nhua-cung-15x21",
    title: "Ảnh ép cứng 15x21cm",
    description: "Ảnh ép nhựa cứng 0.5mm, cán màng chống trầy, phù hợp khung treo tường và ảnh quà tặng.",
    category: "anh-ep-nhua",
    image: "/inanh/epnhua/background.jpeg",
    price: "35000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Nhựa cứng 0.5mm" },
      { label: "Kích thước", value: "15 x 21 cm" },
      { label: "Gia công", value: "Ép cứng, cán màng chống trầy" },
      { label: "Độ bền", value: "Cứng cáp, chống nước" }
    ],
    sizes: [
      { label: "15x21cm", value: "15x21" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Khung treo tường", "Ảnh quà tặng", "Ảnh kỷ niệm", "Ảnh decor"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/inanh/epnhua/background.jpeg", "/inanh/epnhua/sanpham1.webp"]
  },
  {
    id: "anh-ep-nhua-cung-20x30",
    title: "Ảnh ép cứng 20x30cm",
    description: "Ảnh ép nhựa cứng cao cấp, phù hợp khung treo tường lớn và ảnh chân dung gia đình.",
    category: "anh-ep-nhua",
    image: "/inanh/epnhua/background.jpeg",
    price: "45000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Nhựa cứng cao cấp" },
      { label: "Kích thước", value: "20 x 30 cm" },
      { label: "Gia công", value: "Ép cứng, cán màng chống trầy" },
      { label: "Độ bền", value: "Chống nước, bền màu trên 10 năm" }
    ],
    sizes: [
      { label: "20x30cm", value: "20x30" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Khung treo tường lớn", "Ảnh chân dung gia đình", "Ảnh cưới", "Ảnh decor quán"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/inanh/epnhua/background.jpeg", "/inanh/epnhua/sanpham1.webp"]
  },
  {
    id: "anh-ep-nhua-cao-cap-30x40",
    title: "Ảnh ép cao cấp 30x40cm",
    description: "Ảnh ép nhựa cao cấp, nhựa dày, chống trầy, phù hợp ảnh chân dung lớn và ảnh decor quán cafe.",
    category: "anh-ep-nhua",
    image: "/inanh/epnhua/sanpham1.webp",
    price: "85000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Nhựa dày cao cấp" },
      { label: "Kích thước", value: "30 x 40 cm" },
      { label: "Gia công", value: "Ép cứng, cán màng chống trầy" },
      { label: "Độ bền", value: "Chống nước, chống trầy, bền trên 15 năm" }
    ],
    sizes: [
      { label: "30x40cm", value: "30x40" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh chân dung lớn", "Ảnh decor quán cafe", "Ảnh gia đình", "Ảnh cưới khổ lớn"],
    deliveryDate: "Giao hàng từ 2-3 ngày",
    gallery: ["/inanh/epnhua/sanpham1.webp", "/inanh/epnhua/sanpham2.png"]
  },
  {
    id: "anh-ep-nhua-cao-cap-40x60",
    title: "Ảnh ép cao cấp 40x60cm",
    description: "Ảnh ép nhựa cao cấp kích thước lớn, in laser cao cấp, phù hợp ảnh chân dung và ảnh decor chuyên nghiệp.",
    category: "anh-ep-nhua",
    image: "/inanh/epnhua/sanpham2.png",
    price: "120000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Nhựa dày cao cấp" },
      { label: "Kích thước", value: "40 x 60 cm" },
      { label: "Gia công", value: "In laser cao cấp, ép cứng" },
      { label: "Độ bền", value: "Chống nước, chống trầy, bền trên 15 năm" }
    ],
    sizes: [
      { label: "40x60cm", value: "40x60" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh chân dung khổ lớn", "Ảnh decor studio", "Ảnh cưới treo tường", "Ảnh quán cafe"],
    deliveryDate: "Giao hàng từ 2-3 ngày",
    gallery: ["/inanh/epnhua/sanpham2.png", "/inanh/epnhua/background.jpeg"]
  },
  {
    id: "anh-cuoi-10x15",
    title: "Ảnh cưới 10x15cm",
    description: "Ảnh cưới in trên giấy ảnh cao cấp 10x15cm, in laser sắc nét, màu sắc trung thực, phù hợp làm quà tặng và kỷ niệm.",
    category: "anh-cuoi",
    image: "/inanh/anhcuoi/sanpham1.png",
    price: "25000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Giấy ảnh cao cấp" },
      { label: "Kích thước", value: "10 x 15 cm" },
      { label: "Gia công", value: "In laser, cán màng" },
      { label: "Độ bền", value: "Bền trên 10 năm" }
    ],
    sizes: [
      { label: "10x15cm", value: "10x15" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh cưới nhỏ", "Ảnh kỷ niệm", "Ảnh quà tặng", "Ảnh để ví"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/inanh/anhcuoi/background.jpeg"]
  },
  {
    id: "anh-cuoi-13x18",
    title: "Ảnh cưới 13x18cm",
    description: "Ảnh cưới in trên giấy ảnh bóng/mờ 13x18cm, chống nước, màu sắc trung thực, phù hợp khung để bàn.",
    category: "anh-cuoi",
    image: "/inanh/anhcuoi/sanpham1.png",
    price: "35000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Giấy ảnh bóng hoặc mờ" },
      { label: "Kích thước", value: "13 x 18 cm" },
      { label: "Gia công", value: "In laser, chống nước" },
      { label: "Độ bền", value: "Bền trên 10 năm" }
    ],
    sizes: [
      { label: "13x18cm", value: "13x18" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh cưới để bàn", "Ảnh kỷ niệm", "Ảnh gia đình nhỏ", "Ảnh quà tặng"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/inanh/anhcuoi/background.jpeg"]
  },
  {
    id: "anh-cuoi-ep-nhua-15x21",
    title: "Ảnh cưới ép nhựa 15x21cm",
    description: "Ảnh cưới ép nhựa cứng 0.5mm, cán màng chống trầy, phù hợp khung treo tường và quà tặng.",
    category: "anh-cuoi",
    image: "/inanh/anhcuoi/sanpham1.png",
    price: "45000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Nhựa cứng 0.5mm" },
      { label: "Kích thước", value: "15 x 21 cm" },
      { label: "Gia công", value: "Ép cứng, cán màng chống trầy" },
      { label: "Độ bền", value: "Chống nước, bền trên 15 năm" }
    ],
    sizes: [
      { label: "15x21cm", value: "15x21" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh cưới treo tường", "Ảnh kỷ niệm", "Ảnh gia đình", "Ảnh quà tặng cao cấp"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/inanh/anhcuoi/background.jpeg"]
  },
  {
    id: "anh-cuoi-ep-nhua-20x30",
    title: "Ảnh cưới ép nhựa 20x30cm",
    description: "Ảnh cưới ép nhựa cứng cao cấp 20x30cm, phù hợp khung treo tường lớn và ảnh cưới phòng ngủ.",
    category: "anh-cuoi",
    image: "/inanh/anhcuoi/sanpham1.png",
    price: "65000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Nhựa cứng cao cấp" },
      { label: "Kích thước", value: "20 x 30 cm" },
      { label: "Gia công", value: "Ép cứng, cán màng chống trầy" },
      { label: "Độ bền", value: "Chống nước, bền trên 15 năm" }
    ],
    sizes: [
      { label: "20x30cm", value: "20x30" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh cưới treo tường lớn", "Ảnh gia đình", "Ảnh phòng ngủ", "Ảnh cưới phòng khách"],
    deliveryDate: "Giao hàng từ 2-3 ngày",
    gallery: ["/inanh/anhcuoi/background.jpeg"]
  },
  {
    id: "anh-cuoi-30x40",
    title: "Ảnh cưới 30x40cm",
    description: "Ảnh cưới cao cấp 30x40cm, in laser trên giấy ảnh hoặc ép nhựa, phù hợp khung treo tường lớn.",
    category: "anh-cuoi",
    image: "/inanh/anhcuoi/sanpham1.png",
    price: "95000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Giấy ảnh hoặc nhựa dày" },
      { label: "Kích thước", value: "30 x 40 cm" },
      { label: "Gia công", value: "In laser cao cấp" },
      { label: "Độ bền", value: "Bền trên 10 năm" }
    ],
    sizes: [
      { label: "30x40cm", value: "30x40" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh cưới khổ lớn", "Ảnh gia đình treo tường", "Ảnh cưới phòng khách", "Ảnh kỷ niệm"],
    deliveryDate: "Giao hàng từ 2-3 ngày",
    gallery: ["/inanh/anhcuoi/background.jpeg"]
  },
  {
    id: "anh-cuoi-40x60",
    title: "Ảnh cưới 40x60cm",
    description: "Ảnh cưới kích thước lớn 40x60cm, in laser cao cấp, phù hợp khung trang trí phòng cưới và phòng khách.",
    category: "anh-cuoi",
    image: "/inanh/anhcuoi/sanpham1.png",
    price: "150000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Giấy ảnh cao cấp hoặc nhựa dày" },
      { label: "Kích thước", value: "40 x 60 cm" },
      { label: "Gia công", value: "In laser cao cấp, cán màng" },
      { label: "Độ bền", value: "Chống nước, bền trên 15 năm" }
    ],
    sizes: [
      { label: "40x60cm", value: "40x60" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh cưới treo tường lớn", "Ảnh cưới phòng ngủ", "Ảnh cưới decor", "Ảnh kỷ niệm gia đình"],
    deliveryDate: "Giao hàng từ 3-5 ngày",
    gallery: ["/inanh/anhcuoi/background.jpeg"]
  },
  {
    id: "photobook-20x25",
    title: "Photobook 20x25cm",
    description: "Photobook 20 trang, giấy ảnh cao cấp, bìa cứng, phù hợp photo book gia đình và kỷ niệm.",
    category: "photobook",
    image: "/inanh/photobook/sanpham1.png",
    price: "350000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Giấy ảnh cao cấp" },
      { label: "Kích thước", value: "20 x 25 cm" },
      { label: "Số trang", value: "20 trang" },
      { label: "Gia công", value: "Bìa cứng, đóng gáy" }
    ],
    sizes: [
      { label: "20x25cm", value: "20x25" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Photo book gia đình", "Photobook kỷ niệm", "Album ảnh nhỏ", "Quà tặng"],
    deliveryDate: "Giao hàng từ 3-5 ngày",
    gallery: ["/inanh/photobook/sanpham1.png", "/inanh/photobook/background.jpeg"]
  },
  {
    id: "photobook-25x30",
    title: "Photobook 25x30cm",
    description: "Photobook 24 trang, giấy ảnh cao cấp, bìa cứng, phù hợp photo book cưới và gia đình.",
    category: "photobook",
    image: "/inanh/photobook/background.jpeg",
    price: "550000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Giấy ảnh cao cấp" },
      { label: "Kích thước", value: "25 x 30 cm" },
      { label: "Số trang", value: "24 trang" },
      { label: "Gia công", value: "Bìa cứng, đóng gáy chắc chắn" }
    ],
    sizes: [
      { label: "25x30cm", value: "25x30" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Photobook cưới", "Photo book gia đình", "Album kỷ niệm", "Quà tặng cao cấp"],
    deliveryDate: "Giao hàng từ 3-5 ngày",
    gallery: ["/inanh/photobook/background.jpeg", "/inanh/photobook/sanpham1.png"]
  },
  {
    id: "photobook-30x30",
    title: "Photobook 30x30cm",
    description: "Photobook 30 trang, giấy ảnh cao cấp, bìa da sang trọng, in laser 6 màu sắc nét.",
    category: "photobook",
    image: "/inanh/photobook/sanpham1.png",
    price: "750000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Giấy ảnh cao cấp" },
      { label: "Kích thước", value: "30 x 30 cm" },
      { label: "Số trang", value: "30 trang" },
      { label: "Gia công", value: "Bìa da cao cấp, in laser 6 màu" }
    ],
    sizes: [
      { label: "30x30cm", value: "30x30" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Photobook cao cấp", "Album cưới", "Photo book kỷ niệm", "Quà tặng đặc biệt"],
    deliveryDate: "Giao hàng từ 5-7 ngày",
    gallery: ["/inanh/photobook/sanpham1.png", "/inanh/photobook/background.jpeg"]
  },
  {
    id: "photobook-cuoi-25x30",
    title: "Photobook cưới 25x30cm",
    description: "Photobook cưới 30 trang, bìa vải/da, đóng gáy chắc chắn, thiết kế layout chuyên nghiệp.",
    category: "photobook",
    image: "/inanh/photobook/background.jpeg",
    price: "850000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Giấy ảnh cao cấp" },
      { label: "Kích thước", value: "25 x 30 cm" },
      { label: "Số trang", value: "30 trang" },
      { label: "Gia công", value: "Bìa vải/da, đóng gáy chắc chắn" }
    ],
    sizes: [
      { label: "25x30cm", value: "25x30" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh cưới", "Album cưới", "Photobook kỷ niệm ngày cưới", "Quà tặng cưới"],
    deliveryDate: "Giao hàng từ 5-7 ngày",
    gallery: ["/inanh/photobook/background.jpeg", "/inanh/anhcuoi/background.jpeg"]
  },
  {
    id: "photobook-gia-dinh-20x25",
    title: "Photobook gia đình 20x25cm",
    description: "Photobook gia đình 24 trang, giấy ảnh bóng, bìa cứng, lưu giữ kỷ niệm gia đình.",
    category: "photobook",
    image: "/inanh/photobook/sanpham1.png",
    price: "450000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Giấy ảnh bóng cao cấp" },
      { label: "Kích thước", value: "20 x 25 cm" },
      { label: "Số trang", value: "24 trang" },
      { label: "Gia công", value: "Bìa cứng, đóng gáy" }
    ],
    sizes: [
      { label: "20x25cm", value: "20x25" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Photo book gia đình", "Album kỷ niệm", "Quà tặng gia đình", "Lưu giữ kỷ niệm"],
    deliveryDate: "Giao hàng từ 3-5 ngày",
    gallery: ["/inanh/photobook/sanpham1.png", "/inanh/photobook/background.jpeg"]
  },
  {
    id: "photobook-ky-niem-30x30",
    title: "Photobook kỷ niệm 30x30cm",
    description: "Photobook kỷ niệm 30 trang, bìa da cao cấp, in laser 6 màu, dành cho dịp đặc biệt.",
    category: "photobook",
    image: "/inanh/photobook/background.jpeg",
    price: "950000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Giấy ảnh cao cấp" },
      { label: "Kích thước", value: "30 x 30 cm" },
      { label: "Số trang", value: "30 trang" },
      { label: "Gia công", value: "Bìa da cao cấp, in laser 6 màu" }
    ],
    sizes: [
      { label: "30x30cm", value: "30x30" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Photobook kỷ niệm", "Album đặc biệt", "Quà tặng cao cấp", "Lưu giữ kỷ niệm"],
    deliveryDate: "Giao hàng từ 5-7 ngày",
    gallery: ["/inanh/photobook/background.jpeg", "/inanh/photobook/sanpham1.png"]
  },
  {
    id: "bang-gon-deo-dau-satin",
    title: "Băng gôn đeo đầu satin",
    description: "Băng gôn đeo đầu cổ vũ bằng vải satin cao cấp, in chuyển nhiệt sắc nét, bền màu, bế biên nhiệt chống tưa.",
    category: "bang-gon",
    image: "/inanh/bangoncovu/sanpham4.png",
    price: "5000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Vải satin cao cấp" },
      { label: "Kích thước", value: "5 x 90 cm" },
      { label: "Gia công", value: "In chuyển nhiệt sắc nét, bế biên nhiệt không tưa" },
      { label: "Độ bền", value: "Bền màu, không phai khi giặt" }
    ],
    sizes: [
      { label: "5x90cm", value: "5x90" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Cổ vũ thể thao", "Sự kiện trường học", "Chương trình giải trí", "Hoạt động tập thể"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/inanh/bangoncovu/sanpham4.png", "/inanh/bangoncovu/sanpham2.png", "/inanh/bangoncovu/sanpham3.png"]
  },
  {
    id: "bang-gon-cam-tay-satin",
    title: "Băng gôn cầm tay satin",
    description: "Băng gôn cầm tay cổ vũ kích thước lớn bằng vải satin, thích hợp làm đạo cụ cổ vũ thể thao, sự kiện âm nhạc.",
    category: "bang-gon",
    image: "/inanh/bangoncovu/sanpham2.png",
    price: "15000",
    personas: ["cafe-owner", "fashion-lover"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Vải satin đỏ cao cấp" },
      { label: "Kích thước", value: "20 x 80 cm" },
      { label: "Gia công", value: "In chuyển nhiệt 2 mặt theo yêu cầu" },
      { label: "Độ bền", value: "Màu sắc nổi bật, không phai màu" }
    ],
    sizes: [
      { label: "20x80cm", value: "20x80" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Cổ vũ bóng đá", "Sự kiện ca nhạc", "Team building công ty", "Đạo cụ check-in"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/inanh/bangoncovu/sanpham2.png", "/inanh/bangoncovu/sanpham4.png", "/inanh/bangoncovu/sanpham3.png"]
  },
  {
    id: "bang-gon-treo-su-kien",
    title: "Băng gôn treo sự kiện",
    description: "Băng gôn treo ngang hoặc dọc sự kiện, chất liệu bạt hiflex hoặc vải silk cao cấp in UV nổi bật ngoài trời.",
    category: "bang-gon",
    image: "/inanh/bangoncovu/sanpham3.png",
    price: "90000",
    personas: ["office-worker", "cafe-owner"],
    featured: false,
    specs: [
      { label: "Chất liệu", value: "Vải silk hoặc bạt Hiflex cao cấp" },
      { label: "Kích thước", value: "50 x 200 cm" },
      { label: "Gia công", value: "May biên treo, đóng khoen 4 góc" },
      { label: "Độ bền", value: "Chịu mưa nắng ngoài trời tốt" }
    ],
    sizes: [
      { label: "50x200cm", value: "50x200" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Treo ngang đường", "Treo cổng sự kiện", "Backdrop mini", "Biển hiệu cổ động"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/inanh/bangoncovu/sanpham3.png", "/inanh/bangoncovu/sanpham4.png", "/inanh/bangoncovu/sanpham2.png"]
  },
  {
    id: "anh-ep-go",
    title: "Ảnh ép gỗ",
    description: "Ảnh ép gỗ Laminate cao cấp bề mặt phẳng mịn, chống xước, chống nước, viền bọc cạnh thẩm mỹ, bền đẹp cùng thời gian. Phù hợp làm ảnh cưới, ảnh gia đình kỷ niệm hay trang trí nội thất sang trọng.",
    category: "anh-ep-go",
    image: "/inanh/anh_ep_go.png",
    price: "150000",
    personas: ["cafe-owner", "office-worker"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Gỗ MDF nhập khẩu chất lượng cao" },
      { label: "Bề mặt", value: "Ép màng Laminate phẳng mịn, chống nước" },
      { label: "Viền cạnh", value: "Bọc cạnh viền nhựa thẩm mỹ bảo vệ" },
      { label: "Độ bền", value: "Chống cong vênh mối mọt, bền màu trên 20 năm" }
    ],
    sizes: [
      { label: "15x21cm", value: "15x21" },
      { label: "20x30cm", value: "20x30" },
      { label: "30x45cm", value: "30x45" },
      { label: "60x90cm", value: "60x90" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Ảnh gia đình để bàn/treo tường", "Ảnh cưới kỷ niệm", "Trang trí phòng khách, văn phòng", "Quà tặng sự kiện"],
    deliveryDate: "Giao hàng từ 2-3 ngày",
    gallery: ["/inanh/anh_ep_go.png"]
  },
  {
    id: "anh-trending",
    title: "Ảnh trending",
    description: "Ảnh in phong cách Instax, Polaroid, retro cổ điển – xu hướng mới nổi bật và trẻ trung để lưu giữ những khoảnh khắc đời thường ý nghĩa hoặc làm quà tặng sáng tạo.",
    category: "anh-trending",
    image: "/inanh/anh_trending.png",
    price: "3000",
    personas: ["fashion-lover", "cafe-owner"],
    featured: true,
    specs: [
      { label: "Chất liệu", value: "Giấy ảnh bóng cao cấp định lượng 230gsm" },
      { label: "Kích thước", value: "Instax mini (5.4x8.6cm), Square (7.2x8.6cm), Retro" },
      { label: "Gia công", value: "Ép lụa chống nước hoặc bo góc theo yêu cầu" },
      { label: "Công nghệ", value: "In sắc nét, chống phai màu" }
    ],
    sizes: [
      { label: "Instax Mini", value: "5.4x8.6" },
      { label: "Square", value: "7.2x8.6" },
      { label: "Retro 10x15", value: "10x15" },
      { label: "KHÁC", value: "custom" }
    ],
    purposes: ["Trang trí phòng ngủ, góc làm việc", "Làm album nhật ký", "Treo tường kỷ niệm", "Quà tặng bạn bè"],
    deliveryDate: "Giao hàng từ 1-2 ngày",
    gallery: ["/inanh/anh_trending.png"]
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    author: "Nguyễn Thị Hương",
    role: "Chủ quán cà phê",
    content:
      "In tem nhãn ở nhiều chỗ rồi, nhưng In tem Cần Thơ là nơi đầu tiên làm đúng màu và không làm mình chờ quá lâu. Rất ổn!",
    rating: 5,
  },
  {
    id: "testimonial-2",
    author: "Trần Văn Minh",
    role: "Nhà thiết kế đồ họa",
    content:
      "Đã gửi nhiều file in cho khách, In tem Cần Thơ hỗ trợ kiểm tra trước khi in cực kỳ kỹ. Khỏi lo bị lỗi linh tinh. Đúng gu dân thiết kế!",
    rating: 5,
  },
  {
    id: "testimonial-3",
    author: "Lê Thị Lan",
    role: "Chủ cửa hàng thời trang",
    content:
      "Hình ảnh rõ nét, màu không bị lệch khi in. Giấy cầm chắc tay, không bị mỏng quá. Chất lượng đúng như đã cam kết.",
    rating: 5,
  },
  {
    id: "testimonial-4",
    author: "Phạm Quốc Huy",
    role: "Quản lý marketing",
    content:
      "Tôi từng in tag ở nhiều nơi, nhưng chỉ khi làm việc với In tem Cần Thơ mới thật sự hài lòng. Màu in chuẩn, font đúng thiết kế. Các bạn hỗ trợ chỉnh lại tốt.",
    rating: 5,
  },
];

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-1",
    title: "Tư vấn & Lên ý tưởng",
    description: "Chúng tôi lắng nghe nhu cầu của bạn và đề xuất giải pháp tốt nhất.",
    icon: "lightbulb",
  },
  {
    id: "step-2",
    title: "Thiết kế chuyên nghiệp",
    description: "Đội thiết kế tạo ra bản thiết kế đẹp và tối ưu cho sản xuất.",
    icon: "palette",
  },
  {
    id: "step-3",
    title: "Kiểm tra chất lượng",
    description: "Kiểm tra kỹ lưỡng trước khi in để đảm bảo hoàn hảo.",
    icon: "check-circle",
  },
  {
    id: "step-4",
    title: "In ấn & Hoàn thiện",
    description: "In ấn với công nghệ hiện đại và hoàn thiện sản phẩm.",
    icon: "printer",
  },
  {
    id: "step-5",
    title: "Giao hàng nhanh",
    description: "Giao hàng đúng hẹn với đóng gói chuyên nghiệp.",
    icon: "truck",
  },
];

/**
 * Map product category to the correct category page URL (Silo structure)
 */
export function getCategoryUrl(category: string): { url: string; label: string } {
  const categoryMap: Record<string, { url: string; label: string }> = {
    "nhan-dan":       { url: "/dich-vu/nhan-dan",       label: "Tem nhãn Decal" },
    "bao-thu":        { url: "/van-phong/bao-thu",       label: "Bao thư" },
    "office-products":{ url: "/van-phong",               label: "Ấn phẩm văn phòng" },
    "catalogue":      { url: "/tiep-thi/catalogue",      label: "Catalogue" },
    "menu":           { url: "/tiep-thi/menu",            label: "Menu" },
    "voucher":        { url: "/tiep-thi/voucher",         label: "Voucher" },
    "hashtag-cam-tay":{ url: "/tiep-thi/hashtag-cam-tay", label: "Hashtag cầm tay" },
    "hiflex":         { url: "/tiep-thi/hiflex",          label: "Bạt Hiflex" },
    "anh-ep-nhua":    { url: "/in-anh/anh-ep-nhua",       label: "Ảnh ép nhựa" },
    "anh-cuoi":       { url: "/in-anh/anh-cuoi",          label: "Ảnh cưới" },
    "photobook":      { url: "/in-anh/photobook",          label: "Photobook" },
    "bang-gon":       { url: "/in-anh/bang-gon",           label: "Băng gôn cổ vũ" },
    "anh-ep-go":      { url: "/in-anh/anh-ep-go",          label: "Ảnh ép gỗ" },
    "anh-trending":   { url: "/in-anh/anh-trending",       label: "Ảnh trending" },
    "bao-bi":         { url: "/bao-bi",                    label: "Bao bì" },
    "labels":         { url: "/dich-vu/nhan-dan",          label: "Tem nhãn Decal" },
    "packaging":      { url: "/bao-bi",                    label: "Bao bì" },
    "marketing":      { url: "/tiep-thi",                  label: "Ấn phẩm tiếp thị" },
    "display":        { url: "/dich-vu/standee",            label: "Standee" },
  };

  return categoryMap[category] || { url: "/van-phong", label: "Sản phẩm" };
}

/**
 * Fetch all products (with optional persona filtering)
 */
export async function getProducts(persona?: PersonaType): Promise<Product[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (!persona) {
    return PRODUCTS;
  }

  // Filter products by persona
  return PRODUCTS.filter((product) => product.personas.includes(persona));
}

/**
 * Fetch featured products
 */
export async function getFeaturedProducts(
  persona?: PersonaType
): Promise<Product[]> {
  const products = await getProducts(persona);
  return products.filter((p) => p.featured);
}

/**
 * Fetch a single product by ID
 */
export async function getProduct(id: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return PRODUCTS.find((p) => p.id === id) || null;
}

/**
 * Search products by query
 */
export async function searchProducts(
  query: string,
  persona?: PersonaType
): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const lowerQuery = query.toLowerCase();
  let results = PRODUCTS.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );

  if (persona) {
    results = results.filter((p) => p.personas.includes(persona));
  }

  return results;
}

/**
 * Get persona-aware product recommendations
 */
export async function getRecommendations(
  persona: PersonaType
): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Show featured products when no persona is selected
  if (!persona) {
    return PRODUCTS.slice(0, 8);
  }

  const personaRecommendations: Record<Exclude<PersonaType, null>, string[]> = {
    "cafe-owner": ["labels-1", "packaging-1", "menus-1", "standee-1"],
    "office-worker": ["business-cards-1", "brochure-1", "flyers-1", "standee-1"],
    "fashion-lover": ["hang-tags-1", "labels-1", "packaging-1", "business-cards-1"],
  };

  const recommendedIds = personaRecommendations[persona] || [];
  return PRODUCTS.filter((p) => recommendedIds.includes(p.id));
}

/**
 * Fetch testimonials
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return TESTIMONIALS;
}

/**
 * Fetch process steps
 */
export async function getProcessSteps(): Promise<ProcessStep[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return PROCESS_STEPS;
}

/**
 * Get persona display name
 */
export function getPersonaLabel(persona: PersonaType): string {
  if (!persona) return "Khách hàng";

  const labels: Record<Exclude<PersonaType, null>, string
  > = {
    "cafe-owner": "Chủ quán nước",
    "office-worker": "Dân văn phòng",
    "fashion-lover": "Shop thời trang",
  };
  return labels[persona] || "Khách hàng";
}
