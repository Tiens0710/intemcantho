import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function HiflexPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="hiflex" products={products} />;
}