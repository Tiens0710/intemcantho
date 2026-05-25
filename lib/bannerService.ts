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
