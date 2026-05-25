"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  { question: "Giá in bạt hiflex đã bao gồm thiết kế chưa?" },
  { question: "Tôi chưa có file thiết kế có in được không?" },
  { question: "In bạt hiflex mất bao lâu?" },
  { question: "Bạt hiflex có chống nước không?" },
];

export default function HiflexFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}