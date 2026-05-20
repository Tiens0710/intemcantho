import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function DanhThiepPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="danh-thiep" products={products} />;
}