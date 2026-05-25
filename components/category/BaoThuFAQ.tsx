"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  { question: "Giấy in bao thư là loại nào, có dễ viết bút mực lên không?" },
  { question: "Kích thước bao thư chuẩn văn phòng là bao nhiêu?" },
  { question: "Nắp bao thư có sẵn keo dán không?" },
  { question: "Thời gian in bao thư mất bao lâu?" },
  { question: "Số lượng in tối thiểu của bao thư là bao nhiêu?" },
];

export default function BaoThuFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}
