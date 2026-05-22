"use client";

import { CheckCircle2, Star } from "lucide-react";
import BrandCard from "@/components/ui/BrandCard";
import WarmButton from "@/components/WarmButton";

const fileRequirements = [
  "File đúng kích thước voucher hoặc thẻ tích điểm cần in",
  "Độ phân giải 300dpi, hệ màu CMYK",
  "File PDF, AI, PSD, CDR hoặc PNG/JPG chất lượng cao",
  "Nội dung ưu đãi, điều kiện sử dụng và hạn dùng rõ ràng",
  "Logo, QR code và thông tin liên hệ không bị mờ hoặc vỡ nét",
];

const testimonials = [
  {
    content: "Voucher in đẹp, giấy dày và màu lên rất sang. Khách nhận phiếu quà tặng phản hồi rất tốt.",
    author: "Chị Linh",
    role: "Chủ spa",
  },
  {
    content: "Thẻ tích điểm làm nhanh, đúng màu thương hiệu. Shop mình dùng rất tiện để giữ khách quay lại.",
    author: "Anh Minh",
    role: "Chủ cửa hàng",
  },
  {
    content: "File chưa chuẩn vẫn được hỗ trợ chỉnh lại kỹ trước khi in. Thành phẩm sạch và sắc nét.",
    author: "Chị Hạnh",
    role: "Quản lý marketing",
  },
];

export default function VoucherFileAndFeedback() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="container relative z-10 mx-auto max-w-[1300px] px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-[40%]">
            <BrandCard className="h-full p-6 lg:p-8">
              <h2
                className="mb-7 text-center text-xl font-black uppercase tracking-tight text-gray-900"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                YÊU CẦU FILE <span className="text-[#E6792A]">IN VOUCHER</span>
              </h2>

              <ul className="mb-8 space-y-4">
                {fileRequirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E6792A]" />
                    <span className="text-[14px] font-bold leading-snug text-gray-800">{req}</span>
                  </li>
                ))}
              </ul>

              <WarmButton fullWidth variant="filled" className="uppercase tracking-wide">
                Gửi file để kiểm tra miễn phí
              </WarmButton>
            </BrandCard>
          </div>

          <div className="flex w-full flex-col justify-center lg:w-[60%]">
            <h2
              className="mb-8 text-center text-2xl font-black uppercase tracking-tight text-gray-900"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              KHÁCH HÀNG <span className="text-[#E6792A]">NÓI GÌ</span> VỀ VOUCHER?
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <BrandCard key={testimonial.author} className="flex h-full flex-col p-5">
                  <div className="mb-4 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-[#F5A623] text-[#F5A623]" />
                    ))}
                  </div>
                  <p className="flex-1 text-center text-[13px] italic leading-relaxed text-gray-700">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="mt-5 text-center">
                    <p className="text-[14px] font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-[12px] text-gray-500">{testimonial.role}</p>
                  </div>
                </BrandCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
