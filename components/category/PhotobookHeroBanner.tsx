"use client";

import { BookImage, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";
import { getBannerConfig } from "@/lib/bannerService";

const SITE_URL = "https://intemcantho.vn";

export default function PhotobookHeroBanner() {
  const config = getBannerConfig("photobook");

  return (
    <CategoryMarketingHeroBanner
      backgroundSrc={config.backgroundSrc}
      backgroundAlt={config.backgroundAlt}
      ariaLabel={config.ariaLabel}
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "In ảnh", href: "/in-anh", schemaItem: `${SITE_URL}/in-anh` },
        { label: "Photobook", href: "/in-anh/photobook", schemaItem: `${SITE_URL}/in-anh/photobook` },
      ]}
      title={config.title}
      accentTitle={config.accentTitle}
      tagline={config.tagline}
      description={config.description}
      price={config.price}
      productImage={config.productImage}
      highlights={config.highlights}
      actions={[
        {
          href: "/lien-he",
          label: "Nhận Báo Giá Nhanh",
          icon: BookImage,
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