"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const toroiProducts: PriceGridProduct[] = [
  {
    category: "Tờ rơi 1 mặt",
    name: "Tờ rơi A5",
    detail: "14.8 x 21cm - Couche 100gsm",
    price: "80.000 VNĐ / 500 tờ",
    image: "/danhmuc4.png",
    href: "/san-pham/toroi-a5-1-mat",
  },
  {
    category: "Tờ rơi 1 mặt",
    name: "Tờ rơi A4",
    detail: "21 x 29.7cm - Couche 100gsm",
    price: "140.000 VNĐ / 500 tờ",
    image: "/danhmuc5.png",
    href: "/san-pham/toroi-a4-1-mat",
  },
  {
    category: "Tờ rơi 1 mặt",
    name: "Tờ rơi A5 cao cấp",
    detail: "14.8 x 21cm - Couche 150gsm",
    price: "100.000 VNĐ / 500 tờ",
    image: "/danhmuc6.png",
    href: "/san-pham/toroi-a5-cao-cap-1-mat",
  },
  {
    category: "Tờ rơi 2 mặt",
    name: "Tờ rơi A5 2 mặt",
    detail: "14.8 x 21cm - Couche 100gsm",
    price: "130.000 VNĐ / 500 tờ",
    image: "/danhmuc4.png",
    href: "/san-pham/toroi-a5-2-mat",
  },
  {
    category: "Tờ rơi 2 mặt",
    name: "Tờ rơi A4 2 mặt",
    detail: "21 x 29.7cm - Couche 100gsm",
    price: "220.000 VNĐ / 500 tờ",
    image: "/danhmuc5.png",
    href: "/san-pham/toroi-a4-2-mat",
  },
  {
    category: "Tờ rơi 2 mặt",
    name: "Tờ rơi A5 cao cấp 2 mặt",
    detail: "14.8 x 21cm - Couche 150gsm",
    price: "160.000 VNĐ / 500 tờ",
    image: "/danhmuc6.png",
    href: "/san-pham/toroi-a5-cao-cap-2-mat",
  },
];

export default function ToRoiPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN TỜ RƠI"
      products={toroiProducts}
      note="* Giá chưa bao gồm thiết kế. Vui lòng liên hệ để nhận báo giá chi tiết theo số lượng và yêu cầu riêng."
    />
  );
}
