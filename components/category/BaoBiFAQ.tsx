"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  { question: "Giá in bao bì đã bao gồm thiết kế chưa?" },
  { question: "Tôi chưa có file thiết kế, có in được không?" },
  { question: "In bao bì mất bao lâu?" },
  { question: "Có giao hàng tại Cần Thơ không?" },
  { question: "Số lượng tối thiểu khi đặt in bao bì là bao nhiêu?" },
  { question: "Có thể in trên nhiều chất liệu khác nhau không?" },
];

export default function BaoBiFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}