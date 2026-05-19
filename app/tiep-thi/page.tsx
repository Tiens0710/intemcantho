"use client";

import ProductListingPage, {
  ListingCategory,
  ListingProduct,
} from "@/components/category/ProductListingPage";
import { Award, Grid3x3, Search, Truck } from "lucide-react";
import Image from "next/image";

const logoIcon = (
  <Image src="/logo.png" width={16} height={16} alt="" className="w-4 h-4 opacity-70" />
);

const products: ListingProduct[] = [
  { id: 1, name: "Backdrop Sự Kiện Kỷ Niệm", category: "backdrop", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", description: "Backdrop in nhanh cho sự kiện", price: "500000" },
  { id: 2, name: "Backdrop Sự Kiện Khai Trương", category: "backdrop", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", description: "Backdrop khai trương cửa hàng", price: "600000" },
  { id: 3, name: "Backdrop Sự Kiện Hội Thảo", category: "backdrop", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", description: "Backdrop hội thảo chuyên nghiệp", price: "550000" },
  { id: 4, name: "Backdrop Sự Kiện Hôn Nhân", category: "backdrop", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", description: "Backdrop hôn nhân sang trọng", price: "700000" },
  { id: 5, name: "Băng Rôn Hiflex Quảng Cáo", category: "banner", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", description: "Băng rôn hiflex quảng cáo", price: "200000" },
  { id: 6, name: "Băng Rôn Hiflex Khuyến Mãi", category: "banner", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", description: "Băng rôn khuyến mãi bán hàng", price: "180000" },
  { id: 7, name: "Băng Rôn Hiflex Sự Kiện", category: "banner", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", description: "Băng rôn sự kiện ngoài trời", price: "220000" },
  { id: 8, name: "Băng Rôn Hiflex Công Ty", category: "banner", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", description: "Băng rôn công ty chuyên nghiệp", price: "250000" },
  { id: 9, name: "Catalogue Sản Phẩm", category: "catalogue", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", description: "Catalogue sản phẩm cao cấp", price: "150000" },
  { id: 10, name: "Catalogue Dịch Vụ", category: "catalogue", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", description: "Catalogue dịch vụ chuyên nghiệp", price: "160000" },
  { id: 11, name: "Catalogue Thời Trang", category: "catalogue", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", description: "Catalogue thời trang sang trọng", price: "180000" },
  { id: 12, name: "Catalogue Bất Động Sản", category: "catalogue", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", description: "Catalogue bất động sản", price: "200000" },
  { id: 13, name: "Standee Quảng Cáo", category: "standee", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", description: "Standee quảng cáo sản phẩm", price: "350000" },
  { id: 14, name: "Standee Sự Kiện", category: "standee", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", description: "Standee sự kiện chuyên nghiệp", price: "400000" },
  { id: 15, name: "Standee Khuyến Mãi", category: "standee", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", description: "Standee khuyến mãi bán hàng", price: "300000" },
  { id: 16, name: "Standee Giới Thiệu Công Ty", category: "standee", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", description: "Standee giới thiệu công ty", price: "380000" },
  { id: 17, name: "Brochure Gấp 3", category: "brochure", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", description: "Brochure gấp 3 chuyên nghiệp", price: "120000" },
  { id: 18, name: "Brochure Gấp 4", category: "brochure", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", description: "Brochure gấp 4 cao cấp", price: "140000" },
  { id: 19, name: "Brochure Gấp Z", category: "brochure", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", description: "Brochure gấp Z độc đáo", price: "130000" },
  { id: 20, name: "Brochure Gấp Accordion", category: "brochure", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", description: "Brochure gấp accordion", price: "150000" },
  { id: 21, name: "Menu Nhà Hàng", category: "menu", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", description: "Menu nhà hàng cao cấp", price: "200000" },
  { id: 22, name: "Menu Quán Cà Phê", category: "menu", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", description: "Menu quán cà phê sang trọng", price: "180000" },
  { id: 23, name: "Menu Quán Ăn", category: "menu", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", description: "Menu quán ăn chuyên nghiệp", price: "170000" },
  { id: 24, name: "Menu Bar Cocktail", category: "menu", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", description: "Menu bar cocktail đẳng cấp", price: "220000" },
];

const categories: ListingCategory[] = [
  { id: "all", name: "Tất cả", count: products.length, icon: <Grid3x3 className="w-4 h-4" /> },
  { id: "backdrop", name: "Backdrop Sự Kiện", count: products.filter((p) => p.category === "backdrop").length, icon: logoIcon },
  { id: "banner", name: "Băng Rôn Hiflex", count: products.filter((p) => p.category === "banner").length, icon: logoIcon },
  { id: "catalogue", name: "Catalogue", count: products.filter((p) => p.category === "catalogue").length, icon: logoIcon },
  { id: "standee", name: "Standee", count: products.filter((p) => p.category === "standee").length, icon: logoIcon },
  { id: "brochure", name: "Brochure", count: products.filter((p) => p.category === "brochure").length, icon: logoIcon },
  { id: "menu", name: "Menu", count: products.filter((p) => p.category === "menu").length, icon: logoIcon },
];

export default function MarketingProducts() {
  return (
    <ProductListingPage
      breadcrumbLabel="Ấn phẩm tiếp thị"
      titleMain="Ấn phẩm"
      titleAccent="tiếp thị"
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
      }}
      products={products}
      priceMax={700000}
    />
  );
}
