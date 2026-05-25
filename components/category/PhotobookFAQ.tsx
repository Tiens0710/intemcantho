"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  {
    question: "In photobook tại Intem Cần Thơ có những chất liệu giấy nào?",
    answer:
      "Intem cung cấp nhiều chất liệu giấy ảnh chất lượng cao như giấy bóng (Glossy), giấy mờ (Matte), giấy mỹ thuật hoặc giấy Couche định lượng cao, giúp màu sắc hiển thị trung thực và sắc nét nhất.",
  },
  {
    question: "Số lượng trang tối thiểu và tối đa cho một cuốn photobook là bao nhiêu?",
    answer:
      "Số lượng trang phổ biến từ 20 đến 100 trang tùy thuộc vào độ dày của gáy sách và loại bìa bạn chọn (bìa cứng bồi, bìa da cao cấp, hoặc bìa mềm).",
  },
  {
    question: "Tôi chưa biết cách dàn trang photobook, shop có hỗ trợ không?",
    answer:
      "Có! Intem hỗ trợ tư vấn thiết kế và dàn trang photobook chuyên nghiệp. Bạn chỉ cần gửi file ảnh chất lượng cao, đội ngũ thiết kế của chúng tôi sẽ sắp xếp bố cục đẹp mắt nhất cho bạn.",
  },
  {
    question: "Photobook in xong có bị phai màu theo thời gian không?",
    answer:
      "Với công nghệ in laser và in mực dầu chất lượng cao, kết hợp lớp màng bảo vệ chuyên dụng (cán mờ hoặc cán bóng), photobook tại Intem đảm bảo giữ màu sắc trung thực và bền màu trên 10-15 năm.",
  },
  {
    question: "Thời gian hoàn thành photobook là bao lâu?",
    answer:
      "Thời gian hoàn thành một cuốn photobook thường từ 3 đến 5 ngày làm việc kể từ khi duyệt thiết kế, tùy thuộc vào số lượng trang và quy cách gia công bìa cứng hay bìa da.",
  },
  {
    question: "Tôi có thể in photobook lấy gấp được không?",
    answer:
      "Đối với các đơn hàng cần gấp cho sự kiện, vui lòng liên hệ trực tiếp hotline hoặc Zalo 0985 463 403 để được hỗ trợ ưu tiên xử lý nhanh nhất có thể.",
  },
];

export default function PhotobookFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}
