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
