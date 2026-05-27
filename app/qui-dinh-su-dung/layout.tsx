import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Quy Định Sử Dụng",
  description:
    "Quy định sử dụng dịch vụ in ấn tại In tem Cần Thơ. Điều khoản đặt hàng, thanh toán, đổi trả và trách nhiệm các bên.",
  path: "/qui-dinh-su-dung",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}