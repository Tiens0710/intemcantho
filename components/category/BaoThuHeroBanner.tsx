"use client";

import { useEffect, useState } from "react";
import { Mail, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";
import { getBannerConfig, DEFAULT_BANNERS } from "@/lib/bannerService";

const SITE_URL = "https://intemcantho.vn";

export default function BaoThuHeroBanner() {
  const [config, setConfig] = useState(DEFAULT_BANNERS["bao-thu"]);

  useEffect(() => {
    setConfig(getBannerConfig("bao-thu"));
  }, []);

  return (
    <CategoryMarketingHeroBanner
      backgroundSrc={config.backgroundSrc}
      backgroundAlt={config.backgroundAlt}
      ariaLabel={config.ariaLabel}
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "Ấn phẩm văn phòng", href: "/van-phong", schemaItem: `${SITE_URL}/van-phong` },
        { label: "Bao thư", href: "/van-phong/bao-thu", schemaItem: `${SITE_URL}/van-phong/bao-thu` },
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
          icon: Mail,
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
