import { createNoIndexMetadata } from "@/lib/seo";

export const metadata = createNoIndexMetadata("Admin");

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}

