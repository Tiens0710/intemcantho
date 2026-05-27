import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "In Tem Nhãn Decal",
  description:
    "Dịch vụ in tem nhãn decal giấy, decal nhựa, tem chai lọ, tem hộp, sticker tại Cần Thơ. In số lượng ít, thiết kế miễn phí, giao hàng nhanh.",
  path: "/dich-vu/nhan-dan",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}