import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function HashtagCamTayPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="hashtag-cam-tay" products={products} />;
}
