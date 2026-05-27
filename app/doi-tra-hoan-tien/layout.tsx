import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Chính Sách Đổi Trả & Hoàn Tiền",
  description:
    "Chính sách đổi trả và hoàn tiền tại In tem Cần Thơ. Miễn phí đổi size trong 3 ngày, hoàn tiền nếu sản phẩm lỗi do nhà sản xuất.",
  path: "/doi-tra-hoan-tien",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}