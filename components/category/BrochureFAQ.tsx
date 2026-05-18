"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  { question: "Giá in brochure đã bao gồm thiết kế chưa?" },
  { question: "Tôi chưa có file thiết kế brochure có in được không?" },
  { question: "In brochure gấp 2, gấp 3 mất bao lâu?" },
  { question: "Brochure có in được trên giấy mỹ thuật không?" },
];

export default function BrochureFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}