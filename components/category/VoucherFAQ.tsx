"use client";

import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  { question: "Giá in voucher đã bao gồm thiết kế chưa?" },
  { question: "Tôi muốn in voucher theo kích thước riêng có được không?" },
  { question: "In voucher mất bao lâu?" },
  { question: "Có in thẻ tích điểm hoặc phiếu quà tặng không?" },
];

export default function VoucherFAQ() {
  return <CategoryFAQ title="CÂU HỎI" highlight="VỀ IN VOUCHER" faqs={faqs} />;
}
