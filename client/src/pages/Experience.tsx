/**
 * Experience/Blog Page - Kinh nghiệm
 * Blog posts and portfolio showcase
 * Same luxury premium style as home page
 */

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, User, MessageCircle } from 'lucide-react';

export default function Experience() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const blogPosts = [
    {
      id: 1,
      title: 'In tem nhãn chống nước ở Cần Thơ',
      date: '29 Th4',
      author: 'intemct',
      comments: 0,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp',
      excerpt: 'Tem nhãn chống nước đang trở thành lựa chọn gần như bắt buộc đối với nhiều doanh nghiệp, đặc biệt trong ngành thực phẩm, mỹ phẩm và hàng tiêu dùng.',
      content: 'Tem nhãn chống nước đang trở thành lựa chọn gần như bắt buộc đối với nhiều doanh nghiệp, đặc biệt trong ngành thực phẩm, mỹ phẩm và hàng tiêu dùng. Với khả năng chống nước, chống dầu, chống hóa chất, tem nhãn chống nước giúp bảo vệ thông tin sản phẩm và tăng tính chuyên nghiệp.',
    },
    {
      id: 2,
      title: 'Thiết kế in ấn danh thiếp ở cần thơ',
      date: '26 Th4',
      author: 'intemct',
      comments: 0,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp',
      excerpt: 'Thiết kế in ấn danh thiếp vẫn là một trong những "vũ khí nhỏ nhưng có võ" trong kinh doanh. Giữa thời đại số, nhiều người nghĩ danh thiếp đã lỗi thời.',
      content: 'Thiết kế in ấn danh thiếp vẫn là một trong những "vũ khí nhỏ nhưng có võ" trong kinh doanh. Giữa thời đại số, nhiều người nghĩ danh thiếp đã lỗi thời, nhưng thực tế, một chiếc danh thiếp được thiết kế chuyên nghiệp vẫn tạo ấn tượng mạnh mẽ.',
    },
    {
      id: 3,
      title: 'Dịch vụ in ấn ấn phẩm văn phòng',
      date: '23 Th4',
      author: 'intemct',
      comments: 0,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp',
      excerpt: 'In ấn ấn phẩm văn phòng là một phần quan trọng trong cách doanh nghiệp thể hiện sự chuyên nghiệp. Từ namecard, hồ sơ năng lực, tiêu đề...',
      content: 'In ấn ấn phẩm văn phòng là một phần quan trọng trong cách doanh nghiệp thể hiện sự chuyên nghiệp. Từ namecard, hồ sơ năng lực, tiêu đề thư đến các tài liệu khác, tất cả đều cần được in ấn với chất lượng cao.',
    },
    {
      id: 4,
      title: 'In ấn ép nhựa giá rẻ theo yêu cầu',
      date: '20 Th4',
      author: 'intemct',
      comments: 0,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp',
      excerpt: 'In ấn ép nhựa giá rẻ theo yêu cầu đang trở thành lựa chọn quen thuộc của nhiều cá nhân và doanh nghiệp tại Cần Thơ. Từ thẻ nhân viên, m...',
      content: 'In ấn ép nhựa giá rẻ theo yêu cầu đang trở thành lựa chọn quen thuộc của nhiều cá nhân và doanh nghiệp tại Cần Thơ. Từ thẻ nhân viên, mẫu vật quảng cáo đến các sản phẩm khác, ép nhựa giúp tăng độ bền và tính thẩm mỹ.',
    },
    {
      id: 5,
      title: 'In ấn standee cho doanh nghiệp',
      date: '17 Th4',
      author: 'intemct',
      comments: 0,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp',
      excerpt: 'In ấn standee cho doanh nghiệp đang trở thành một trong những giải pháp quảng bá nhanh – gọn – hiệu quả mà rất nhiều đơn vị lựa chọn. K...',
      content: 'In ấn standee cho doanh nghiệp đang trở thành một trong những giải pháp quảng bá nhanh – gọn – hiệu quả mà rất nhiều đơn vị lựa chọn. Khác với các hình thức quảng cáo truyền thống, standee dễ dàng di chuyển và lắp đặt.',
    },
    {
      id: 6,
      title: 'Thiết kế in ấn bao bì theo yêu cầu tại Cần Thơ',
      date: '14 Th4',
      author: 'intemct',
      comments: 0,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp',
      excerpt: 'Thiết kế in ấn bao bì theo yêu cầu tại Cần Thơ hiện đang là lựa chọn quen thuộc của nhiều shop và doanh nghiệp địa phương khi muốn đầu...',
      content: 'Thiết kế in ấn bao bì theo yêu cầu tại Cần Thơ hiện đang là lựa chọn quen thuộc của nhiều shop và doanh nghiệp địa phương khi muốn đầu tư vào hình ảnh thương hiệu.',
    },
    {
      id: 7,
      title: 'In ấn theo yêu cầu giá rẻ tại Cần Thơ mà bạn nên biết',
      date: '12 Th4',
      author: 'intemct',
      comments: 0,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp',
      excerpt: 'In tem Cần Thơ là đơn vị cung cấp dịch vụ in ấn theo yêu cầu giá rẻ với quy trình linh hoạt, đáp ứng đa dạng nhu cầu từ cá nhân đến doa...',
      content: 'In tem Cần Thơ là đơn vị cung cấp dịch vụ in ấn theo yêu cầu giá rẻ với quy trình linh hoạt, đáp ứng đa dạng nhu cầu từ cá nhân đến doanh nghiệp.',
    },
    {
      id: 8,
      title: 'In Tem Cần Thơ – Địa chỉ in ấn thiết kế tại Cần Thơ',
      date: '10 Th4',
      author: 'intemct',
      comments: 0,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp',
      excerpt: 'In tem Cần Thơ là đơn vị cung cấp giải pháp thiết kế và in ấn nhanh, đẹp, tối ưu chi phí tại Cần Thơ. Trong thời đại mà hình ảnh sản ph...',
      content: 'In tem Cần Thơ là đơn vị cung cấp giải pháp thiết kế và in ấn nhanh, đẹp, tối ưu chi phí tại Cần Thơ. Trong thời đại mà hình ảnh sản phẩm là yếu tố quyết định.',
    },
    {
      id: 9,
      title: 'In nhanh lấy liền tại Cần Thơ – Duky Printing',
      date: '08 Th4',
      author: 'intemct',
      comments: 0,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp',
      excerpt: 'In tem Cần Thơ là đơn vị chuyên cung cấp dịch vụ in nhanh lấy liền tại Cần Thơ bao gồm in tem nhãn, in ấn theo yêu cầu và thiết kế ấn ph...',
      content: 'In tem Cần Thơ là đơn vị chuyên cung cấp dịch vụ in nhanh lấy liền tại Cần Thơ bao gồm in tem nhãn, in ấn theo yêu cầu và thiết kế ấn phẩm.',
    },
    {
      id: 10,
      title: 'In menu giá rẻ Cần Thơ cho các quán ăn, quán cà phê',
      date: '07 Th4',
      author: 'intemct',
      comments: 0,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp',
      excerpt: 'Nhu cầu in menu giá rẻ Cần Thơ ngày càng tăng cao, đặc biệt với các quán ăn, quán cà phê, trà sữa hay nhà hàng mới mở. Nếu đang tìm một...',
      content: 'Nhu cầu in menu giá rẻ Cần Thơ ngày càng tăng cao, đặc biệt với các quán ăn, quán cà phê, trà sữa hay nhà hàng mới mở. Nếu đang tìm một đơn vị in menu uy tín, Duky Printing là lựa chọn tốt.',
    },
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const displayedPosts = blogPosts.slice(startIdx, startIdx + postsPerPage);

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
              <span className="text-gray-700">Kinh nghiệm</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
              Kinh nghiệm
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Chia sẻ kinh nghiệm và kiến thức về in ấn tem nhãn
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-sm overflow-hidden border border-gray-200 hover:border-amber-800 transition-all hover:shadow-lg"
              >
                {/* Featured Image */}
                <div className="overflow-hidden h-64 bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-amber-800 font-light mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-light text-gray-900 mb-3 group-hover:text-amber-800 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 font-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 font-light mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 bg-amber-800 text-white font-light rounded-sm hover:bg-amber-900 transition-colors"
                  >
                    Đọc Tiếp
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-amber-800 font-light hover:bg-amber-50 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 font-light rounded-sm transition-colors ${
                  currentPage === page
                    ? 'bg-amber-800 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-amber-800 font-light hover:bg-amber-50 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              →
            </button>
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
