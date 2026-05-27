import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kinh Nghiệm In Ấn",
  description:
    "Chia sẻ kiến thức và kinh nghiệm về thiết kế, in ấn tem nhãn, danh thiếp, standee, bao bì chuyên nghiệp. Mẹo chọn chất liệu, kỹ thuật in hiện đại.",
  path: "/kinh-nghiem",
  type: "article",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}