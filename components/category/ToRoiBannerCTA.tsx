import Link from "next/link";
import BrandCard from "@/components/ui/BrandCard";

export default function ToRoiBannerCTA() {
  return (
    <section className="py-12 md:py-16 bg-[#F5F0E8]">
      <div className="container mx-auto px-4 max-w-[900px]">
        <BrandCard className="p-8 md:p-12 text-center bg-white">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#E6792A]/25 bg-[#FFF7F1] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#E6792A]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B5E3C]">Bắt đầu ngay</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#9a5b24] mb-4">
            SẴN SÀNG IN TỜ RƠI?
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
            Liên hệ ngay để nhận báo giá tốt nhất. Hỗ trợ thiết kế miễn phí, in nhanh giao đúng hẹn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lien-he" className="inline-flex items-center justify-center rounded-full border-2 border-[#E6792A] bg-[#E6792A] px-8 py-3 text-sm font-bold text-white uppercase tracking-wider transition-all hover:bg-[#cf6721] hover:shadow-lg">
              Gửi yêu cầu ngay
            </Link>
            <Link href="https://zalo.me/0985463403" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border-2 border-[#E6792A] bg-transparent px-8 py-3 text-sm font-bold text-[#E6792A] uppercase tracking-wider transition-all hover:bg-[#E6792A] hover:text-white">
              Gọi: 0985 463 403
            </Link>
          </div>
        </BrandCard>
      </div>
    </section>
  );
}
