"use client";

import { Ticket, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";

const SITE_URL = "https://intemcantho.vn";

const voucherHighlights = [
  "In sắc nét - Màu chuẩn",
  "Đa dạng kích thước",
  "Gia công cán màng",
  "Giá tốt tại Cần Thơ",
];

export default function VoucherHeroBanner() {
  return (
    <CategoryMarketingHeroBanner
      backgroundSrc="/anphamtiepthi/voucher/background6.jpeg"
      backgroundAlt="Voucher khuyến mãi In Tem Cần Thơ"
      ariaLabel="In voucher Cần Thơ - Sang trọng, sắc nét, thu hút"
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "Ấn phẩm tiếp thị", href: "/tiep-thi", schemaItem: `${SITE_URL}/tiep-thi` },
        { label: "Voucher", href: "/tiep-thi/voucher", schemaItem: `${SITE_URL}/tiep-thi/voucher` },
      ]}
      title="IN VOUCHER"
      accentTitle="CẦN THƠ"
      tagline="Sang trọng - Sắc nét - Thu hút"
      description={
        <>
          Nhận in <strong style={{ fontWeight: 800 }}>voucher</strong>, phiếu quà tặng,
          phiếu giảm giá và thẻ tích điểm cho cửa hàng, spa, nhà hàng, quán café với thiết kế đẹp,
          chất liệu đa dạng và gia công chỉn chu.
        </>
      }
      price={{
        label: "Giá từ chỉ",
        amount: "85.000",
        currency: "VND",
      }}
      productImage={{
        src: "/anphamtiepthi/voucher/sanpham1.png",
        alt: "Voucher khuyến mãi In Tem Cần Thơ - Sản phẩm",
        style: { width: "clamp(260px, 28vw, 400px)" },
      }}
      highlights={voucherHighlights}
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
