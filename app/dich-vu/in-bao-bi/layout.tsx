import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "In Bao Bì Sản Phẩm",
  description:
    "Dịch vụ in bao bì sản phẩm, hộp giấy, túi giấy, nhãn hộp tại Cần Thơ. Tư vấn chất liệu, đồng bộ nhận diện thương hiệu.",
  path: "/dich-vu/in-bao-bi",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}