"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const standeeProducts: PriceGridProduct[] = [
  {
    category: "Standee chân chữ X",
    name: "Standee chữ X mini",
    detail: "160 x 60cm - In PP, cán bóng/mờ",
    price: "240.000 VNĐ",
    image: "/standee/section1_1.png",
    href: "/san-pham/standee-chu-x-mini",
  },
  {
    category: "Standee chân chữ X",
    name: "Standee chữ X tiêu chuẩn",
    detail: "80 x 180cm - In PP, cán bóng/mờ",
    price: "320.000 VNĐ",
    image: "/standee/section1_1.png",
    href: "/san-pham/standee-chu-x-tieu-chuan",
  },
  {
    category: "Standee cuốn nhôm",
    name: "Standee cuốn nhôm mini",
    detail: "160 x 60cm - In PP, cán bóng/mờ",
    price: "370.000 VNĐ",
    image: "/standee/section1_2.png",
    href: "/san-pham/standee-cuon-nhom-mini",
  },
  {
    category: "Standee cuốn nhôm",
    name: "Standee cuốn nhôm cao",
    detail: "80 x 200cm - In PP, cán bóng/mờ",
    price: "470.000 VNĐ",
    image: "/standee/section1_2.png",
    href: "/san-pham/standee-cuon-nhom-cao",
  },
];

export default function StandeePricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN STANDEE"
      products={standeeProducts}
      note="* Giá chưa bao gồm thiết kế. Vui lòng liên hệ để nhận báo giá chi tiết theo số lượng và yêu cầu riêng."
    />
  );
}
