import { CheckCircle2 } from "lucide-react";
import BrandCard from "@/components/ui/BrandCard";

export default function HiflexComparison() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-[860px]">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          NÊN CHỌN <span className="text-[#e87c22]">BẠT HIFLEX</span> NÀO PHÙ HỢP?
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 relative">
          
          {/* Card 1: Hiflex Không Đèn */}
          <BrandCard className="flex-1 bg-[#FFFDF9] p-4 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-[45%] flex justify-center">
               <img src="/danhmuc2.png" alt="Hiflex Không Đèn" className="max-h-48 object-contain" />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="text-base font-bold text-[#9a5b24] mb-2 uppercase tracking-wide">HIFLEX KHÔNG ĐÈN</h3>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Giá thành tiết kiệm, phù hợp mọi ngân sách</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Phù hợp banner trong nhà và ngoài trời</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">In sắc nét, màu chuẩn, bền màu</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Dễ thay thế khi cần cập nhật thông tin</span>
                </li>
              </ul>
            </div>
          </BrandCard>

          {/* VS Badge */}
          <div className="hidden lg:flex items-center justify-center -mx-10 z-10">
            <div className="w-14 h-14 rounded-full bg-white border-2 border-[#fbdcbf] shadow-md flex items-center justify-center font-black text-[#e87c22] text-2xl tracking-tighter">
              VS
            </div>
          </div>

          {/* Card 2: Hiflex Có Đèn */}
          <BrandCard className="flex-1 bg-[#FFFDF9] p-4 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-[45%] flex justify-center">
               <img src="/danhmuc4.png" alt="Hiflex Có Đèn" className="max-h-48 object-contain" />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="text-base font-bold text-[#9a5b24] mb-2 uppercase tracking-wide">HIFLEX CÓ ĐÈN</h3>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Thu hút cả ban ngày và ban đêm</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Sáng nổi bật, dễ nhìn từ xa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Phù hợp biển hiệu cửa hàng, nhà hàng</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Đẳng cấp, tạo ấn tượng mạnh với khách hàng</span>
                </li>
              </ul>
            </div>
          </BrandCard>

          {/* CTA Box */}
          <BrandCard className="w-full lg:w-[200px] bg-white p-4 flex flex-col justify-center items-center self-center">
            <h3 className="text-[15px] font-bold text-[#e87c22] mb-1.5 text-center tracking-wide">CẦN TƯ VẤN?</h3>
            <p className="text-gray-600 text-xs mb-4 text-center leading-relaxed">
              Nhận báo giá & tư vấn mẫu bạt Hiflex phù hợp.
            </p>
            <a href="https://zalo.me/0985463403" target="_blank" rel="noopener noreferrer" className="bg-[#e87c22] hover:bg-[#d66e1b] text-white py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-colors w-full shadow-sm hover:shadow text-xs">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" className="w-5 h-5 drop-shadow-sm" />
              LIÊN HỆ NGAY
            </a>
          </BrandCard>

        </div>
      </div>
    </section>
  );
}