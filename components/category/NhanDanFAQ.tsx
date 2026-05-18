"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  { question: "Giá in tem nhãn đã bao gồm thiết kế chưa?" },
  { question: "Tôi chưa có file thiết kế có in được không?" },
  { question: "In tem nhãn mất bao lâu?" },
  { question: "Tem nhãn có chống nước được không?" },
  { question: "Có in số lượng ít không?" },
  { question: "Có giao hàng tại Cần Thơ không?" },
];

export default function NhanDanFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}