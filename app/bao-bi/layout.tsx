import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "In Bao Bì Hộp Giấy, Túi Giấy",
  description:
    "Dịch vụ in bao bì sản phẩm, hộp giấy, túi giấy, nhãn hộp tại Cần Thơ. Thiết kế đồng bộ nhận diện thương hiệu, chất liệu đa dạng.",
  path: "/bao-bi",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}