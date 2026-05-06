"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ChevronRight, Grid3x3, List } from "lucide-react";
import { useState } from "react";

export default function MarketingProducts() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tất cả", count: 24 },
    { id: "backdrop", name: "Backdrop Sự Kiện", count: 4 },
    { id: "banner", name: "Băng Rôn Bạt Hiflex", count: 4 },
    { id: "catalogue", name: "Catalogue", count: 4 },
    { id: "standee", name: "Standee", count: 4 },
    { id: "brochure", name: "Brochure", count: 4 },
    { id: "menu", name: "Menu", count: 4 },
  ];

  const products = [
    {
      id: 1,
      name: "Backdrop Sự Kiện Kỷ Niệm",
      category: "backdrop",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      description: "Backdrop in nhanh cho sự kiện",
    },
    {
      id: 2,
      name: "Backdrop Sự Kiện Khai Trương",
      category: "backdrop",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      description: "Backdrop khai trương cửa hàng",
    },
    {
      id: 3,
      name: "Backdrop Sự Kiện Hội Thảo",
      category: "backdrop",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      description: "Backdrop hội thảo chuyên nghiệp",
    },
    {
      id: 4,
      name: "Backdrop Sự Kiện Hôn Nhân",
      category: "backdrop",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      description: "Backdrop hôn nhân sang trọng",
    },
    {
      id: 5,
      name: "Băng Rôn Hiflex Quảng Cáo",
      category: "banner",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      description: "Băng rôn hiflex quảng cáo",
    },
    {
      id: 6,
      name: "Băng Rôn Hiflex Khuyến Mãi",
      category: "banner",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      description: "Băng rôn khuyến mãi bán hàng",
    },
    {
      id: 7,
      name: "Băng Rôn Hiflex Sự Kiện",
      category: "banner",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      description: "Băng rôn sự kiện ngoài trời",
    },
    {
      id: 8,
      name: "Băng Rôn Hiflex Công Ty",
      category: "banner",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      description: "Băng rôn công ty chuyên nghiệp",
    },
    {
      id: 9,
      name: "Catalogue Sản Phẩm",
      category: "catalogue",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      description: "Catalogue sản phẩm cao cấp",
    },
    {
      id: 10,
      name: "Catalogue Dịch Vụ",
      category: "catalogue",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      description: "Catalogue dịch vụ chuyên nghiệp",
    },
    {
      id: 11,
      name: "Catalogue Thời Trang",
      category: "catalogue",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      description: "Catalogue thời trang sang trọng",
    },
    {
      id: 12,
      name: "Catalogue Bất Động Sản",
      category: "catalogue",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      description: "Catalogue bất động sản",
    },
    {
      id: 13,
      name: "Standee Quảng Cáo",
      category: "standee",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      description: "Standee quảng cáo sản phẩm",
    },
    {
      id: 14,
      name: "Standee Sự Kiện",
      category: "standee",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      description: "Standee sự kiện chuyên nghiệp",
    },
    {
      id: 15,
      name: "Standee Khuyến Mãi",
      category: "standee",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      description: "Standee khuyến mãi bán hàng",
    },
    {
      id: 16,
      name: "Standee Giới Thiệu Công Ty",
      category: "standee",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      description: "Standee giới thiệu công ty",
    },
    {
      id: 17,
      name: "Brochure Gấp 3",
      category: "brochure",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      description: "Brochure gấp 3 chuyên nghiệp",
    },
    {
      id: 18,
      name: "Brochure Gấp 4",
      category: "brochure",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      description: "Brochure gấp 4 cao cấp",
    },
    {
      id: 19,
      name: "Brochure Gấp Z",
      category: "brochure",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      description: "Brochure gấp Z độc đáo",
    },
    {
      id: 20,
      name: "Brochure Gấp Accordion",
      category: "brochure",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      description: "Brochure gấp accordion",
    },
    {
      id: 21,
      name: "Menu Nhà Hàng",
      category: "menu",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      description: "Menu nhà hàng cao cấp",
    },
    {
      id: 22,
      name: "Menu Quán Cà Phê",
      category: "menu",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
      description: "Menu quán cà phê sang trọng",
    },
    {
      id: 23,
      name: "Menu Quán Ăn",
      category: "menu",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
      description: "Menu quán ăn chuyên nghiệp",
    },
    {
      id: 24,
      name: "Menu Bar Cocktail",
      category: "menu",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
      description: "Menu bar cocktail đẳng cấp",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="relative overflow-hidden pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6 text-sm">
              <a href="/" className="text-amber-800 hover:text-amber-900 font-light">
                Trang chủ
              </a>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700 font-light">Ấn phẩm tiếp thị</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 leading-tight">
              Ấn phẩm
              <br />
              tiếp thị
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl">
              Các sản phẩm in ấn chuyên nghiệp cho tiếp thị và quảng cáo. Từ backdrop đến menu, tất cả đều được thiết kế để tạo ấn tượng mạnh mẽ với khách hàng.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wider">
                    Danh mục
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <motion.button
                        key={cat.id}
                        whileHover={{ x: 5 }}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-3 py-2 text-sm font-light rounded-sm transition-all ${
                          selectedCategory === cat.id
                            ? "bg-amber-800 text-white"
                            : "text-gray-600 hover:text-amber-800 hover:bg-amber-50"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="float-right text-xs opacity-75">({cat.count})</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wider">
                    Sắp xếp
                  </h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm font-light text-sm focus:outline-none focus:border-amber-800 bg-white"
                  >
                    <option value="default">Mặc định</option>
                    <option value="popular">Phổ biến</option>
                    <option value="newest">Mới nhất</option>
                  </select>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200"
              >
                <p className="text-sm text-gray-600 font-light">
                  Hiển thị {filteredProducts.length} sản phẩm
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-sm transition-all ${
                      viewMode === "grid"
                        ? "bg-amber-800 text-white"
                        : "border border-gray-300 text-gray-600 hover:border-amber-800"
                    }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-sm transition-all ${
                      viewMode === "list"
                        ? "bg-amber-800 text-white"
                        : "border border-gray-300 text-gray-600 hover:border-amber-800"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group border border-gray-200 rounded-sm overflow-hidden hover:border-amber-800 transition-all"
                    >
                      <div className="relative h-48 bg-gray-100 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-amber-800 font-light uppercase tracking-wider mb-2">
                          {categories.find((c) => c.id === product.category)?.name}
                        </p>
                        <h3 className="text-base font-light text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 font-light mb-3">
                          {product.description}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="w-full px-3 py-2 text-xs bg-amber-50 text-amber-800 rounded-sm hover:bg-amber-800 hover:text-white transition-all font-light"
                        >
                          Đọc tiếp
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-4 p-4 border border-gray-200 rounded-sm hover:border-amber-800 transition-all group"
                    >
                      <div className="w-32 h-24 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-amber-800 font-light uppercase tracking-wider mb-2">
                          {categories.find((c) => c.id === product.category)?.name}
                        </p>
                        <h3 className="text-base font-light text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 font-light mb-3">
                          {product.description}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-2 text-xs bg-amber-50 text-amber-800 rounded-sm hover:bg-amber-800 hover:text-white transition-all font-light"
                        >
                          Đọc tiếp
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center gap-2 mt-12 pt-8 border-t border-gray-200"
              >
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-sm font-light text-sm transition-all ${
                      page === 1
                        ? "bg-amber-800 text-white"
                        : "border border-gray-300 text-gray-600 hover:border-amber-800"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-light mb-4 text-amber-200">Duky Printing</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Intemcantho.vn (Duky Printing) chuyên in tem nhãn decal, tem bảo hành, tem chống giả tại Cần Thơ.
              </p>
            </div>
            <div>
              <h4 className="font-light mb-4 text-amber-200 text-sm uppercase tracking-wider">Truy cập</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-light">
                <li><a href="/" className="hover:text-amber-200 transition-colors">Trang chủ</a></li>
                <li><a href="/van-phong" className="hover:text-amber-200 transition-colors">Ấn phẩm văn phòng</a></li>
                <li><a href="/bao-bi" className="hover:text-amber-200 transition-colors">Ấn Phẩm bao bì</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-4 text-amber-200 text-sm uppercase tracking-wider">Chính sách</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-light">
                <li><a href="#" className="hover:text-amber-200 transition-colors">Qui Định Sử Dụng</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Bảo Mật Thông Tin</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Chính sách vận chuyển</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-4 text-amber-200 text-sm uppercase tracking-wider">Liên hệ</h4>
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
