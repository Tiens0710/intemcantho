import { getProduct } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProductDetail from "@/components/ProductDetail";
import ProductDetailTabs from "@/components/ProductDetailTabs";
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

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white pt-20">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-amber-700 transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-gray-400">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="mx-auto max-w-6xl px-4 pt-4 pb-0">
        <Link
          href="/#best-seller"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-amber-700 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Quay lại
        </Link>
      </div>

      {/* Product Detail + Tabs */}
      <ProductDetail
        product={{
          title: product.title,
          subtitle: product.description,
          image: product.image,
        }}
      />
      <ProductDetailTabs />
    </div>
  );
}
