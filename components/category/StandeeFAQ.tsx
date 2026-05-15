"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BrandOutlineButton from "@/components/ui/BrandOutlineButton";

const faqs = [
  {
    question: "Giá in standee đã bao gồm thiết kế chưa?",
  },
  {
    question: "Tôi chưa có file thiết kế có in được không?",
  },
  {
    question: "In standee mất bao lâu?",
  },
  {
    question: "Có giao hàng tại Cần Thơ không?",
  },
];

export default function StandeeFAQ() {
  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-10">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-white rounded-2xl p-5 lg:p-6 flex items-center justify-between cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100"
            >
              <span 
                className="text-gray-900 font-black text-[15px] lg:text-[16px] leading-tight flex-grow"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {faq.question}
              </span>
              
              {/* Chevron Icon */}
              <div className="flex-shrink-0 ml-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link href="/faq">
            <BrandOutlineButton className="flex items-center gap-2">
              Xem tất cả câu hỏi
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
