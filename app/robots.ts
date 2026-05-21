import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/api",
        "/cart",
        "/checkout",
        "/dang-ky",
        "/dang-nhap",
        "/tai-khoan",
        "/tra-cuu-don-hang",
      ],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
