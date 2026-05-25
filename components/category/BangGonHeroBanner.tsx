"use client";

import { useEffect, useState } from "react";
import { Flag, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";
import { getBannerConfig, DEFAULT_BANNERS } from "@/lib/bannerService";

const SITE_URL = "https://intemcantho.vn";

export default function BangGonHeroBanner() {
  const [config, setConfig] = useState(DEFAULT_BANNERS["bang-gon"]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConfig(getBannerConfig("bang-gon"));
  }, []);

  return (
    <CategoryMarketingHeroBanner
      backgroundSrc={config.backgroundSrc}
      backgroundAlt={config.backgroundAlt}
      ariaLabel={config.ariaLabel}
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "In ảnh", href: "/in-anh", schemaItem: `${SITE_URL}/in-anh` },
        { label: "Băng gôn cổ vũ", href: "/in-anh/bang-gon", schemaItem: `${SITE_URL}/in-anh/bang-gon` },
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
          icon: Flag,
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
