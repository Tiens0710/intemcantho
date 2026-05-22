import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function CataloguePage() {
  const products = await getProducts();
  return <CategoryPageClient slug="catalogue" products={products} />;
}