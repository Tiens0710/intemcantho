"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const bangGonProducts: PriceGridProduct[] = [
  {
    category: "Băng gôn cổ vũ",
    name: "Băng gôn đeo đầu satin",
    detail: "5 x 90cm - Vải satin cao cấp - In chuyển nhiệt sắc nét, bế biên nhiệt không tưa",
    price: "Chỉ từ 5.000đ/cái",
    image: "/inanh/bangoncovu/sanpham4.png",
    href: "/san-pham/bang-gon-deo-dau-satin",
  },
  {
    category: "Băng gôn cổ vũ",
    name: "Băng gôn cầm tay satin",
    detail: "20 x 80cm - Vải satin đỏ cao cấp - In chuyển nhiệt 2 mặt theo yêu cầu",
    price: "Chỉ từ 15.000đ/cái",
    image: "/inanh/bangoncovu/sanpham2.png",
    href: "/san-pham/bang-gon-cam-tay-satin",
  },
  {
    category: "Băng gôn cổ vũ",
    name: "Băng gôn treo sự kiện",
    detail: "50 x 200cm - Vải silk hoặc bạt Hiflex cao cấp - May biên treo hoặc đóng khoen",
    price: "Chỉ từ 90.000đ/cái",
    image: "/inanh/bangoncovu/sanpham3.png",
    href: "/san-pham/bang-gon-treo-su-kien",
  },
];

export default function BangGonPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN BĂNG GÔN"
      products={bangGonProducts}
      note="* Lưu ý: Giá in chưa bao gồm phí thiết kế. Thành phẩm sẽ có sau 1 - 2 ngày (tính từ ngày khách hàng duyệt file). Màu sắc in chuyển nhiệt trên vải sắc nét và bền bỉ."
    />
  );
}
