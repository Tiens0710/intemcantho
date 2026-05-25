"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  {
    question: "Giá in catalogue đã bao gồm thiết kế chưa?",
    answer:
      "Giá in catalogue chưa bao gồm thiết kế. Tuy nhiên, đội ngũ thiết kế sẽ hỗ trợ bạn với phí rất nhỏ. Bạn chỉ cần gửi nội dung, hình ảnh sản phẩm — shop sẽ layout và gửi bản duyệt trước khi in.",
  },
  {
    question: "Tôi chưa có file thiết kế có in được không?",
    answer:
      "Có nhé! Bạn chỉ cần gửi nội dung, logo, hình ảnh sản phẩm. Đội ngũ thiết kế sẽ layout catalogue chuyên nghiệp và gửi bản duyệt để bạn yên tâm trước khi in.",
  },
  {
    question: "Catalogue có bao nhiêu trang?",
    answer:
      "Catalogue phổ biến từ 8–32 trang. Tùy số lượng sản phẩm và nội dung mà bạn chọn số trang phù hợp. Shop tư vấn miễn phí để catalogue vừa đẹp vừa tiết kiệm.",
  },
  {
    question: "File in catalogue cần kích thước bao nhiêu?",
    answer:
      "Kích thước phổ biến: A4 (21×29.7 cm), A5 (14.8×21 cm) hoặc theo yêu cầu. File in nên có độ phân giải 300 dpi, định dạng PDF hoặc AI, màu CMYK.",
  },
  {
    question: "Có giao hàng tại Cần Thơ không?",
    answer:
      "Có giao hàng nội ô Cần Thơ miễn phí cho đơn từ 500K. Đơn nhỏ hơn phí giao chỉ 20K–30K. Nhận hàng trong ngày nếu đặt trước 2 giờ chiều.",
  },
  {
    question: "Có nhận in catalogue số lượng nhiều cho doanh nghiệp không?",
    answer:
      "Có nhận in số lượng lớn cho doanh nghiệp, hồ sơ năng lực, catalogue triển lãm. Số lượng càng nhiều, giá càng tốt — liên hệ để nhận báo giá ưu đãi nhé.",
  },
  {
    question: "Catalogue bìa cứng và catalogue bìa mềm khác nhau thế nào?",
    answer:
      "Catalogue bìa mềm (giấy couché) gọn nhẹ, chi phí thấp, phù hợp giới thiệu sản phẩm. Catalogue bìa cứng sang trọng hơn, phù hợp hồ sơ năng lực, catalogue cao cấp.",
  },
  {
    question: "Tôi gửi file qua Zalo được không?",
    answer:
      "Hoàn toàn được! Bạn có thể gửi file thiết kế qua Zalo 0985 463 403 để được xử lý nhanh nhất. Shop sẽ phản hồi trong vòng 30 phút.",
  },
];

export default function CatalogueFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}