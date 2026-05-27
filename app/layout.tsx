import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ClientOnlyWidgets from "@/components/ClientOnlyWidgets";
import { OrganizationSchema, WebSiteSchema } from "@/components/JsonLd";
import { SITE_URL, siteConfig } from "@/lib/seo";

const nunito = Nunito({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: siteConfig.name,
  title: {
    default: "In tem Cần Thơ - Duky Printing",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale.replace("-", "_"),
    siteName: siteConfig.name,
    title: "In tem Cần Thơ - Duky Printing",
    description: siteConfig.description,
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In tem Cần Thơ - Duky Printing",
    description: siteConfig.description,
    images: [`${SITE_URL}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head />
      <body className={`${nunito.className} min-h-screen bg-white text-gray-900 overflow-x-hidden w-full relative`} suppressHydrationWarning>
        {/* SVG Noise Filter for Frosted Glass effect */}
        <svg className="fixed w-0 h-0" aria-hidden="true">
          <defs>
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
        </svg>
        <OrganizationSchema />
        <WebSiteSchema />
        {children}
        <ClientOnlyWidgets />
      </body>
    </html>
  );
}
