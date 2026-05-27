import { redirect } from "next/navigation";

// SEO: /standee → /dich-vu/standee (canonical URL)
export default function StandeePage() {
  redirect("/dich-vu/standee");
}