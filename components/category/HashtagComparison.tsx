import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import BrandCard from "@/components/ui/BrandCard";

export default function HashtagComparison() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-[860px] px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          NÊN CHỌN <span className="text-[#e87c22]">HASHTAG</span> NÀO PHÙ HỢP?
        </h2>

        <div className="relative flex flex-col items-stretch justify-center gap-5 lg:flex-row">
          <BrandCard className="flex flex-1 flex-col items-center gap-4 bg-[#FFFDF9] p-4 sm:flex-row">
            <div className="flex w-full justify-center sm:w-[45%]">
              <Image
                src="/anphamtiepthi/hashtag/anh1.jpeg"
                alt="Hashtag formex 3mm"
                width={220}
                height={180}
                className="max-h-48 object-contain"
              />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="mb-2 text-base font-bold uppercase tracking-wide text-[#9a5b24]">FORMEX 3MM</h3>
              <ul className="space-y-1.5">
                {[
                  "Gọn nhẹ, dễ cầm khi chụp ảnh",
                  "Phù hợp sự kiện ngắn ngày, khai trương",
                  "Chi phí tiết kiệm khi in số lượng nhiều",
                  "Có thể bế theo logo, slogan hoặc biểu tượng",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e87c22]" />
                    <span className="text-[13px] font-medium leading-snug text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BrandCard>

          <div className="z-10 hidden items-center justify-center -mx-10 lg:flex">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#fbdcbf] bg-white text-2xl font-black tracking-tighter text-[#e87c22] shadow-md">
              VS
            </div>
          </div>

          <BrandCard className="flex flex-1 flex-col items-center gap-4 bg-[#FFFDF9] p-4 sm:flex-row">
            <div className="flex w-full justify-center sm:w-[45%]">
              <Image
                src="/anphamtiepthi/hashtag/anh2.jpeg"
                alt="Hashtag formex 5mm"
                width={220}
                height={180}
                className="max-h-48 object-contain"
              />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="mb-2 text-base font-bold uppercase tracking-wide text-[#9a5b24]">FORMEX 5MM</h3>
              <ul className="space-y-1.5">
                {[
                  "Cứng cáp hơn, nhìn cao cấp khi lên hình",
                  "Phù hợp booth check-in và sự kiện nhiều ngày",
                  "Giữ form tốt, hạn chế cong gãy",
                  "Tạo cảm giác chắc tay khi khách cầm chụp ảnh",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e87c22]" />
                    <span className="text-[13px] font-medium leading-snug text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BrandCard>
        </div>
      </div>
    </section>
  );
}
