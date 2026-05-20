import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function ToRoiPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="to-roi" products={products} />;
}