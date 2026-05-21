import { createNoIndexMetadata } from "@/lib/seo";

export const metadata = createNoIndexMetadata("Dang nhap");

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}

