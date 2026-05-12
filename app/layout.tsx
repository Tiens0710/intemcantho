import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Duky Printing",
  description: "In tem nhan decal, bao bi, an pham van phong tai Can Tho.",
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap"
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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
