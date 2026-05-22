import type { Metadata } from "next";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://intemcantho.vn"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "In tem Can Tho",
  description: "In tem nhan decal, bao bi, an pham van phong tai Can Tho.",
  locale: "vi_VN",
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
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

