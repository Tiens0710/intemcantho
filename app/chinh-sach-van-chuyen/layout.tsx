import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Chính Sách Vận Chuyển",
  description:
    "Chính sách vận chuyển và giao hàng tại In tem Cần Thơ. Giao hàng nhanh toàn quốc, miễn phí vận chuyển đơn hàng lớn, đóng gói cẩn thận.",
  path: "/chinh-sach-van-chuyen",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}