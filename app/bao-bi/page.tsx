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
  { id: 1, name: "Decal Giấy Kraft", category: "decal-paper", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", price: "50000", description: "Decal giấy kraft chất lượng cao" },
  { id: 2, name: "Decal Sticker", category: "decal-paper", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", price: "45000", description: "Decal sticker bền bỉ" },
  { id: 3, name: "Decal Tem Bể", category: "decal-paper", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", price: "60000", description: "Decal tem bể bảo hành" },
  { id: 4, name: "Decal Tem Tròn", category: "decal-paper", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", price: "40000", description: "Decal tem tròn đa dạng kích thước" },
  { id: 5, name: "Decal Tem Nhãn Chai Nhựa", category: "decal-plastic", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", price: "12000", description: "Decal tem nhãn chai nhựa" },
  { id: 6, name: "Decal Tem Nhãn Sản Phẩm", category: "decal-plastic", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", price: "11000", description: "Decal tem nhãn sản phẩm" },
  { id: 7, name: "Decal Tem Nhãn Thực Phẩm", category: "decal-plastic", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", price: "15000", description: "Decal tem nhãn thực phẩm" },
  { id: 8, name: "Decal Tem Nhựa Sản Phẩm", category: "decal-plastic", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", price: "13000", description: "Decal tem nhựa sản phẩm" },
  { id: 9, name: "Decal Trong Chống Nước", category: "decal-uv", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", price: "180000", description: "Decal trong chống nước" },
  { id: 10, name: "Decal UV DTF", category: "decal-uv", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", price: "200000", description: "Decal UV DTF cao cấp" },
  { id: 11, name: "Decal xi vàng / xi bạc", category: "decal-gold", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", price: "250000", description: "Decal xi vàng hoặc xi bạc sang trọng" },
  { id: 12, name: "In Ấn Bao Bì Sản Phẩm", category: "packaging", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", price: "300000", description: "In ấn bao bì sản phẩm chuyên nghiệp" },
  { id: 13, name: "Tem Bảo Hành", category: "other", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", price: "80000", description: "Tem bảo hành chống giả" },
  { id: 14, name: "Tem Chống Giả", category: "other", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", price: "100000", description: "Tem chống giả hologram" },
  { id: 15, name: "Tem Dán Chai", category: "other", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", price: "35000", description: "Tem dán chai nước" },
  { id: 16, name: "Tem Dán Hộp", category: "other", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp", price: "40000", description: "Tem dán hộp carton" },
  { id: 17, name: "Tem Dán Sản Phẩm", category: "other", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp", price: "30000", description: "Tem dán sản phẩm" },
  { id: 18, name: "Tem Nhãn Decal", category: "other", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp", price: "55000", description: "Tem nhãn decal chất lượng cao" },
];

const categories: ListingCategory[] = [
  { id: "all", name: "Ấn phẩm bao bì", count: products.length, icon: <Grid3x3 className="w-4 h-4" /> },
  { id: "decal-paper", name: "Decal giấy", count: products.filter((p) => p.category === "decal-paper").length, icon: logoIcon },
  { id: "decal-plastic", name: "Decal nhựa", count: products.filter((p) => p.category === "decal-plastic").length, icon: logoIcon },
  { id: "decal-uv", name: "Decal UV DTF", count: products.filter((p) => p.category === "decal-uv").length, icon: logoIcon },
  { id: "decal-gold", name: "Decal xi bạc/vàng", count: products.filter((p) => p.category === "decal-gold").length, icon: logoIcon },
  { id: "packaging", name: "In ấn bao bì", count: products.filter((p) => p.category === "packaging").length, icon: logoIcon },
  { id: "other", name: "Tem nhãn khác", count: products.filter((p) => p.category === "other").length, icon: logoIcon },
];

export default function PackagingProducts() {
  return (
    <ProductListingPage
      breadcrumbLabel="Ấn phẩm bao bì"
      titleMain="Ấn phẩm"
      titleAccent="bao bì"
      description="Giải pháp in ấn tem nhãn decal và bao bì chuyên nghiệp. Đa dạng chất liệu, in ấn sắc nét, bám dính bền bỉ cho sản phẩm của bạn."
      features={[
        { icon: <Award className="w-3 h-3" />, title: "Chất liệu", desc: "Đa dạng" },
        { icon: <Search className="w-3 h-3" />, title: "In ấn", desc: "Sắc nét" },
        { icon: <Truck className="w-3 h-3" />, title: "Giao hàng", desc: "Nhanh chóng" },
      ]}
      categories={categories}
      categoryNames={{
        "decal-paper": "Decal Giấy",
        "decal-plastic": "Decal Nhựa",
        "decal-uv": "Decal UV DTF",
        "decal-gold": "Decal Xi Bạc/Vàng",
        packaging: "Bao Bì",
        other: "Tem Nhãn",
      }}
      products={products}
      priceMax={300000}
    />
  );
}
