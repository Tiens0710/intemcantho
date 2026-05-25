"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const anhEpNhuaProducts: PriceGridProduct[] = [
  {
    category: "Ảnh ép nhựa PVC",
    name: "Ảnh ép PVC 10x15cm",
    detail: "PVC mỏng, in laser, chống nước",
    price: "Chỉ từ 15.000đ",
    image: "/inanh/epnhua/sanpham1.webp",
    href: "/san-pham/anh-ep-nhua-pvc-10x15",
  },
  {
    category: "Ảnh ép nhựa PVC",
    name: "Ảnh ép PVC 13x18cm",
    detail: "PVC dày 0.5mm, màu sắc trung thực",
    price: "Chỉ từ 25.000đ",
    image: "/inanh/epnhua/sanpham2.png",
    href: "/san-pham/anh-ep-nhua-pvc-13x18",
  },
  {
    category: "Ảnh ép nhựa cứng",
    name: "Ảnh ép cứng 15x21cm",
    detail: "Nhựa cứng 0.5mm, cán màng chống trầy",
    price: "Chỉ từ 35.000đ",
    image: "/inanh/epnhua/background.jpeg",
    href: "/san-pham/anh-ep-nhua-cung-15x21",
  },
  {
    category: "Ảnh ép nhựa cứng",
    name: "Ảnh ép cứng 20x30cm",
    detail: "Nhựa cứng cao cấp, phù hợp khung treo tường",
    price: "Chỉ từ 45.000đ",
    image: "/inanh/epnhua/background.jpeg",
    href: "/san-pham/anh-ep-nhua-cung-20x30",
  },
  {
    category: "Ảnh ép nhựa cao cấp",
    name: "Ảnh ép cao cấp 30x40cm",
    detail: "Nhựa dày, chống trầy, phù hợp ảnh chân dung",
    price: "Chỉ từ 85.000đ",
    image: "/inanh/epnhua/sanpham1.webp",
    href: "/san-pham/anh-ep-nhua-cao-cap-30x40",
  },
  {
    category: "Ảnh ép nhựa cao cấp",
    name: "Ảnh ép cao cấp 40x60cm",
    detail: "Kích thước lớn, in laser cao cấp",
    price: "Chỉ từ 120.000đ",
    image: "/inanh/epnhua/sanpham2.png",
    href: "/san-pham/anh-ep-nhua-cao-cap-40x60",
  },
];

export default function AnhEpNhuaPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="ẢNH ÉP NHỰA"
      products={anhEpNhuaProducts}
      note="* Giá chưa bao gồm thiết kế khung. Vui lòng liên hệ để nhận báo giá chi tiết theo số lượng và yêu cầu riêng."
    />
  );
}