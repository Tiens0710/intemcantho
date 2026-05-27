import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ấn Phẩm Tiếp Thị",
  description:
    "In ấn phẩm tiếp thị: standee, tờ rơi, menu, catalogue, voucher, hiflex, folder, hồ sơ năng lực, áo thun đồng phục, bảng khen tại Cần Thơ.",
  path: "/tiep-thi",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}