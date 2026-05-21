import { createNoIndexMetadata } from "@/lib/seo";

export const metadata = createNoIndexMetadata("Gio hang");

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}

