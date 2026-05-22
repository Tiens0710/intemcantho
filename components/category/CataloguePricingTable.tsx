"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const catalogueProducts: PriceGridProduct[] = [
  {
    category: "Catalogue - Cơ bản",
    name: "Catalogue 4 trang",
    detail: "A4 - Giấy C300 cán mờ",
    price: "Chỉ từ 8.000đ/ cuốn",
    image: "/bannercatalog/anphamtiepthi.jpeg",
    href: "/san-pham/catalogue-4-trang",
  },
  {
    category: "Catalogue - Cơ bản",
    name: "Catalogue 8 trang",
    detail: "A4 - Giấy C250 cán mờ",
    price: "Chỉ từ 15.000đ/ cuốn",
    image: "/anphamtiepthi/catalogue/background.jpeg",
    href: "/san-pham/catalogue-8-trang",
  },
  {
    category: "Catalogue - Cơ bản",
    name: "Catalogue 12 trang",
    detail: "A4 - Giấy C250 cán mờ",
    price: "Chỉ từ 22.000đ/ cuốn",
    image: "/brochure/section 1.png",
    href: "/san-pham/catalogue-12-trang",
  },
  {
    category: "Catalogue - Cơ bản",
    name: "Catalogue 16 trang",
    detail: "A4 - Giấy C200 cán mờ",
    price: "Chỉ từ 28.000đ/ cuốn",
    image: "/danhmuc3.png",
    href: "/san-pham/catalogue-16-trang",
  },
  {
    category: "Catalogue - Cơ bản",
    name: "Catalogue 24 trang",
    detail: "A4 - Giấy C200 cán mờ",
    price: "Chỉ từ 38.000đ/ cuốn",
    image: "/danhmuc5.png",
    href: "/san-pham/catalogue-24-trang",
  },
  {
    category: "Catalogue - Cao cấp",
    name: "Catalogue bìa cứng",
    detail: "Giấy C300 + Bìa 350gsm",
    price: "Chỉ từ 45.000đ/ cuốn",
    image: "/brochure/background1.jpeg",
    href: "/san-pham/catalogue-bia-cung",
  },
  {
    category: "Catalogue - Cao cấp",
    name: "Catalogue ép kim logo",
    detail: "Giấy mỹ thuật + Ép kim",
    price: "Chỉ từ 55.000đ/ cuốn",
    image: "/bannercatalog/anphamtiepthi.jpeg",
    href: "/san-pham/catalogue-ep-kim-logo",
  },
  {
    category: "Catalogue - Cao cấp",
    name: "Catalogue giấy mỹ thuật",
    detail: "Giấy Conqueror 250gsm",
    price: "Chỉ từ 48.000đ/ cuốn",
    image: "/danhmuc6.png",
    href: "/san-pham/catalogue-giay-my-thuat",
  },
];

export default function CataloguePricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN CATALOGUE"
      products={catalogueProducts}
      note="* Giá in chưa bao gồm phí thiết kế. Thành phẩm sẽ có sau 5 - 7 ngày. Số lượng đặt tối thiểu 100 cuốn."
    />
  );
}
