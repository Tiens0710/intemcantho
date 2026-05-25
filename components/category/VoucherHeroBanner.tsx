"use client";

import { useEffect, useState } from "react";
import { Ticket, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";
import { getBannerConfig, DEFAULT_BANNERS } from "@/lib/bannerService";

const SITE_URL = "https://intemcantho.vn";

export default function VoucherHeroBanner() {
  const [config, setConfig] = useState(DEFAULT_BANNERS["voucher"]);

  useEffect(() => {
    setConfig(getBannerConfig("voucher"));
  }, []);

  return (
    <CategoryMarketingHeroBanner
      backgroundSrc={config.backgroundSrc}
      backgroundAlt={config.backgroundAlt}
      ariaLabel={config.ariaLabel}
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "Ấn phẩm tiếp thị", href: "/tiep-thi", schemaItem: `${SITE_URL}/tiep-thi` },
        { label: "Voucher", href: "/tiep-thi/voucher", schemaItem: `${SITE_URL}/tiep-thi/voucher` },
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
          icon: Ticket,
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
