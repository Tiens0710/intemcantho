import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function StandeePage() {
  const products = await getProducts();
  return <CategoryPageClient slug="poster" products={products} />;
}