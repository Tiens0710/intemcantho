"use client";

import React from "react";
import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  {
    question: "Chất liệu in băng gôn cổ vũ tại Intem là gì?",
    answer:
      "Intem sử dụng chất liệu vải satin bóng cao cấp màu đỏ rực hoặc các màu sắc khác theo thiết kế của bạn. Ngoài ra, chúng tôi cũng hỗ trợ in băng gôn bằng vải silk hoặc bạt hiflex chống mưa nắng cho các sự kiện treo ngoài trời.",
  },
  {
    question: "Chữ trên băng gôn đeo đầu có dễ bị bong tróc không?",
    answer:
      "Không! Chúng tôi sử dụng công nghệ in chuyển nhiệt trực tiếp vào thớ vải satin, giúp mực in bám chắc hoàn toàn. Băng gôn có thể giặt, phơi và sử dụng nhiều lần mà không sợ phai màu hay bong tróc chữ.",
  },
  {
    question: "Intem có hỗ trợ thiết kế nội dung băng gôn không?",
    answer:
      "Có! Đội ngũ thiết kế của Intem sẽ hỗ trợ bạn lên mẫu thiết kế miễn phí với các câu khẩu hiệu cổ vũ (ví dụ: Việt Nam Chiến Thắng, Tiếp Sức Thành Công...) cùng logo của công ty hoặc câu lạc bộ.",
  },
  {
    question: "Số lượng tối thiểu đặt in băng gôn là bao nhiêu?",
    answer:
      "Với băng gôn đeo đầu, số lượng tối thiểu từ 50 cái để có mức giá tốt nhất. Với băng gôn cầm tay hoặc băng gôn treo sự kiện lớn, chúng tôi nhận in từ 1 cái.",
  },
  {
    question: "Thời gian hoàn thành đơn hàng băng gôn cổ vũ là bao lâu?",
    answer:
      "Thông thường từ 1 đến 2 ngày làm việc kể từ khi duyệt file thiết kế. Nếu bạn cần in gấp phục vụ giải đấu hoặc sự kiện trong ngày, vui lòng liên hệ hotline/Zalo 0985 463 403 để được hỗ trợ sản xuất hỏa tốc.",
  },
];

export default function BangGonFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="THƯỜNG GẶP"
      faqs={faqs}
    />
  );
}
