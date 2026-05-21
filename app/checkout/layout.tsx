import { createNoIndexMetadata } from "@/lib/seo";

export const metadata = createNoIndexMetadata("Thanh toan");

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

