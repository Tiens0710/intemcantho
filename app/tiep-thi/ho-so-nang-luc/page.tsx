import Navbar from "@/components/Navbar";
import ProductDetail from "@/components/ProductDetail";
import ProductDetailTabs from "@/components/ProductDetailTabs";
import FeaturedProducts from "@/components/FeaturedProducts";
import StoreLocationSection from "@/components/StoreLocationSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

export const metadata = {
  title: "Hồ Sơ Năng Lực | Intem Cần Thơ",
  description:
    "In hồ sơ năng lực chuyên nghiệp tại Cần Thơ. Thiết kế đẹp, giấy cao cấp, gia công chỉn chu cho doanh nghiệp.",
};

const PRODUCT = {
  id: "ho-so-nang-luc",
  title: "HỒ SƠ NĂNG LỰC",
  subtitle:
    "Hồ sơ năng lực chuyên nghiệp, thể hiện đẳng cấp và uy tín doanh nghiệp - giấy dày, in offset sắc nét.",
  image: "/anphamvanphong/hosonangluc/sanpham1.png",
  specs: [
    { label: "Chất liệu", value: "Giấy Couche 200-250gsm" },
    { label: "Kích thước", value: "A4 (21 x 29.7 cm)" },
    { label: "Số trang", value: "8 - 24 trang" },
    { label: "Gia công", value: "Cán màng, bìa cứng / bồi carton" },
    { label: "Định dạng", value: "Ruột in offset, bìa bồi carton cứng" },
  ],
  sizes: [
    { label: "A4 (8 trang)", value: "a4-8" },
    { label: "A4 (12 trang)", value: "a4-12" },
    { label: "A4 (16 trang)", value: "a4-16" },
    { label: "A4 (24 trang)", value: "a4-24" },
    { label: "KHÁC", value: "custom" },
  ],
  purposes: [
    "Hồ sơ đấu thầu dự án",
    "Hồ sơ chào hàng đối tác",
    "Giới thiệu năng lực công ty",
    "Bộ tài liệu bán hàng",
  ],
  price: 15000,
  deliveryDate: "5 - 7 ngày làm việc",
  gallery: [
    "/anphamvanphong/hosonangluc/sanpham1.png",
    "/anphamvanphong/hosonangluc/sanpham2.png",
    "/anphamvanphong/hosonangluc/sanpham3.png",
  ],
  combos: [
    {
      id: "combo-hsnl-folder",
      title: "HỒ SƠ NĂNG LỰC + FOLDER",
      price: 180000,
      originalPrice: 210000,
      image: "/anphamvanphong/baothu/sanpham1.png",
    },
  ],
};

export default function HoSoNangLucPage() {
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
          <span className="font-medium text-[#E6792A] truncate max-w-[200px]">Hồ sơ năng lực</span>
        </nav>
        <Link href="/van-phong" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#E6792A]">
          <ChevronLeft className="h-4 w-4" />
          Quay lại danh sách sản phẩm
        </Link>
      </div>
      <ProductDetail product={{ ...PRODUCT }} />
      <ProductDetailTabs productName="Hồ Sơ Năng Lực" />
      <FeaturedProducts title="Sản Phẩm Liên Quan" subtitle="Khám phá thêm ấn phẩm văn phòng chất lượng cao" viewAllHref="/van-phong" viewAllText="Xem tất cả sản phẩm" columns={4} showBackground={false} />
      <StoreLocationSection />
      <Footer />
    </div>
  );
}