"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  {
    question: "Giá in menu đã bao gồm thiết kế chưa?",
    answer:
      "Giá in menu chưa bao gồm thiết kế. Tuy nhiên, đội ngũ thiết kế sẽ hỗ trợ bạn với phí rất nhỏ. Bạn chỉ cần gửi nội dung, hình ảnh món ăn — shop sẽ lo phần còn lại.",
  },
  {
    question: "Tôi chưa có file thiết kế có in được không?",
    answer:
      "Có nhé! Bạn chỉ cần gửi nội dung, logo, hình ảnh món ăn. Đội ngũ thiết kế sẽ layout và gửi bản duyệt trước khi in để bạn yên tâm.",
  },
  {
    question: "Menu có những chất liệu nào?",
    answer:
      "Menu giấy couché, menu bìa cứng cán màng, menu da, menu nhựa PVC chống nước. Tùy phong cách nhà hàng mà chọn chất liệu phù hợp.",
  },
  {
    question: "File in menu cần kích thước bao nhiêu?",
    answer:
      "Kích thước phổ biến: A4 (21×29.7 cm), A5 (14.8×21 cm) hoặc theo yêu cầu. File in nên có độ phân giải 300 dpi, định dạng PDF hoặc AI.",
  },
  {
    question: "Có giao hàng tại Cần Thơ không?",
    answer:
      "Có giao hàng nội ô Cần Thơ miễn phí cho đơn từ 500K. Đơn nhỏ hơn phí giao chỉ 20K–30K. Nhận hàng trong ngày nếu đặt trước 2 giờ chiều.",
  },
  {
    question: "Có nhận in menu số lượng nhiều cho chuỗi nhà hàng không?",
    answer:
      "Có nhận in số lượng lớn cho chuỗi nhà hàng, franchise, hệ thống quán. Số lượng càng nhiều, giá càng tốt — liên hệ để nhận báo giá ưu đãi nhé.",
  },
  {
    question: "Menu bìa cứng và menu mềm khác nhau thế nào?",
    answer:
      "Menu mềm (giấy couché) gọn nhẹ, chi phí thấp, phù hợp quán café, trà sữa. Menu bìa cứng sang trọng hơn, phù hợp nhà hàng, khách sạn, spa.",
  },
  {
    question: "Tôi gửi file qua Zalo được không?",
    answer:
      "Hoàn toàn được! Bạn có thể gửi file thiết kế qua Zalo 0985 463 403 để được xử lý nhanh nhất. Shop sẽ phản hồi trong vòng 30 phút.",
  },
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