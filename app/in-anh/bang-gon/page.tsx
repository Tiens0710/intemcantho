import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function BangGonPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="bang-gon" products={products} />;
}
