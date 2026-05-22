import { CheckCircle2 } from "lucide-react";
import BrandCard from "@/components/ui/BrandCard";

export default function CatalogueComparison() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-[860px]">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          NÊN CHỌN <span className="text-[#e87c22]">CATALOGUE</span> NÀO PHÙ HỢP?
        </h2>
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 relative">
          <BrandCard className="flex-1 bg-[#FFFDF9] p-4 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-[45%] flex justify-center">
               <img src="/bannercatalog/anphamtiepthi.jpeg" alt="Catalogue Thường" className="max-h-48 object-contain" />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="text-base font-bold text-[#9a5b24] mb-2 uppercase tracking-wide">CATALOGUE THƯỜNG</h3>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" /><span className="text-[13px] text-gray-700 font-medium leading-snug">Giá thành tiết kiệm, in số lượng lớn</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" /><span className="text-[13px] text-gray-700 font-medium leading-snug">Đa dạng số trang: 4, 8, 12, 16, 24 trang</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" /><span className="text-[13px] text-gray-700 font-medium leading-snug">Phù hợp giới thiệu sản phẩm, giới thiệu công ty</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" /><span className="text-[13px] text-gray-700 font-medium leading-snug">Giao nhanh, giá tốt</span></li>
              </ul>
            </div>
          </BrandCard>
          <div className="hidden lg:flex items-center justify-center -mx-10 z-10">
            <div className="w-14 h-14 rounded-full bg-white border-2 border-[#fbdcbf] shadow-md flex items-center justify-center font-black text-[#e87c22] text-2xl tracking-tighter">VS</div>
          </div>
          <BrandCard className="flex-1 bg-[#FFFDF9] p-4 flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-[45%] flex justify-center">
               <img src="/bannercatalog/anphamtiepthi.jpeg" alt="Catalogue Cao Cấp" className="max-h-48 object-contain" />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="text-base font-bold text-[#9a5b24] mb-2 uppercase tracking-wide">CATALOGUE CAO CẤP</h3>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" /><span className="text-[13px] text-gray-700 font-medium leading-snug">Bìa cứng chắc chắn, sang trọng</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" /><span className="text-[13px] text-gray-700 font-medium leading-snug">Có thể ép kim logo, cán mờ/bóng</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" /><span className="text-[13px] text-gray-700 font-medium leading-snug">Phù hợp thương hiệu cao cấp, showroom</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#e87c22] mt-0.5 shrink-0" /><span className="text-[13px] text-gray-700 font-medium leading-snug">Tạo ấn tượng mạnh với đối tác</span></li>
              </ul>
            </div>
          </BrandCard>
          <BrandCard className="w-full lg:w-[200px] bg-white p-4 flex flex-col justify-center items-center self-center">
            <h3 className="text-[15px] font-bold text-[#e87c22] mb-1.5 text-center tracking-wide">CẦN TƯ VẤN?</h3>
            <p className="text-gray-600 text-xs mb-4 text-center leading-relaxed">Nhận báo giá & tư vấn mẫu Catalogue phù hợp.</p>
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