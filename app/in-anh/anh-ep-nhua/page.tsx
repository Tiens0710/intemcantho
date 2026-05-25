import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function AnhEpNhuaPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="anh-ep-nhua" products={products} />;
}