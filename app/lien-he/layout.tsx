import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Liên Hệ",
  description:
    "Liên hệ In tem Cần Thơ để được tư vấn in tem nhãn, standee, danh thiếp, bao bì. Địa chỉ: 122 Nguyễn Hiền, Tân An, Cần Thơ. Hotline: 0985 463 403.",
  path: "/lien-he",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}