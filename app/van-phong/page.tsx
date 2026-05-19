"use client";

import ProductListingPage, {
  ListingCategory,
  ListingProduct,
} from "@/components/category/ProductListingPage";
import { getProducts, Product } from "@/lib/wordpress";
import { Award, Grid3x3, Search, Truck } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const logoIcon = (
  <Image src="/logo.png" width={16} height={16} alt="" className="w-4 h-4 opacity-70" />
);

function getOfficeCategory(product: Product) {
  if (product.id.includes("business-card")) return "business-card";
  if (product.id.includes("envelope")) return "envelope";
  if (product.id.includes("folder")) return "folder";
  if (product.id.includes("uniform")) return "uniform";
  return "other";
}

export default function OfficeProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts();
        setProducts(data.filter((product) => product.category === "office-products"));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const listingProducts: ListingProduct[] = useMemo(
    () =>
      products.map((product) => ({
        id: product.id,
        name: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        category: getOfficeCategory(product),
      })),
    [products],
  );

  const categories: ListingCategory[] = useMemo(
    () => [
      { id: "all", name: "Tất cả", count: listingProducts.length, icon: <Grid3x3 className="w-4 h-4" /> },
      { id: "business-card", name: "Danh Thiếp", count: listingProducts.filter((p) => p.category === "business-card").length, icon: logoIcon },
      { id: "envelope", name: "Bao Thư", count: listingProducts.filter((p) => p.category === "envelope").length, icon: logoIcon },
      { id: "folder", name: "Folder", count: listingProducts.filter((p) => p.category === "folder").length, icon: logoIcon },
      { id: "uniform", name: "Áo Đồng Phục", count: listingProducts.filter((p) => p.category === "uniform").length, icon: logoIcon },
    ],
    [listingProducts],
  );

  return (
    <ProductListingPage
      breadcrumbLabel="Ấn phẩm văn phòng"
      titleMain="Ấn phẩm"
      titleAccent="văn phòng"
      description="Nâng tầm chuyên nghiệp cho doanh nghiệp với các sản phẩm in ấn cao cấp. Từ danh thiếp đến bộ nhận diện văn phòng, mỗi chi tiết đều được chăm chút tỉ mỉ."
      features={[
        { icon: <Award className="w-3 h-3" />, title: "Chất lượng", desc: "Chuẩn màu" },
        { icon: <Search className="w-3 h-3" />, title: "Thiết kế", desc: "Tinh tế" },
        { icon: <Truck className="w-3 h-3" />, title: "Giao hàng", desc: "Nhanh chóng" },
      ]}
      categories={categories}
      categoryNames={{
        "business-card": "Danh thiếp",
        envelope: "Bao thư",
        folder: "Folder",
        uniform: "Áo đồng phục",
        other: "Văn phòng",
      }}
      products={listingProducts}
      priceMax={350000}
      isLoading={isLoading}
      featuredProductsTitle="Sản Phẩm Nổi Bật"
    />
  );
}
