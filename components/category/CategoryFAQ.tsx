"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BrandOutlineButton from "@/components/ui/BrandOutlineButton";

type FAQItem = {
  question: string;
  answer?: string;
};

type CategoryFAQProps = {
  title?: string;
  highlight?: string;
  faqs: FAQItem[];
  viewAllHref?: string;
  viewAllText?: string;
};

const defaultAnswers: Record<string, string> = {
  default: "Vui lòng liên hệ hotline 0985 463 403 hoặc Zalo để được tư vấn chi tiết.",
};

export default function CategoryFAQ({
  title = "CÂU HỎI",
  highlight = "THƯỜNG GẶP",
  faqs,
  viewAllHref = "/faq",
  viewAllText = "Xem tất cả câu hỏi",
}: CategoryFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        {/* Title */}
        <h2
          className="text-2xl lg:text-3xl font-black text-center mb-8 text-gray-900 uppercase tracking-tight"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {title} <span style={{ color: "#E6792A" }}>{highlight}</span>
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                layout
                className="bg-white rounded-2xl overflow-hidden cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100"
                onClick={() => toggleFAQ(idx)}
              >
                <div className="p-5 lg:p-6 flex items-center justify-between">
                  <span 
                    className="text-gray-900 font-black text-[15px] lg:text-[16px] leading-tight flex-grow"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon with rotation */}
                  <motion.div
                    className="flex-shrink-0 ml-4"
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke={isOpen ? "#E6792A" : "black"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Expandable Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                        <div
                          className="h-px mb-4"
                          style={{
                            background: "linear-gradient(90deg, transparent, #fcebdc, transparent)",
                          }}
                        />
                        <p
                          className="text-[14px] text-gray-600 leading-relaxed"
                          style={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                          {faq.answer || defaultAnswers.default}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link href={viewAllHref}>
            <BrandOutlineButton className="flex items-center gap-2">
              {viewAllText}
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </BrandOutlineButton>
          </Link>
        </div>
      </div>
    </section>
  );
}