"use client";

import { useMemo } from "react";
import { Camera, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";
import { DEFAULT_BANNERS } from "@/lib/bannerService";

const SITE_URL = "https://intemcantho.vn";

export default function AnhCuoiHeroBanner() {
  const config = useMemo(() => DEFAULT_BANNERS["anh-cuoi"], []);

  return (
    <CategoryMarketingHeroBanner
      backgroundSrc={config.backgroundSrc}
      backgroundAlt={config.backgroundAlt}
      ariaLabel={config.ariaLabel}
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "In ảnh", href: "/in-anh", schemaItem: `${SITE_URL}/in-anh` },
        { label: "Ảnh cưới", href: "/in-anh/anh-cuoi", schemaItem: `${SITE_URL}/in-anh/anh-cuoi` },
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
          icon: Camera,
          variant: "primary",
        },
        {
          href: "/lien-he",
          label: "Gửi File Ảnh",
          icon: Upload,
          variant: "outline",
        },
      ]}
    />
  );
}