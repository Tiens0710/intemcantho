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
            { label: "Decal giấy", href: "/san-pham/decal-giay" },
            { label: "Decal giấy kraft", href: "/san-pham/decal-giay-kraft" },
          ],
        },
        {
          title: "DECAL NHỰA & XI",
          href: "/dich-vu/nhan-dan",
          items: [
            { label: "Decal nhựa / trong", href: "/san-pham/decal-nhua-trong" },
            { label: "Decal xi bạc / xi vàng", href: "/san-pham/decal-xi-bac-vang" },
            { label: "Decal UV DTF", href: "/san-pham/decal-uv-dtf" },
          ],
        },
        {
          title: "TEM & DECAL KHỔ LỚN",
          href: "/dich-vu/nhan-dan",
          items: [
            { label: "Tem bể bảo hành", href: "/san-pham/tem-be-bao-hanh" },
            { label: "Decal khổ lớn", href: "/san-pham/decal-kho-lon" },
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
    activePaths: ["/van-phong", "/van-phong/bao-thu", "/tiep-thi/folder", "/tiep-thi/ho-so-nang-luc", "/tiep-thi/ao-thun-dong-phuc", "/tiep-thi/bang-khen"],
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
            { label: "Bao thư", href: "/van-phong/bao-thu" },
            { label: "Bìa đựng hồ sơ - Folder", href: "/tiep-thi/folder" },
            { label: "Hồ sơ năng lực", href: "/tiep-thi/ho-so-nang-luc" },
          ],
        },
        {
          title: "ĐỒNG PHỤC & KHÁC",
          href: "/van-phong",
          items: [
            { label: "Áo thun đồng phục", href: "/tiep-thi/ao-thun-dong-phuc" },
            { label: "Bảng khen", href: "/tiep-thi/bang-khen" },
          ],
        },
      ],
    },
  },
  {
    label: "In ảnh",
    href: "/in-anh",
    activePaths: ["/in-anh", "/in-anh/anh-ep-nhua", "/in-anh/anh-cuoi", "/in-anh/photobook", "/in-anh/bang-gon", "/in-anh/anh-ep-go", "/in-anh/anh-trending"],
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
          { label: "Ảnh ép nhựa", href: "/in-anh/anh-ep-nhua" },
          { label: "Ảnh ép gỗ", href: "/in-anh/anh-ep-go" },
          ],
        },
        {
          title: "ẢNH CHÂN DUNG",
          href: "/in-anh",
          items: [
            { label: "Ảnh cưới", href: "/in-anh/anh-cuoi" },
            { label: "Ảnh trending", href: "/in-anh/anh-trending" },
            { label: "Photobook", href: "/in-anh/photobook" },
            { label: "Băng gôn cổ vũ", href: "/in-anh/bang-gon" },
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
