import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import BrandCard from "@/components/ui/BrandCard";

export default function VoucherComparison() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-[860px] px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          NÊN CHỌN <span className="text-[#e87c22]">VOUCHER</span> NÀO PHÙ HỢP?
        </h2>

        <div className="relative flex flex-col items-stretch justify-center gap-5 lg:flex-row">
          <BrandCard className="flex flex-1 flex-col items-center gap-4 bg-[#FFFDF9] p-4 sm:flex-row">
            <div className="flex w-full justify-center sm:w-[45%]">
              <Image
                src="/anphamtiepthi/voucher/anh1.png"
                alt="Voucher giấy C300"
                width={220}
                height={180}
                className="max-h-48 object-contain"
              />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="mb-2 text-base font-bold uppercase tracking-wide text-[#9a5b24]">VOUCHER GIẤY C300</h3>
              <ul className="space-y-1.5">
                {[
                  "Chi phí tiết kiệm, phù hợp chiến dịch ngắn hạn",
                  "In màu sắc nét, dễ nhận diện thương hiệu",
                  "Phù hợp voucher giảm giá, phiếu quà tặng",
                  "Dễ thay đổi nội dung theo từng chương trình",
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
                src="/anphamtiepthi/voucher/anh2.png"
                alt="Voucher cán màng"
                width={220}
                height={180}
                className="max-h-48 object-contain"
              />
            </div>
            <div className="w-full sm:w-[55%]">
              <h3 className="mb-2 text-base font-bold uppercase tracking-wide text-[#9a5b24]">VOUCHER CÁN MÀNG</h3>
              <ul className="space-y-1.5">
                {[
                  "Bề mặt sang hơn, cầm chắc tay hơn",
                  "Chống trầy nhẹ, giữ màu đẹp lâu hơn",
                  "Phù hợp spa, nhà hàng, cửa hàng cao cấp",
                  "Tạo cảm giác quà tặng chỉn chu hơn",
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
