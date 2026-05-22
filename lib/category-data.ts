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
};

/* ───────────── Helpers ───────────── */

export const LANDING_SLUGS = Object.keys(CATEGORY_DATA);

export function getCategoryData(slug: string): CategoryData | null {
  return CATEGORY_DATA[slug] ?? null;
}

export function isLandingCategory(slug: string): boolean {
  return slug in CATEGORY_DATA;
}
