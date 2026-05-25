"use client";

import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  {
    question: "Giá in hashtag cầm tay đã bao gồm thiết kế chưa?",
    answer:
      "Giá in hashtag chưa bao gồm thiết kế. Tuy nhiên, đội ngũ thiết kế sẽ hỗ trợ bạn với phí rất nhỏ. Bạn chỉ cần gửi nội dung, logo, thông điệp — shop sẽ thiết kế form bế đẹp và gửi bản duyệt trước khi in.",
  },
  {
    question: "Tôi muốn bế hashtag theo logo riêng có được không?",
    answer:
      "Hoàn toàn được! Shop nhận bế theo form logo, hình ảnh, thông điệp riêng. Bạn chỉ cần gửi file thiết kế hoặc mô tả ý tưởng — đội ngũ sẽ tư vấn form bế phù hợp.",
  },
  {
    question: "Hashtag cầm tay có những chất liệu nào?",
    answer:
      "Hashtag giấy couché cán màng bóng hoặc mờ, hashtag giấy bìa cứng, hashtag nhựa PVC chống nước. Tùy sự kiện mà chọn chất liệu phù hợp.",
  },
  {
    question: "File in hashtag cần kích thước bao nhiêu?",
    answer:
      "Kích thước phổ biến: 15×15 cm, 20×20 cm hoặc theo yêu cầu. File in nên có độ phân giải 300 dpi, định dạng PNG hoặc PDF, nền trong suốt nếu cần bế form đặc biệt.",
  },
  {
    question: "Có thể in số lượng ít cho sự kiện nhỏ không?",
    answer:
      "Có nhận in số lượng ít từ 10–50 cái cho sự kiện nhỏ, sinh nhật, khai trương. Số lượng越多越大 giá càng tốt — liên hệ để nhận báo giá ưu đãi nhé.",
  },
  {
    question: "Có giao hàng tại Cần Thơ không?",
    answer:
      "Có giao hàng nội ô Cần Thơ miễn phí cho đơn từ 500K. Đơn nhỏ hơn phí giao chỉ 20K–30K. Nhận hàng trong ngày nếu đặt trước 2 giờ chiều.",
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

export default function HashtagFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="VỀ IN HASHTAG CẦM TAY"
      faqs={faqs}
    />
  );
}