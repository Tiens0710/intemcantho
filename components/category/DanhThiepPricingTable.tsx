"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const danhThiepProducts: PriceGridProduct[] = [
  {
    category: "Name Card Cơ Bản",
    name: "Name Card Cơ Bản",
    detail: "90 x 55mm - Giấy Couche 300gsm - Cán mờ 2 mặt",
    price: "Chỉ từ 120.000đ/hộp",
    image: "/anphamvanphong/danhthiep/sanpham1.png",
    href: "/lien-he",
  },
  {
    category: "Name Card Cơ Bản",
    name: "Name Card Bo Góc",
    detail: "90 x 55mm - Giấy Couche 300gsm - Bo góc, cán mờ",
    price: "Chỉ từ 150.000đ/hộp",
    image: "/anphamvanphong/danhthiep/sanpham1.png",
    href: "/lien-he",
  },
  {
    category: "Name Card Cao Cấp",
    name: "Name Card Ép Kim",
    detail: "90 x 55mm - Giấy mỹ thuật Conqueror - Ép kim logo",
    price: "Chỉ từ 250.000đ/hộp",
    image: "/anphamvanphong/danhthiep/sanpham1.png",
    href: "/lien-he",
  },
  {
    category: "Name Card Cao Cấp",
    name: "Name Card Đục Lỗ",
    detail: "90 x 55mm - Giấy mỹ thuật 350gsm - Đục lỗ, ép nổi",
    price: "Chỉ từ 350.000đ/hộp",
    image: "/anphamvanphong/danhthiep/sanpham1.png",
    href: "/lien-he",
  },
];

export default function DanhThiepPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN DANH THIẾP"
      products={danhThiepProducts}
      note="* Lưu ý: Giá in chưa bao gồm phí thiết kế. Thành phẩm sẽ có sau 3 - 5 ngày (tính từ ngày khách hàng duyệt file). Màu sắc thành phẩm có thể chênh lệch 8/10 so với màu duyệt."
    />
  );
}