import { CheckCircle2 } from "lucide-react";
import BrandCard from "@/components/ui/BrandCard";

export default function StandeeComparison() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-[860px]">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          NÊN CHỌN <span className="text-[#e87c22]">STANDEE</span> NÀO PHÙ HỢP?
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 relative">
          
          {/* Card 1: Standee Chữ X */}
          <BrandCard className="flex-1 bg-[#FFFDF9] p-4 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-[45%] flex justify-center">
               <img src="/standee/section1_1.png" alt="Standee Chân Chữ X" className="max-h-48 object-contain" />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="text-base font-bold text-[#9a5b24] mb-2 uppercase tracking-wide">STANDEE CHÂN CHỮ X</h3>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Giá thành tiết kiệm</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Gọn nhẹ, dễ lắp đặt</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Phù hợp sự kiện ngắn hạn, khai trương, chương trình sale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Thay banner dễ dàng</span>
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

          {/* Card 2: Standee Cuốn Nhôm */}
          <BrandCard className="flex-1 bg-[#FFFDF9] p-4 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-[45%] flex justify-center">
               <img src="/standee/section1_2.png" alt="Standee Cuốn Nhôm" className="max-h-48 object-contain" />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="text-base font-bold text-[#9a5b24] mb-2 uppercase tracking-wide">STANDEE CUỐN NHÔM</h3>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Thiết kế sang trọng, chuyên nghiệp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Bền đẹp, dễ bảo quản & tái sử dụng</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Phù hợp showroom, hội nghị, triển lãm, thương hiệu cao cấp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Thu gọn nhanh chóng</span>
                </li>
              </ul>
            </div>
          </BrandCard>

          {/* CTA Box */}
          <BrandCard className="w-full lg:w-[200px] bg-white p-4 flex flex-col justify-center items-center self-center">
            <h3 className="text-[15px] font-bold text-[#e87c22] mb-1.5 text-center tracking-wide">CẦN TƯ VẤN?</h3>
            <p className="text-gray-600 text-xs mb-4 text-center leading-relaxed">
              Nhận báo giá & tư vấn mẫu Standee phù hợp.
            </p>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="bg-[#e87c22] hover:bg-[#d66e1b] text-white py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-colors w-full shadow-sm hover:shadow text-xs">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" className="w-5 h-5 drop-shadow-sm" />
              LIÊN HỆ NGAY
            </a>
          </BrandCard>

        </div>
      </div>
    </section>
  );
}
