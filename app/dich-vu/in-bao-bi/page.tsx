import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function BaoBiPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="bao-bi" products={products} />;
}