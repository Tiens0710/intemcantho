"use client";

import ChatSearch from "@/components/ChatSearch";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OnboardingModal from "@/components/OnboardingModal";
import ProductGrid from "@/components/ProductGrid";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section - Luxury Grid */}
      <section id="services" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-widest text-amber-800 uppercase mb-4">
              DỊCH VỤ
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              DỊCH VỤ CỦA DUKY
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Mang lại sự bảo đảm cho từng sản phẩm
            </p>
            <div className="w-16 h-1 bg-amber-800 mx-auto mt-6"></div>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "BROCHURE",
                subtitle: "TỜ GẤP",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
              },
              {
                title: "IN STANDEE",
                subtitle: "KHỔ LỚN",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
              },
              {
                title: "IN",
                subtitle: "TEM NHÃN",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
              },
              {
                title: "IN",
                subtitle: "TỜ RƠI",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
              },
              {
                title: "IN",
                subtitle: "BAO BÌ",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
              },
              {
                title: "IN",
                subtitle: "DANH THIẾP",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group text-center"
              >
                <div className="overflow-hidden rounded-sm mb-6 h-72 bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-light text-amber-800 mb-1">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700 font-light">
                  {service.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Seller Section */}
      <section id="best-seller" className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-widest text-amber-800 uppercase mb-4">
              BEST SELLER
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              BEST SELLER
            </h2>
            <div className="w-16 h-1 bg-amber-800 mx-auto"></div>
          </motion.div>

          {/* Featured Products */}
          <ProductGrid />
        </div>
      </section>

      {/* Why Choose Us - Luxury Style */}
      <section id="why-us" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-widest text-amber-800 uppercase mb-4">
              TẠI SAO
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              TẠI SAO NÊN CHỌN CHÚNG TÔI
            </h2>
            <div className="w-16 h-1 bg-amber-800 mx-auto"></div>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              THIẾT KẾ & IN ẤN TEM NHÃN
            </h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Chúng tôi cung cấp giải pháp thiết kế và in ấn tem nhãn chất lượng cao. Đa dạng chất liệu, in ấn sắc nét, bám dính bền bỉ – giúp doanh nghiệp nổi bật và nâng tầm giá trị sản phẩm trên thị trường.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {[
              {
                title: "Tư vấn tận tâm, đúng nhu cầu",
                desc: "Chúng tôi không chỉ nhận đơn hàng, mà còn đồng hành từ bước lên ý tưởng – lựa chọn chất liệu – đến giải pháp in phù hợp nhất với mục tiêu sử dụng của khách hàng.",
              },
              {
                title: "Giá cả minh bạch, báo trước rõ ràng",
                desc: "Mọi chi phí đều được trình bày rõ ràng ngay từ đầu. Không phát sinh bất ngờ. Không đánh đổi chất lượng để giảm giá bằng mọi giá.",
              },
              {
                title: "Thiết kế sáng tạo, dễ triển khai in ấn",
                desc: "Đội ngũ thiết kế tại DuKy am hiểu kỹ thuật in, giúp bản thiết kế không chỉ đẹp về thẩm mỹ mà còn tối ưu khi đưa vào sản xuất thực tế.",
              },
              {
                title: "Trang thiết bị hiện đại - đa công nghệ",
                desc: "DuKy đầu tư hệ thống in offset, kỹ thuật số, bế – cán – phủ... đồng bộ và thường xuyên nâng cấp để đáp ứng đa dạng yêu cầu, cả về số lượng lẫn độ phức tạp.",
              },
              {
                title: "Tiến độ rõ ràng - đúng cam kết",
                desc: "Chúng tôi lên lịch sản xuất cụ thể cho từng đơn hàng, chủ động thông báo nếu có rủi ro, và cam kết không làm trễ kế hoạch của khách.",
              },
              {
                title: "Chất lượng đầu ra kiểm soát chặt chẽ",
                desc: "Mỗi sản phẩm đều được kiểm tra kỹ lưỡng trước khi giao hàng, đảm bảo đúng màu, đúng kích thước, đúng chất lượng như cam kết.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="border-b border-gray-200 pb-8"
              >
                <h3 className="text-xl font-light text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 pt-16 border-t border-gray-200">
            {[
              { number: "1000", label: "KHÁCH HÀNG LỚN - NHỎ" },
              { number: "500+", label: "MẪU MÃ ĐẸP VÀ HỢP TREND" },
              { number: "15+", label: "KINH NGHIỆM THIẾT KẾ & IN ẤN" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="text-center"
              >
                <p className="text-5xl font-light text-amber-800 mb-2">{stat.number}</p>
                <p className="text-xs tracking-widest text-gray-600 uppercase font-light">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 md:py-32 bg-gray-50"
        style={{
          backgroundImage:
            "url(https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/testimonial-bg-luxury-3Cfp27ranz9jLeeMgwmWFT.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-widest text-amber-800 uppercase mb-4">
              ĐÁNH GIÁ
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              ĐÁNH GIÁ CỦA KHÁCH HÀNG
            </h2>
            <div className="w-16 h-1 bg-amber-800 mx-auto"></div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                content:
                  "In tem nhãn ở nhiều chỗ rồi, nhưng DuKy là nơi đầu tiên làm đúng màu và không làm mình chờ quá lâu. Rất ổn!",
                author: "Khách hàng 1",
                role: "Doanh nhân",
                rating: 5,
              },
              {
                content:
                  "Đã gửi nhiều file in cho khách, DuKy hỗ trợ kiểm tra trước khi in cực kỳ kỹ. Khỏi lo bị lỗi linh tinh. Đúng gu dân thiết kế!",
                author: "Khách hàng 2",
                role: "Nhà thiết kế",
                rating: 5,
              },
              {
                content:
                  "Hình ảnh rõ nét, màu không bị lệch khi in. Giấy cầm chắc tay, không bị mỏng quá. Chất lượng đúng như đã cam kết.",
                author: "Khách hàng 3",
                role: "Chủ cửa hàng",
                rating: 5,
              },
              {
                content:
                  "Tôi từng in tag ở nhiều nơi, nhưng chỉ khi làm việc với Duky mới thật sự hài lòng. Màu in chuẩn, font đúng thiết kế. Các bạn hỗ trợ chỉnh lại tốt.",
                author: "Khách hàng 4",
                role: "Chủ thương hiệu",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white p-8 rounded-sm border border-gray-200"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-800 text-amber-800" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 font-light leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-light text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 font-light">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-widest text-amber-800 uppercase mb-4">
              ĐỐI TÁC
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              ĐỐI TÁC CỦA CHÚNG TÔI
            </h2>
            <div className="w-16 h-1 bg-amber-800 mx-auto"></div>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="h-24 bg-gray-100 rounded-sm flex items-center justify-center border border-gray-300"
              >
                <p className="text-gray-400 font-light">Partner {index + 1}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-24 md:py-32 bg-white"
        style={{
          backgroundImage:
            "url(https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/luxury-process-bg-V2u9F2ecQAVDmpt8voRMBo.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-widest text-amber-800 uppercase mb-4">
              QUY TRÌNH
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              QUY TRÌNH LÀM VIỆC
            </h2>
            <p className="text-lg text-gray-600 font-light">
              TỪ Ý TƯỞNG BAN ĐẦU - ĐẾN THIẾT KẾ HOÀN HẢO
            </p>
            <div className="w-16 h-1 bg-amber-800 mx-auto mt-6"></div>
          </motion.div>

          {/* Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {[
              { num: 1, title: "CONSULTATION", desc: "Tư vấn nhu cầu" },
              { num: 2, title: "DESIGN", desc: "Thiết kế" },
              { num: 3, title: "PREPRESS", desc: "Chuẩn bị in" },
              { num: 4, title: "PRINTING", desc: "In ấn" },
              { num: 5, title: "FINISHING", desc: "Hoàn thiện" },
              { num: 6, title: "DELIVERY", desc: "Giao hàng" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="text-center"
              >
                {/* Step Number */}
                <div className="w-20 h-20 rounded-full border-2 border-amber-800 flex items-center justify-center font-light text-2xl text-amber-800 mb-6 mx-auto">
                  {step.num}
                </div>

                {/* Content */}
                <h3 className="text-lg font-light text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-sm tracking-widest text-amber-800 uppercase mb-4">
                LIÊN HỆ
              </p>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
                LIÊN HỆ VỚI CHÚNG TÔI
              </h2>
              <div className="w-16 h-1 bg-amber-800 mx-auto"></div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-light text-gray-700 mb-3">Họ và tên *</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 transition-colors font-light"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-3">Email của bạn *</label>
                <input
                  type="email"
                  className="w-full px-6 py-4 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 transition-colors font-light"
                  placeholder="Nhập email"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-3">Số điện thoại *</label>
                <input
                  type="tel"
                  className="w-full px-6 py-4 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 transition-colors font-light"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-amber-800 text-white font-light rounded-sm hover:bg-amber-900 transition-colors text-lg tracking-wide"
              >
                Gửi yêu cầu
              </motion.button>
            </motion.form>
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
                Intemcantho.vn (Duky Printing) chuyên in tem nhãn decal, tem bảo hành, tem chống giả tại Cần Thơ. Với công nghệ in hiện đại và dịch vụ tận tâm, chúng tôi giúp sản phẩm của bạn nổi bật và chuyên nghiệp hơn.
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

      {/* Onboarding Modal */}
      <OnboardingModal />

      {/* Chat Search */}
      <ChatSearch />
    </div>
  );
}
