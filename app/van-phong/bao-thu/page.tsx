import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function BaoThuPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="bao-thu" products={products} />;
}
