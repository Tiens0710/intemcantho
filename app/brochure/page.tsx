import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function BrochurePage() {
  const products = await getProducts();
  return <CategoryPageClient slug="to-gap" products={products} />;
}