"use client";

import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QualityCommitment from "@/components/QualityCommitment";
import StoreLocationSection from "@/components/StoreLocationSection";
import BrandCard from "@/components/ui/BrandCard";
import PriceRangeFilter from "@/components/ui/PriceRangeFilter";
import { useAppStore } from "@/lib/store";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  FileText,
  Grid3x3,
  Headphones,
  Heart,
  List,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Upload,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useMemo, useState } from "react";

export type ListingProduct = {
  id: string | number;
  name: string;
  category: string;
  image: string;
  description: string;
  price: string;
};

export type ListingCategory = {
  id: string;
  name: string;
  count: number;
  icon?: ReactNode;
};

type FeatureItem = {
  icon: ReactNode;
  title: string;
  desc: string;
};

type ProductListingPageProps = {
  breadcrumbLabel: string;
  titleMain: string;
  titleAccent: string;
  description: ReactNode;
  features: FeatureItem[];
  categories: ListingCategory[];
  categoryNames: Record<string, string>;
  products: ListingProduct[];
  priceMax: number;
  priceStep?: number;
  isLoading?: boolean;
  featuredProductsTitle?: string;
  /** Custom hero section background image URL. Defaults to "/bgvanphong.png". */
  heroBackgroundImage?: string;
};

function getPriceValue(price: string) {
  return parseInt(price.replace(/[^0-9]/g, ""), 10) || 0;
}

function formatPrice(price: string) {
  const value = getPriceValue(price);
  return value > 0 ? `${value.toLocaleString("vi-VN")} ₫` : price || "Liên hệ";
}

