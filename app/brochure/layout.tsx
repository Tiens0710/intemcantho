import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  // SEO: noindex redirect page, canonical points to the real URL
  robots: { index: false, follow: true },
  alternates: {
    canonical: absoluteUrl("/danh-muc/to-gap"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}