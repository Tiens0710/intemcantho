"use client";

import CategoryFAQ from "./CategoryFAQ";

const faqs = [
  {
    question: "Giá in voucher đã bao gồm thiết kế chưa?",
    answer:
      "Giá in voucher chưa bao gồm thiết kế. Tuy nhiên, đội ngũ thiết kế sẽ hỗ trợ bạn với phí rất nhỏ. Bạn chỉ cần gửi nội dung, logo, thông tin chương trình — shop sẽ thiết kế voucher đẹp và gửi bản duyệt trước khi in.",
  },
  {
    question: "Tôi muốn in voucher theo kích thước riêng có được không?",
    answer:
      "Hoàn toàn được! Shop nhận in voucher theo kích thước yêu cầu. Kích thước phổ biến: 5×10 cm, 6×12 cm. Bạn chỉ cần mô tả mong muốn, shop sẽ tư vấn kích thước phù hợp.",
  },
  {
    question: "Voucher có những chất liệu nào?",
    answer:
      "Voucher giấy couché cán màng bóng hoặc mờ, voucher giấy bìa cứng, voucher nhựa PVC chống nước. Tùy chương trình khuyến mãi mà chọn chất liệu phù hợp.",
  },
  {
    question: "Có in thẻ tích điểm hoặc phiếu quà tặng không?",
    answer:
      "Có nhận in thẻ tích điểm, phiếu quà tặng, phiếu giảm giá với đa dạng kích thước và chất liệu. Shop tư vấn miễn phí để sản phẩm vừa đẹp vừa tiết kiệm.",
  },
  {
    question: "Có giao hàng tại Cần Thơ không?",
    answer:
      "Có giao hàng nội ô Cần Thơ miễn phí cho đơn từ 500K. Đơn nhỏ hơn phí giao chỉ 20K–30K. Nhận hàng trong ngày nếu đặt trước 2 giờ chiều.",
  },
  {
    question: "Có nhận in voucher số lượng nhiều cho chuỗi cửa hàng không?",
    answer:
      "Có nhận in số lượng lớn cho chuỗi cửa hàng, spa, nhà hàng, hệ thống quán. Số lượng càng nhiều, giá càng tốt — liên hệ để nhận báo giá ưu đãi nhé.",
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

export default function VoucherFAQ() {
  return (
    <CategoryFAQ
      title="CÂU HỎI"
      highlight="VỀ IN VOUCHER"
      faqs={faqs}
    />
  );
}