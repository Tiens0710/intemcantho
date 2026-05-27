import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ấn Phẩm Văn Phòng",
  description:
    "Danh thiếp, bao thư, folder, hóa đơn, giấy tiêu đề và các ấn phẩm văn phòng chuyên nghiệp tại Cần Thơ. In nhanh, thiết kế đẹp, giá cạnh tranh.",
  path: "/van-phong",
  image: "/bgvanphong.png",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}