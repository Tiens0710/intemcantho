import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ChatSearch from "@/components/ChatSearch";
import ScrollToTop from "@/components/ScrollToTop";
import SocialFloatingLinks from "@/components/SocialFloatingLinks";
import { SITE_URL, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
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
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
        {/* Preconnect to Google Fonts for faster DNS resolution */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          Load Google Fonts via <link> instead of CSS @import.
          Using <link> allows the browser to fetch fonts in parallel
          instead of blocking CSS parsing, reducing layout shift (FOUT).
        */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Nunito', Arial, Helvetica, sans-serif" }} suppressHydrationWarning>
        {/* SVG Noise Filter for Frosted Glass effect */}
        <svg className="fixed w-0 h-0" aria-hidden="true">
          <defs>
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
        </svg>
        {children}
        <SocialFloatingLinks />
        <ChatSearch />
        <ScrollToTop />
      </body>
    </html>
  );
}
