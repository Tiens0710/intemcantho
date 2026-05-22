import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function MenuPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="menu" products={products} />;
}