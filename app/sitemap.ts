import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data/blog-posts";
import { absoluteUrl } from "@/lib/seo";
import { getProducts } from "@/lib/wordpress";

type SitemapEntry = MetadataRoute.Sitemap[number];

function entry(
  path: string,
  changeFrequency: SitemapEntry["changeFrequency"],
  priority: number,
  lastModified = new Date(),
): SitemapEntry {
  return {
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const now = new Date();

  const coreRoutes: SitemapEntry[] = [
    entry("/", "weekly", 1, now),
    entry("/van-phong", "weekly", 0.85, now),
    entry("/tiep-thi", "weekly", 0.85, now),
    entry("/bao-bi", "weekly", 0.9, now),
    entry("/dich-vu/nhan-dan", "weekly", 0.95, now),
    entry("/dich-vu/standee", "weekly", 0.9, now),
    entry("/dich-vu/to-roi", "weekly", 0.9, now),
    entry("/dich-vu/danh-thiep", "weekly", 0.9, now),
    entry("/danh-muc/to-gap", "weekly", 0.9, now),
    entry("/kinh-nghiem", "weekly", 0.75, now),
    entry("/lien-he", "monthly", 0.7, now),
    entry("/bao-mat-thong-tin", "yearly", 0.35, now),
    entry("/chinh-sach-van-chuyen", "yearly", 0.35, now),
    entry("/doi-tra-hoan-tien", "yearly", 0.35, now),
    entry("/qui-dinh-su-dung", "yearly", 0.35, now),
  ];

  const productRoutes = products.map((product) =>
    entry(`/san-pham/${product.id}`, "weekly", product.featured ? 0.85 : 0.75, now),
  );

  const blogRoutes = blogPosts.map((post) =>
    entry(`/kinh-nghiem/${post.slug}`, "monthly", post.featured ? 0.7 : 0.6, now),
  );

  return [...coreRoutes, ...productRoutes, ...blogRoutes];
}

