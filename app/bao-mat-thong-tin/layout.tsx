import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Chính Sách Bảo Mật Thông Tin",
  description:
    "Chính sách bảo mật thông tin khách hàng tại In tem Cần Thơ. Cam kết bảo vệ dữ liệu cá nhân, thông tin đặt hàng và thanh toán.",
  path: "/bao-mat-thong-tin",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}