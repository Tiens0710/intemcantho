import { createNoIndexMetadata } from "@/lib/seo";

export const metadata = createNoIndexMetadata("Dang ky");

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}

