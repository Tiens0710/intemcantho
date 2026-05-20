import {
  Tag,
  Flag,
  BookOpen,
  FileText,
  Package,
  IdCard,
  type LucideIcon,
} from "lucide-react";

/* ───────────── Types ───────────── */

export type PricingPackage = {
  name: string;
  quantity: string;
  price: string;
  note?: string;
  popular?: boolean;
};

export type CaseStudyData = {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
};

export type TestimonialData = {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
};

export type CategoryData = {
  slug: string;
  icon: LucideIcon;
  categoryLabel: string;
  heroBg: string;
  hero: {
    title: string;
    subtitle: string;
    bgImage: string;
    floatingImages: string[];
  };
  pricing: {
    title: string;
    subtitle: string;
    packages: PricingPackage[];
  };
  gallery: {
    title: string;
    subtitle: string;
    images: { src: string; alt: string }[];
  };
  caseStudy: CaseStudyData;
  testimonials: TestimonialData[];
};

/* ───────────── Data ───────────── */

export const CATEGORY_DATA: Record<string, CategoryData> = {
  "nhan-dan": {
    slug: "nhan-dan",
    icon: Tag,
    categoryLabel: "Tem nhãn",
    heroBg: "/nhandan/background1.jpeg",
    hero: {
      title: "In Tem Nhãn",
      subtitle:
        "Tem chai lọ, tem hộp, sticker, decal giấy và decal nhựa – sắc nét, bám dính bền bỉ, giúp sản phẩm của bạn nổi bật trên kệ hàng.",
      bgImage: "/danhmuc1.png",
      floatingImages: ["/danhmuc1.png", "/danhmuc2.png"],
    },
    pricing: {
      title: "Báo Giá In Tem Nhãn",
      subtitle: "Giá cạnh tranh, chất lượng đảm bảo. In số lượng ít vẫn nhận.",
      packages: [
        {
          name: "Tem Decal Giấy",
          quantity: "100 – 500 cái",
          price: "1.500đ/cái",
          note: "Cắt bế theo yêu cầu",
        },
        {
          name: "Tem Decal Nhựa",
          quantity: "100 – 500 cái",
          price: "2.500đ/cái",
          note: "Chống nước, chống trầy",
          popular: true,
        },
        {
          name: "Tem Nhãn Cuộn",
          quantity: "1.000+ cái",
          price: "800đ/cái",
          note: "Phù hợp sản xuất hàng loạt",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Tem Nhãn",
      subtitle: "Khám phá các mẫu tem nhãn đa dạng chất liệu và kiểu dáng.",
      images: [
        { src: "/danhmuc1.png", alt: "Mẫu tem decal giấy" },
        { src: "/danhmuc2.png", alt: "Mẫu tem chai lọ" },
        { src: "/danhmuc3.png", alt: "Mẫu tem hộp sản phẩm" },
        { src: "/danhmuc4.png", alt: "Mẫu sticker dán" },
        { src: "/danhmuc5.png", alt: "Mẫu tem cuộn" },
        { src: "/danhmuc6.png", alt: "Mẫu tem nhựa" },
      ],
    },
    caseStudy: {
      client: "Thương hiệu mỹ phẩm Handmade",
      industry: "Mỹ phẩm thiên nhiên",
      challenge:
        "Cần tem nhãn chai lọ thủy tinh với chất liệu chống nước, màu sắc phải chuẩn theo nhận diện thương hiệu.",
      solution:
        "Sử dụng decal nhựa trong suốt in UV, cán mờ chống trầy. Thiết kế tối ưu cho bề mặt cong.",
      result:
        "Tem bám chắc trên chai thủy tinh sau 6 tháng sử dụng. Màu sắc đồng bộ 100% với thiết kế gốc.",
      image: "/danhmuc1.png",
    },
    testimonials: [
      {
        id: "tt-1",
        author: "Chị Thu",
        role: "Chủ thương hiệu mỹ phẩm handmade",
        content:
          "In tem nhãn ở nhiều chỗ rồi, nhưng Intem là nơi đầu tiên làm đúng màu và không làm mình chờ quá lâu. Rất ổn!",
        avatar: "/mau-2-150x150.png",
        rating: 5,
      },
      {
        id: "tt-2",
        author: "Anh Minh",
        role: "Chủ shop quà tặng",
        content:
          "Tem nhãn decal nhựa in rất sắc nét, bám dính tốt. Khách hàng mình ai cũng khen đẹp.",
        avatar: "/mau-150x150.png",
        rating: 5,
      },
    ],
  },

  poster: {
    slug: "poster",
    icon: Flag,
    categoryLabel: "Standee",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Standee Khổ Lớn",
      subtitle:
        "Standee khai trương, sự kiện, quảng cáo cửa hàng và showroom – in sắc nét, dựng nhanh, thu hút mọi ánh nhìn.",
      bgImage: "/danhmuc2.png",
      floatingImages: ["/danhmuc2.png", "/danhmuc1.png"],
    },
    pricing: {
      title: "Báo Giá In Standee",
      subtitle: "Standee đa dạng kích thước, hỗ trợ thiết kế miễn phí.",
      packages: [
        {
          name: "Standee 60x160cm",
          quantity: "1 – 5 bộ",
          price: "180.000đ/bộ",
          note: "Bao gồm khung chữ X",
        },
        {
          name: "Standee 80x180cm",
          quantity: "1 – 5 bộ",
          price: "250.000đ/bộ",
          note: "Khung nhôm cao cấp",
          popular: true,
        },
        {
          name: "Standee Cuộn (Roll-up)",
          quantity: "1 – 3 bộ",
          price: "450.000đ/bộ",
          note: "Dễ di chuyển, chuyên nghiệp",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Standee",
      subtitle: "Standee sự kiện, khai trương, quảng cáo đa dạng kích thước.",
      images: [
        { src: "/danhmuc2.png", alt: "Standee khai trương" },
        { src: "/danhmuc3.png", alt: "Standee sự kiện" },
        { src: "/danhmuc4.png", alt: "Standee quảng cáo" },
        { src: "/danhmuc5.png", alt: "Roll-up banner" },
      ],
    },
    caseStudy: {
      client: "Chuỗi cà phê địa phương",
      industry: "F&B – Cà phê",
      challenge:
        "Cần standee cho 5 chi nhánh khai trương đồng thời, thiết kế nhất quán nhưng thông tin khác nhau.",
      solution:
        "Thiết kế template chung, customize thông tin từng chi nhánh. In đồng loạt đảm bảo màu sắc一致.",
      result:
        "5 bộ standee giao đúng hẹn, màu sắc一致 100%. Khách hàng ấn tượng với sự chuyên nghiệp.",
      image: "/danhmuc2.png",
    },
    testimonials: [
      {
        id: "tt-3",
        author: "Anh Hùng",
        role: "Chuỗi cà phê",
        content:
          "Standee in rất đẹp, dựng nhanh. Đội ngũ hỗ trợ nhiệt tình từ khâu thiết kế đến giao hàng.",
        avatar: "/mau-3png-150x150.png",
        rating: 5,
      },
    ],
  },

  "to-gap": {
    slug: "to-gap",
    icon: BookOpen,
    categoryLabel: "Brochure",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Brochure / Tờ Gấp",
      subtitle:
        "Brochure giới thiệu công ty, sản phẩm, menu và profile bán hàng – thiết kế chuyên nghiệp, in ấn sắc nét.",
      bgImage: "/danhmuc3.png",
      floatingImages: ["/danhmuc3.png", "/danhmuc4.png"],
    },
    pricing: {
      title: "Báo Giá In Brochure",
      subtitle: "Brochure gấp 2, gấp 3 đa dạng định lượng giấy.",
      packages: [
        {
          name: "Brochure A4 Gấp 3",
          quantity: "100 – 500 tờ",
          price: "3.500đ/tờ",
          note: "Giấy Couche 150gsm",
        },
        {
          name: "Brochure A5 Gấp 2",
          quantity: "100 – 500 tờ",
          price: "2.800đ/tờ",
          note: "Giấy Couche 120gsm",
          popular: true,
        },
        {
          name: "Brochure Cao Cấp",
          quantity: "100+ tờ",
          price: "5.000đ/tờ",
          note: "Giấy mỹ thuật, cán mờ",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Brochure",
      subtitle: "Brochure gấp 2, gấp 3 cho nhiều ngành nghề.",
      images: [
        { src: "/danhmuc3.png", alt: "Brochure công ty" },
        { src: "/danhmuc4.png", alt: "Brochure sản phẩm" },
        { src: "/danhmuc5.png", alt: "Menu nhà hàng" },
        { src: "/danhmuc6.png", alt: "Profile doanh nghiệp" },
      ],
    },
    caseStudy: {
      client: "Công ty bất động sản",
      industry: "Bất động sản",
      challenge:
        "Cần brochure cao cấp giới thiệu dự án, hình ảnh phải sắc nét, giấy phải dày dặn tạo cảm giác sang trọng.",
      solution:
        "Sử giấy Couche 200gsm, in offset 4 màu, cán mờ 2 mặt. Thiết kế full-bleed với hình ảnh dự án thực tế.",
      result:
        "Brochure nhận được phản hồi tích cực từ khách hàng tiềm năng. Tỷ lệ chốt sale tăng 30%.",
      image: "/danhmuc3.png",
    },
    testimonials: [
      {
        id: "tt-4",
        author: "Trang",
        role: "Freelancer thiết kế",
        content:
          "Đã gửi nhiều file brochure cho khách, Intem hỗ trợ kiểm tra trước khi in cực kỳ kỹ. Đúng gu dân thiết kế!",
        avatar: "/mau-3png-150x150.png",
        rating: 5,
      },
    ],
  },

  "to-roi": {
    slug: "to-roi",
    icon: FileText,
    categoryLabel: "Tờ rơi",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Tờ Rơi",
      subtitle:
        "Tờ rơi quảng cáo, khai trương, khuyến mãi, spa và bất động sản – in nhanh, giá tốt, phát hiệu quả.",
      bgImage: "/danhmuc4.png",
      floatingImages: ["/danhmuc4.png", "/danhmuc3.png"],
    },
    pricing: {
      title: "Báo Giá In Tờ Rơi",
      subtitle: "In tờ rơi nhanh, giá rẻ, hỗ trợ thiết kế.",
      packages: [
        {
          name: "Tờ Rơi A5",
          quantity: "500 – 1.000 tờ",
          price: "800đ/tờ",
          note: "Giấy Couche 100gsm",
        },
        {
          name: "Tờ Rơi A4",
          quantity: "500 – 1.000 tờ",
          price: "1.200đ/tờ",
          note: "Giấy Couche 120gsm",
          popular: true,
        },
        {
          name: "Tờ Rơi Cao Cấp",
          quantity: "200+ tờ",
          price: "2.500đ/tờ",
          note: "Giấy mỹ thuật, cán mờ",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Tờ Rơi",
      subtitle: "Tờ rơi quảng cáo, khuyến mãi, khai trương.",
      images: [
        { src: "/danhmuc4.png", alt: "Tờ rơi khuyến mãi" },
        { src: "/danhmuc5.png", alt: "Tờ rơi khai trương" },
        { src: "/danhmuc6.png", alt: "Tờ rơi spa" },
        { src: "/danhmuc1.png", alt: "Tờ rơi bất động sản" },
      ],
    },
    caseStudy: {
      client: "Spa & Thẩm mỹ viện",
      industry: "Spa – Làm đẹp",
      challenge:
        "Cần tờ rơi quảng cáo chương trình khuyến mãi, phát trong 3 ngày phải tạo được ấn tượng mạnh.",
      solution:
        "Thiết kế nổi bật với tông hồng – vàng gold. In offset sắc nét trên giấy Couche 150gsm.",
      result:
        "5.000 tờ rơi phát hết trong 2 ngày. Lượng khách mới tăng 45% trong tuần diễn ra chương trình.",
      image: "/danhmuc4.png",
    },
    testimonials: [
      {
        id: "tt-5",
        author: "Lan",
        role: "Giáo viên, in tài liệu workshop",
        content:
          "Hình ảnh rõ nét, màu không bị lệch khi in. Giấy cầm chắc tay, không bị mỏng quá. Chất lượng đúng như đã cam kết.",
        avatar: "/mau-4-150x150.png",
        rating: 5,
      },
    ],
  },

  "bao-bi": {
    slug: "bao-bi",
    icon: Package,
    categoryLabel: "Bao bì",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Bao Bì",
      subtitle:
        "Hộp giấy, túi giấy, nhãn hộp và bao bì sản phẩm cho thương hiệu – đồng bộ nhận diện, nâng tầm sản phẩm.",
      bgImage: "/danhmuc5.png",
      floatingImages: ["/danhmuc5.png", "/danhmuc6.png"],
    },
    pricing: {
      title: "Báo Giá In Bao Bì",
      subtitle: "Bao bì tùy chỉnh kích thước, chất liệu và kiểu dáng.",
      packages: [
        {
          name: "Hộp Giấy Kraft",
          quantity: "100 – 500 hộp",
          price: "8.000đ/hộp",
          note: "Giấy Kraft 300gsm",
        },
        {
          name: "Hộp Cứng Cao Cấp",
          quantity: "50 – 200 hộp",
          price: "25.000đ/hộp",
          note: "Bế + dán, cán mờ",
          popular: true,
        },
        {
          name: "Túi Giấy In Offset",
          quantity: "100+ túi",
          price: "12.000đ/túi",
          note: "Tay xách dây xoắn",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Bao Bì",
      subtitle: "Hộp giấy, túi giấy đa dạng kiểu dáng và chất liệu.",
      images: [
        { src: "/danhmuc5.png", alt: "Hộp giấy kraft" },
        { src: "/danhmuc6.png", alt: "Hộp cứng cao cấp" },
        { src: "/danhmuc1.png", alt: "Túi giấy in offset" },
        { src: "/danhmuc2.png", alt: "Bao bì sản phẩm" },
      ],
    },
    caseStudy: {
      client: "Thương hiệu trà thảo mộc",
      industry: "Thực phẩm – Đồ uống",
      challenge:
        "Cần hộp giấy đựng trà thể hiện được tính thiên nhiên, mộc mạc nhưng vẫn sang trọng.",
      solution:
        "Sử giấy Kraft nâu + in 1 màu logo đen. Thiết kế tối giản, có cửa sổ trong suốt nhìn sản phẩm bên trong.",
      result:
        "Hộp giấy trở thành điểm nhấn trên kệ hàng. Khách hàng feedback bao bì rất 'có hồn', đúng thương hiệu.",
      image: "/danhmuc5.png",
    },
    testimonials: [
      {
        id: "tt-6",
        author: "Minh",
        role: "Chủ shop quà tặng",
        content:
          "Mình cần in hộp giấy gấp cho sự kiện, Intem phản hồi nhanh và giao đúng hẹn. Thành phẩm sạch, màu lên rất ổn.",
        avatar: "/mau-150x150.png",
        rating: 5,
      },
    ],
  },

  "danh-thiep": {
    slug: "danh-thiep",
    icon: IdCard,
    categoryLabel: "Danh thiếp",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Danh Thiếp",
      subtitle:
        "Name card cá nhân, doanh nghiệp, sales, spa, nhà hàng và showroom – ấn tượng từ cái chạm tay đầu tiên.",
      bgImage: "/danhmuc6.png",
      floatingImages: ["/danhmuc6.png", "/danhmuc5.png"],
    },
    pricing: {
      title: "Báo Giá In Danh Thiếp",
      subtitle: "Name card đa dạng chất liệu và phương pháp gia công.",
      packages: [
        {
          name: "Name Card Cơ Bản",
          quantity: "100 – 500 hộp",
          price: "120.000đ/hộp",
          note: "Giấy Couche 300gsm, cán mờ",
        },
        {
          name: "Name Card Cao Cấp",
          quantity: "100 – 300 hộp",
          price: "250.000đ/hộp",
          note: "Giấy mỹ thuật, ép kim",
          popular: true,
        },
        {
          name: "Name Card Đặc Biệt",
          quantity: "50+ hộp",
          price: "450.000đ/hộp",
          note: "Nhựa trong / Gỗ / Kim loại",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Danh Thiếp",
      subtitle: "Name card đa phong cách từ tối giản đến sang trọng.",
      images: [
        { src: "/danhmuc6.png", alt: "Name card ép kim" },
        { src: "/danhmuc1.png", alt: "Name card giấy mỹ thuật" },
        { src: "/danhmuc2.png", alt: "Name card trong suốt" },
        { src: "/danhmuc3.png", alt: "Name card minimal" },
      ],
    },
    caseStudy: {
      client: "Studio kiến trúc",
      industry: "Kiến trúc – Nội thất",
      challenge:
        "Cần name card thể hiện sự sáng tạo và đẳng cấp, khác biệt hoàn toàn so với name card thông thường.",
      solution:
        "Sử giấy mỹ thuật Conqueror, ép kim logo + cạnh card. Kích thước vuông 55x55mm phá cách.",
      result:
        "Name card trở thành chủ đề bàn tán trong mọi cuộc gặp. Đối tác ấn tượng ngay từ lần đầu nhận card.",
      image: "/danhmuc6.png",
    },
    testimonials: [
      {
        id: "tt-7",
        author: "Trang",
        role: "Freelancer thiết kế",
        content:
          "Đã gửi nhiều file name card cho khách, Intem hỗ trợ kiểm tra trước khi in cực kỳ kỹ. Đúng gu dân thiết kế!",
        avatar: "/mau-3png-150x150.png",
        rating: 5,
      },
    ],
  },
};

/* ───────────── Helpers ───────────── */

export const LANDING_SLUGS = Object.keys(CATEGORY_DATA);

export function getCategoryData(slug: string): CategoryData | null {
  return CATEGORY_DATA[slug] ?? null;
}

export function isLandingCategory(slug: string): boolean {
  return slug in CATEGORY_DATA;
}