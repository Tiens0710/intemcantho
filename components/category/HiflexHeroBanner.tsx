"use client";

import { Layers, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";

const SITE_URL = "https://intemcantho.vn";

const hiflexHighlights = [
  "In sắc nét - Màu chuẩn",
  "Chống nước, bền màu",
  "Đa dạng kích thước",
  "Giá tốt tại Cần Thơ",
];

export default function HiflexHeroBanner() {
  return (
    <CategoryMarketingHeroBanner
      backgroundSrc="/anphamtiepthi/hiflex/background6.jpeg"
      backgroundAlt="Bạt Hiflex In Tem Cần Thơ"
      ariaLabel="In bạt hiflex Cần Thơ - Sắc nét, chống nước, bền màu"
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "Ấn phẩm tiếp thị", href: "/tiep-thi", schemaItem: `${SITE_URL}/tiep-thi` },
        { label: "Bạt Hiflex", href: "/tiep-thi/hiflex", schemaItem: `${SITE_URL}/tiep-thi/hiflex` },
      ]}
      title="IN BẠT"
      accentTitle="HIFLEX"
      tagline="Sắc nét - Chống nước - Bền màu"
      description={
        <>
          Nhận in <strong style={{ fontWeight: 800 }}>bạt hiflex</strong> cho băng rôn, banner, backdrop,
          billboard với đa dạng kích thước, chống nước tốt, giá cạnh tranh tại Cần Thơ.
        </>
      }
      price={{
        label: "Giá từ chỉ",
        amount: "90.000",
        currency: "VND",
      }}
      highlights={hiflexHighlights}
      productImage={{
        src: "/anphamtiepthi/hiflex/sanpham1.png",
        alt: "Bạt Hiflex In Tem Cần Thơ - Sản phẩm",
      }}
      actions={[
        {
          href: "/lien-he",
          label: "Nhận Báo Giá Nhanh",
          icon: Layers,
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