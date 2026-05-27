import { redirect } from "next/navigation";

// SEO: /brochure → /danh-muc/to-gap (canonical URL)
export default function BrochurePage() {
  redirect("/danh-muc/to-gap");
}