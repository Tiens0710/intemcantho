import { getProducts } from "@/lib/wordpress";
import CategoryPageClient from "@/components/category/CategoryPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const products = await getProducts();

  return <CategoryPageClient slug={slug} products={products} />;
}