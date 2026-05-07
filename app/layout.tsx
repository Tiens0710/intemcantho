import type { Metadata } from "next";
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
    <html lang="vi" suppressHydrationWarning>
      <head>
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
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Geist:wght@400;500;600;700&family=Great+Vibes&family=Lato:wght@300;400;500;700&family=Manrope:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap"
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Nunito', Arial, Helvetica, sans-serif" }} suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
