import { createNoIndexMetadata } from "@/lib/seo";
import AccountLayoutClient from "@/components/account/AccountLayoutClient";

export const metadata = createNoIndexMetadata("Tai khoan");

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <AccountLayoutClient>{children}</AccountLayoutClient>;
}

