"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const nhanDanProducts: PriceGridProduct[] = [
  {
    category: "Decal Giấy",
    name: "Tem Decal Giấy thường",
    detail: "Tùy chọn kích thước - Giấy thường bế demi sẵn",
    price: "Chỉ từ 1.500 VNĐ/cái",
    image: "/nhandan/section1_1.png",
    href: "/lien-he",
  },
  {
    category: "Decal Giấy",
    name: "Tem Decal Giấy cao cấp",
    detail: "Decal giấy Couche - Cán mờ/bóng bế demi",
    price: "Chỉ từ 2.000 VNĐ/cái",
    image: "/nhandan/section1_1.png",
    href: "/lien-he",
  },
  {
    category: "Decal Nhựa",
    name: "Tem Decal Nhựa trắng",
    detail: "Decal nhựa PVC - Chống nước, chống trầy",
    price: "Chỉ từ 2.500 VNĐ/cái",
    image: "/nhandan/section1_2.png",
    href: "/lien-he",
  },
  {
    category: "Decal Nhựa",
    name: "Tem Decal Nhựa trong",
    detail: "Decal nhựa trong suốt - Chống nước, in UV",
    price: "Chỉ từ 3.000 VNĐ/cái",
    image: "/nhandan/section1_2.png",
    href: "/lien-he",
  },
];

export default function NhanDanPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN TEM NHÃN"
      products={nhanDanProducts}
      note="* Giá chưa bao gồm thiết kế. Màu sắc thành phẩm có thể chênh lệch 8/10 so với màu trên màn hình. Nhận in cả số lượng ít."
    />
  );
}