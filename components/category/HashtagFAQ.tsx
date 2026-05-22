"use client";

import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  { question: "Giá in hashtag cầm tay đã bao gồm thiết kế chưa?" },
  { question: "Tôi muốn bế hashtag theo logo riêng có được không?" },
  { question: "In hashtag cầm tay mất bao lâu?" },
  { question: "Có thể in số lượng ít cho sự kiện nhỏ không?" },
];

export default function HashtagFAQ() {
  return <CategoryFAQ title="CÂU HỎI" highlight="VỀ IN HASHTAG CẦM TAY" faqs={faqs} />;
}
