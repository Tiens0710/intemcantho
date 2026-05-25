"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  {
    question: "Ảnh cưới in tại Intem có bền không?",
    answer:
      "Ảnh cưới in trên giấy ảnh cao cấp có độ bền trên 10 năm. Nếu ép nhựa PVC hoặc nhựa cứng, ảnh có thể bền trên 15 năm, chống nước và chống trầy xước.",
  },
  {
    question: "Tôi chưa có file ảnh cao cấp có in được không?",
    answer:
      "Có! Bạn chỉ cần gửi ảnh từ điện thoại hoặc từ nhiếp ảnh gia. Đội ngũ sẽ hỗ trợ chỉnh sửa, nâng chất lượng ảnh trước khi in để đảm bảo kết quả tốt nhất.",
  },
  {
    question: "Ảnh cưới có những kích thước nào?",
    answer:
      "Kích thước phổ biến: 10x15cm, 13x18cm, 15x21cm, 20x30cm, 30x40cm, 40x60cm. Ngoài ra còn nhận in theo yêu cầu với kích thước tùy chỉnh.",
  },
  {
    question: "Tôi muốn in photobook cưới được không?",
    answer:
      "Có! Intem nhận in photobook cưới đa dạng số trang, chất liệu giấy ảnh cao cấp, bìa cứng hoặc bìa da sang trọng. Liên hệ để được tư vấn chi tiết.",
  },
  {
    question: "Có giao hàng tại Cần Thơ không?",
    answer:
      "Có giao hàng nội ô Cần Thơ miễn phí cho đơn từ 500K. Đơn nhỏ hơn phí giao chỉ 20K–30K. Nhận hàng trong ngày nếu đặt trước 2 giờ chiều.",
  },
  {
    question: "Thời gian hoàn thành ảnh cưới là bao lâu?",
    answer:
      "Đơn đơn giản từ 1-5 ảnh: có thể lấy trong ngày. Đơn số lượng lớn (trên 10 ảnh hoặc photobook): từ 3-5 ngày làm việc. Liên hệ để được tư vấn chính xác nhất.",
  },
  {
    question: "Tôi gửi file qua Zalo được không?",
    answer:
      "Hoàn toàn được! Bạn có thể gửi file ảnh qua Zalo 0985 463 403 để được xử lý nhanh nhất. Shop sẽ phản hồi trong vòng 30 phút.",
  },
];

export default function AnhCuoiFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}