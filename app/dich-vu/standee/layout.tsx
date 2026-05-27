import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "In Standee Khổ Lớn",
  description:
    "Dịch vụ in standee khai trương, sự kiện, quảng cáo cửa hàng và showroom tại Cần Thơ. In bạt Hiflex, PP, khung standee chất lượng cao.",
  path: "/dich-vu/standee",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}