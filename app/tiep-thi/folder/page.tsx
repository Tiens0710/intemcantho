import Navbar from "@/components/Navbar";
import ProductDetail from "@/components/ProductDetail";
import ProductDetailTabs from "@/components/ProductDetailTabs";
import FeaturedProducts from "@/components/FeaturedProducts";
import StoreLocationSection from "@/components/StoreLocationSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

export const metadata = {
  title: "Bìa Đựng Hồ Sơ - Folder | Intem Cần Thơ",
  description:
    "In bìa đựng hồ sơ Folder chuyên nghiệp tại Cần Thơ. Đa dạng chất liệu, in offset sắc nét, gia công bế dán chỉn chu cho doanh nghiệp.",
};

const FOLDER_PRODUCT = {
  id: "folder-bia-dung-ho-so",
  title: "BÌA ĐỰNG HỒ SƠ - FOLDER",
  subtitle:
    "Bìa đựng hồ sơ chuyên nghiệp, đồng bộ nhận diện doanh nghiệp - giấy dày, gia công chắc chắn, in offset sắc nét.",
  image: "/anphamvanphong/folder/sanpham1.png",
  specs: [
    { label: "Chất liệu", value: "Giấy Couche 250-350gsm / Giấy mỹ thuật" },
    { label: "Kích thước", value: "22 x 32 cm (chuẩn A4)" },
    { label: "Số mặt in", value: "In offset 4 màu 2 mặt" },
    { label: "Gia công", value: "Bế dán thành phẩm, nắp gài" },
    { label: "Độ bền", value: "Cứng cáp, bảo quản tài liệu tốt" },
  ],
  sizes: [
    { label: "22x32 cm (A4)", value: "a4" },
    { label: "24x34 cm (A4+)", value: "a4-plus" },
    { label: "KHÁC", value: "custom" },
  ],
  purposes: [
    "Đựng hồ sơ năng lực",
    "Đựng hợp đồng & pháp lý",
    "Đựng tài liệu chào hàng",
    "Đựng catalog & profile",
  ],
  price: 85000,
  deliveryDate: "3 - 5 ngày làm việc",
  gallery: [
    "/anphamvanphong/folder/sanpham1.png",
    "/anphamvanphong/folder/sanpham2.png",
    "/anphamvanphong/folder/sanpham3.png",
  ],
  combos: [
    {
      id: "combo-folder-bao-thu",
      title: "FOLDER + BAO THƯ A4",
      price: 105000,
      originalPrice: 125000,
      image: "/anphamvanphong/baothu/sanpham1.png",
    },
  ],
};

export default function FolderPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* Breadcrumb + Back button */}
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-0">
        {/* Breadcrumb */}
        <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#E6792A] transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <Link
            href="/van-phong"
            className="hover:text-[#E6792A] transition-colors"
          >
            Ấn phẩm văn phòng
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <span className="font-medium text-[#E6792A] truncate max-w-[200px]">
            Bìa đựng hồ sơ
          </span>
        </nav>

        {/* Back button */}
        <Link
          href="/van-phong"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#E6792A]"
        >
          <ChevronLeft className="h-4 w-4" />
          Quay lại danh sách sản phẩm
        </Link>
      </div>

      {/* Product Detail + Tabs */}
      <ProductDetail
        product={{
          id: FOLDER_PRODUCT.id,
          title: FOLDER_PRODUCT.title,
          subtitle: FOLDER_PRODUCT.subtitle,
          image: FOLDER_PRODUCT.image,
          specs: FOLDER_PRODUCT.specs,
          sizes: FOLDER_PRODUCT.sizes,
          purposes: FOLDER_PRODUCT.purposes,
          price: FOLDER_PRODUCT.price,
          deliveryDate: FOLDER_PRODUCT.deliveryDate,
          gallery: FOLDER_PRODUCT.gallery,
          combos: FOLDER_PRODUCT.combos,
        }}
      />
      <ProductDetailTabs productName="Bìa Đựng Hồ Sơ Folder" />
      <FeaturedProducts
        title="Sản Phẩm Liên Quan"
        subtitle="Khám phá thêm ấn phẩm văn phòng chất lượng cao"
        viewAllHref="/van-phong"
        viewAllText="Xem tất cả sản phẩm"
        columns={4}
        showBackground={false}
      />
      <StoreLocationSection />
      <Footer />
    </div>
  );
}