/**
 * Office Products Page - Ấn phẩm văn phòng
 * Luxury premium design with hero section and elegant product grid
 */

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { ChevronRight, Grid3x3, List } from 'lucide-react';

export default function OfficeProducts() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả', count: 12 },
    { id: 'business-card', name: 'Danh Thiếp', count: 8 },
    { id: 'envelope', name: 'Bao Thư', count: 2 },
    { id: 'folder', name: 'Folder', count: 1 },
    { id: 'uniform', name: 'Áo Đồng Phục', count: 2 },
  ];

  const products = [
    { id: 1, name: 'Danh Thiếp Offset Cao Cấp', category: 'business-card', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp', price: 150000, description: 'Danh thiếp in offset chất lượng cao' },
    { id: 2, name: 'Danh Thiếp Nổi 3D', category: 'business-card', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp', price: 250000, description: 'Danh thiếp nổi 3D độc đáo' },
    { id: 3, name: 'Danh Thiếp Mạ Vàng', category: 'business-card', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp', price: 350000, description: 'Danh thiếp mạ vàng sang trọng' },
    { id: 4, name: 'Danh Thiếp Giấy Kraft', category: 'business-card', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp', price: 120000, description: 'Danh thiếp giấy kraft tự nhiên' },
    { id: 5, name: 'Danh Thiếp Bóng Mờ', category: 'business-card', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp', price: 180000, description: 'Danh thiếp bóng mờ hiện đại' },
    { id: 6, name: 'Danh Thiếp Foil Bạc', category: 'business-card', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp', price: 280000, description: 'Danh thiếp foil bạc lấp lánh' },
    { id: 7, name: 'Danh Thiếp Cắt Đặc Biệt', category: 'business-card', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp', price: 320000, description: 'Danh thiếp cắt theo hình đặc biệt' },
    { id: 8, name: 'Danh Thiếp Nhũ Bạc', category: 'business-card', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp', price: 200000, description: 'Danh thiếp nhũ bạc tinh tế' },
    { id: 9, name: 'Bao Thư Trắng Tiêu Chuẩn', category: 'envelope', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp', price: 50000, description: 'Bao thư trắng tiêu chuẩn A4' },
    { id: 10, name: 'Bao Thư Nâu Kraft', category: 'envelope', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp', price: 60000, description: 'Bao thư nâu kraft tự nhiên' },
    { id: 11, name: 'Folder Bìa Cứng', category: 'folder', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp', price: 80000, description: 'Folder bìa cứng chuyên nghiệp' },
    { id: 12, name: 'Áo Đồng Phục Trắng', category: 'uniform', image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp', price: 150000, description: 'Áo đồng phục trắng cao cấp' },
  ];

  const filteredProducts = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Asymmetric */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6 text-sm">
              <a href="/" className="text-amber-800 hover:text-amber-900 font-light">Trang chủ</a>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700 font-light">Ấn phẩm văn phòng</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 leading-tight">
              Ấn phẩm<br />văn phòng
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl">
              Các sản phẩm in ấn chuyên nghiệp cho văn phòng và doanh nghiệp. Từ danh thiếp đến bao thư, tất cả đều được thiết kế và in ấn với chất lượng cao nhất.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wider">Danh mục</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <motion.button
                        key={cat.id}
                        whileHover={{ x: 5 }}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-3 py-2 text-sm font-light rounded-sm transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-amber-800 text-white'
                            : 'text-gray-600 hover:text-amber-800 hover:bg-amber-50'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="float-right text-xs opacity-75">({cat.count})</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Sorting */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wider">Sắp xếp</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm font-light text-sm focus:outline-none focus:border-amber-800 bg-white"
                  >
                    <option value="default">Mặc định</option>
                    <option value="popular">Phổ biến</option>
                    <option value="newest">Mới nhất</option>
                    <option value="price-low">Giá thấp - cao</option>
                    <option value="price-high">Giá cao - thấp</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* View Toggle */}
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
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-sm transition-all ${
                      viewMode === 'grid'
                        ? 'bg-amber-800 text-white'
                        : 'border border-gray-300 text-gray-600 hover:border-amber-800'
                    }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-sm transition-all ${
                      viewMode === 'list'
                        ? 'bg-amber-800 text-white'
                        : 'border border-gray-300 text-gray-600 hover:border-amber-800'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>

              {/* Products Grid View */}
              {viewMode === 'grid' ? (
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
                          {categories.find(c => c.id === product.category)?.name}
                        </p>
                        <h3 className="text-base font-light text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 font-light mb-3">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-amber-800 font-light text-sm">
                            {product.price?.toLocaleString('vi-VN')} ₫
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-2 text-xs bg-amber-50 text-amber-800 rounded-sm hover:bg-amber-800 hover:text-white transition-all font-light"
                          >
                            Đọc tiếp
                          </motion.button>
                        </div>
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
                          {categories.find(c => c.id === product.category)?.name}
                        </p>
                        <h3 className="text-base font-light text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 font-light mb-3">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-amber-800 font-light text-sm">
                            {product.price?.toLocaleString('vi-VN')} ₫
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-2 text-xs bg-amber-50 text-amber-800 rounded-sm hover:bg-amber-800 hover:text-white transition-all font-light"
                          >
                            Đọc tiếp
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center gap-2 mt-12 pt-8 border-t border-gray-200"
              >
                {[1, 2].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-sm font-light text-sm transition-all ${
                      page === 1
                        ? 'bg-amber-800 text-white'
                        : 'border border-gray-300 text-gray-600 hover:border-amber-800'
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

      {/* Footer */}
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
                <li><a href="/tiep-thi" className="hover:text-amber-200 transition-colors">Ấn phẩm tiếp thị</a></li>
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
