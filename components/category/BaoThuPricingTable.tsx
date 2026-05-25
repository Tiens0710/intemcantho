"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const baoThuProducts: PriceGridProduct[] = [
  {
    category: "Bao thư văn phòng",
    name: "Bao thư A6",
    detail: "12 x 22cm - Giấy Ford 100gsm/120gsm - Bế dán thành phẩm có keo nắp",
    price: "Chỉ từ 1.200đ/cái",
    image: "/anphamvanphong/baothu/sanpham1.png",
    href: "/san-pham/bao-thu-a6",
  },
  {
    category: "Bao thư văn phòng",
    name: "Bao thư A5",
    detail: "16 x 23cm - Giấy Ford 100gsm/120gsm - Bế dán thành phẩm có keo nắp",
    price: "Chỉ từ 1.800đ/cái",
    image: "/anphamvanphong/baothu/sanpham1.png",
    href: "/san-pham/bao-thu-a5",
  },
  {
    category: "Bao thư văn phòng",
    name: "Bao thư A4",
    detail: "25 x 35cm - Giấy Ford 120gsm/150gsm hoặc Couche 150gsm",
    price: "Chỉ từ 2.800đ/cái",
    image: "/anphamvanphong/baothu/sanpham1.png",
    href: "/san-pham/bao-thu-a4",
  },
];

export default function BaoThuPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN BAO THƯ"
      products={baoThuProducts}
      note="* Lưu ý: Giá in chưa bao gồm phí thiết kế. Thành phẩm sẽ có sau 3 - 5 ngày (tính từ ngày khách hàng duyệt file). Màu sắc thành phẩm có thể chênh lệch 8/10 so với màu duyệt."
    />
  );
}
