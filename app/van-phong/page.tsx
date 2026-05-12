"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Grid3x3, List, ShoppingCart, Heart, Search, Award, Headphones, Truck, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getProducts, Product } from "@/lib/wordpress";
import Link from "next/link";
import Image from "next/image";

export default function OfficeProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts();
        // Filter for office products only
        const officeData = data.filter(p => p.category === "office-products");
        setProducts(officeData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  const categories = [
    { id: "all", name: "Tất cả", count: products.length, icon: <Grid3x3 className="w-4 h-4" /> },
    { id: "business-card", name: "Danh Thiếp", count: products.filter(p => p.id.includes('business-card')).length, icon: <Image src="/logo.png" width={16} height={16} alt="" className="w-4 h-4 opacity-70" /> },
    { id: "envelope", name: "Bao Thư", count: products.filter(p => p.id.includes('envelope')).length, icon: <Image src="/logo.png" width={16} height={16} alt="" className="w-4 h-4 opacity-70" /> },
    { id: "folder", name: "Folder", count: products.filter(p => p.id.includes('folder')).length, icon: <Image src="/logo.png" width={16} height={16} alt="" className="w-4 h-4 opacity-70" /> },
    { id: "uniform", name: "Áo Đồng Phục", count: 0, icon: <Image src="/logo.png" width={16} height={16} alt="" className="w-4 h-4 opacity-70" /> },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.id.includes(selectedCategory));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      );
    }

    if (sortBy === "price-low") {
      filtered.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    } else if (sortBy === "newest") {
      filtered.reverse();
    }

    return filtered;
  }, [products, selectedCategory, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-amber-200 selection:text-amber-900">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-amber-300/10 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-16 -left-16 h-[400px] w-[400px] rounded-full bg-amber-400/10 blur-[90px]"
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            animate={{ y: [-15, 15, -15], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            className="absolute h-2 w-2 rounded-full bg-amber-600/10"
            style={{ 
              left: `${15 + i * 15}%`, 
              top: `${20 + (i % 3) * 25}%` 
            }}
          />
        ))}
      </div>

      <Navbar />

      {/* Hero Section - Cinematic Glassmorphism */}
      <section 
        className="relative pt-28 pb-44 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url("/bgvanphong.png")' }}
      >
        {/* Subtle light overlay if needed for text readability */}
        <div className="absolute inset-0 bg-white/10 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

            {/* Title Content */}
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-6 py-2 bg-white/60 backdrop-blur-md border border-white/80 rounded-full shadow-sm mb-10"
              >
                <span className="text-[10px] font-black text-amber-900/40 uppercase tracking-[0.3em]">Trang chủ</span>
                <ChevronRight className="w-3 h-3 text-amber-900/20" />
                <span className="text-[10px] font-black text-amber-800 uppercase tracking-[0.3em]">Ấn phẩm văn phòng</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl md:text-8xl font-serif text-amber-900 mb-8 leading-none"
              >
                Ấn phẩm <br />
                <span className="italic font-light opacity-80">văn phòng</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-amber-900/60 font-light leading-relaxed mb-8 mx-auto max-w-2xl"
              >
                Nâng tầm chuyên nghiệp cho doanh nghiệp với các sản phẩm in ấn cao cấp. 
                Từ danh thiếp đến bộ nhận diện văn phòng, mỗi chi tiết đều được chăm chút tỉ mỉ.
              </motion.p>

              {/* Minimalist Feature Strip */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full max-w-lg mx-auto bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[20px] p-3 shadow-xl shadow-amber-900/5"
              >
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: <Award className="w-3 h-3" />, title: "Chất lượng", desc: "Chuẩn màu" },
                    { icon: <Search className="w-3 h-3" />, title: "Thiết kế", desc: "Tinh tế" },
                    { icon: <Truck className="w-3 h-3" />, title: "Giao hàng", desc: "Nhanh chóng" },
                  ].map((item, i) => (
                    <div key={i} className={`flex flex-col items-center text-center px-1 ${i !== 2 ? "border-r border-amber-900/10" : ""}`}>
                      <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center text-amber-800 shadow-sm mb-2">
                        {item.icon}
                      </div>
                      <h4 className="text-[9px] font-black text-amber-900/80 mb-0.5 leading-none">{item.title}</h4>
                      <p className="text-[7px] text-amber-900/40 font-medium leading-tight">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32 space-y-8">
                {/* Categories */}
                <div className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 shadow-2xl shadow-amber-900/5">
                  <h3 className="text-[10px] font-black text-amber-900/40 mb-6 uppercase tracking-[0.3em]">
                    Danh mục
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <motion.button
                        key={cat.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-bold rounded-xl transition-all duration-500 ${
                          selectedCategory === cat.id
                            ? "bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-[0_8px_16px_-4px_rgba(120,53,15,0.4)]"
                            : "text-amber-900/60 hover:text-amber-900 hover:bg-white/80"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-lg ${selectedCategory === cat.id ? "bg-white/10" : "bg-amber-900/5"}`}>
                            {cat.icon}
                          </div>
                          <span>{cat.name}</span>
                        </div>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                          selectedCategory === cat.id ? "bg-white/20 text-white" : "bg-amber-900/5 text-amber-900/40"
                        }`}>
                          {String(cat.count).padStart(2, '0')}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Header Toggle */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-10">
                <p className="text-sm text-amber-900/40 font-medium whitespace-nowrap">
                  Hiển thị <span className="text-amber-900/80 font-bold">{filteredProducts.length}</span> sản phẩm
                </p>
                <div className="relative flex-1">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm sản phẩm"
                    className="w-full bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl pl-4 pr-10 py-2.5 text-xs font-bold text-amber-900/70 placeholder:text-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all"
                    aria-label="Tìm kiếm sản phẩm"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-black">
                    <Search className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl px-4 py-2.5 text-xs font-bold text-amber-900/60 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all cursor-pointer"
                    >
                      <option value="default">Sắp xếp mặc định</option>
                      <option value="popular">Sắp xếp theo mức độ phổ biến</option>
                      <option value="rating">Sắp xếp theo xếp hạng trung bình</option>
                      <option value="newest">Sắp xếp theo mới nhất</option>
                      <option value="price-low">Sắp xếp theo giá: thấp đến cao</option>
                      <option value="price-high">Sắp xếp theo giá: cao đến thấp</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronRight className="w-3 h-3 text-amber-900/40 rotate-90" />
                    </div>
                  </div>
                  <div className="flex gap-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-1.5">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        viewMode === "grid"
                          ? "bg-amber-800 text-white shadow-lg shadow-amber-900/20"
                          : "text-amber-900/30 hover:text-amber-900"
                      }`}
                    >
                      <Grid3x3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        viewMode === "list"
                          ? "bg-amber-800 text-white shadow-lg shadow-amber-900/20"
                          : "text-amber-900/30 hover:text-amber-900"
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products List */}
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-80 bg-white/40 animate-pulse rounded-[32px] border border-white/60" />
                  ))}
                </div>
              ) : (
                <AnimatePresence mode="popLayout">
                  <motion.div 
                    layout
                    className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"}
                  >
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className={`group relative bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10 hover:-translate-y-2 ${
                          viewMode === "list" ? "flex gap-6 p-5" : "flex flex-col"
                        }`}
                      >
                        {/* Product Image Wrapper */}
                        <div className={`relative overflow-hidden bg-[#fdfaf5]/50 ${
                          viewMode === "list" ? "w-48 h-36 flex-shrink-0 rounded-xl" : "h-40"
                        }`}>
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute top-4 right-4">
                            <button className="p-2.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm text-amber-900/40 hover:text-rose-500 transition-all">
                              <Heart className="w-4 h-4" strokeWidth={2} />
                            </button>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-5 flex flex-col flex-1">
                          <p className="text-[9px] font-black text-amber-800/30 uppercase tracking-[0.2em] mb-1.5">
                            {product.category === 'office-products' ? 'Danh thiếp' : product.category}
                          </p>
                          <h3 className="text-base font-bold text-amber-900 mb-1.5 group-hover:text-amber-700 transition-colors line-clamp-1">
                            {product.title}
                          </h3>
                          <p className="text-xs text-amber-900/40 font-medium mb-3 line-clamp-1">
                            {product.description}
                          </p>
                          
                          <div className="mt-auto flex items-center justify-between">
                            <span className="text-sm font-black text-amber-900/80">
                              {parseInt(product.price).toLocaleString("vi-VN")} ₫
                            </span>
                            <Link 
                              href={`/san-pham/${product.id}`}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-900/5 text-amber-900/60 text-[10px] font-bold transition-all duration-300 hover:bg-amber-800 hover:text-white"
                            >
                              Xem chi tiết
                              <ChevronRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}

              {/* Empty State */}
              {!isLoading && filteredProducts.length === 0 && (
                <div className="text-center py-32 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px]">
                  <div className="mb-6 inline-flex p-6 rounded-full bg-amber-50 text-amber-800">
                    <Search className="w-12 h-12 opacity-20" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Không tìm thấy sản phẩm</h3>
                  <p className="text-amber-900/50 font-light">Thử thay đổi từ khóa hoặc bộ lọc của bạn</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Trust Badges Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-white/40 backdrop-blur-2xl border border-white/80 rounded-3xl p-6 shadow-xl shadow-amber-900/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <Award className="w-6 h-6 opacity-40" />, title: "Chất lượng đảm bảo", desc: "Cam kết chất lượng in ấn tốt nhất" },
                { icon: <Headphones className="w-6 h-6 opacity-40" />, title: "Tư vấn tận tâm", desc: "Hỗ trợ 24/7 bởi đội ngũ chuyên nghiệp" },
                { icon: <Truck className="w-6 h-6 opacity-40" />, title: "Giao hàng toàn quốc", desc: "Nhanh chóng và an toàn" },
                { icon: <ShieldCheck className="w-6 h-6 opacity-40" />, title: "Thanh toán an toàn", desc: "Bảo mật tuyệt đối thông tin" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-6 ${i !== 3 ? "md:border-r border-amber-900/5" : ""}`}>
                  <div className="w-12 h-12 rounded-2xl bg-amber-900/5 flex items-center justify-center text-amber-800">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-amber-900/80 mb-1">{item.title}</h4>
                    <p className="text-[11px] text-amber-900/40 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
