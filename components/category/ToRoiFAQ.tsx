"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Giá in tờ rơi đã bao gồm thiết kế chưa?",
    answer:
      "Giá in chưa bao gồm phí thiết kế. Tuy nhiên, chúng tôi hỗ trợ kiểm tra file miễn phí và hướng dẫn chỉnh sửa nếu cần. Nếu bạn chưa có file thiết kế, chúng tôi cung cấp dịch vụ thiết kế với giá ưu đãi.",
  },
  {
    question: "Tôi chưa có file thiết kế có in được không?",
    answer:
      "Có. Bạn có thể sử dụng công cụ thiết kế trực tuyến miễn phí của chúng tôi, hoặc đặt dịch vụ thiết kế chuyên nghiệp. Đội ngũ sẽ tư vấn và tạo file thiết kế phù hợp cho tờ rơi của bạn.",
  },
  {
    question: "In tờ rơi mất bao lâu?",
    answer:
      "Thời gian in tờ rơi thông thường từ 2-4 ngày làm việc (tính từ ngày duyệt file + đặt cọc). Nếu cần gấp, chúng tôi có thể hỗ trợ in nhanh trong 24 giờ với phụ phí.",
  },
  {
    question: "Có giao hàng tại Cần Thơ không?",
    answer:
      "Có. Chúng tôi giao hàng miễn phí trong nội thành Cần Thơ. Đối với các tỉnh thành khác, chúng tôi hỗ trợ gửi chuyển phát nhanh với chi phí hợp lý.",
  },
];

export default function ToRoiFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[900px]">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 uppercase tracking-tight">
            CÂU HỎI <span className="text-[#E6792A]">THƯỜNG GẶP</span>
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Những thắc mắc phổ biến về in tờ rơi
          </p>
        </div>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-[#E6792A] shadow-lg shadow-[#E6792A]/10"
                  : "border-gray-200 hover:border-[#E6792A]/50"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="text-sm font-bold text-gray-800 pr-4">
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#E6792A] text-white rotate-90"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}