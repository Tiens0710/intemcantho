import { CheckCircle2 } from "lucide-react";
import BrandCard from "@/components/ui/BrandCard";

export default function DanhThiepComparison() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-[860px]">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          NÊN CHỌN <span className="text-[#e87c22]">DANH THIẾP</span> NÀO PHÙ HỢP?
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 relative">
          
          {/* Card 1: Danh Thiếp Phổ Thông */}
          <BrandCard className="flex-1 bg-[#FFFDF9] p-4 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-[45%] flex justify-center">
               <img src="/anphamvanphong/danhthiep/sanpham1.png" alt="Danh Thiếp Phổ Thông" className="max-h-48 object-contain" />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="text-base font-bold text-[#9a5b24] mb-2 uppercase tracking-wide">GIẤY C300 CHUẨN</h3>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Giá thành rẻ nhất, phù hợp in số lượng lớn</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Cán mờ 2 mặt bảo vệ màu sắc, chống xước</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Thích hợp cho nhân viên kinh doanh, đại lý</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">In sắc nét, màu sắc tươi tắn</span>
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

          {/* Card 2: Danh Thiếp Cao Cấp */}
          <BrandCard className="flex-1 bg-[#FFFDF9] p-4 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-[45%] flex justify-center">
               <img src="/danhthiep/180-1.jpg" alt="Danh Thiếp Cao Cấp" className="max-h-48 object-contain" />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="text-base font-bold text-[#9a5b24] mb-2 uppercase tracking-wide">GIẤY MỸ THUẬT / ÉP KIM</h3>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Giấy vân nổi, ánh kim cao cấp sang trọng</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Gia công ép kim vàng/bạc thu hút</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Phù hợp cho CEO, spa, showroom cao cấp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" />
                  <span className="text-[13px] text-gray-700 font-medium leading-snug">Đẳng cấp, tạo dấu ấn chuyên nghiệp</span>
                </li>
              </ul>
            </div>
          </BrandCard>

          {/* CTA Box */}
          <BrandCard className="w-full lg:w-[200px] bg-white p-4 flex flex-col justify-center items-center self-center">
            <h3 className="text-[15px] font-bold text-[#e87c22] mb-1.5 text-center tracking-wide">CẦN TƯ VẤN?</h3>
            <p className="text-gray-600 text-xs mb-4 text-center leading-relaxed">
              Nhận báo giá & tư vấn mẫu Danh Thiếp phù hợp.
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
