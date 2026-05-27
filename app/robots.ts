import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Default rule for all crawlers
        userAgent: "*",
        allow: "/",
        disallow: [
          // Admin pages
          "/admin/",
          // API endpoints — not for indexing
          "/api/",
          // E-commerce private pages
          "/cart",
          "/checkout/",
          // Auth pages
          "/dang-ky",
          "/dang-nhap",
          // User account pages
          "/tai-khoan/",
          // Order tracking (dynamic, not for indexing)
          "/tra-cuu-don-hang",
          // Redirect-only pages (canonical URL elsewhere)
          "/standee",
          "/brochure",
          // Pagination & Filter URLs (prevent duplicate content / save crawl budget)
          "/*?page=",
          "/*?filter=",
          "/*?sort=",
          "/*?color=",
          "/*?size=",
          "/*?min_price=",
          "/*?max_price=",
          "/*?category=",
          "/*?tag=",
          "/*?q=",
        ],
      },
      {
        // Block bad bots from crawling API
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
