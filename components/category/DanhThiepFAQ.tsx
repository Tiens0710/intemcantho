"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  { question: "Giá in danh thiếp đã bao gồm thiết kế chưa?" },
  { question: "Tôi chưa có file thiết kế có in được không?" },
  { question: "In danh thiếp mất bao lâu?" },
  { question: "Có giao hàng tại Cần Thơ không?" },
];

export default function DanhThiepFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}