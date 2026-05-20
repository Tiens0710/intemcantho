import { CheckCircle2 } from "lucide-react";
import BrandCard from "@/components/ui/BrandCard";

export default function ToRoiComparison() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-[860px]">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          NÊN CHỌN <span className="text-[#e87c22]">TỜ RƠI</span> NÀO PHÙ HỢP?
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 relative">
          {/* Card 1: Tờ rơi giấy Couche */}
          <BrandCard className="flex-1 bg-[#FFFDF9] p-4 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-[45%] flex justify-center">
              <img src="/danhmuc4.png" alt="Tờ rơi giấy Couche" className="max-h-48 object-contain" />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="text-base font-bold text-[#9a5b24] mb-2 uppercase tracking-wide">TỜ RƠI GIẤY COUCHE</h3>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Giá thành rẻ, phù hợp phát số lượng lớn</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Màu sắc tươi sáng, bắt mắt</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Phù hợp phát tay, phát sự kiện, hội chợ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Định lượng: 100–150gsm</span>
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

          {/* Card 2: Tờ rơi giấy mỹ thuật */}
          <BrandCard className="flex-1 bg-[#FFFDF9] p-4 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-[45%] flex justify-center">
              <img src="/danhmuc5.png" alt="Tờ rơi giấy mỹ thuật" className="max-h-48 object-contain" />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="text-base font-bold text-[#9a5b24] mb-2 uppercase tracking-wide">TỜ RƠI GIẤY MỸ THUẬT</h3>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Sang trọng, tạo ấn tượng cao</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Có thể cán mờ / cán bóng tăng độ bền</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Phù hợp spa, thẩm mỹ, bất động sản cao cấp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Định lượng: 200–300gsm</span>
                </li>
              </ul>
            </div>
          </BrandCard>

          {/* CTA Box */}
          <BrandCard className="w-full lg:w-[200px] bg-white p-4 flex flex-col justify-center items-center self-center">
            <h3 className="text-[15px] font-bold text-[#e87c22] mb-1.5 text-center tracking-wide">CẦN TƯ VẤN?</h3>
            <p className="text-gray-600 text-xs mb-4 text-center leading-relaxed">
              Nhận báo giá & tư vấn mẫu Tờ rơi phù hợp.
            </p>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="bg-[#e87c22] hover:bg-[#d66e1b] text-white py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-colors w-full shadow-sm hover:shadow text-xs">
              <img src="/Icon_of_Zalo.svg.png" alt="Zalo" className="w-5 h-5 drop-shadow-sm" />
              LIÊN HỆ NGAY
            </a>
          </BrandCard>
        </div>
      </div>
    </section>
  );
}