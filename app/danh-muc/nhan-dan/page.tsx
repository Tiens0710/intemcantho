import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function InTemNhanPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="nhan-dan" products={products} />;
}
