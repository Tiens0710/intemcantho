"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "" });
  };

  const faqs = [
    {
      question: "Tôi chưa có file thiết kế thì có hỗ trợ thiết kế không?",
      answer:
        "Có. Chúng tôi cung cấp dịch vụ thiết kế chuyên nghiệp, miễn phí hoặc tính phí tùy gói dịch vụ.",
    },
    {
      question: "Tem in có chống nước, chống trầy không?",
      answer:
        "Có. Chúng tôi cung cấp các loại tem chống nước, chống trầy, chống dầu tùy theo yêu cầu của khách hàng.",
    },
    {
      question: "Thời gian in tem là bao lâu?",
      answer:
        "Thời gian in tem tùy thuộc vào số lượng và độ phức tạp của thiết kế. Thường từ 2-5 ngày làm việc.",
    },
    {
      question: "Duky Printing có nhận hoàn trả tem nhãn đã in không?",
      answer:
        "Chúng tôi chỉ nhận hoàn trả nếu sản phẩm có lỗi do nhà in gây ra. Vui lòng liên hệ để thảo luận chi tiết.",
    },
    {
      question: "Giá in tem được tính như thế nào?",
      answer:
        "Giá in tem được tính dựa trên số lượng, kích thước, loại tem, và độ phức tạp của thiết kế. Vui lòng liên hệ để nhận báo giá chi tiết.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Asymmetric Layout */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-6">
                <span className="text-sm font-light text-amber-800 tracking-wider uppercase">
                  Liên hệ với chúng tôi
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
                Thông tin
                <br />
                liên hệ
              </h1>
              <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed max-w-md">
                Hãy liên hệ ngay với chúng tôi để được tư vấn chi tiết hơn. Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-sm border border-gray-200 hover:border-amber-800 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-800 transition-colors">
                    <Phone className="w-5 h-5 text-amber-800 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-light text-gray-500 uppercase tracking-wider">Điện thoại</p>
                    <a href="tel:0985463403" className="text-lg font-light text-gray-900 hover:text-amber-800 transition-colors">
                      0985 463 403
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-sm border border-gray-200 hover:border-amber-800 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-800 transition-colors">
                    <Mail className="w-5 h-5 text-amber-800 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-light text-gray-500 uppercase tracking-wider">Email</p>
                    <a href="mailto:thanhngan989@gmail.com" className="text-lg font-light text-gray-900 hover:text-amber-800 transition-colors">
                      thanhngan989@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-sm border border-gray-200 hover:border-amber-800 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-800 transition-colors">
                    <MapPin className="w-5 h-5 text-amber-800 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-light text-gray-500 uppercase tracking-wider">Địa chỉ</p>
                    <p className="text-lg font-light text-gray-900">
                      Lầu 1, số 122 Nguyễn Hiền, P. Tân An, TP. Cần Thơ
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Right - Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 md:p-12 rounded-sm border border-amber-200">
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="w-6 h-6 text-amber-800" />
                  <h3 className="text-2xl font-light text-gray-900">Thời gian làm việc</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-light text-gray-600 uppercase tracking-wider mb-2">Thứ 2 - Thứ 6</p>
                    <p className="text-3xl font-light text-amber-800">9:00 - 18:00</p>
                  </div>
                  <div className="border-t border-amber-200 pt-6">
                    <p className="text-sm font-light text-gray-600 uppercase tracking-wider mb-2">Thứ 7</p>
                    <p className="text-3xl font-light text-amber-800">9:00 - 12:00</p>
                  </div>
                  <div className="border-t border-amber-200 pt-6">
                    <p className="text-sm font-light text-gray-600 uppercase tracking-wider mb-2">Chủ nhật</p>
                    <p className="text-2xl font-light text-gray-500">Không làm việc</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-sm font-light text-amber-800 tracking-wider uppercase">Câu hỏi thường gặp</span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-2">Những điều bạn cần biết</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 rounded-sm overflow-hidden hover:border-amber-800 transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-amber-50 transition-colors"
                >
                  <h3 className="text-base font-light text-gray-900 text-left">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-amber-800 flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedFaq === index ? "auto" : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-amber-50 border-t border-gray-200">
                    <p className="text-gray-600 font-light leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-sm font-light text-amber-800 tracking-wider uppercase">Gửi tin nhắn</span>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-2">Liên hệ ngay với chúng tôi</h2>
              <p className="text-gray-600 font-light mt-4">Điền thông tin dưới đây và chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-light text-gray-900 mb-3">
                  Họ và tên <span className="text-amber-800">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nhập họ và tên của bạn"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm font-light focus:outline-none focus:border-amber-800 transition-colors bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-light text-gray-900 mb-3">
                  Email <span className="text-amber-800">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm font-light focus:outline-none focus:border-amber-800 transition-colors bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-light text-gray-900 mb-3">
                  Số điện thoại <span className="text-amber-800">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+84xxxxxxxxx"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm font-light focus:outline-none focus:border-amber-800 transition-colors bg-white"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-8 py-4 bg-amber-800 text-white font-light rounded-sm hover:bg-amber-900 transition-colors"
              >
                Gửi ngay
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
