"use client";

import { BookOpen, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";

const SITE_URL = "https://intemcantho.vn";

const catalogueHighlights = [
  "In sắc nét - Màu chuẩn",
  "Đa dạng số trang",
  "Gia công bìa cao cấp",
  "Giá tốt tại Cần Thơ",
];

export default function CatalogueHeroBanner() {
  return (
    <CategoryMarketingHeroBanner
      backgroundSrc="/anphamtiepthi/catalogue/background6.jpeg"
      backgroundAlt="Catalogue Sản Phẩm In Tem Cần Thơ"
      ariaLabel="In catalogue Cần Thơ - Chuyên nghiệp, sắc nét, ấn tượng"
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "Ấn phẩm tiếp thị", href: "/tiep-thi", schemaItem: `${SITE_URL}/tiep-thi` },
        { label: "Catalogue", href: "/tiep-thi/catalogue", schemaItem: `${SITE_URL}/tiep-thi/catalogue` },
      ]}
      title="IN CATALOGUE"
      accentTitle="CẦN THƠ"
      tagline="Chuyên nghiệp - Sắc nét - Ấn tượng"
      description={
        <>
          Nhận in <strong style={{ fontWeight: 800 }}>catalogue</strong> giới thiệu sản phẩm,
          hồ sơ năng lực, bảng mẫu và tài liệu bán hàng với bố cục đẹp, giấy in đa dạng,
          gia công chỉn chu tại Cần Thơ.
        </>
      }
      price={{
        label: "Giá từ chỉ",
        amount: "8.000",
        currency: "VND",
      }}
      productImage={{
        src: "/anphamtiepthi/catalogue/sanpham1.png",
        alt: "Catalogue Sản Phẩm In Tem Cần Thơ - Sản phẩm",
      }}
      highlights={catalogueHighlights}
      featureMarginTop="clamp(1.25rem, 3vh, 2.75rem)"
      actions={[
        {
          href: "/lien-he",
          label: "Nhận Báo Giá Nhanh",
          icon: BookOpen,
          variant: "primary",
        },
        {
          href: "/lien-he",
          label: "Gửi File Thiết Kế",
          icon: Upload,
          variant: "outline",
        },
      ]}
    />
  );
}