export default function ProductListingPage({
  breadcrumbLabel,
  titleMain,
  titleAccent,
  description,
  features,
  categories,
  categoryNames,
  products,
  priceMax,
  priceStep = 10000,
  isLoading = false,
  featuredProductsTitle,
  heroBackgroundImage = "/bgvanphong.png",
}: ProductListingPageProps) {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, priceMax]);
  const [addedProductId, setAddedProductId] = useState<string | number | null>(null);

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ListingProduct,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    // Fly-to-cart animation
    const btn = event.currentTarget as HTMLElement;
    const btnRect = btn.getBoundingClientRect();
    const cartIcon = document.getElementById("cart-icon");

    if (cartIcon) {
      const cartRect = cartIcon.getBoundingClientRect();
      const flyImg = document.createElement("img");
      flyImg.src = product.image;
      flyImg.alt = product.name;
      flyImg.onerror = () => {
        flyImg.src = "https://placehold.co/60x60/f0f0f0/999?text=SP";
      };
      Object.assign(flyImg.style, {
        position: "fixed",
        width: "60px",
        height: "60px",
        borderRadius: "12px",
        objectFit: "cover",
        zIndex: "9999",
        pointerEvents: "none",
        border: "2px solid #E6792A",
        boxShadow: "0 8px 25px rgba(230,121,42,0.4)",
        left: `${btnRect.left + btnRect.width / 2 - 30}px`,
        top: `${btnRect.top}px`,
        transition: "none",
      });
      document.body.appendChild(flyImg);

      requestAnimationFrame(() => {
        Object.assign(flyImg.style, {
          transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          left: `${cartRect.left + cartRect.width / 2 - 15}px`,
          top: `${cartRect.top + cartRect.height / 2 - 15}px`,
          width: "30px",
          height: "30px",
          opacity: "0.6",
          borderRadius: "50%",
        });
      });

      setTimeout(() => {
        flyImg.remove();
      }, 750);
    }

    // Add to cart store
    useAppStore.getState().addToCart({
      id: String(product.id),
      title: product.name,
      price: getPriceValue(product.price),
      quantity: 1,
      image: product.image,
      meta: { category: categoryNames[product.category] || product.category },
    });

    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1600);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query),
      );
    }

    filtered = filtered.filter((product) => {
      const price = getPriceValue(product.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    if (sortBy === "price-low") {
      filtered.sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => getPriceValue(b.price) - getPriceValue(a.price));
    } else if (sortBy === "newest") {
      filtered.reverse();
    }

    return filtered;
  }, [priceRange, products, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#E6792A]/20 selection:text-[#E6792A]">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-[#E6792A]/10 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-16 -left-16 h-[400px] w-[400px] rounded-full bg-[#E6792A]/10 blur-[90px]"
        />
      </div>

      <Navbar />

      <section
        className="relative min-h-[420px] overflow-hidden bg-cover bg-center pb-16 pt-24 md:min-h-[460px] md:pb-20 md:pt-28"
        style={{ backgroundImage: `url("${heroBackgroundImage}")` }}
      >
        <div className="absolute inset-0 bg-white/10 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/60 px-6 py-2 shadow-sm backdrop-blur-md"
            >
              <span className="text-[10px] font-black text-[#E6792A]/40 uppercase tracking-[0.3em]">
                Trang chủ
              </span>
              <ChevronRight className="w-3 h-3 text-[#E6792A]/20" />
              <span className="text-[10px] font-black text-[#E6792A] uppercase tracking-[0.3em]">
                {breadcrumbLabel}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-5 text-5xl font-sans leading-none text-[#E6792A] md:text-7xl"
            >
              {titleMain} <br />
              <span className="italic font-light opacity-80">{titleAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mb-6 max-w-2xl text-base font-light leading-relaxed text-[#E6792A]/60 md:text-lg"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-lg mx-auto bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[20px] p-3 shadow-xl shadow-[#E6792A]/5"
            >
              <div className="grid grid-cols-3 gap-2">
                {features.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex flex-col items-center text-center px-1 ${index !== 2 ? "border-r border-[#E6792A]/10" : ""}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center text-[#E6792A] shadow-sm mb-2">
                      {item.icon}
                    </div>
                    <h4 className="text-[9px] font-black text-[#E6792A]/80 mb-0.5 leading-none">
                      {item.title}
                    </h4>
                    <p className="text-[7px] text-[#E6792A]/40 font-medium leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32 space-y-8">
                <PriceRangeFilter
                  min={0}
                  max={priceMax}
                  step={priceStep}
                  value={priceRange}
                  onChange={setPriceRange}
                />

                <div className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 shadow-2xl shadow-[#E6792A]/5">
                  <h3 className="text-[10px] font-black text-[#E6792A]/40 mb-6 uppercase tracking-[0.3em]">
                    Danh mục
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-bold rounded-xl transition-all duration-500 ${
                          selectedCategory === category.id
                            ? "bg-[#E6792A] text-white shadow-[0_8px_16px_-4px_rgba(230,121,42,0.4)]"
                            : "text-[#5C3D1E] hover:text-[#E6792A] hover:bg-white/80"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`p-1.5 rounded-lg ${selectedCategory === category.id ? "bg-white/10" : "bg-[#E6792A]/5"}`}
                          >
                            {category.icon}
                          </div>
                          <span className="truncate">{category.name}</span>
                        </div>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                            selectedCategory === category.id
                              ? "bg-white/20 text-white"
                              : "bg-[#E6792A]/5 text-[#E6792A]/40"
                          }`}
                        >
                          {String(category.count).padStart(2, "0")}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-3">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-10">
                <p className="text-sm text-[#E6792A]/40 font-medium whitespace-nowrap">
                  Hiển thị{" "}
                  <span className="text-[#E6792A]/80 font-bold">{filteredProducts.length}</span>{" "}
                  sản phẩm
                </p>
                <BrandCard borderOpacity={0.42} shadowOpacity={0.04} className="relative flex-1 overflow-hidden bg-white/40 backdrop-blur-md">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Tìm kiếm sản phẩm"
                    className="w-full bg-transparent pl-4 pr-10 py-2.5 text-xs font-bold text-[#E6792A]/70 placeholder:text-[#E6792A]/30 focus:outline-none focus:ring-2 focus:ring-[#E6792A]/20 transition-all"
                    aria-label="Tìm kiếm sản phẩm"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-black">
                    <Search className="w-4 h-4" />
                  </div>
                </BrandCard>
                <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                  <BrandCard borderOpacity={0.42} shadowOpacity={0.04} className="relative overflow-hidden bg-white/40 backdrop-blur-md">
                    <select
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value)}
                      className="bg-transparent px-4 py-2.5 pr-9 text-xs font-bold text-[#E6792A]/60 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E6792A]/20 transition-all cursor-pointer"
                    >
                      <option value="default">Sắp xếp mặc định</option>
                      <option value="newest">Sắp xếp theo mới nhất</option>
                      <option value="price-low">Sắp xếp theo giá: thấp đến cao</option>
                      <option value="price-high">Sắp xếp theo giá: cao đến thấp</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronRight className="w-3 h-3 text-[#E6792A]/40 rotate-90" />
                    </div>
                  </BrandCard>
                  <BrandCard borderOpacity={0.42} shadowOpacity={0.04} className="flex gap-3 bg-white/40 p-1.5 backdrop-blur-md">
                    <button
                      onClick={() => setViewMode("grid")}
                      aria-label="Hiển thị dạng lưới"
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        viewMode === "grid"
                          ? "bg-[#E6792A] text-white shadow-lg shadow-[#E6792A]/20"
                          : "text-[#E6792A]/30 hover:text-[#E6792A]"
                      }`}
                    >
                      <Grid3x3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      aria-label="Hiển thị dạng danh sách"
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        viewMode === "list"
                          ? "bg-[#E6792A] text-white shadow-lg shadow-[#E6792A]/20"
                          : "text-[#E6792A]/30 hover:text-[#E6792A]"
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </BrandCard>
                </div>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="h-80 bg-white/40 animate-pulse rounded-[32px] border border-white/60"
                    />
                  ))}
                </div>
              ) : (
                <AnimatePresence mode="popLayout">
                  <motion.div
                    layout
                    className={
                      viewMode === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                        : "space-y-6"
                    }
                  >
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        role="link"
                        tabIndex={0}
                        aria-label={`Xem chi tiết ${product.name}`}
                        layout
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.45, delay: index * 0.05 }}
                        onClick={(event) => {
                          const target = event.target as HTMLElement;
                          if (target.closest("a, button")) return;
                          router.push(`/san-pham/${product.id}`);
                        }}
                        onKeyDown={(event) => {
                          if (event.key !== "Enter" && event.key !== " ") return;
                          const target = event.target as HTMLElement;
                          if (target.closest("a, button")) return;
                          event.preventDefault();
                          router.push(`/san-pham/${product.id}`);
                        }}
                        className={`group relative cursor-pointer bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-[#E6792A]/30 ${
                          viewMode === "list" ? "flex gap-6" : "flex flex-col"
                        }`}
                        style={{
                          border: "1.5px solid rgba(230, 121, 42, 0.15)",
                          boxShadow: "0 2px 12px rgba(92, 61, 30, 0.04), 0 0 0 1px rgba(230, 121, 42, 0.05)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.border = "1.5px solid rgba(230, 121, 42, 0.35)";
                          e.currentTarget.style.boxShadow = "0 12px 40px rgba(92, 61, 30, 0.12), 0 4px 12px rgba(230, 121, 42, 0.08), 0 0 0 1px rgba(230, 121, 42, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.border = "1.5px solid rgba(230, 121, 42, 0.15)";
                          e.currentTarget.style.boxShadow = "0 2px 12px rgba(92, 61, 30, 0.04), 0 0 0 1px rgba(230, 121, 42, 0.05)";
                        }}
                      >
                        {/* Image Area */}
                        <div
                          className={`relative overflow-hidden ${
                            viewMode === "list"
                              ? "w-52 aspect-square flex-shrink-0"
                              : "aspect-square"
                          }`}
                          style={{
                            background: "linear-gradient(135deg, #FFF9F3 0%, #FDF2E9 40%, #F7EBDF 100%)",
                          }}
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes={viewMode === "list" ? "208px" : "(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"}
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />

                          {/* Heart button */}
                          <button
                            className="absolute top-3 right-3 p-2 rounded-full transition-all duration-300 hover:scale-110"
                            style={{
                              background: "rgba(255,255,255,0.85)",
                              backdropFilter: "blur(8px)",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                              color: "rgba(230,121,42,0.4)",
                            }}
                          >
                            <Heart className="w-4 h-4" strokeWidth={1.8} />
                          </button>

                          {/* Category badge */}
                          <span
                            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider"
                            style={{
                              background: "rgba(230, 121, 42, 0.1)",
                              color: "#E6792A",
                              backdropFilter: "blur(8px)",
                            }}
                          >
                            {categoryNames[product.category] || product.category}
                          </span>
                        </div>

                        {/* Content Area */}
                        <div className={`flex flex-col flex-1 ${viewMode === "list" ? "py-5 pr-5" : "p-5"}`}>
                          <p
                            className="mb-1.5 line-clamp-2 text-lg font-extrabold leading-snug transition-colors duration-300"
                            style={{ color: "#E6792A", fontFamily: "'Nunito', Arial, Helvetica, sans-serif" }}
                          >
                            {product.name}
                          </p>
                          <p className="text-xs mb-4 line-clamp-1" style={{ color: "#A08060" }}>
                            {product.description}
                          </p>

                          {/* Accent line */}
                          <div
                            className="mb-4 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-12"
                            style={{ background: "linear-gradient(90deg, rgba(230,121,42,0.4), rgba(230,121,42,0.1))" }}
                          />

                          <div className="mt-auto flex items-center justify-between gap-3">
                            <span
                              className="text-base font-extrabold"
                              style={{ color: "#E6792A" }}
                            >
                              {formatPrice(product.price)}
                            </span>
                            <button
                              type="button"
                              aria-label={`Thêm ${product.name} vào giỏ hàng`}
                              title={addedProductId === product.id ? "Đã thêm vào giỏ" : "Thêm vào giỏ"}
                              onClick={(event) => handleAddToCart(event, product)}
                              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E6792A]/30 bg-[#E6792A] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#E6792A]/20"
                            >
                              <AnimatePresence mode="wait">
                                {addedProductId === product.id ? (
                                  <motion.span
                                    key="check"
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: 20 }}
                                  >
                                    <CheckCircle2 className="h-4 w-4" />
                                  </motion.span>
                                ) : (
                                  <motion.span
                                    key="cart"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                  >
                                    <ShoppingCart className="h-4 w-4" />
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}

              {!isLoading && filteredProducts.length === 0 && (
                <div className="text-center py-32 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px]">
                  <div className="mb-6 inline-flex p-6 rounded-full bg-[#E6792A]/10 text-[#E6792A]">
                    <Search className="w-12 h-12 opacity-20" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#E6792A] mb-2">
                    Không tìm thấy sản phẩm
                  </h3>
                  <p className="text-[#E6792A]/50 font-light">
                    Thử thay đổi từ khóa hoặc bộ lọc của bạn
                  </p>
                </div>
              )}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-white/40 backdrop-blur-2xl border border-white/80 rounded-3xl p-6 shadow-xl shadow-[#E6792A]/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <Award className="w-6 h-6 opacity-40" />, title: "Chất lượng đảm bảo", desc: "Cam kết chất lượng in ấn tốt nhất" },
                { icon: <Headphones className="w-6 h-6 opacity-40" />, title: "Tư vấn tận tâm", desc: "Hỗ trợ 24/7 bởi đội ngũ chuyên nghiệp" },
                { icon: <Truck className="w-6 h-6 opacity-40" />, title: "Giao hàng toàn quốc", desc: "Nhanh chóng và an toàn" },
                { icon: <ShieldCheck className="w-6 h-6 opacity-40" />, title: "Thanh toán an toàn", desc: "Bảo mật tuyệt đối thông tin" },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-center gap-6 ${index !== 3 ? "md:border-r border-[#E6792A]/5" : ""}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E6792A]/5 flex items-center justify-center text-[#E6792A]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#E6792A]/80 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#E6792A]/40 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <QualityCommitment />
      <FeaturedProducts title={featuredProductsTitle} showBackground={false} />
      <StoreLocationSection />
      <Footer />
    </div>
  );
}
