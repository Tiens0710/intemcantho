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
      <body className="min-h-screen bg-white text-gray-900" suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
