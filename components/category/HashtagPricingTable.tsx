"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const hashtagProducts: PriceGridProduct[] = [
  {
    category: "Hashtag cầm tay",
    name: "Hashtag form đơn",
    detail: "PP bồi formex 3mm - Cán mờ",
    price: "Chỉ từ 25.000đ/ cái",
    image: "/danhmuc2.png",
    href: "/san-pham/hashtag-form-don",
  },
  {
    category: "Hashtag cầm tay",
    name: "Hashtag form lớn",
    detail: "PP bồi formex 5mm - Cán mờ",
    price: "Chỉ từ 45.000đ/ cái",
    image: "/standee/section1_1.png",
    href: "/san-pham/hashtag-form-lon",
  },
  {
    category: "Hashtag sự kiện",
    name: "Hashtag check-in",
    detail: "Bế theo logo, slogan hoặc tên thương hiệu",
    price: "Chỉ từ 35.000đ/ cái",
    image: "/standee/section1_2.png",
    href: "/san-pham/hashtag-check-in",
  },
  {
    category: "Hashtag cầm tay",
    name: "Hashtag cán bóng",
    detail: "Màu nổi bật - Bề mặt bóng sáng",
    price: "Chỉ từ 30.000đ/ cái",
    image: "/danhmuc4.png",
    href: "/san-pham/hashtag-can-bong",
  },
  {
    category: "Phụ kiện sự kiện",
    name: "Hashtag theo bộ",
    detail: "Bộ 5 mẫu cho booth chụp ảnh",
    price: "Chỉ từ 150.000đ/ bộ",
    image: "/danhmuc5.png",
    href: "/san-pham/hashtag-theo-bo",
  },
  {
    category: "Thiết kế riêng",
    name: "Hashtag custom",
    detail: "Thiết kế theo nhận diện thương hiệu",
    price: "Liên hệ báo giá",
    image: "/danhmuc6.png",
    href: "/san-pham/hashtag-custom",
  },
];

export default function HashtagPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN HASHTAG CẦM TAY"
      products={hashtagProducts}
      note="* Giá chưa bao gồm thiết kế. Vui lòng liên hệ để nhận báo giá chi tiết theo kích thước, số lượng và yêu cầu bế form."
    />
  );
}
