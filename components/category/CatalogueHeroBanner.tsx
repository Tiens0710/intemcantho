"use client";

import { useEffect, useState } from "react";
import { BookOpen, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";
import { getBannerConfig, DEFAULT_BANNERS } from "@/lib/bannerService";

const SITE_URL = "https://intemcantho.vn";

export default function CatalogueHeroBanner() {
  const [config, setConfig] = useState(DEFAULT_BANNERS["catalogue"]);

  useEffect(() => {
    setConfig(getBannerConfig("catalogue"));
  }, []);

  return (
    <CategoryMarketingHeroBanner
      backgroundSrc={config.backgroundSrc}
      backgroundAlt={config.backgroundAlt}
      ariaLabel={config.ariaLabel}
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "Ấn phẩm tiếp thị", href: "/tiep-thi", schemaItem: `${SITE_URL}/tiep-thi` },
        { label: "Catalogue", href: "/tiep-thi/catalogue", schemaItem: `${SITE_URL}/tiep-thi/catalogue` },
      ]}
      title={config.title}
      accentTitle={config.accentTitle}
      tagline={config.tagline}
      description={config.description}
      price={config.price}
      productImage={config.productImage}
      highlights={config.highlights}
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
