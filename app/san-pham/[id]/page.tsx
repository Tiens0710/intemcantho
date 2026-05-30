import { getProduct, getCategoryUrl } from "@/lib/wordpress";
import { absoluteUrl } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ProductSchema, BreadcrumbSchema } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ProductDetail from "@/components/ProductDetail";
import ProductDetailTabs from "@/components/ProductDetailTabs";
import FeaturedProducts from "@/components/FeaturedProducts";
import StoreLocationSection from "@/components/StoreLocationSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) return { title: "Sản phẩm không tồn tại" };

  const title = `${product.title} | In tem Cần Thơ`;
  const description = product.description || `Sản phẩm ${product.title} — in tem nhãn, bao bì, ấn phẩm chất lượng cao tại Cần Thơ.`;
  const url = absoluteUrl(`/san-pham/${id}`);
  const image = product.image || "/logo.png";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "In tem Cần Thơ",
      locale: "vi_VN",
      type: "website",
      images: [
        {
          url: image.startsWith("http") ? image : absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : absoluteUrl(image)],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <ProductSchema
        name={product.title}
        description={product.description || `${product.title} — sản phẩm in ấn chất lượng cao tại Cần Thơ`}
        image={product.image}
        price={typeof product.price === 'number' ? product.price : undefined}
        url={absoluteUrl(`/san-pham/${id}`)}
        category={product.category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Trang chủ", url: absoluteUrl("/") },
          { name: getCategoryUrl(product.category).label, url: absoluteUrl(getCategoryUrl(product.category).url) },
          { name: product.title, url: absoluteUrl(`/san-pham/${id}`) },
        ]}
      />
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
          <Link href={getCategoryUrl(product.category).url} className="hover:text-[#E6792A] transition-colors">
            {getCategoryUrl(product.category).label}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <span className="font-medium text-[#E6792A] truncate max-w-[200px]">{product.title}</span>
        </nav>

        {/* Back button */}
        <Link
          href={getCategoryUrl(product.category).url}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#E6792A]"
        >
          <ChevronLeft className="h-4 w-4" />
          Quay lại {getCategoryUrl(product.category).label}
        </Link>
      </div>

      {/* Product Detail + Tabs */}
      <ProductDetail
        product={{
          id,
          title: product.title,
          subtitle: product.shortDescription || "",
          description: product.description,
          image: product.image,
          specs: product.specs,
          sizes: product.sizes,
          purposes: product.purposes,
          price: product.price ? (typeof product.price === 'number' ? product.price : (product.price.includes('$') ? 0 : parseInt(product.price.replace(/\D/g, '')) || 0)) : undefined,
          deliveryDate: product.deliveryDate,
          gallery: product.gallery,
        }}
      />
      <ProductDetailTabs productName={product.title} productDescription={product.description} />
      <FeaturedProducts />
      <StoreLocationSection />
      <Footer />
    </div>
  );
}
