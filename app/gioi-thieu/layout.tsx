import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Giới Thiệu",
  description:
    "Intem Cần Thơ — đơn vị chuyên in tem nhãn decal, bao bì, ấn phẩm văn phòng hàng đầu tại Cần Thơ. Hơn 10 năm kinh nghiệm, công nghệ in hiện đại.",
  path: "/gioi-thieu",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}