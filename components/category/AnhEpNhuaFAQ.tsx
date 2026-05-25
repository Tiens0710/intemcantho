"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  {
    question: "Ảnh ép nhựa có bền không?",
    answer:
      "Ảnh ép nhựa PVC có độ bền trên 10 năm, chống nước và chống trầy xước. Ảnh ép cứng cao cấp có thể bền trên 15 năm nếu bảo quản đúng cách.",
  },
  {
    question: "Tôi chưa có file ảnh cao cấp có in được không?",
    answer:
      "Có! Bạn chỉ cần gửi ảnh từ điện thoại hoặc máy ảnh. Đội ngũ sẽ hỗ trợ chỉnh sửa, tăng chất lượng ảnh trước khi in để đảm bảo kết quả tốt nhất.",
  },
  {
    question: "Ảnh ép nhựa có những kích thước nào?",
    answer:
      "Kích thước phổ biến: 10x15cm, 13x18cm, 15x21cm, 20x30cm, 30x40cm, 40x60cm. Ngoài ra còn nhận in theo yêu cầu với kích thước tùy chỉnh.",
  },
  {
    question: "Ảnh ép nhựa và ảnh thường khác nhau thế nào?",
    answer:
      "Ảnh ép nhựa có bề mặt cứng cáp, chống nước, không bị cong hay gấp nếp. Ảnh thường trên giấy sẽ bị phai màu theo thời gian và dễ bị hư hỏng khi tiếp xúc nước.",
  },
  {
    question: "Có giao hàng tại Cần Thơ không?",
    answer:
      "Có giao hàng nội ô Cần Thơ miễn phí cho đơn từ 500K. Đơn nhỏ hơn phí giao chỉ 20K–30K. Nhận hàng trong ngày nếu đặt trước 2 giờ chiều.",
  },
  {
    question: "Thời gian hoàn thành ảnh ép nhựa là bao lâu?",
    answer:
      "Đơn giản từ 1-2 ảnh: có thể lấy trong ngày. Đơn số lượng lớn (trên 10 ảnh): từ 2-3 ngày làm việc. Liên hệ để được tư vấn chính xác nhất.",
  },
  {
    question: "Tôi gửi file qua Zalo được không?",
    answer:
      "Hoàn toàn được! Bạn có thể gửi file ảnh qua Zalo 0985 463 403 để được xử lý nhanh nhất. Shop sẽ phản hồi trong vòng 30 phút.",
  },
];

export default function AnhEpNhuaFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}