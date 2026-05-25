"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  {
    question: "Giá in tờ rơi đã bao gồm thiết kế chưa?",
    answer:
      "Giá in chưa bao gồm phí thiết kế. Tuy nhiên, chúng tôi hỗ trợ kiểm tra file miễn phí và hướng dẫn chỉnh sửa nếu cần. Nếu bạn chưa có file thiết kế, chúng tôi cung cấp dịch vụ thiết kế với giá ưu đãi.",
  },
  {
    question: "Tôi chưa có file thiết kế có in được không?",
    answer:
      "Có. Bạn chỉ cần gửi nội dung, logo, hình ảnh. Đội ngũ thiết kế sẽ layout tờ rơi chuyên nghiệp và gửi bản duyệt trước khi in để bạn yên tâm.",
  },
  {
    question: "In tờ rơi mất bao lâu?",
    answer:
      "Thời gian in thông thường từ 2–4 ngày làm việc (tính từ ngày duyệt file + đặt cọc). Nếu cần gấp, chúng tôi có thể hỗ trợ in nhanh trong 24 giờ với phụ phí.",
  },
  {
    question: "Tờ rơi có những kích thước nào?",
    answer:
      "Kích thước phổ biến: A5 (14.8×21 cm), A4 (21×29.7 cm), A6 (10.5×14.8 cm) hoặc theo yêu cầu. File in nên có độ phân giải 300 dpi, định dạng PDF hoặc AI.",
  },
  {
    question: "Có giao hàng tại Cần Thơ không?",
    answer:
      "Có giao hàng nội ô Cần Thơ miễn phí cho đơn từ 500K. Đơn nhỏ hơn phí giao chỉ 20K–30K. Nhận hàng trong ngày nếu đặt trước 2 giờ chiều.",
  },
  {
    question: "Có nhận in tờ rơi số lượng nhiều cho sự kiện không?",
    answer:
      "Có nhận in số lượng lớn cho hội nghị, khai trương, triển lãm, sự kiện doanh nghiệp. Số lượng càng nhiều, giá càng tốt — liên hệ để nhận báo giá ưu đãi nhé.",
  },
  {
    question: "Có xuất hóa đơn không?",
    answer:
      "Có xuất hóa đơn VAT cho doanh nghiệp và tổ chức. Bạn vui lòng cung cấp thông tin công ty khi đặt hàng.",
  },
  {
    question: "Tôi gửi file qua Zalo được không?",
    answer:
      "Hoàn toàn được! Bạn có thể gửi file thiết kế qua Zalo 0985 463 403 để được xử lý nhanh nhất. Shop sẽ phản hồi trong vòng 30 phút.",
  },
];

export default function ToRoiFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}