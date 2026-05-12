import { getProduct } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProductDetail from "@/components/ProductDetail";
import ProductDetailTabs from "@/components/ProductDetailTabs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) return { title: "Sản phẩm không tồn tại" };
  return {
    title: `${product.title} | Intem Cần Thơ`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* Back button */}
      <div className="mx-auto max-w-6xl px-0 pt-24 pb-0">
        <Link
          href="/#best-seller"
          className="inline-flex items-center gap-2 text-lg font-semibold text-[#9a5b24] transition-colors hover:text-[#7f4f1f]"
        >
          <ChevronLeft className="h-5 w-5" />
          Quay lại
        </Link>
      </div>

      {/* Product Detail + Tabs */}
      <ProductDetail
        product={{
          id,
          title: product.title,
          subtitle: product.description,
          image: product.image,
        }}
      />
      <ProductDetailTabs productName={product.title} />
      <FeaturedProducts />
    </div>
  );
}
