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
      "In tem nhãn ở nhiều chỗ rồi, nhưng DuKy là nơi đầu tiên làm đúng màu và không làm mình chờ quá lâu. Rất ổn!",
    rating: 5,
  },
  {
    id: "testimonial-2",
    author: "Trần Văn Minh",
    role: "Nhà thiết kế đồ họa",
    content:
      "Đã gửi nhiều file in cho khách, DuKy hỗ trợ kiểm tra trước khi in cực kỳ kỹ. Khỏi lo bị lỗi linh tinh. Đúng gu dân thiết kế!",
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
      "Tôi từng in tag ở nhiều nơi, nhưng chỉ khi làm việc với Duky mới thật sự hài lòng. Màu in chuẩn, font đúng thiết kế. Các bạn hỗ trợ chỉnh lại tốt.",
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

  const labels: Record<Exclude<PersonaType, null>, string> = {
    "cafe-owner": "Chủ quán nước",
    "office-worker": "Dân văn phòng",
    "fashion-lover": "Fashion/Boot Lover",
  };
  return labels[persona] || "Khách hàng";
}
