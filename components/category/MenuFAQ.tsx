"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  { question: "Giá in menu đã bao gồm thiết kế chưa?" },
  { question: "Tôi chưa có file thiết kế có in được không?" },
  { question: "In menu mất bao lâu?" },
  { question: "Có giao hàng tại Cần Thơ không?" },
];

export default function MenuFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}