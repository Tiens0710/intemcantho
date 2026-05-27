import type { Metadata } from "next";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://intemcantho.vn"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "In tem Cần Thơ",
  description:
    "Dịch vụ in tem nhãn decal, bao bì, ấn phẩm văn phòng, standee, tờ rơi, danh thiếp chất lượng cao tại Cần Thơ. Thiết kế miễn phí, giao hàng nhanh.",
  locale: "vi_VN",
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

/**
 * Tạo Metadata chuẩn cho mỗi trang — bao gồm title, description, canonical, Open Graph, Twitter Card.
 * Dùng cho các trang tĩnh (server component).
 */
export function createPageMetadata(opts: {
  title: string;
  description?: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const { title, description, path, image, type = "website" } = opts;
  const url = absoluteUrl(path);
  const desc = description ?? siteConfig.description;
  const ogImage = image ?? "/logo.png";

  return {
    title: `${title} | ${siteConfig.name}`,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale.replace("-", "_"),
      type,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: desc,
      images: [ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage)],
    },
  };
}

export function createNoIndexMetadata(title: string): Metadata {
  return {
    title,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}