"use client";

import ProductListingPage, {
  ListingCategory,
  ListingProduct,
} from "@/components/category/ProductListingPage";
import { Award, Grid3x3, Search, Truck } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { getProducts, Product } from "@/lib/wordpress";

const logoIcon = (
  <Image src="/logo.png" width={16} height={16} alt="" className="w-4 h-4 opacity-70" />
);

const MARKETING_CATEGORIES = [
  "marketing", "display", "catalogue", "menu", "voucher",
  "hashtag-cam-tay", "hiflex", "standee", "backdrop",
  "brochure", "to-roi", "to-gap",
];

function getMarketingCategory(product: Product) {
  const cat = product.category.toLowerCase();
  const title = product.title.toLowerCase();
  if (cat.includes("backdrop") || title.includes("backdrop")) return "backdrop";
  if (cat.includes("hiflex") || cat.includes("banner") || title.includes("hiflex") || title.includes("băng rôn")) return "banner";
  if (cat.includes("catalogue") || title.includes("catalogue")) return "catalogue";
  if (cat.includes("standee") || title.includes("standee")) return "standee";
  if (cat.includes("brochure") || cat.includes("to-gap") || cat.includes("to-roi") || title.includes("brochure") || title.includes("tờ rơi") || title.includes("tờ gấp")) return "brochure";
  if (cat.includes("menu") || title.includes("menu")) return "menu";
  return "other";
}

export default function MarketingProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts();
        // Filter by marketing categories or fall back to mock marketing products
        const marketingData = data.filter((product) => {
          const cat = product.category.toLowerCase();
          // Match both raw categories (from mock data) and mapped categories (from live API)
          const marketingRaw = ["catalogue", "menu", "voucher", "hashtag-cam-tay", "hiflex", "standee"];
          return (
            MARKETING_CATEGORIES.includes(cat) ||
            marketingRaw.includes(cat) ||
            cat === "marketing" ||
            cat === "display" ||
            cat === "office-products" ||
            product.title.toLowerCase().includes("standee") ||
            product.title.toLowerCase().includes("banner") ||
            product.title.toLowerCase().includes("hiflex") ||
            product.title.toLowerCase().includes("catalogue") ||
            product.title.toLowerCase().includes("menu") ||
            product.title.toLowerCase().includes("voucher") ||
            product.title.toLowerCase().includes("hashtag")
          );
        });
        setProducts(marketingData);
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
        category: getMarketingCategory(product),
      })),
    [products],
  );

  const categories: ListingCategory[] = useMemo(
    () => [
      { id: "all", name: "Tất cả", count: listingProducts.length, icon: <Grid3x3 className="w-4 h-4" /> },
      { id: "backdrop", name: "Backdrop Sự Kiện", count: listingProducts.filter((p) => p.category === "backdrop").length, icon: logoIcon },
      { id: "banner", name: "Băng Rôn Hiflex", count: listingProducts.filter((p) => p.category === "banner").length, icon: logoIcon },
      { id: "catalogue", name: "Catalogue", count: listingProducts.filter((p) => p.category === "catalogue").length, icon: logoIcon },
      { id: "standee", name: "Standee", count: listingProducts.filter((p) => p.category === "standee").length, icon: logoIcon },
      { id: "brochure", name: "Brochure", count: listingProducts.filter((p) => p.category === "brochure").length, icon: logoIcon },
      { id: "menu", name: "Menu", count: listingProducts.filter((p) => p.category === "menu").length, icon: logoIcon },
    ],
    [listingProducts],
  );

  return (
    <ProductListingPage
      breadcrumbLabel="Ấn phẩm tiếp thị"
      titleMain="Ấn phẩm"
      titleAccent="tiếp thị"
      heroBackgroundImage="/kinhnghiem/background.png"
      description="Các sản phẩm in ấn chuyên nghiệp cho tiếp thị và quảng cáo. Từ backdrop đến catalogue, mỗi sản phẩm đều được thiết kế để tạo ấn tượng mạnh mẽ."
      features={[
        { icon: <Award className="w-3 h-3" />, title: "Chất lượng", desc: "Sắc nét" },
        { icon: <Search className="w-3 h-3" />, title: "Thiết kế", desc: "Sáng tạo" },
        { icon: <Truck className="w-3 h-3" />, title: "Giao hàng", desc: "Nhanh chóng" },
      ]}
      categories={categories}
      categoryNames={{
        backdrop: "Backdrop",
        banner: "Băng Rôn",
        catalogue: "Catalogue",
        standee: "Standee",
        brochure: "Brochure",
        menu: "Menu",
        other: "Khác",
      }}
      products={listingProducts}
      priceMax={1500000}
      isLoading={isLoading}
    />
  );
}
