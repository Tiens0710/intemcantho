import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function AnhCuoiPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="anh-cuoi" products={products} />;
}