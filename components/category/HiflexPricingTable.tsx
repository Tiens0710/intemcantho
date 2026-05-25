"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const hiflexProducts: PriceGridProduct[] = [
  {
    category: "Hiflex không đèn",
    name: "Băng rôn Hiflex 3m",
    detail: "300x100cm - Hiflex 340gsm",
    price: "Chỉ từ 270.000đ",
    image: "/danhmuc2.png",
    href: "/san-pham/bang-ron-hiflex-3m",
  },
  {
    category: "Hiflex không đèn",
    name: "Băng rôn Hiflex 5m",
    detail: "500x100cm - Hiflex 340gsm",
    price: "Chỉ từ 450.000đ",
    image: "/danhmuc4.png",
    href: "/san-pham/bang-ron-hiflex-5m",
  },
  {
    category: "Hiflex có đèn",
    name: "Banner Hiflex có đèn 3m",
    detail: "300x100cm - Hiflex hở đèn + đèn LED",
    price: "Chỉ từ 540.000đ",
    image: "/danhmuc5.png",
    href: "/san-pham/banner-hiflex-co-den-3m",
  },
  {
    category: "Hiflex có đèn",
    name: "Banner Hiflex có đèn 5m",
    detail: "500x100cm - Hiflex hở đèn + đèn LED",
    price: "Chỉ từ 900.000đ",
    image: "/danhmuc3.png",
    href: "/san-pham/banner-hiflex-co-den-5m",
  },
  {
    category: "Hiflex bồi formex",
    name: "Backdrop Hiflex bồi formex",
    detail: "200x100cm - Hiflex bồi formex 5mm",
    price: "Chỉ từ 500.000đ",
    image: "/danhmuc2.png",
    href: "/san-pham/backdrop-hiflex-boi-formex",
  },
  {
    category: "Hiflex bồi formex",
    name: "Billboard Hiflex bồi formex",
    detail: "300x150cm - Hiflex bồi formex 5mm",
    price: "Chỉ từ 1.125.000đ",
    image: "/danhmuc4.png",
    href: "/san-pham/billboard-hiflex-boi-formex",
  },
];

export default function HiflexPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN BẠT HIFLEX"
      products={hiflexProducts}
      note="* Giá chưa bao gồm thiết kế. Vui lòng liên hệ để nhận báo giá chi tiết theo số lượng và yêu cầu riêng."
    />
  );
}