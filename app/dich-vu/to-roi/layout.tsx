import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "In Tờ Rơi Quảng Cáo",
  description:
    "Dịch vụ in tờ rơi quảng cáo, khai trương, khuyến mãi, spa, bất động sản tại Cần Thơ. In nhanh, giá tốt, thiết kế đẹp.",
  path: "/dich-vu/to-roi",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}