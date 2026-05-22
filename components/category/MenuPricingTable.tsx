"use client";

import CategoryProductPriceGrid, { type PriceGridProduct } from "./CategoryProductPriceGrid";

const menuProducts: PriceGridProduct[] = [
  {
    category: "Menu cán màng",
    name: "Menu 1 tờ",
    detail: "A4 - Giấy C300 cán bóng",
    price: "Chỉ từ 250.000đ",
    image: "/anphamtiepthi/menu/anh1.png",
    href: "/san-pham/menu-1-to-can-mang",
  },
  {
    category: "Menu cán màng",
    name: "Menu 2 tờ gấp",
    detail: "A4 gấp đôi - Giấy C300 cán mờ",
    price: "Chỉ từ 300.000đ",
    image: "/anphamtiepthi/menu/anh2.png",
    href: "/san-pham/menu-2-to-gap-can-mang",
  },
  {
    category: "Menu cán màng",
    name: "Menu 3 tờ",
    detail: "A4 gấp 3 - Giấy C300 cán mờ",
    price: "Chỉ từ 380.000đ",
    image: "/anphamtiepthi/menu/background1.jpeg",
    href: "/san-pham/menu-3-to-can-mang",
  },
  {
    category: "Menu bồi carton",
    name: "Menu 1 tờ bồi carton",
    detail: "A4 - Giấy C300 bồi carton",
    price: "Chỉ từ 350.000đ",
    image: "/anphamtiepthi/menu/backgound.jpeg",
    href: "/san-pham/menu-1-to-boi-carton",
  },
  {
    category: "Menu bồi carton",
    name: "Menu 2 tờ gấp bồi carton",
    detail: "A4 gấp đôi - Giấy C300 bồi carton",
    price: "Chỉ từ 420.000đ",
    image: "/anphamtiepthi/menu/anh1.png",
    href: "/san-pham/menu-2-to-gap-boi-carton",
  },
  {
    category: "Menu bồi carton",
    name: "Menu 3 tờ bồi carton",
    detail: "A4 gấp 3 - Giấy C300 bồi carton",
    price: "Chỉ từ 520.000đ",
    image: "/anphamtiepthi/menu/anh2.png",
    href: "/san-pham/menu-3-to-boi-carton",
  },
];

export default function MenuPricingTable() {
  return (
    <CategoryProductPriceGrid
      title="BẢNG GIÁ"
      accentTitle="IN MENU"
      products={menuProducts}
      note="* Giá chưa bao gồm thiết kế. Vui lòng liên hệ để nhận báo giá chi tiết theo số lượng và yêu cầu riêng."
    />
  );
}
