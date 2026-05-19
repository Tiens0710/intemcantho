export interface NavItem {
  label: string;
  href: string;
  activePaths?: string[];
  megaMenu?: MegaMenuConfig;
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
    items: {
      label: string;
      href: string;
    }[];
  }[];
}

export const navigationData: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Dịch vụ",
    href: "/van-phong",
    activePaths: ["/dich-vu"],
    megaMenu: {
      banner: {
        src: "/danhmuc1.png",
        alt: "Dịch vụ in ấn Intem Cần Thơ",
        title: "Giải pháp in ấn",
        subtitle: "Trọn gói & chuyên nghiệp",
      },
      columns: [
        {
          title: "DỊCH VỤ IN ẤN",
          items: [
            { label: "In tem nhãn", href: "/dich-vu/nhan-dan" },
            { label: "In standee khổ lớn", href: "/dich-vu/standee" },
            { label: "In brochure / tờ gấp", href: "/danh-muc/to-gap" },
          ],
        },
        {
          title: "THIẾT KẾ & IN ẤN",
          items: [
            { label: "In tờ rơi", href: "/danh-muc/to-roi" },
            { label: "In bao bì", href: "/danh-muc/hop-giay" },
            { label: "In danh thiếp", href: "/danh-muc/danh-thiep" },
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
        title: "In Ấn Bao Thư Nhỏ",
        subtitle: "Bao thư",
      },
      columns: [
        {
          title: "DANH THIẾP",
          items: [
            { label: "Danh thiếp kỹ thuật số", href: "/van-phong" },
            { label: "Danh thiếp in nhanh", href: "/van-phong" },
            { label: "Danh thiếp bo góc", href: "/van-phong" },
            { label: "Danh thiếp vuông", href: "/van-phong" },
          ],
        },
        {
          title: "FOLDER THƯƠNG HIỆU",
          items: [{ label: "Folder đựng tài liệu", href: "/van-phong" }],
        },
        {
          title: "BAO THƯ",
          items: [
            { label: "Bao thư nhỏ", href: "/van-phong" },
            { label: "Bao thư A4", href: "/van-phong" },
          ],
        },
        {
          title: "ĐỒNG PHỤC",
          items: [
            { label: "Đồng phục cổ trụ", href: "/van-phong" },
            { label: "Đồng phục cổ tròn", href: "/van-phong" },
          ],
        },
      ],
    },
  },
  {
    label: "Ấn phẩm tiếp thị",
    href: "/tiep-thi",
    activePaths: ["/tiep-thi"],
    megaMenu: {
      banner: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
        alt: "Ấn phẩm tiếp thị",
        title: "Brochure & Catalogue",
        subtitle: "Giải pháp tiếp thị",
      },
      columns: [
        {
          title: "SỰ KIỆN",
          items: [
            { label: "Backdrop Sự Kiện", href: "/tiep-thi" },
            { label: "Băng Rôn Hiflex", href: "/tiep-thi" },
            { label: "Standee Quảng Cáo", href: "/dich-vu/standee" },
          ],
        },
        {
          title: "QUẢNG CÁO",
          items: [
            { label: "Catalogue Sản Phẩm", href: "/tiep-thi" },
            { label: "Brochure Gấp 3/4", href: "/tiep-thi" },
            { label: "Tờ Rơi - Leaflet", href: "/tiep-thi" },
          ],
        },
        {
          title: "NHÀ HÀNG & CAFE",
          items: [
            { label: "Menu Cao Cấp", href: "/tiep-thi" },
            { label: "Thẻ Nhựa / Member Card", href: "/tiep-thi" },
            { label: "Lót Ly / Coaster", href: "/tiep-thi" },
          ],
        },
      ],
    },
  },
  {
    label: "Ấn phẩm bao bì",
    href: "/bao-bi",
    activePaths: ["/bao-bi"],
    megaMenu: {
      banner: {
        src: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
        alt: "Ấn phẩm bao bì",
        title: "Tem Nhãn & Decal",
        subtitle: "Nâng tầm thương hiệu",
      },
      columns: [
        {
          title: "DECAL TEM NHÃN",
          items: [
            { label: "Decal giấy", href: "/bao-bi" },
            { label: "Decal nhựa chống nước", href: "/bao-bi" },
            { label: "Decal UV DTF nổi", href: "/bao-bi" },
            { label: "Decal xi bạc / xi vàng", href: "/bao-bi" },
          ],
        },
        {
          title: "TEM BẢO HÀNH",
          items: [
            { label: "Tem bể bảo hành", href: "/bao-bi" },
            { label: "Tem hologram chống giả", href: "/bao-bi" },
          ],
        },
        {
          title: "BAO BÌ SẢN PHẨM",
          items: [
            { label: "In ấn túi giấy", href: "/bao-bi" },
            { label: "Hộp giấy carton", href: "/bao-bi" },
            { label: "Màng co sản phẩm", href: "/bao-bi" },
          ],
        },
      ],
    },
  },
  { label: "Kinh nghiệm", href: "/kinh-nghiem" },
  { label: "Liên hệ", href: "/lien-he" },
];
