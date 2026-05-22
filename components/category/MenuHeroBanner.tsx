"use client";

import { UtensilsCrossed, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";

const SITE_URL = "https://intemcantho.vn";

const menuHighlights = [
  "In sắc nét - Màu chuẩn",
  "Chất liệu đa dạng",
  "Gia công cao cấp",
  "Giá tốt tại Cần Thơ",
];

export default function MenuHeroBanner() {
  return (
    <CategoryMarketingHeroBanner
      backgroundSrc="/anphamtiepthi/menu/background1.jpeg"
      backgroundAlt="Menu Nhà Hàng In Tem Cần Thơ"
      ariaLabel="In menu Cần Thơ - Sang trọng, sắc nét, bền đẹp"
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "Ấn phẩm tiếp thị", href: "/tiep-thi", schemaItem: `${SITE_URL}/tiep-thi` },
        { label: "Menu", href: "/tiep-thi/menu", schemaItem: `${SITE_URL}/tiep-thi/menu` },
      ]}
      title="IN MENU"
      accentTitle="CẦN THƠ"
      tagline="Sang trọng - Sắc nét - Bền đẹp"
      description={
        <>
          Nhận in <strong style={{ fontWeight: 800 }}>menu</strong> cho nhà hàng, quán café, trà sữa,
          khách sạn, spa với đa dạng chất liệu, gia công tỉ mỉ, giá tốt tại Cần Thơ.
        </>
      }
      price={{
        label: "Giá từ chỉ",
        amount: "250.000",
        currency: "VND",
      }}
      highlights={menuHighlights}
      actions={[
        {
          href: "/lien-he",
          label: "Nhận Báo Giá Nhanh",
          icon: UtensilsCrossed,
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
