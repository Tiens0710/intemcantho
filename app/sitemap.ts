import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data/blog-posts";
import { absoluteUrl } from "@/lib/seo";
import { getProducts } from "@/lib/wordpress";

type SitemapEntry = MetadataRoute.Sitemap[number];

function entry(
  path: string,
  changeFrequency: SitemapEntry["changeFrequency"],
  priority: number,
  lastModified?: Date,
): SitemapEntry {
  return {
    url: absoluteUrl(path),
    lastModified: lastModified ?? new Date(),
    changeFrequency,
    priority,
  };
}

// Parse Vietnamese date string from blog posts to Date
function parseBlogDate(dateStr: string): Date {
  // e.g. "29 Tháng 4, 2024"
  const match = dateStr.match(/(\d+)\s*Tháng\s*(\d+),?\s*(\d+)/i);
  if (match) {
    return new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
  }
  return new Date("2024-01-01");
}

// Fixed dates for static pages (avoid new Date() on every build)
const SITE_LAUNCH = new Date("2024-01-01");
const RECENT_UPDATE = new Date("2025-05-26");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();

  const coreRoutes: SitemapEntry[] = [
    // ── Trang chủ — updated daily, highest priority ──
    entry("/", "daily", 1.0, RECENT_UPDATE),

    // ── Giới thiệu ──
    entry("/gioi-thieu", "monthly", 0.6, SITE_LAUNCH),

    // ── Silo: Dịch vụ (Sản phẩm chính) — weekly crawl ──
    entry("/dich-vu/nhan-dan", "weekly", 0.8, RECENT_UPDATE),
    entry("/dich-vu/standee", "weekly", 0.8, RECENT_UPDATE),
    entry("/dich-vu/to-roi", "weekly", 0.8, RECENT_UPDATE),
    entry("/dich-vu/danh-thiep", "weekly", 0.8, RECENT_UPDATE),
    entry("/dich-vu/in-bao-bi", "weekly", 0.8, RECENT_UPDATE),

    // ── Silo: Danh mục ──
    entry("/danh-muc/to-gap", "weekly", 0.7, RECENT_UPDATE),
    entry("/danh-muc/nhan-dan", "weekly", 0.7, RECENT_UPDATE),

    // ── Silo: Tiếp thị ──
    entry("/tiep-thi", "weekly", 0.7, RECENT_UPDATE),
    entry("/tiep-thi/menu", "weekly", 0.7, RECENT_UPDATE),
    entry("/tiep-thi/catalogue", "weekly", 0.7, RECENT_UPDATE),
    entry("/tiep-thi/voucher", "weekly", 0.7, RECENT_UPDATE),
    entry("/tiep-thi/hashtag-cam-tay", "weekly", 0.6, SITE_LAUNCH),
    entry("/tiep-thi/hiflex", "weekly", 0.7, RECENT_UPDATE),
    entry("/tiep-thi/folder", "weekly", 0.6, SITE_LAUNCH),
    entry("/tiep-thi/ho-so-nang-luc", "weekly", 0.6, SITE_LAUNCH),
    entry("/tiep-thi/ao-thun-dong-phuc", "weekly", 0.6, SITE_LAUNCH),
    entry("/tiep-thi/bang-khen", "weekly", 0.6, SITE_LAUNCH),

    // ── Silo: Văn phòng ──
    entry("/van-phong", "weekly", 0.7, RECENT_UPDATE),
    entry("/van-phong/bao-thu", "weekly", 0.7, RECENT_UPDATE),

    // ── Silo: Bao bì ──
    entry("/bao-bi", "weekly", 0.7, RECENT_UPDATE),

    // ── Silo: In ảnh ──
    entry("/in-anh/anh-ep-nhua", "weekly", 0.7, RECENT_UPDATE),
    entry("/in-anh/anh-ep-go", "weekly", 0.6, SITE_LAUNCH),
    entry("/in-anh/anh-cuoi", "weekly", 0.7, RECENT_UPDATE),
    entry("/in-anh/photobook", "weekly", 0.7, RECENT_UPDATE),
    entry("/in-anh/anh-trending", "weekly", 0.6, SITE_LAUNCH),
    entry("/in-anh/bang-gon", "weekly", 0.6, SITE_LAUNCH),

    // ── Blog / Kinh nghiệm — monthly crawl ──
    entry("/kinh-nghiem", "monthly", 0.6, RECENT_UPDATE),
    entry("/kinh-nghiem/kien-thuc", "monthly", 0.5, SITE_LAUNCH),
    entry("/kinh-nghiem/tin-tuc", "monthly", 0.5, SITE_LAUNCH),

    // ── Liên hệ ──
    entry("/lien-he", "monthly", 0.5, SITE_LAUNCH),

    // ── Chính sách — rarely updated ──
    entry("/bao-mat-thong-tin", "yearly", 0.2, SITE_LAUNCH),
    entry("/chinh-sach-van-chuyen", "yearly", 0.2, SITE_LAUNCH),
    entry("/doi-tra-hoan-tien", "yearly", 0.2, SITE_LAUNCH),
    entry("/qui-dinh-su-dung", "yearly", 0.2, SITE_LAUNCH),
  ];

  // Products — use updatedAt if available, otherwise use launch date
  // In production: product.updatedAt comes from WordPress API
  const productRoutes = products.map((product) => {
    const lastMod = product.updatedAt
      ? new Date(product.updatedAt)
      : SITE_LAUNCH;
    return entry(
      `/san-pham/${product.id}`,
      "weekly",
      product.featured ? 0.7 : 0.6,
      lastMod,
    );
  });

  // Blog posts — use the post date as lastModified
  const blogRoutes = blogPosts.map((post) =>
    entry(
      `/kinh-nghiem/${post.slug}`,
      "monthly",
      post.featured ? 0.5 : 0.4,
      parseBlogDate(post.date),
    ),
  );

  return [...coreRoutes, ...productRoutes, ...blogRoutes];
}