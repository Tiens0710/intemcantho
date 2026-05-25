import Navbar from "@/components/Navbar";
import ProductDetail from "@/components/ProductDetail";
import ProductDetailTabs from "@/components/ProductDetailTabs";
import FeaturedProducts from "@/components/FeaturedProducts";
import StoreLocationSection from "@/components/StoreLocationSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

export const metadata = {
  title: "Áo Thun Đồng Phục | Intem Cần Thơ",
  description:
    "In áo thun đồng phục chuyên nghiệp tại Cần Thơ. Đa dạng chất liệu, in ấn sắc nét, giá tốt cho doanh nghiệp.",
};

const PRODUCT = {
  id: "ao-thun-dong-phuc",
  title: "ÁO THUN ĐỒNG PHỤC",
  subtitle:
    "Áo thun đồng phục doanh nghiệp, sự kiện, team building - in KTS/đồng hồ màu sắc, vải cotton thoáng mát.",
  image: "/anphamvanphong/aothun/sanpham1.png",
  specs: [
    { label: "Chất liệu", value: "Cotton 100% / Cotton 65/35" },
    { label: "Kích thước", value: "S, M, L, XL, XXL" },
    { label: "Màu sắc", value: "Đa màu, in theo yêu cầu" },
    { label: "Kỹ thuật in", value: "In KTS / In chuyển nhiệt / In lụa" },
    { label: "Số lượng tối thiểu", value: "10 áo" },
  ],
  sizes: [
    { label: "S", value: "s" },
    { label: "M", value: "m" },
    { label: "L", value: "l" },
    { label: "XL", value: "xl" },
    { label: "XXL", value: "xxl" },
    { label: "KHÁC", value: "custom" },
  ],
  purposes: [
    "Đồng phục nhân viên công ty",
    "Áo sự kiện team building",
    "Áo quảng cáo thương hiệu",
    "Áo lớp, áo nhóm",
  ],
  price: 85000,
  deliveryDate: "5 - 7 ngày làm việc",
  gallery: [
    "/anphamvanphong/aothun/sanpham1.png",
    "/anphamvanphong/aothun/sanpham2.png",
    "/anphamvanphong/aothun/sanpham3.png",
  ],
  combos: [
    {
      id: "combo-ao-non",
      title: "ÁO THUN + NÓN LƯỠI TRAI",
      price: 120000,
      originalPrice: 150000,
      image: "/anphamvanphong/aothun/sanpham1.png",
    },
  ],
};

export default function AoThunDongPhucPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-0">
        <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="flex items-center gap-1 hover:text-[#E6792A] transition-colors">
            <Home className="h-3.5 w-3.5" />
            Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <Link href="/van-phong" className="hover:text-[#E6792A] transition-colors">
            Ấn phẩm văn phòng
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <span className="font-medium text-[#E6792A] truncate max-w-[200px]">Áo thun đồng phục</span>
        </nav>
        <Link href="/van-phong" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#E6792A]">
          <ChevronLeft className="h-4 w-4" />
          Quay lại danh sách sản phẩm
        </Link>
      </div>
      <ProductDetail product={{ ...PRODUCT }} />
      <ProductDetailTabs productName="Áo Thun Đồng Phục" />
      <FeaturedProducts title="Sản Phẩm Liên Quan" subtitle="Khám phá thêm ấn phẩm văn phòng chất lượng cao" viewAllHref="/van-phong" viewAllText="Xem tất cả sản phẩm" columns={4} showBackground={false} />
      <StoreLocationSection />
      <Footer />
    </div>
  );
}