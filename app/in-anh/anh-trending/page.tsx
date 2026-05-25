import { getProduct } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProductDetail from "@/components/ProductDetail";
import ProductDetailTabs from "@/components/ProductDetailTabs";
import FeaturedProducts from "@/components/FeaturedProducts";
import StoreLocationSection from "@/components/StoreLocationSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

export async function generateMetadata() {
  const product = await getProduct("anh-trending");
  if (!product) return { title: "Sản phẩm không tồn tại" };
  return {
    title: `${product.title} | Intem Cần Thơ`,
    description: product.description,
  };
}

export default async function AnhTrendingProductPage() {
  const id = "anh-trending";
  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* Breadcrumb + Back button */}
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-0">
        {/* Breadcrumb */}
        <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="flex items-center gap-1 hover:text-[#E6792A] transition-colors">
            <Home className="h-3.5 w-3.5" />
            Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <Link href="/in-anh" className="hover:text-[#E6792A] transition-colors">
            In ảnh
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <span className="font-medium text-[#E6792A] truncate max-w-[200px]">{product.title}</span>
        </nav>

        {/* Back button */}
        <Link
          href="/in-anh"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#E6792A]"
        >
          <ChevronLeft className="h-4 w-4" />
          Quay lại danh sách in ảnh
        </Link>
      </div>

      {/* Product Detail + Tabs */}
      <ProductDetail
        product={{
          id,
          title: product.title,
          subtitle: product.description,
          image: product.image,
          specs: product.specs,
          sizes: product.sizes,
          purposes: product.purposes,
          price: product.price ? (typeof product.price === 'number' ? product.price : (product.price.includes('$') ? 0 : parseInt(product.price.replace(/\D/g, '')) || 0)) : undefined,
          deliveryDate: product.deliveryDate,
          gallery: product.gallery,
        }}
      />
      <ProductDetailTabs productName={product.title} />
      <FeaturedProducts />
      <StoreLocationSection />
      <Footer />
    </div>
  );
}
