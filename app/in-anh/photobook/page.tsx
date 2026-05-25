import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function PhotobookPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="photobook" products={products} />;
}