"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const photobookProducts: PriceGridProduct[] = [
  {
    category: "Photobook cơ bản",
    name: "Photobook 20x25cm",
    detail: "20 trang, giấy ảnh cao cấp, bìa cứng",
    price: "Chỉ từ 350.000đ",
    image: "/inanh/photobook/sanpham1.png",
    href: "/san-pham/photobook-20x25",
  },
  {
    category: "Photobook phổ biến",
    name: "Photobook 25x30cm",
    detail: "24 trang, giấy ảnh cao cấp, bìa cứng",
    price: "Chỉ từ 550.000đ",
    image: "/inanh/photobook/background.jpeg",
    href: "/san-pham/photobook-25x30",
  },
  {
    category: "Photobook cao cấp",
    name: "Photobook 30x30cm",
    detail: "30 trang, giấy ảnh cao cấp, bìa da",
    price: "Chỉ từ 750.000đ",
    image: "/inanh/photobook/sanpham1.png",
    href: "/san-pham/photobook-30x30",
  },
  {
    category: "Photobook cưới",
    name: "Photobook cưới 25x30cm",
    detail: "30 trang, bìa vải/da, đóng gáy chắc chắn",
    price: "Chỉ từ 850.000đ",
    image: "/inanh/photobook/background.jpeg",
    href: "/san-pham/photobook-cuoi-25x30",
  },
  {
    category: "Photobook gia đình",
    name: "Photobook gia đình 20x25cm",
    detail: "24 trang, giấy ảnh bóng, bìa cứng",
    price: "Chỉ từ 450.000đ",
    image: "/inanh/photobook/sanpham1.png",
    href: "/san-pham/photobook-gia-dinh-20x25",
  },
  {
    category: "Photobook kỷ niệm",
    name: "Photobook kỷ niệm 30x30cm",
    detail: "30 trang, bìa da cao cấp, in laser 6 màu",
    price: "Chỉ từ 950.000đ",
    image: "/inanh/photobook/background.jpeg",
    href: "/san-pham/photobook-ky-niem-30x30",
  },
];

export default function PhotobookPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN PHOTOBOOK"
      products={photobookProducts}
      note="* Giá chưa bao gồm thiết kế. Vui lòng liên hệ để nhận báo giá chi tiết theo số lượng và yêu cầu riêng."
    />
  );
}