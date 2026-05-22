"use client";

import { Hash, Upload } from "lucide-react";
import CategoryMarketingHeroBanner from "./CategoryMarketingHeroBanner";

const SITE_URL = "https://intemcantho.vn";

const hashtagHighlights = [
  "In sắc nét - Màu nổi bật",
  "Form bế theo yêu cầu",
  "Cán màng bền đẹp",
  "Giá tốt tại Cần Thơ",
];

export default function HashtagHeroBanner() {
  return (
    <CategoryMarketingHeroBanner
      backgroundSrc="/anphamtiepthi/hashtag/bg.jpeg"
      backgroundAlt="Hashtag cầm tay In Tem Cần Thơ"
      ariaLabel="In hashtag cầm tay Cần Thơ - Nổi bật, sắc nét, bền đẹp"
      breadcrumbs={[
        { label: "Trang chủ", href: "/", schemaItem: SITE_URL },
        { label: "Ấn phẩm tiếp thị", href: "/tiep-thi", schemaItem: `${SITE_URL}/tiep-thi` },
        {
          label: "Hashtag cầm tay",
          href: "/tiep-thi/hashtag-cam-tay",
          schemaItem: `${SITE_URL}/tiep-thi/hashtag-cam-tay`,
        },
      ]}
      title="IN HASHTAG"
      accentTitle="CẦM TAY"
      tagline="Nổi bật - Sắc nét - Dễ check-in"
      description={
        <>
          Nhận in <strong style={{ fontWeight: 800 }}>hashtag cầm tay</strong> cho sự kiện,
          khai trương, sinh nhật, hội nghị, booth chụp ảnh và chiến dịch quảng bá với form bế đẹp,
          màu sắc nổi bật, gia công chắc tay.
        </>
      }
      price={{
        label: "Giá từ chỉ",
        amount: "25.000",
        currency: "VND",
      }}
      highlights={hashtagHighlights}
      actions={[
        {
          href: "/lien-he",
          label: "Nhận Báo Giá Nhanh",
          icon: Hash,
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
