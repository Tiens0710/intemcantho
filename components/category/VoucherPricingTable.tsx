"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const voucherProducts: PriceGridProduct[] = [
  {
    category: "Voucher",
    name: "Voucher 1 mặt",
    detail: "Kích thước 10x20cm - Giấy C300",
    price: "Chỉ từ 85.000đ/ 100 phiếu",
    image: "/anphamtiepthi/voucher/anh1.png",
    href: "/san-pham/voucher-1-mat",
  },
  {
    category: "Voucher",
    name: "Voucher 2 mặt",
    detail: "Kích thước 10x20cm - Giấy C300",
    price: "Chỉ từ 120.000đ/ 100 phiếu",
    image: "/anphamtiepthi/voucher/anh2.png",
    href: "/san-pham/voucher-2-mat",
  },
  {
    category: "Voucher",
    name: "Voucher cán mờ",
    detail: "Giấy C300 cán mờ cao cấp",
    price: "Chỉ từ 150.000đ/ 100 phiếu",
    image: "/anphamtiepthi/voucher/anh3.png",
    href: "/san-pham/voucher-can-mo",
  },
  {
    category: "Voucher",
    name: "Voucher cán bóng",
    detail: "Giấy C300 cán bóng nổi bật",
    price: "Chỉ từ 150.000đ/ 100 phiếu",
    image: "/anphamtiepthi/voucher/anh1.png",
    href: "/san-pham/voucher-can-bong",
  },
  {
    category: "Thẻ tích điểm",
    name: "Thẻ tích điểm",
    detail: "Namecard size - Giấy C300",
    price: "Chỉ từ 95.000đ/ 100 thẻ",
    image: "/anphamtiepthi/voucher/anh2.png",
    href: "/san-pham/the-tich-diem",
  },
  {
    category: "Phiếu quà tặng",
    name: "Gift voucher",
    detail: "Giấy mỹ thuật - In màu sắc nét",
    price: "Chỉ từ 180.000đ/ 100 phiếu",
    image: "/anphamtiepthi/voucher/anh3.png",
    href: "/san-pham/gift-voucher",
  },
];

export default function VoucherPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN VOUCHER"
      products={voucherProducts}
      note="* Giá chưa bao gồm thiết kế. Vui lòng liên hệ để nhận báo giá chi tiết theo kích thước, số lượng và yêu cầu gia công."
    />
  );
}
