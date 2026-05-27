import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "In Danh Thiếp Name Card",
  description:
    "Dịch vụ in danh thiếp name card cá nhân, doanh nghiệp, sales, spa, nhà hàng tại Cần Thơ. Cán mờ, cán bóng, ép kim, giấy mỹ thuật cao cấp.",
  path: "/dich-vu/danh-thiep",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}