"use client";

import { CheckCircle2, Star } from "lucide-react";
import BrandCard from "@/components/ui/BrandCard";
import WarmButton from "@/components/WarmButton";

const fileRequirements = [
  "File đúng kích thước hashtag hoặc form cần bế",
  "Độ phân giải 300dpi, hệ màu CMYK",
  "File PDF, AI, PSD, CDR hoặc PNG/JPG chất lượng cao",
  "Nội dung chữ đủ lớn, dễ đọc khi chụp ảnh từ xa",
  "Logo, QR code và đường bế không bị mờ hoặc vỡ nét",
];

const testimonials = [
  {
    content: "Hashtag cầm tay lên màu đẹp, form chắc và khách chụp ảnh check-in rất thích.",
    author: "Chị Ngọc",
    role: "Tổ chức sự kiện",
  },
  {
    content: "Shop mình dùng cho khai trương, mẫu nổi bật và giao đúng hẹn. Nhìn hình rất bắt mắt.",
    author: "Anh Khoa",
    role: "Chủ cửa hàng",
  },
  {
    content: "File ban đầu chưa chuẩn nhưng được hỗ trợ chỉnh lại trước khi in. Thành phẩm rất gọn gàng.",
    author: "Chị Thảo",
    role: "Marketing executive",
  },
];

export default function HashtagFileAndFeedback() {
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
                YÊU CẦU FILE <span className="text-[#E6792A]">IN HASHTAG</span>
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
              KHÁCH HÀNG <span className="text-[#E6792A]">NÓI GÌ</span> VỀ HASHTAG?
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
