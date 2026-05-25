import {
  Tag,
  Flag,
  BookOpen,
  FileText,
  Package,
  IdCard,
  UtensilsCrossed,
  BookMarked,
  Ticket,
  Hash,
  Layers,
  Mail,
  Camera,
  BookImage,
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

  "catalogue": {
    slug: "catalogue",
    icon: BookMarked,
    categoryLabel: "Catalogue",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Catalogue Sản Phẩm",
      subtitle:
        "Catalogue giới thiệu sản phẩm, giới thiệu công ty – thiết kế chuyên nghiệp, in ấn sắc nét, đa dạng số trang.",
      bgImage: "/bannercatalog/anphamtiepthi.jpeg",
      floatingImages: ["/bannercatalog/anphamtiepthi.jpeg", "/danhmuc3.png"],
    },
    pricing: {
      title: "Báo Giá In Catalogue",
      subtitle: "Catalogue đa dạng số trang, chất liệu và kiểu dáng. Hỗ trợ thiết kế miễn phí.",
      packages: [
        { name: "Catalogue 4 trang", quantity: "100 – 500 cuốn", price: "8.000đ/cuốn", note: "Giấy C300 cán mờ" },
        { name: "Catalogue 8 trang", quantity: "100 – 500 cuốn", price: "15.000đ/cuốn", note: "Giấy C250 cán mờ", popular: true },
        { name: "Catalogue 12 trang", quantity: "100+ cuốn", price: "22.000đ/cuốn", note: "Giấy C250 cán mờ" },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Catalogue",
      subtitle: "Catalogue sản phẩm, catalogue công ty đa dạng phong cách.",
      images: [
        { src: "/bannercatalog/anphamtiepthi.jpeg", alt: "Catalogue sản phẩm" },
        { src: "/danhmuc3.png", alt: "Catalogue giới thiệu" },
        { src: "/danhmuc5.png", alt: "Catalogue công ty" },
        { src: "/danhmuc6.png", alt: "Catalogue cao cấp" },
      ],
    },
    caseStudy: {
      client: "Công ty nội thất",
      industry: "Nội thất – Kiến trúc",
      challenge:
        "Cần catalogue 24 trang giới thiệu toàn bộ sản phẩm nội thất cao cấp, phải sang trọng và bắt mắt.",
      solution:
        "Thiết kế layout chuyên nghiệp, giấy C250 cán mờ, bìa cứng. Bố cục phân loại sản phẩm rõ ràng.",
      result:
        "Catalogue giúp doanh nghiệp chốt deal với nhiều đối tác lớn. Doanh số tăng 40% sau 2 tháng phát hành.",
      image: "/bannercatalog/anphamtiepthi.jpeg",
    },
    testimonials: [
      {
        id: "tt-cat-1",
        author: "Anh Long",
        role: "Giám đốc kinh doanh",
        content: "Catalogue in rất đẹp, giấy dày, màu sắc chuẩn. Đối tác khen nức nở!",
        avatar: "/mau-150x150.png",
        rating: 5,
      },
      {
        id: "tt-cat-2",
        author: "Chị Hoa",
        role: "Chủ showroom nội thất",
        content: "Giá hợp lý, hỗ trợ thiết kế nhiệt tình. Catalogue hoàn thành đúng hẹn.",
        avatar: "/mau-4-150x150.png",
        rating: 5,
      },
    ],
  },

  "menu": {
    slug: "menu",
    icon: UtensilsCrossed,
    categoryLabel: "Menu",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Menu Nhà Hàng",
      subtitle:
        "Menu cao cấp cho nhà hàng, quán cà phê, quán ăn – thiết kế sang trọng, in ấn sắc nét, đa dạng chất liệu từ nhựa đến giấy mỹ thuật.",
      bgImage: "/danhmuc3.png",
      floatingImages: ["/danhmuc3.png", "/danhmuc5.png"],
    },
    pricing: {
      title: "Báo Giá In Menu",
      subtitle: "Menu đa dạng kích thước, chất liệu và kiểu dáng. Hỗ trợ thiết kế miễn phí.",
      packages: [
        {
          name: "Menu A4 Cuốn",
          quantity: "50 – 200 cuốn",
          price: "35.000đ/cuốn",
          note: "Giấy Couche 200gsm, bìa cứng",
        },
        {
          name: "Menu Plastic Chống Nước",
          quantity: "50 – 200 cái",
          price: "28.000đ/cái",
          note: "Nhựa PVC, chống nước",
          popular: true,
        },
        {
          name: "Menu Gỗ / Da Cao Cấp",
          quantity: "20 – 100 bộ",
          price: "85.000đ/bộ",
          note: "Bìa gỗ/da, ruột giấy mỹ thuật",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Menu",
      subtitle: "Menu nhà hàng, quán cà phê, quán ăn đa dạng phong cách.",
      images: [
        { src: "/danhmuc3.png", alt: "Menu nhà hàng" },
        { src: "/danhmuc5.png", alt: "Menu quán cà phê" },
        { src: "/danhmuc1.png", alt: "Menu quán ăn" },
        { src: "/danhmuc6.png", alt: "Menu cao cấp" },
      ],
    },
    caseStudy: {
      client: "Quán cà phê specialty",
      industry: "F&B – Cà phê",
      challenge:
        "Cần menu thể hiện sự sang trọng, đồng bộ với không gian quán. Chất liệu phải chống nước vì hay bị đổ đồ uống.",
      solution:
        "Sử dụng nhựa PVC trong suốt, in UV 2 mặt. Thiết kế minimal với tông nâu – trắng, phối hợp hình ảnh đồ uống thực tế.",
      result:
        "Menu mới được khách hàng khen đẹp trên mạng xã hội. Nhiều người chụp ảnh check-in kèm menu, giúp quán viral hơn.",
      image: "/danhmuc3.png",
    },
    testimonials: [
      {
        id: "tt-menu-1",
        author: "Anh Tuấn",
        role: "Chủ quán cà phê",
        content:
          "Menu in rất đẹp, chống nước tốt. Khách hàng chụp ảnh menu up Instagram khen liên tục!",
        avatar: "/mau-150x150.png",
        rating: 5,
      },
      {
        id: "tt-menu-2",
        author: "Chị Mai",
        role: "Chủ nhà hàng",
        content:
          "Intem hỗ trợ thiết kế menu rất chuyên nghiệp. Chất liệu da cao cấp, khách hàng nào cũng khen sang.",
        avatar: "/mau-4-150x150.png",
        rating: 5,
      },
    ],
  },

  "voucher": {
    slug: "voucher",
    icon: Ticket,
    categoryLabel: "Voucher",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Voucher",
      subtitle:
        "Voucher khuyến mãi, phiếu quà tặng và thẻ tích điểm cho cửa hàng, spa, nhà hàng, quán cà phê – in sắc nét, gia công đẹp, dễ thu hút khách hàng.",
      bgImage: "/anphamtiepthi/voucher/anh1.png",
      floatingImages: ["/anphamtiepthi/voucher/anh1.png", "/anphamtiepthi/voucher/anh2.png"],
    },
    pricing: {
      title: "Báo Giá In Voucher",
      subtitle: "Voucher đa dạng kích thước, chất liệu và kiểu gia công. Hỗ trợ thiết kế theo nhận diện thương hiệu.",
      packages: [
        { name: "Voucher 1 mặt", quantity: "100 – 500 phiếu", price: "85.000đ/100 phiếu", note: "Giấy C300" },
        { name: "Voucher 2 mặt", quantity: "100 – 500 phiếu", price: "120.000đ/100 phiếu", note: "Giấy C300" },
        { name: "Voucher cán màng", quantity: "100+ phiếu", price: "150.000đ/100 phiếu", note: "Cán mờ hoặc cán bóng", popular: true },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Voucher",
      subtitle: "Voucher giảm giá, gift voucher, thẻ tích điểm đa dạng phong cách.",
      images: [
        { src: "/anphamtiepthi/voucher/anh1.png", alt: "Voucher khuyến mãi" },
        { src: "/anphamtiepthi/voucher/anh2.png", alt: "Gift voucher" },
        { src: "/anphamtiepthi/voucher/anh3.png", alt: "Thẻ tích điểm" },
        { src: "/anphamtiepthi/voucher/background.jpeg", alt: "Voucher cao cấp" },
      ],
    },
    caseStudy: {
      client: "Spa chăm sóc da",
      industry: "Làm đẹp",
      challenge:
        "Cần voucher quà tặng nhìn sang trọng, dễ trao tặng và đồng bộ với màu nhận diện của thương hiệu.",
      solution:
        "Thiết kế voucher 2 mặt trên giấy C300, cán mờ, phối màu thương hiệu và bố cục thông tin rõ ràng.",
      result:
        "Voucher được dùng hiệu quả trong chiến dịch tặng quà, giúp tăng lượt khách quay lại và mua gói dịch vụ.",
      image: "/anphamtiepthi/voucher/anh1.png",
    },
    testimonials: [
      {
        id: "tt-voucher-1",
        author: "Chị Linh",
        role: "Chủ spa",
        content: "Voucher in đẹp, màu sang và giấy cầm chắc tay. Khách nhận quà nhìn rất thích.",
        avatar: "/mau-150x150.png",
        rating: 5,
      },
    ],
  },

  "hashtag-cam-tay": {
    slug: "hashtag-cam-tay",
    icon: Hash,
    categoryLabel: "Hashtag cầm tay",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Hashtag Cầm Tay",
      subtitle:
        "Hashtag cầm tay cho sự kiện, khai trương, booth check-in, sinh nhật và chiến dịch quảng bá - in sắc nét, bế form đẹp, cầm chắc tay và lên hình nổi bật.",
      bgImage: "/danhmuc2.png",
      floatingImages: ["/danhmuc2.png", "/standee/section1_1.png"],
    },
    pricing: {
      title: "Báo Giá In Hashtag Cầm Tay",
      subtitle: "Hashtag đa dạng kích thước, chất liệu và kiểu bế form. Hỗ trợ thiết kế theo nhận diện thương hiệu.",
      packages: [
        { name: "Hashtag form đơn", quantity: "10 - 50 cái", price: "25.000đ/cái", note: "PP bồi formex 3mm" },
        { name: "Hashtag form lớn", quantity: "10 - 50 cái", price: "45.000đ/cái", note: "PP bồi formex 5mm", popular: true },
        { name: "Hashtag theo bộ", quantity: "5 mẫu trở lên", price: "150.000đ/bộ", note: "Bế theo yêu cầu" },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Hashtag Cầm Tay",
      subtitle: "Hashtag check-in, hashtag khai trương, hashtag sự kiện và mẫu cầm tay theo nhận diện thương hiệu.",
      images: [
        { src: "/danhmuc2.png", alt: "Hashtag check-in" },
        { src: "/standee/section1_1.png", alt: "Hashtag sự kiện" },
        { src: "/standee/section1_2.png", alt: "Hashtag thương hiệu" },
        { src: "/danhmuc4.png", alt: "Hashtag khai trương" },
      ],
    },
    caseStudy: {
      client: "Cửa hàng mỹ phẩm",
      industry: "Sự kiện khai trương",
      challenge:
        "Cần bộ hashtag cầm tay đồng bộ với màu thương hiệu để khách chụp ảnh check-in trong ngày khai trương.",
      solution:
        "Thiết kế hashtag theo slogan, in PP bồi formex, cán mờ và bế theo từng dáng chữ để khách dễ cầm khi chụp ảnh.",
      result:
        "Hình ảnh check-in nổi bật hơn, giúp cửa hàng có nhiều nội dung đăng mạng xã hội ngay trong ngày khai trương.",
      image: "/danhmuc2.png",
    },
    testimonials: [
      {
        id: "tt-hashtag-1",
        author: "Chị Ngọc",
        role: "Tổ chức sự kiện",
        content: "Hashtag cầm tay lên màu đẹp, form chắc và khách chụp ảnh check-in rất thích.",
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

  "hiflex": {
    slug: "hiflex",
    icon: Layers,
    categoryLabel: "Bạt Hiflex",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Bạt Hiflex",
      subtitle:
        "Băng rôn, banner, backdrop hiflex – in sắc nét, chống nước, bền màu, phù hợp quảng cáo ngoài trời và sự kiện.",
      bgImage: "/danhmuc2.png",
      floatingImages: ["/danhmuc2.png", "/danhmuc4.png"],
    },
    pricing: {
      title: "Báo Giá In Bạt Hiflex",
      subtitle: "Bạt hiflex đa dạng kích thước, có đèn và không đèn. Hỗ trợ thiết kế miễn phí.",
      packages: [
        {
          name: "Hiflex không đèn",
          quantity: "1 – 10m²",
          price: "90.000đ/m²",
          note: "Phù hợp banner trong nhà",
        },
        {
          name: "Hiflex có đèn",
          quantity: "1 – 10m²",
          price: "180.000đ/m²",
          note: "Thu hút cả ban đêm",
          popular: true,
        },
        {
          name: "Hiflex bồi formex",
          quantity: "1 – 5m²",
          price: "250.000đ/m²",
          note: "Cứng cáp, dùng lâu dài",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Bạt Hiflex",
      subtitle: "Băng rôn, banner, backdrop hiflex đa dạng kích thước và mục đích sử dụng.",
      images: [
        { src: "/danhmuc2.png", alt: "Băng rôn hiflex" },
        { src: "/danhmuc4.png", alt: "Banner sự kiện" },
        { src: "/danhmuc5.png", alt: "Backdrop hội nghị" },
        { src: "/danhmuc3.png", alt: "Billboard quảng cáo" },
      ],
    },
    caseStudy: {
      client: "Chuỗi cửa hàng pizza",
      industry: "F&B – Nhà hàng",
      challenge:
        "Cần băng rôn hiflex cho 3 chi nhánh, phải chống chịu thời tiết ngoài trời và giữ màu sắc đẹp trong nhiều tháng.",
      solution:
        "Sử dụng hiflex 3M chống nước, in UV 2 mặt. Kích thước 300x100cm, có đèn LED viền cho cả 3 chi nhánh.",
      result:
        "Băng rôn giữ màu sắc đẹp sau 8 tháng ngoài trời. Doanh số cửa hàng tăng 25% nhờ biển hiệu nổi bật.",
      image: "/danhmuc2.png",
    },
    testimonials: [
      {
        id: "tt-hiflex-1",
        author: "Anh Phong",
        role: "Chủ cửa hàng pizza",
        content:
          "Bạt hiflex in rất nét, chống nước tốt. Treo ngoài trời 6 tháng vẫn giữ màu, không bị phai.",
        avatar: "/mau-150x150.png",
        rating: 5,
      },
      {
        id: "tt-hiflex-2",
        author: "Chị Bích",
        role: "Quản lý sự kiện",
        content:
          "Backdrop hiflex cho sự kiện rất ấn tượng, in nhanh và đúng hẹn. Cảm ơn Intem!",
        avatar: "/mau-3png-150x150.png",
        rating: 5,
      },
    ],
  },
  
  "anh-ep-nhua": {
    slug: "anh-ep-nhua",
    icon: Camera,
    categoryLabel: "Ảnh ép nhựa",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Ảnh Ép Nhựa",
      subtitle:
        "Ảnh ép nhựa PVC, ảnh chân dung, ảnh cưới, ảnh gia đình và ảnh decor – sắc nét, chống nước, bền màu, lưu giữ khoảnh khắc trọn đời.",
      bgImage: "/inanh/epnhua/sanpham1.webp",
      floatingImages: ["/inanh/epnhua/sanpham1.webp", "/inanh/epnhua/sanpham2.png"],
    },
    pricing: {
      title: "Báo Giá In Ảnh Ép Nhựa",
      subtitle: "Ảnh ép nhựa đa dạng kích thước, chống nước, bền đẹp. Hỗ trợ thiết kế khung và chỉnh sửa ảnh.",
      packages: [
        {
          name: "Ảnh ép nhựa PVC",
          quantity: "1 – 20 ảnh",
          price: "15.000đ/ảnh",
          note: "Kích thước 10x15cm",
        },
        {
          name: "Ảnh ép nhựa cứng",
          quantity: "1 – 20 ảnh",
          price: "25.000đ/ảnh",
          note: "Kích thước 13x18cm, dày 0.5mm",
          popular: true,
        },
        {
          name: "Ảnh ép nhựa cao cấp",
          quantity: "1 – 10 ảnh",
          price: "45.000đ/ảnh",
          note: "Kích thước 20x30cm, chống trầy",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Ảnh Ép Nhựa",
      subtitle: "Ảnh chân dung, ảnh cưới, ảnh gia đình và ảnh decor đa dạng kích thước.",
      images: [
        { src: "/inanh/epnhua/sanpham1.webp", alt: "Ảnh chân dung ép nhựa" },
        { src: "/inanh/epnhua/sanpham2.png", alt: "Ảnh cưới ép nhựa" },
        { src: "/inanh/epnhua/background.jpeg", alt: "Ảnh gia đình ép nhựa" },
        { src: "/inanh/epnhua/sanpham1.webp", alt: "Ảnh decor ép nhựa" },
      ],
    },
    caseStudy: {
      client: "Studio ảnh cưới",
      industry: "Chụp ảnh – Studio",
      challenge:
        "Cần in ảnh chân dung và ảnh cưới cho khách hàng với chất lượng cao, màu sắc trung thực, ảnh phải chống nước và bền lâu.",
      solution:
        "Sử dụng ảnh ép nhựa PVC cao cấp, in laser sắc nét, cán màng chống trầy. Ảnh có độ bền trên 10 năm.",
      result:
        "Khách hàng rất hài lòng với chất lượng ảnh, nhiều người quay lại đặt thêm ảnh cho gia đình và bạn bè.",
      image: "/inanh/epnhua/sanpham1.webp",
    },
    testimonials: [
      {
        id: "tt-anh-ep-nhua-1",
        author: "Chị Lan",
        role: "Chủ studio ảnh cưới",
        content:
          "Ảnh ép nhựa ở Intem rất sắc nét, màu chuẩn và chống nước tốt. Khách hàng khen ảnh đẹp và bền!",
        avatar: "/mau-150x150.png",
        rating: 5,
      },
      {
        id: "tt-anh-ep-nhua-2",
        author: "Anh Hùng",
        role: "Khách hàng in ảnh gia đình",
        content:
          "In ảnh gia đình ép nhựa, ảnh rất đẹp, cầm chắc tay. Sẽ giới thiệu cho bạn bè.",
        avatar: "/mau-4-150x150.png",
        rating: 5,
      },
    ],
  },

  "bao-thu": {
    slug: "bao-thu",
    icon: Mail,
    categoryLabel: "Bao thư",
    heroBg: "/anphamvanphong/baothu/background.jpeg",
    hero: {
      title: "In Bao Thư",
      subtitle: "Bao thư A4, A5, A6 sắc nét, gia công dán keo nắp sẵn tiện lợi, nâng tầm hình ảnh chuyên nghiệp cho doanh nghiệp.",
      bgImage: "/anphamvanphong/baothu/background.jpeg",
      floatingImages: ["/anphamvanphong/baothu/sanpham1.png"]
    },
    pricing: {
      title: "Báo Giá In Bao Thư",
      subtitle: "Bao thư đa dạng kích thước, in ấn sắc nét, hỗ trợ thiết kế.",
      packages: [
        { name: "Bao thư A6 (12x22cm)", quantity: "500 - 1.000 cái", price: "1.200đ/cái", note: "Giấy Ford 100gsm" },
        { name: "Bao thư A5 (16x23cm)", quantity: "500 - 1.000 cái", price: "1.800đ/cái", note: "Giấy Ford 120gsm", popular: true },
        { name: "Bao thư A4 (25x35cm)", quantity: "500 - 1.000 cái", price: "2.800đ/cái", note: "Giấy Ford 120gsm" }
      ]
    },
    gallery: {
      title: "Thư Viện Mẫu Bao Thư",
      subtitle: "Các mẫu bao thư văn phòng, bao thư lớn/nhỏ của các doanh nghiệp.",
      images: [
        { src: "/anphamvanphong/baothu/sanpham1.png", alt: "Mẫu bao thư văn phòng" },
        { src: "/anphamvanphong/baothu/sanpham.webp", alt: "Bao thư bế dán nắp keo" }
      ]
    },
    caseStudy: {
      client: "Công ty Logistics Cần Thơ",
      industry: "Vận tải - Giao nhận",
      challenge: "Cần bao thư lớn A4 gửi hợp đồng và hóa đơn, chất lượng giấy tốt, mực không lem khi gặp ẩm.",
      solution: "Sử dụng giấy Ford 120gsm, in offset chống nhòe mực, dán băng keo nắp sẵn giúp đóng gói nhanh.",
      result: "Hơn 2000 bao thư được sử dụng, tăng tốc độ đóng gói chứng từ lên 50%, đối tác phản hồi tốt về độ chuyên nghiệp.",
      image: "/anphamvanphong/baothu/sanpham1.png"
    },
    testimonials: [
      {
        id: "tt-baothu-1",
        author: "Anh Đức",
        role: "Giám đốc vận hành Logistics",
        content: "Bao thư dán sẵn nắp keo rất tiện, bế dán đều đặn, in logo chuẩn màu thương hiệu.",
        avatar: "/mau-150x150.png",
        rating: 5
      }
    ]
  },

  "anh-cuoi": {
    slug: "anh-cuoi",
    icon: Camera,
    categoryLabel: "Ảnh cưới",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Ảnh Cưới",
      subtitle:
        "Ảnh cưới in trên giấy ảnh cao cấp, ép nhựa cứng, photobook và album cưới – sắc nét, chống nước, lưu giữ khoảnh khắc trọn đời.",
      bgImage: "/inanh/anhcuoi/background.jpeg",
      floatingImages: ["/inanh/anhcuoi/background.jpeg"],
    },
    pricing: {
      title: "Báo Giá In Ảnh Cưới",
      subtitle: "Ảnh cưới đa dạng kích thước và chất liệu. Hỗ trợ chỉnh sửa ảnh và thiết kế khung.",
      packages: [
        {
          name: "Ảnh cưới giấy ảnh",
          quantity: "1 – 20 ảnh",
          price: "25.000đ/ảnh",
          note: "Kích thước 10x15cm",
        },
        {
          name: "Ảnh cưới ép nhựa",
          quantity: "1 – 20 ảnh",
          price: "45.000đ/ảnh",
          note: "Kích thước 15x21cm, chống nước",
          popular: true,
        },
        {
          name: "Ảnh cưới cao cấp",
          quantity: "1 – 10 ảnh",
          price: "95.000đ/ảnh",
          note: "Kích thước 30x40cm, in laser",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Ảnh Cưới",
      subtitle: "Ảnh cưới, ảnh kỷ niệm và album cưới đa dạng kích thước.",
      images: [
        { src: "/inanh/anhcuoi/background.jpeg", alt: "Ảnh cưới in trên giấy ảnh" },
        { src: "/inanh/anhcuoi/background.jpeg", alt: "Ảnh cưới ép nhựa" },
        { src: "/inanh/anhcuoi/background.jpeg", alt: "Ảnh cưới treo tường" },
        { src: "/inanh/anhcuoi/background.jpeg", alt: "Ảnh cưới cao cấp" },
      ],
    },
    caseStudy: {
      client: "Cô dâu chú rể Cần Thơ",
      industry: "Ảnh cưới – Studio",
      challenge:
        "Cần in ảnh cưới chất lượng cao, màu sắc trung thực, ảnh phải chống nước và bền lâu để làm kỷ niệm và treo tường.",
      solution:
        "Sử dụng giấy ảnh cao cấp và nhựa cứng 0.5mm, in laser sắc nét, cán màng chống trầy. Ảnh có độ bền trên 10 năm.",
      result:
        "Cô dâu chú rể rất hài lòng với chất lượng ảnh, nhiều người quay lại đặt thêm ảnh cho gia đình và bạn bè.",
      image: "/inanh/anhcuoi/background.jpeg",
    },
    testimonials: [
      {
        id: "tt-anh-cuoi-1",
        author: "Chị Phương",
        role: "Cô dâu",
        content:
          "Ảnh cưới in ở Intem rất đẹp, màu chuẩn và bền. Treo trong phòng ngủ mỗi ngày nhìn thấy đều vui!",
        avatar: "/mau-150x150.png",
        rating: 5,
      },
      {
        id: "tt-anh-cuoi-2",
        author: "Anh Kiên",
        role: "Chú rể",
        content:
          "In ảnh cưới ép nhựa cứng, ảnh rất đẹp và chắc tay. Giới thiệu cho bạn bè ai cũng khen!",
        avatar: "/mau-4-150x150.png",
        rating: 5,
      },
    ],
  },

  photobook: {
    slug: "photobook",
    icon: BookImage,
    categoryLabel: "Photobook",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Photobook",
      subtitle:
        "Photobook kỷ niệm, album cưới, photo book gia đình và lưu giữ kỷ niệm – in laser sắc nét, bìa cứng cao cấp, lưu giữ kỷ niệm trọn đời.",
      bgImage: "/inanh/photobook/background.jpeg",
      floatingImages: ["/inanh/photobook/sanpham1.png"],
    },
    pricing: {
      title: "Báo Giá In Photobook",
      subtitle: "Photobook đa dạng kích thước và số trang. Hỗ trợ thiết kế và chỉnh sửa ảnh.",
      packages: [
        {
          name: "Photobook 20x25cm",
          quantity: "1 – 5 cuốn",
          price: "350.000đ/cuốn",
          note: "20 trang, giấy ảnh cao cấp",
        },
        {
          name: "Photobook 25x30cm",
          quantity: "1 – 5 cuốn",
          price: "550.000đ/cuốn",
          note: "24 trang, bìa cứng",
          popular: true,
        },
        {
          name: "Photobook 30x30cm",
          quantity: "1 – 5 cuốn",
          price: "750.000đ/cuốn",
          note: "30 trang, bìa da cao cấp",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Photobook",
      subtitle: "Photobook kỷ niệm, album cưới, photo book gia đình đa dạng phong cách.",
      images: [
        { src: "/inanh/photobook/background.jpeg", alt: "Photobook kỷ niệm" },
        { src: "/inanh/photobook/sanpham1.png", alt: "Photobook gia đình" },
        { src: "/inanh/anhcuoi/background.jpeg", alt: "Photobook cưới" },
        { src: "/inanh/photobook/background.jpeg", alt: "Photobook cao cấp" },
      ],
    },
    caseStudy: {
      client: "Cô dâu chú rể Cần Thơ",
      industry: "Ảnh cưới – Studio",
      challenge:
        "Cần in photobook cưới chất lượng cao, hình ảnh sắc nét, bìa cứng chắc tay và giữ màu lâu dài.",
      solution:
        "Sử dụng giấy ảnh cao cấp, in laser 6 màu, bìa bồi da hoặc vải. Đóng gáy chắc chắn, thiết kế layout chuyên nghiệp.",
      result:
        "Photobook được cô dâu chú rể ưng ý, nhiều khách hàng quay lại đặt thêm photo book gia đình và kỷ niệm.",
      image: "/inanh/photobook/background.jpeg",
    },
    testimonials: [
      {
        id: "tt-photobook-1",
        author: "Chị Yến",
        role: "Cô dâu",
        content:
          "Photobook cưới ở Intem rất đẹp, ảnh rõ nét và bìa cứng cáp. Mỗi lần mở ra lại nhớ ngày cưới!",
        avatar: "/mau-150x150.png",
        rating: 5,
      },
      {
        id: "tt-photobook-2",
        author: "Anh Nam",
        role: "Khách hàng in photo book gia đình",
        content:
          "In photobook gia đình, chất lượng ảnh tuyệt vời. Bìa đẹp, đóng gáy chắc, rất hài lòng!",
        avatar: "/mau-4-150x150.png",
        rating: 5,
      },
    ],
  },

  "bang-gon": {
    slug: "bang-gon",
    icon: Flag,
    categoryLabel: "Băng gôn cổ vũ",
    heroBg: "/bgvanphong.png",
    hero: {
      title: "In Băng Gôn Cổ Vũ",
      subtitle:
        "Băng gôn cổ vũ thể thao, ca nhạc, sự kiện team building và chương trình giải trí – in sắc nét, màu sắc nổi bật, bền bỉ và chất lượng hàng đầu.",
      bgImage: "/inanh/bangoncovu/background.jpeg",
      floatingImages: ["/inanh/bangoncovu/background.jpeg", "/inanh/bangoncovu/sanpham4.png"],
    },
    pricing: {
      title: "Báo Giá Băng Gôn Cổ Vũ",
      subtitle: "Băng gôn đa dạng kích thước, chất liệu vải hoặc bạt hiflex cao cấp, in theo yêu cầu.",
      packages: [
        {
          name: "Băng gôn vải đeo đầu",
          quantity: "50 – 100 cái",
          price: "5.000đ/cái",
          note: "Kích thước 5x90cm, vải satin cao cấp",
        },
        {
          name: "Băng gôn cầm tay",
          quantity: "20 – 50 cái",
          price: "15.000đ/cái",
          note: "Kích thước 20x80cm, in chuyển nhiệt",
          popular: true,
        },
        {
          name: "Băng gôn treo sự kiện",
          quantity: "1 – 5 cái",
          price: "90.000đ/cái",
          note: "Kích thước 50x200cm, vải silk hoặc bạt hiflex",
        },
      ],
    },
    gallery: {
      title: "Thư Viện Mẫu Băng Gôn Cổ Vũ",
      subtitle: "Khám phá các mẫu băng gôn cổ vũ bóng đá, sự kiện, chương trình âm nhạc cực chất.",
      images: [
        { src: "/inanh/bangoncovu/sanpham4.png", alt: "Băng gôn đeo đầu cổ vũ" },
        { src: "/inanh/bangoncovu/sanpham2.png", alt: "Băng gôn cầm tay cổ vũ" },
        { src: "/inanh/bangoncovu/sanpham3.png", alt: "Băng gôn treo sự kiện" },
      ],
    },
    caseStudy: {
      client: "Hội Cổ Động Viên Cần Thơ",
      industry: "Thể thao – Sự kiện",
      challenge:
        "Cần gấp 1000 băng gôn đeo đầu và 50 băng gôn cầm tay trong 24 giờ phục vụ giải đấu bóng đá phong trào.",
      solution:
        "Sử dụng công nghệ in chuyển nhiệt tốc độ cao trên vải satin đỏ chữ vàng. Gia công bế biên nhiệt không tưa vải.",
      result:
        "Bàn giao đúng hẹn 100% sản phẩm. Màu in cực sắc nét, nổi bật trên khán đài, kích thích tinh thần cổ vũ.",
      image: "/inanh/bangoncovu/sanpham4.png",
    },
    testimonials: [
      {
        id: "tt-bang-gon-1",
        author: "Anh Tuấn",
        role: "Trưởng hội cổ động viên",
        content:
          "Băng gôn in màu đỏ rực rất đẹp, chữ vàng nổi bật, vải satin sờ mịn tay. Giao hàng cực kỳ đúng hẹn cho giải đấu!",
        avatar: "/mau-150x150.png",
        rating: 5,
      },
      {
        id: "tt-bang-gon-2",
        author: "Chị Vân",
        role: "Ban tổ chức giải chạy",
        content:
          "Đặt băng gôn cầm tay số lượng lớn cho giải chạy của công ty, mọi người đeo lên chụp ảnh check-in rất đẹp.",
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
