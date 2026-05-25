"use client";

import { useEffect, useState } from "react";
import { IdCard, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";
import { getBannerConfig, DEFAULT_BANNERS } from "@/lib/bannerService";

const SITE_URL = "https://intemcantho.vn";

export default function DanhThiepHeroBanner() {
  const [config, setConfig] = useState(DEFAULT_BANNERS["danh-thiep"]);

  useEffect(() => {
    setConfig(getBannerConfig("danh-thiep"));
  }, []);

  return (
    <CategoryMarketingHeroBanner
      backgroundSrc={config.backgroundSrc}
      backgroundAlt={config.backgroundAlt}
      ariaLabel={config.ariaLabel}
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "Ấn phẩm văn phòng", href: "/van-phong", schemaItem: `${SITE_URL}/van-phong` },
        { label: "Danh thiếp", href: "/dich-vu/danh-thiep", schemaItem: `${SITE_URL}/dich-vu/danh-thiep` },
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
          icon: IdCard,
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