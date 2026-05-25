"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  {
    question: "In standee có bao gồm chân/kệ không?",
    answer:
      "Giá in standee đã bao gồm chân standee tương ứng (chữ X hoặc cuốn). Bạn chỉ cần chọn loại standee phù hợp, phần chân đế sẽ đi kèm sẵn.",
  },
  {
    question: "Tôi chưa có file thiết kế thì shop có thiết kế giúp không?",
    answer:
      "Có nhé! Đội ngũ thiết kế sẽ hỗ trợ bạn miễn phí hoặc với phí rất nhỏ tùy yêu cầu. Bạn chỉ cần gửi nội dung, logo, hình ảnh — shop sẽ lo phần còn lại.",
  },
  {
    question: "File in standee cần kích thước bao nhiêu?",
    answer:
      "Kích thước phổ biến: Standee chữ X 60×160 cm hoặc 80×180 cm. Standee cuốn 80×200 cm. File in nên có độ phân giải 150–300 dpi, định dạng PNG hoặc PDF.",
  },
  {
    question: "Có giao hàng nội ô Cần Thơ không?",
    answer:
      "Có giao hàng nội ô Cần Thơ miễn phí cho đơn từ 500K. Đơn nhỏ hơn phí giao chỉ 20K–30K. Nhận hàng trong ngày nếu đặt trước 2 giờ chiều.",
  },
  {
    question: "Có nhận in standee số lượng nhiều cho sự kiện không?",
    answer:
      "Nhận in số lượng lớn cho hội nghị, khai trương, triển lãm, sự kiện doanh nghiệp. Số lượng càng nhiều, giá càng tốt — liên hệ để nhận báo giá ưu đãi nhé.",
  },
  {
    question: "Standee chữ X và standee cuốn khác nhau thế nào?",
    answer:
      "Standee chữ X gọn nhẹ, dễ tháo lắp, phù hợp sự kiện ngắn ngày. Standee cuốn (roll-up) sang trọng hơn, có hộp nhôm chắc chắn, phù hợp trưng bày lâu dài.",
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

export default function StandeeFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}