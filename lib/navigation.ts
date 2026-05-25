export interface NavItem {
  label: string;
  href: string;
  activePaths?: string[];
  megaMenu?: MegaMenuConfig;
  dropdownItems?: { label: string; href: string }[];
}

export interface MegaMenuConfig {
  banner: {
    src: string;
    alt: string;
    title: string;
    subtitle: string;
  };
  columns: {
    title: string;
    href?: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
}

export const navigationData: NavItem[] = [
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
    activePaths: ["/gioi-thieu"],
  },
  {
    label: "Tem nhãn Decal",
    href: "/dich-vu/nhan-dan",
    activePaths: ["/dich-vu/nhan-dan", "/bao-bi"],
    megaMenu: {
      banner: {
        src: "/danhmuc1.png",
        alt: "Tem nhãn Decal",
        title: "Tem Nhãn & Decal",
        subtitle: "Nâng tầm thương hiệu",
      },
      columns: [
        {
          title: "DECAL GIẤY",
          href: "/dich-vu/nhan-dan",
          items: [
            { label: "Decal giấy", href: "/dich-vu/nhan-dan" },
            { label: "Decal giấy kraft", href: "/dich-vu/nhan-dan" },
          ],
        },
        {
          title: "DECAL NHỰA & XI",
          href: "/dich-vu/nhan-dan",
          items: [
            { label: "Decal nhựa / trong", href: "/dich-vu/nhan-dan" },
            { label: "Decal xi bạc / xi vàng", href: "/dich-vu/nhan-dan" },
            { label: "Decal UV DTF", href: "/dich-vu/nhan-dan" },
          ],
        },
        {
          title: "TEM & DECAL KHỔ LỚN",
          href: "/dich-vu/nhan-dan",
          items: [
            { label: "Tem bể bảo hành", href: "/dich-vu/nhan-dan" },
            { label: "Decal khổ lớn", href: "/dich-vu/nhan-dan" },
          ],
        },
      ],
    },
  },
  {
    label: "Ấn phẩm tiếp thị",
    href: "/tiep-thi",
    activePaths: ["/tiep-thi", "/tiep-thi/menu", "/tiep-thi/catalogue", "/tiep-thi/voucher", "/tiep-thi/hashtag-cam-tay", "/tiep-thi/hiflex"],
    megaMenu: {
      banner: {
        src: "/danhmuc4.png",
        alt: "Ấn phẩm tiếp thị",
        title: "Ấn Phẩm Tiếp Thị",
        subtitle: "Giải pháp tiếp thị",
      },
      columns: [
        {
          title: "TỜ RƠI & TỜ GẤP",
          href: "/tiep-thi",
          items: [
            { label: "Tờ rơi / tờ gấp", href: "/dich-vu/to-roi" },
            { label: "Standee PP", href: "/dich-vu/standee" },
            { label: "Bạt hiflex", href: "/tiep-thi/hiflex" },
          ],
        },
        {
          title: "MENU & VOUCHER",
          href: "/tiep-thi",
          items: [
            { label: "Menu", href: "/tiep-thi/menu" },
            { label: "Voucher / thẻ tích điểm", href: "/tiep-thi/voucher" },
          ],
        },
        {
          title: "CATALOGUE & KHÁC",
          href: "/tiep-thi",
          items: [
            { label: "Catalogue sản phẩm", href: "/tiep-thi/catalogue" },
            { label: "Hashtag cầm tay", href: "/tiep-thi/hashtag-cam-tay" },
          ],
        },
      ],
    },
  },
  {
    label: "Ấn phẩm văn phòng",
    href: "/van-phong",
    activePaths: ["/van-phong"],
    megaMenu: {
      banner: {
        src: "/banner_doc.webp",
        alt: "Ấn phẩm văn phòng",
        title: "Ấn Phẩm Văn Phòng",
        subtitle: "Chuyên nghiệp & Đẳng cấp",
      },
      columns: [
        {
          title: "DANH THIẾP",
          href: "/dich-vu/danh-thiep",
          items: [
            { label: "Danh thiếp - Namecard", href: "/dich-vu/danh-thiep" },
          ],
        },
        {
          title: "BAO THƯ & FOLDER",
          href: "/van-phong",
          items: [
            { label: "Bao thư", href: "/van-phong" },
            { label: "Bìa đựng hồ sơ - Folder", href: "/van-phong" },
            { label: "Hồ sơ năng lực", href: "/van-phong" },
          ],
        },
        {
          title: "ĐỒNG PHỤC & KHÁC",
          href: "/van-phong",
          items: [
            { label: "Áo thun đồng phục", href: "/van-phong" },
            { label: "Bảng khen", href: "/van-phong" },
          ],
        },
      ],
    },
  },
  {
    label: "In ảnh",
    href: "/in-anh",
    activePaths: ["/in-anh"],
    megaMenu: {
      banner: {
        src: "/danhmuc3.png",
        alt: "In ảnh",
        title: "Dịch Vụ In Ảnh",
        subtitle: "Lưu giữ khoảnh khắc",
      },
      columns: [
        {
          title: "ẢNH ÉP",
          href: "/in-anh",
          items: [
            { label: "Ảnh ép nhựa", href: "/in-anh" },
            { label: "Ảnh ép gỗ", href: "/in-anh" },
          ],
        },
        {
          title: "ẢNH CHÂN DUNG",
          href: "/in-anh",
          items: [
            { label: "Ảnh cưới", href: "/in-anh" },
            { label: "Ảnh trending", href: "/in-anh" },
            { label: "Photobook", href: "/in-anh" },
            { label: "Bảng gôn cổ vũ", href: "/in-anh" },
          ],
        },
      ],
    },
  },
  {
    label: "Kinh nghiệm",
    href: "/kinh-nghiem",
    activePaths: ["/kinh-nghiem", "/kinh-nghiem/kien-thuc", "/kinh-nghiem/tin-tuc"],
    dropdownItems: [
      { label: "Kiến Thức In Ấn", href: "/kinh-nghiem/kien-thuc" },
      { label: "Tin Tức", href: "/kinh-nghiem/tin-tuc" },
    ],
  },
  { label: "Liên hệ", href: "/lien-he" },
];
