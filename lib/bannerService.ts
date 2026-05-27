export interface BannerConfig {
  categorySlug: string;
  backgroundSrc: string;
  backgroundAlt: string;
  ariaLabel: string;
  title: string;
  accentTitle: string;
  tagline: string;
  description: string;
  price: {
    label: string;
    amount: string;
    currency: string;
  };
  productImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
  };
  highlights: string[];
}

export const DEFAULT_BANNERS: Record<string, BannerConfig> = {
  "danh-thiep": {
    categorySlug: "danh-thiep",
    backgroundSrc: "/anphamvanphong/danhthiep/background.jpeg",
    backgroundAlt: "In Danh Thiếp Cần Thơ",
    ariaLabel: "In danh thiếp name card Cần Thơ - Chuyên nghiệp, sắc nét, bền đẹp",
    title: "IN DANH THIẾP",
    accentTitle: "NAMECARD",
    tagline: "Chuyên nghiệp - Đẳng cấp - Ấn tượng",
    description: "Nhận in <strong>danh thiếp</strong>, name card cá nhân, doanh nghiệp, sales, spa, nhà hàng tại Cần Thơ với đa dạng chất liệu giấy mỹ thuật, ép kim nhũ vàng/bạc sang trọng.",
    price: {
      label: "Giá từ chỉ",
      amount: "120.000",
      currency: "VND"
    },
    productImage: {
      src: "/anphamvanphong/danhthiep/sanpham1.png",
      alt: "Danh Thiếp In Tem Cần Thơ - Sản phẩm",
      style: {
        top: "53%"
      }
    },
    highlights: [
      "In offset sắc nét - Màu chuẩn",
      "Giấy C300 cán mờ cao cấp",
      "Gia công ép kim, dập nổi",
      "Giá tốt nhất tại Cần Thơ"
    ]
  },
  "photobook": {
    categorySlug: "photobook",
    backgroundSrc: "/inanh/photobook/background.jpeg",
    backgroundAlt: "Photobook In Tem Cần Thơ",
    ariaLabel: "In photobook Cần Thơ - Chất lượng cao, lưu giữ kỷ niệm",
    title: "IN PHOTOBOOK",
    accentTitle: "CẦN THƠ",
    tagline: "Sắc nét - Chất lượng - Lưu giữ kỷ niệm",
    description: "Nhận in <strong>photobook</strong>, album cưới, photo book gia đình và kỷ niệm tại Cần Thơ với giấy ảnh cao cấp, bìa cứng sang trọng, in laser sắc nét.",
    price: {
      label: "Giá từ chỉ",
      amount: "350.000",
      currency: "VND"
    },
    productImage: {
      src: "/inanh/photobook/sanpham1.png",
      alt: "Photobook In Tem Cần Thơ - Sản phẩm"
    },
    highlights: [
      "In laser sắc nét - Màu chuẩn",
      "Giấy ảnh cao cấp",
      "Bìa cứng sang trọng",
      "Giá tốt tại Cần Thơ"
    ]
  },
  "menu": {
    categorySlug: "menu",
    backgroundSrc: "/anphamtiepthi/menu/background6.jpeg",
    backgroundAlt: "Menu Nhà Hàng In Tem Cần Thơ",
    ariaLabel: "In menu Cần Thơ - Sang trọng, sắc nét, bền đẹp",
    title: "IN MENU",
    accentTitle: "CẦN THƠ",
    tagline: "Sang trọng - Sắc nét - Bền đẹp",
    description: "Nhận in <strong>menu</strong> cho nhà hàng, quán café, trà sữa, khách sạn, spa với đa dạng chất liệu, gia công tỉ mỉ, giá tốt tại Cần Thơ.",
    price: {
      label: "Giá từ chỉ",
      amount: "250.000",
      currency: "VND"
    },
    productImage: {
      src: "/anphamtiepthi/menu/sanpham1.png",
      alt: "Menu Nhà Hàng In Tem Cần Thơ - Sản phẩm"
    },
    highlights: [
      "In sắc nét - Màu chuẩn",
      "Chất liệu đa dạng",
      "Gia công cao cấp",
      "Giá tốt tại Cần Thơ"
    ]
  },
  "voucher": {
    categorySlug: "voucher",
    backgroundSrc: "/anphamtiepthi/voucher/background6.jpeg",
    backgroundAlt: "Voucher khuyến mãi In Tem Cần Thơ",
    ariaLabel: "In voucher Cần Thơ - Sang trọng, sắc nét, thu hút",
    title: "IN VOUCHER",
    accentTitle: "CẦN THƠ",
    tagline: "Sang trọng - Sắc nét - Thu hút",
    description: "Nhận in <strong>voucher</strong>, phiếu quà tặng, phiếu giảm giá và thẻ tích điểm cho cửa hàng, spa, nhà hàng, quán café với thiết kế đẹp, chất liệu đa dạng và gia công chỉn chu.",
    price: {
      label: "Giá từ chỉ",
      amount: "85.000",
      currency: "VND"
    },
    productImage: {
      src: "/anphamtiepthi/voucher/sanpham1.png",
      alt: "Voucher khuyến mãi In Tem Cần Thơ - Sản phẩm",
      style: { width: "clamp(260px, 28vw, 400px)" }
    },
    highlights: [
      "In sắc nét - Màu chuẩn",
      "Đa dạng kích thước",
      "Gia công cán màng",
      "Giá tốt tại Cần Thơ"
    ]
  },
  "hashtag-cam-tay": {
    categorySlug: "hashtag-cam-tay",
    backgroundSrc: "/anphamtiepthi/hashtag/background6.jpeg",
    backgroundAlt: "Hashtag cầm tay In Tem Cần Thơ",
    ariaLabel: "In hashtag cầm tay Cần Thơ - Nổi bật, sắc nét, bền đẹp",
    title: "IN HASHTAG",
    accentTitle: "CẦN THAY",
    tagline: "Nổi bật - Sắc nét - Dễ check-in",
    description: "Nhận in <strong>hashtag cầm tay</strong> cho sự kiện, khai trương, sinh nhật, hội nghị, booth chụp ảnh và chiến dịch quảng bá với form bế đẹp, màu sắc nổi bật, gia công chắc tay.",
    price: {
      label: "Giá từ chỉ",
      amount: "25.000",
      currency: "VND"
    },
    productImage: {
      src: "/anphamtiepthi/hashtag/sanpham1.png",
      alt: "Hashtag cầm tay In Tem Cần Thơ - Sản phẩm",
      style: { width: "clamp(380px, 48vw, 680px)", right: "60px" }
    },
    highlights: [
      "In sắc nét - Màu nổi bật",
      "Form bế theo yêu cầu",
      "Cán màng bền đẹp",
      "Giá tốt tại Cần Thơ"
    ]
  },
  "hiflex": {
    categorySlug: "hiflex",
    backgroundSrc: "/anphamtiepthi/hiflex/background6.jpeg",
    backgroundAlt: "Bạt Hiflex In Tem Cần Thơ",
    ariaLabel: "In bạt hiflex Cần Thơ - Sắc nét, chống nước, bền màu",
    title: "IN BẠT",
    accentTitle: "HIFLEX",
    tagline: "Sắc nét - Chống nước - Bền màu",
    description: "Nhận in <strong>bạt hiflex</strong> cho băng rôn, banner, backdrop, billboard với đa dạng kích thước, chống nước tốt, giá cạnh tranh tại Cần Thơ.",
    price: {
      label: "Giá từ chỉ",
      amount: "90.000",
      currency: "VND"
    },
    productImage: {
      src: "/anphamtiepthi/hiflex/sanpham1.png",
      alt: "Bạt Hiflex In Tem Cần Thơ - Sản phẩm"
    },
    highlights: [
      "In sắc nét - Màu chuẩn",
      "Chống nước, bền màu",
      "Đa dạng kích thước",
      "Giá tốt tại Cần Thơ"
    ]
  },
  "catalogue": {
    categorySlug: "catalogue",
    backgroundSrc: "/anphamtiepthi/catalogue/background6.jpeg",
    backgroundAlt: "Catalogue Sản Phẩm In Tem Cần Thơ",
    ariaLabel: "In catalogue Cần Thơ - Chuyên nghiệp, sắc nét, ấn tượng",
    title: "IN CATALOGUE",
    accentTitle: "CẦN THƠ",
    tagline: "Chuyên nghiệp - Sắc nét - Ấn tượng",
    description: "Nhận in <strong>catalogue</strong> giới thiệu sản phẩm, hồ sơ năng lực, bảng mẫu và tài liệu bán hàng với bố cục đẹp, giấy in đa dạng, gia công chỉn chu tại Cần Thơ.",
    price: {
      label: "Giá từ chỉ",
      amount: "8.000",
      currency: "VND"
    },
    productImage: {
      src: "/anphamtiepthi/catalogue/sanpham1.png",
      alt: "Catalogue Sản Phẩm In Tem Cần Thơ - Sản phẩm",
      style: { width: "clamp(380px, 48vw, 680px)", right: "95px" }
    },
    highlights: [
      "In sắc nét - Màu chuẩn",
      "Đa dạng số trang",
      "Gia công bìa cao cấp",
      "Giá tốt tại Cần Thơ"
    ]
  },
  "anh-ep-nhua": {
    categorySlug: "anh-ep-nhua",
    backgroundSrc: "/inanh/epnhua/background.jpeg",
    backgroundAlt: "In Ảnh Ép Nhựa Cần Thơ",
    ariaLabel: "In ảnh ép nhựa Cần Thơ - Sắc nét, chống nước, bền đẹp",
    title: "IN ẢNH ÉP NHỰA",
    accentTitle: "CẦN THƠ",
    tagline: "Sắc nét - Chống nước - Bền đẹp",
    description: "Nhận in <strong>ảnh ép nhựa</strong> PVC, ảnh chân dung, ảnh cưới, ảnh gia đình tại Cần Thơ với đa dạng kích thước, chống nước, bền màu trên 10 năm.",
    price: {
      label: "Giá từ chỉ",
      amount: "15.000",
      currency: "VND"
    },
    productImage: {
      src: "/inanh/epnhua/sanpham1.webp",
      alt: "Ảnh Ép Nhựa In Tem Cần Thơ - Sản phẩm"
    },
    highlights: [
      "In laser sắc nét - Màu chuẩn",
      "Chống nước, bền màu",
      "Đa dạng kích thước",
      "Giá tốt tại Cần Thơ"
    ]
  },
  "anh-cuoi": {
    categorySlug: "anh-cuoi",
    backgroundSrc: "/inanh/anhcuoi/background.jpeg",
    backgroundAlt: "In Ảnh Cưới Cần Thơ",
    ariaLabel: "In ảnh cưới Cần Thơ - Sắc nét, chống nước, lưu giữ khoảnh khắc trọn đời",
    title: "IN ẢNH CƯỚI",
    accentTitle: "CẦN THƠ",
    tagline: "Sắc nét - Bền đẹp - Lưu giữ trọn đời",
    description: "Nhận in <strong>ảnh cưới</strong>, ảnh kỷ niệm, photobook cưới và album cưới tại Cần Thơ với chất liệu cao cấp, màu sắc trung thực, độ bền trên 10 năm.",
    price: {
      label: "Giá từ chỉ",
      amount: "25.000",
      currency: "VND"
    },
    productImage: {
      src: "/inanh/anhcuoi/sanpham1.png",
      alt: "Ảnh Cưới In Tem Cần Thơ - Sản phẩm",
      style: { width: "clamp(320px, 30vw, 480px)", top: "42%" }
    },
    highlights: [
      "In laser sắc nét - Màu chuẩn",
      "Chống nước, bền màu trên 10 năm",
      "Đa dạng kích thước",
      "Giá tốt tại Cần Thơ"
    ]
  },
  "bao-thu": {
    categorySlug: "bao-thu",
    backgroundSrc: "/anphamvanphong/baothu/background.jpeg",
    backgroundAlt: "In Bao Thư Cần Thơ",
    ariaLabel: "In bao thư Cần Thơ - Chuyên nghiệp, sắc nét, bền đẹp",
    title: "IN BAO THƯ",
    accentTitle: "VĂN PHÒNG",
    tagline: "Chuyên nghiệp - Đẳng cấp - Đồng bộ",
    description: "Nhận in <strong>bao thư</strong> lớn A4, A5, A6 cho văn phòng, doanh nghiệp tại Cần Thơ với giấy Ford, Couche cao cấp, bế dán thành phẩm nắp keo tiện dụng.",
    price: {
      label: "Giá từ chỉ",
      amount: "1.200",
      currency: "VND"
    },
    productImage: {
      src: "/anphamvanphong/baothu/sanpham4.png",
      alt: "Bao Thư In Tem Cần Thơ - Sản phẩm",
      style: {
        width: "clamp(250px, 24vw, 400px)",
        top: "53%"
      }
    },
    highlights: [
      "In offset sắc nét - Màu chuẩn",
      "Giấy Ford/Couche định lượng cao",
      "Bế dán thành phẩm - Có keo nắp",
      "Đầy đủ kích thước A4, A5, A6"
    ]
  },
  "bang-gon": {
    categorySlug: "bang-gon",
    backgroundSrc: "/inanh/bangoncovu/background.jpeg",
    backgroundAlt: "In Băng Gôn Cổ Vũ Cần Thơ",
    ariaLabel: "In băng gôn cổ vũ Cần Thơ - Vải satin cao cấp, in sắc nét, bền màu",
    title: "IN BĂNG GÔN",
    accentTitle: "CỔ VŨ",
    tagline: "Nổi bật - Sắc nét - Tiếp lửa đam mê",
    description: "Nhận in <strong>băng gôn cổ vũ</strong>, băng rôn đeo đầu, băng rôn cầm tay cho các giải đấu thể thao, sự kiện ca nhạc, team building tại Cần Thơ với chất liệu vải satin, bạt hiflex chất lượng cao.",
    price: {
      label: "Giá từ chỉ",
      amount: "5.000",
      currency: "VND"
    },
    productImage: {
      src: "/inanh/bangoncovu/sanpham4.png",
      alt: "Băng gôn cổ vũ Cần Thơ - Sản phẩm",
      style: {
        width: "clamp(300px, 32vw, 500px)",
        top: "50%"
      }
    },
    highlights: [
      "In chuyển nhiệt sắc nét - Bền màu",
      "Vải satin đỏ cao cấp, bóng đẹp",
      "Bế biên nhiệt chống tưa vải",
      "Hỗ trợ thiết kế theo yêu cầu"
    ]
  },
  "poster": {
    categorySlug: "poster",
    backgroundSrc: "/standee/background6.jpeg",
    backgroundAlt: "In Standee Cần Thơ",
    ariaLabel: "In standee Cần Thơ - Chuyên nghiệp, sắc nét, bền đẹp",
    title: "IN STANDEE",
    accentTitle: "CẦN THƠ",
    tagline: "Chuyên nghiệp - Nổi bật - Giá tốt",
    description: "Nhận in <strong>standee quảng cáo</strong>, standee chữ X, standee cuốn nhôm, standee mô hình tại Cần Thơ với chất liệu bạt hiflex, pp cán mờ/bóng, chân dựng chắc chắn.",
    price: {
      label: "Giá từ chỉ",
      amount: "80.000",
      currency: "VND"
    },
    productImage: {
      src: "/standee/herobanner1.png",
      alt: "Standee In Tem Cần Thơ - Sản phẩm",
      style: {
        width: "clamp(150px, 16vw, 220px)",
        right: "300px",
        top: "50%"
      }
    },
    highlights: [
      "In sắc nét - Màu chuẩn",
      "Chân cuốn nhôm/chữ X bền bỉ",
      "Gia công đục khoen, xỏ cây",
      "Giá tốt nhất tại Cần Thơ"
    ]
  },
  "to-roi": {
    categorySlug: "to-roi",
    backgroundSrc: "/toroi/background6.jpeg",
    backgroundAlt: "In Tờ Rơi Cần Thơ",
    ariaLabel: "In tờ rơi Cần Thơ - Chuyên nghiệp, sắc nét, giao nhanh",
    title: "IN TỜ RƠI",
    accentTitle: "CẦN THƠ",
    tagline: "Thiết kế nổi bật - In ấn sắc nét - Giao hàng nhanh",
    description: "Nhận in <strong>tờ rơi</strong>, tờ gấp quảng cáo, tờ bướm giới thiệu sản phẩm tại Cần Thơ với đa dạng kích thước A4, A5, A6 trên giấy Couches cao cấp.",
    price: {
      label: "Giá từ chỉ",
      amount: "350",
      currency: "đ/tờ"
    },
    productImage: {
      src: "/toroi/sanpham1.webp",
      alt: "Tờ Rơi In Tem Cần Thơ - Sản phẩm",
      style: {
        width: "clamp(150px, 16vw, 220px)",
        right: "300px",
        top: "50%"
      }
    },
    highlights: [
      "In offset chất lượng cao",
      "Giấy Couches bóng mịn 150-300gsm",
      "Hỗ trợ thiết kế theo yêu cầu",
      "In nhanh - Giao hàng đúng hẹn"
    ]
  },
  "nhan-dan": {
    categorySlug: "nhan-dan",
    backgroundSrc: "/nhandan/background6.jpeg",
    backgroundAlt: "In Tem Nhãn Cần Thơ",
    ariaLabel: "In tem nhãn Cần Thơ - Chuyên nghiệp, sắc nét, bám dính tốt",
    title: "IN TEM NHÃN",
    accentTitle: "DECAL",
    tagline: "Chất lượng cao - Độ bám dính tốt - Thiết kế miễn phí",
    description: "Nhận in <strong>tem nhãn decal</strong>, decal giấy, decal nhựa đục/trong, tem bảo hành, nhãn dán logo tại Cần Thơ với máy móc in hiện đại, bế demi sẵn dễ lột.",
    price: {
      label: "Giá từ chỉ",
      amount: "150",
      currency: "đ/tem"
    },
    productImage: {
      src: "/nhandan/section1_1.png",
      alt: "Tem Nhãn Decal In Tem Cần Thơ - Sản phẩm",
      style: {
        width: "clamp(300px, 32vw, 460px)",
        right: "200px",
        top: "50%"
      }
    },
    highlights: [
      "In decal nhựa, decal giấy chất lượng",
      "Cắt bế demi sẵn, dễ bóc dán",
      "Keo bám dính siêu chắc, không bong",
      "Hỗ trợ thiết kế mẫu tem miễn phí"
    ]
  },
  "brochure": {
    categorySlug: "brochure",
    backgroundSrc: "/brochure/background6.jpeg",
    backgroundAlt: "Brochure In Tem Cần Thơ",
    ariaLabel: "In brochure Cần Thơ - Chuyên nghiệp, sắc nét, ấn tượng",
    title: "IN BROCHURE",
    accentTitle: "CẦN THƠ",
    tagline: "Chuyên nghiệp - Sắc nét - Ấn tượng",
    description: "Nhận in <strong>brochure</strong>, tờ gấp giới thiệu công ty, sản phẩm, menu và profile bán hàng tại Cần Thơ với đa dạng kiểu gấp, chất liệu giấy cao cấp, gia công chỉn chu.",
    price: {
      label: "Giá từ chỉ",
      amount: "3.000",
      currency: "đ/tờ"
    },
    productImage: {
      src: "/brochure/sanpham1.png",
      alt: "Brochure In Tem Cần Thơ - Sản phẩm",
      style: { width: "clamp(240px, 28vw, 420px)" }
    },
    highlights: [
      "In sắc nét - Màu chuẩn",
      "Đa dạng kiểu gấp 2, gấp 3",
      "Giấy Couches cao cấp",
      "Giá tốt tại Cần Thơ"
    ]
  },
  "bao-bi": {
    categorySlug: "bao-bi",
    backgroundSrc: "/baobi/background6.jpeg",
    backgroundAlt: "In Bao Bì Cần Thơ",
    ariaLabel: "In bao bì Cần Thơ - Chuyên nghiệp, sắc nét, bền đẹp",
    title: "IN BAO BÌ",
    accentTitle: "CẦN THƠ",
    tagline: "Chuyên nghiệp - Sắc nét - Bền đẹp",
    description: "Nhận in <strong>bao bì</strong>, hộp giấy, túi giấy, nhãn hộp và bao bì sản phẩm cho thương hiệu tại Cần Thơ với đa dạng chất liệu, gia công tỉ mỉ, giá tốt.",
    price: {
      label: "Giá từ chỉ",
      amount: "5.000",
      currency: "đ/cái"
    },
    productImage: {
      src: "/baobi/sanpham1.png",
      alt: "Bao Bì In Tem Cần Thơ - Sản phẩm",
      style: { width: "clamp(240px, 28vw, 420px)", right: "230px" }
    },
    highlights: [
      "In sắc nét - Màu chuẩn",
      "Đa dạng chất liệu giấy",
      "Gia công bế, dán, cán màng",
      "Giá tốt tại Cần Thơ"
    ]
  }
};

const STORAGE_PREFIX = "manus-banner-config-";

export function getBannerConfig(categorySlug: string): BannerConfig {
  // If not running in browser, return default config
  if (typeof window === "undefined") {
    return DEFAULT_BANNERS[categorySlug] || DEFAULT_BANNERS["danh-thiep"];
  }

  try {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}${categorySlug}`);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error("Failed to load banner config from localStorage:", error);
  }

  return DEFAULT_BANNERS[categorySlug] || DEFAULT_BANNERS["danh-thiep"];
}

export function saveBannerConfig(categorySlug: string, config: BannerConfig): boolean {
  if (typeof window === "undefined") return false;

  try {
    localStorage.setItem(`${STORAGE_PREFIX}${categorySlug}`, JSON.stringify(config));
    return true;
  } catch (error) {
    console.error("Failed to save banner config to localStorage:", error);
    return false;
  }
}

export function resetBannerConfig(categorySlug: string): boolean {
  if (typeof window === "undefined") return false;

  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${categorySlug}`);
    return true;
  } catch (error) {
    console.error("Failed to reset banner config in localStorage:", error);
    return false;
  }
}
