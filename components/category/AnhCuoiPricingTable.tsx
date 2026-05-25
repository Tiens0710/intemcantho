"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const anhCuoiProducts: PriceGridProduct[] = [
  {
    category: "Ảnh cưới in trên giấy ảnh",
    name: "Ảnh cưới 10x15cm",
    detail: "Giấy ảnh cao cấp, in laser, màu sắc trung thực",
    price: "Chỉ từ 25.000đ",
    image: "/inanh/anhcuoi/sanpham1.png",
    href: "/san-pham/anh-cuoi-10x15",
  },
  {
    category: "Ảnh cưới in trên giấy ảnh",
    name: "Ảnh cưới 13x18cm",
    detail: "Giấy ảnh bóng/mờ, chống nước",
    price: "Chỉ từ 35.000đ",
    image: "/inanh/anhcuoi/sanpham1.png",
    href: "/san-pham/anh-cuoi-13x18",
  },
  {
    category: "Ảnh cưới ép nhựa",
    name: "Ảnh cưới ép nhựa 15x21cm",
    detail: "Nhựa cứng 0.5mm, cán màng chống trầy",
    price: "Chỉ từ 45.000đ",
    image: "/inanh/anhcuoi/sanpham1.png",
    href: "/san-pham/anh-cuoi-ep-nhua-15x21",
  },
  {
    category: "Ảnh cưới ép nhựa",
    name: "Ảnh cưới ép nhựa 20x30cm",
    detail: "Nhựa cứng cao cấp, phù hợp khung treo tường",
    price: "Chỉ từ 65.000đ",
    image: "/inanh/anhcuoi/sanpham1.png",
    href: "/san-pham/anh-cuoi-ep-nhua-20x30",
  },
  {
    category: "Ảnh cưới cao cấp",
    name: "Ảnh cưới 30x40cm",
    detail: "Giấy ảnh hoặc nhựa dày, in laser cao cấp",
    price: "Chỉ từ 95.000đ",
    image: "/inanh/anhcuoi/sanpham1.png",
    href: "/san-pham/anh-cuoi-30x40",
  },
  {
    category: "Ảnh cưới cao cấp",
    name: "Ảnh cưới 40x60cm",
    detail: "Kích thước lớn, in laser, phù hợp khung trang trí",
    price: "Chỉ từ 150.000đ",
    image: "/inanh/anhcuoi/sanpham1.png",
    href: "/san-pham/anh-cuoi-40x60",
  },
];

export default function AnhCuoiPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="ẢNH CƯỚI"
      products={anhCuoiProducts}
      note="* Giá chưa bao gồm khung ảnh. Vui lòng liên hệ để nhận báo giá chi tiết theo số lượng và yêu cầu riêng."
    />
  );
}