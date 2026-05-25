"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  {
    question: "Giá in bạt hiflex đã bao gồm thiết kế chưa?",
    answer:
      "Giá in bạt hiflex chưa bao gồm thiết kế. Tuy nhiên, đội ngũ thiết kế sẽ hỗ trợ bạn với phí rất nhỏ. Bạn chỉ cần gửi nội dung, hình ảnh, thông điệp — shop sẽ thiết kế banner, backdrop đẹp và gửi bản duyệt trước khi in.",
  },
  {
    question: "Tôi chưa có file thiết kế có in được không?",
    answer:
      "Có nhé! Bạn chỉ cần gửi nội dung, logo, hình ảnh. Đội ngũ thiết kế sẽ layout banner, backdrop chuyên nghiệp và gửi bản duyệt để bạn yên tâm trước khi in.",
  },
  {
    question: "Bạt hiflex có chống nước không?",
    answer:
      "Có! Bạt hiflex chống nước tốt, bền màu ngoài trời từ 6–12 tháng. Phù hợp làm banner, billboard, backdrop sự kiện ngoài trời.",
  },
  {
    question: "File in bạt hiflex cần kích thước bao nhiêu?",
    answer:
      "Tùy mục đích sử dụng: banner nhỏ 60×80 cm, banner lớn 100×200 cm, billboard có thể lên đến vài mét. File in nên có độ phân giải 72–150 dpi, định dạng PNG hoặc PDF.",
  },
  {
    question: "Có giao hàng tại Cần Thơ không?",
    answer:
      "Có giao hàng nội ô Cần Thơ miễn phí cho đơn từ 500K. Đơn nhỏ hơn phí giao chỉ 20K–30K. Nhận hàng trong ngày nếu đặt trước 2 giờ chiều.",
  },
  {
    question: "Có nhận in bạt hiflex số lượng nhiều cho sự kiện không?",
    answer:
      "Có nhận in số lượng lớn cho hội nghị, khai trương, triển lãm, sự kiện doanh nghiệp. Số lượng càng nhiều, giá càng tốt — liên hệ để nhận báo giá ưu đãi nhé.",
  },
  {
    question: "Bạt hiflex có những loại nào?",
    answer:
      "Bạt hiflex không xuyên sáng (mặt bạt), bạt hiflex 2 mặt in 2 mặt, bạt hiflex xuyên sáng. Tùy mục đích sử dụng mà chọn loại phù hợp.",
  },
  {
    question: "Tôi gửi file qua Zalo được không?",
    answer:
      "Hoàn toàn được! Bạn có thể gửi file thiết kế qua Zalo 0985 463 403 để được xử lý nhanh nhất. Shop sẽ phản hồi trong vòng 30 phút.",
  },
];

export default function HiflexFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}