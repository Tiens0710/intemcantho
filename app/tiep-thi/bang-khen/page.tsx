import Navbar from "@/components/Navbar";
import ProductDetail from "@/components/ProductDetail";
import ProductDetailTabs from "@/components/ProductDetailTabs";
import FeaturedProducts from "@/components/FeaturedProducts";
import StoreLocationSection from "@/components/StoreLocationSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

export const metadata = {
  title: "Bảng Khen | Intem Cần Thơ",
  description:
    "In bảng khen, giấy khen, bằng khen chuyên nghiệp tại Cần Thơ. In offset sắc nét, giấy mỹ thuật cao cấp.",
};

const PRODUCT = {
  id: "bang-khen",
  title: "BẢNG KHEN / BẰNG KHEN",
  subtitle:
    "Bảng khen, giấy khen, bằng khen trao thưởng chuyên nghiệp - giấy mỹ thuật, in offset sắc nét, gia công ép kim.",
  image: "/anphamvanphong/bangkhen/sanpham1.png",
  specs: [
    { label: "Chất liệu", value: "Giấy Couche 250gsm / Giấy mỹ thuật" },
    { label: "Kích thước", value: "A4 (21 x 29.7 cm)" },
    { label: "Số mặt in", value: "In offset 2 mặt" },
    { label: "Gia công", value: "Ép kim, cán màng, bồi formex" },
    { label: "Có khung", value: "Khung gỗ / Khung nhựa / Không khung" },
  ],
  sizes: [
    { label: "A4 không khung", value: "a4-khong-khung" },
    { label: "A4 có khung gỗ", value: "a4-khung-go" },
    { label: "A4 có khung nhựa", value: "a4-khung-nhua" },
    { label: "KHÁC", value: "custom" },
  ],
  purposes: [
    "Trao thưởng cuối năm",
    "Khen thưởng nhân viên xuất sắc",
    "Bằng khen sự kiện, cuộc thi",
    "Giấy khen học sinh, sinh viên",
  ],
  price: 25000,
  deliveryDate: "3 - 5 ngày làm việc",
  gallery: [
    "/anphamvanphong/bangkhen/sanpham1.png",
    "/anphamvanphong/bangkhen/sanpham2.png",
    "/anphamvanphong/bangkhen/sanpham3.png",
  ],
  combos: [
    {
      id: "combo-khen-folder",
      title: "BẢNG KHEN + FOLDER + BAO THƯ",
      price: 95000,
      originalPrice: 120000,
      image: "/anphamvanphong/bangkhen/sanpham1.png",
    },
  ],
};

export default function BangKhenPage() {
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
          <span className="font-medium text-[#E6792A] truncate max-w-[200px]">Bảng khen</span>
        </nav>
        <Link href="/van-phong" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#E6792A]">
          <ChevronLeft className="h-4 w-4" />
          Quay lại danh sách sản phẩm
        </Link>
      </div>
      <ProductDetail product={{ ...PRODUCT }} />
      <ProductDetailTabs productName="Bảng Khen / Bằng Khen" />
      <FeaturedProducts title="Sản Phẩm Liên Quan" subtitle="Khám phá thêm ấn phẩm văn phòng chất lượng cao" viewAllHref="/van-phong" viewAllText="Xem tất cả sản phẩm" columns={4} showBackground={false} />
      <StoreLocationSection />
      <Footer />
    </div>
  );
}