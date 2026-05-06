"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ChevronRight, Grid3x3, List } from "lucide-react";
import { useState } from "react";

export default function PackagingProducts() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Ấn phẩm bao bì", count: 38 },
    { id: "decal-paper", name: "Decal giấy", count: 4 },
    { id: "decal-plastic", name: "Decal nhựa", count: 8 },
    { id: "decal-uv", name: "Decal UV DTF", count: 3 },
    { id: "decal-gold", name: "Decal xi bạc/vàng", count: 2 },
    { id: "packaging", name: "In ấn bao bì", count: 5 },
    { id: "other", name: "Khác", count: 16 },
  ];

  const products = [
    {
      id: 1,
      name: "Decal Giấy Kraft",
      category: "decal-paper",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      price: null,
      description: "Decal giấy kraft chất lượng cao",
    },
    {
      id: 2,
      name: "Decal Sticker",
      category: "decal-paper",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      price: null,
      description: "Decal sticker bền bỉ",
    },
    {
      id: 3,
      name: "Decal Tem Bể",
      category: "decal-paper",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      price: null,
      description: "Decal tem bể",
    },
    {
      id: 4,
      name: "Decal Tem Nhãn Chai Nhựa",
      category: "decal-plastic",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      price: null,
      description: "Decal tem nhãn chai nhựa",
    },
    {
      id: 5,
      name: "Decal Tem Nhãn Sản Phẩm",
      category: "decal-plastic",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      price: 11000,
      description: "Decal tem nhãn sản phẩm",
    },
    {
      id: 6,
      name: "Decal Tem Nhãn Thực Phẩm",
      category: "decal-plastic",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      price: 15000,
      description: "Decal tem nhãn thực phẩm",
    },
    {
      id: 7,
      name: "Decal Tem Nhựa Sản Phẩm",
      category: "decal-plastic",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      price: 13000,
      description: "Decal tem nhựa sản phẩm",
    },
    {
      id: 8,
      name: "Decal Tem Tròn",
      category: "decal-paper",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      price: null,
      description: "Decal tem tròn",
    },
    {
      id: 9,
      name: "Decal Trong Chống Nước",
      category: "decal-uv",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      price: 180000,
      description: "Decal trong chống nước",
    },
    {
      id: 10,
      name: "Decal UV DTF",
      category: "decal-uv",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      price: null,
      description: "Decal UV DTF cao cấp",
    },
    {
      id: 11,
      name: "Decal xi vàng/ xi bạc",
      category: "decal-gold",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      price: null,
      description: "Decal xi vàng hoặc xi bạc",
    },
    {
      id: 12,
      name: "In Ấn Bao Bì Sản Phẩm",
      category: "packaging",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      price: null,
      description: "In ấn bao bì sản phẩm chuyên nghiệp",
    },
    {
      id: 13,
      name: "Tem Bảo Hành",
      category: "other",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      price: null,
      description: "Tem bảo hành chống giả",
    },
    {
      id: 14,
      name: "Tem Chống Giả",
      category: "other",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      price: null,
      description: "Tem chống giả hologram",
    },
    {
      id: 15,
      name: "Tem Dán Chai",
      category: "other",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      price: null,
      description: "Tem dán chai nước",
    },
    {
      id: 16,
      name: "Tem Dán Hộp",
      category: "other",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      price: null,
      description: "Tem dán hộp carton",
    },
    {
      id: 17,
      name: "Tem Dán Sản Phẩm",
      category: "other",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      price: null,
      description: "Tem dán sản phẩm",
    },
    {
      id: 18,
      name: "Tem Nhãn Decal",
      category: "other",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      price: null,
      description: "Tem nhãn decal chất lượng cao",
    },
  ];

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-50 to-amber-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4 text-sm">
              <a href="/" className="text-amber-800 hover:text-amber-900">Trang chủ</a>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700">Ấn phẩm bao bì</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
              Ấn phẩm bao bì
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Giải pháp in ấn bao bì chuyên nghiệp cho sản phẩm của bạn
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-50 rounded-sm p-6 sticky top-24">
                <h3 className="text-lg font-light text-gray-900 mb-6">DANH MỤC</h3>
                <div className="space-y-3">
                  {categories.map((cat, index) => (
                    <motion.button
                      key={cat.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-3 rounded-sm transition-all font-light text-sm flex justify-between items-center ${
                        selectedCategory === cat.id
                          ? "bg-amber-800 text-white"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs">{cat.count}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Sort Options */}
                <div className="mt-8 pt-8 border-t border-gray-300">
                  <h3 className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wide">
                    Sắp xếp
                  </h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm font-light text-sm focus:outline-none focus:border-amber-800"
                  >
                    <option value="default">Sắp xếp mặc định</option>
                    <option value="popular">Phổ biến nhất</option>
                    <option value="newest">Mới nhất</option>
                    <option value="price-low">Giá: thấp đến cao</option>
                    <option value="price-high">Giá: cao đến thấp</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {/* View Mode Toggle */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
                <p className="text-sm font-light text-gray-600">
                  Hiển thị {filteredProducts.length} sản phẩm
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-sm transition-colors ${
                      viewMode === "grid"
                        ? "bg-amber-800 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-sm transition-colors ${
                      viewMode === "list"
                        ? "bg-amber-800 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Products */}
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="overflow-hidden rounded-sm mb-4 h-64 bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-amber-800 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-light mb-4">{product.description}</p>
                      {product.price && (
                        <p className="text-lg font-light text-amber-800 mb-4">
                          {product.price.toLocaleString("vi-VN")} ₫
                        </p>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-4 py-3 bg-amber-800 text-white font-light rounded-sm hover:bg-amber-900 transition-colors"
                      >
                        Đọc Tiếp
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-6 p-6 border border-gray-200 rounded-sm hover:border-amber-800 transition-colors group"
                    >
                      <div className="w-40 h-40 rounded-sm overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-amber-800 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 font-light mb-2">{product.description}</p>
                          {product.price && (
                            <p className="text-lg font-light text-amber-800">
                              {product.price.toLocaleString("vi-VN")} ₫
                            </p>
                          )}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-32 px-4 py-3 bg-amber-800 text-white font-light rounded-sm hover:bg-amber-900 transition-colors"
                        >
                          Đọc Tiếp
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-12 pt-8 border-t border-gray-200">
                <button className="px-4 py-2 text-amber-800 font-light hover:bg-amber-50 rounded-sm transition-colors">
                  ←
                </button>
                <button className="px-4 py-2 bg-amber-800 text-white font-light rounded-sm">1</button>
                <button className="px-4 py-2 text-gray-700 font-light hover:bg-gray-100 rounded-sm transition-colors">
                  2
                </button>
                <button className="px-4 py-2 text-gray-700 font-light hover:bg-gray-100 rounded-sm transition-colors">
                  3
                </button>
                <button className="px-4 py-2 text-gray-700 font-light hover:bg-gray-100 rounded-sm transition-colors">
                  4
                </button>
                <button className="px-4 py-2 text-amber-800 font-light hover:bg-amber-50 rounded-sm transition-colors">
                  →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-light mb-4 text-amber-200">Duky Printing</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Intemcantho.vn (Duky Printing) chuyên in tem nhãn decal, tem bảo hành, tem chống giả tại Cần Thơ.
              </p>
            </div>
            <div>
              <h4 className="font-light mb-4 text-amber-200">TRUY CẬP</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-light">
                <li><a href="#" className="hover:text-amber-200 transition-colors">Ấn phẩm văn phòng</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Ấn phẩm tiếp thị</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Ấn Phẩm bao bì</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-4 text-amber-200">CHÍNH SÁCH</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-light">
                <li><a href="#" className="hover:text-amber-200 transition-colors">Qui Định Sử Dụng</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Bảo Mật Thông Tin</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Chính sách vận chuyển</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-4 text-amber-200">LIÊN HỆ</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-light">
                <li>Lầu 1, số 122 Nguyễn Hiền, P. Tân An, TP. Cần Thơ</li>
                <li><a href="tel:0985463403" className="hover:text-amber-200 transition-colors">0985 463 403</a></li>
                <li><a href="mailto:thanhngan989@gmail.com" className="hover:text-amber-200 transition-colors">thanhngan989@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400 font-light">
            <p>&copy; 2026 Duky Printing - In Tem Nhãn Cần Thơ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
