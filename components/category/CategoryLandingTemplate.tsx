"use client";

import type { CategoryData } from "@/lib/category-data";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Check } from "lucide-react";
import Footer from "@/components/Footer";
import CategoryHero from "./CategoryHero";
import StandeeHeroBanner from "./StandeeHeroBanner";
import NhanDanHeroBanner from "./NhanDanHeroBanner";
import NhanDanPricingTable from "./NhanDanPricingTable";
import NhanDanGallery from "./NhanDanGallery";
import NhanDanFileAndFeedback from "./NhanDanFileAndFeedback";
import NhanDanFAQ from "./NhanDanFAQ";
import NhanDanBannerCTA from "./NhanDanBannerCTA";
import BrochureHeroBanner from "./BrochureHeroBanner";
import BrandCard from "@/components/ui/BrandCard";
import CategoryPricing from "./CategoryPricing";
import CategoryGallery from "./CategoryGallery";
import CategoryCaseStudy from "./CategoryCaseStudy";
import CategoryFeedback from "./CategoryFeedback";
import StandeeComparison from "./StandeeComparison";
import StandeePricingTable from "./StandeePricingTable";
import StandeeGallery from "./StandeeGallery";
import StandeeOrderProcess from "./StandeeOrderProcess";
import StandeeFileAndFeedback from "./StandeeFileAndFeedback";
import StandeeFAQ from "./StandeeFAQ";
import StandeeBannerCTA from "./StandeeBannerCTA";
import BrochureGallery from "./BrochureGallery";
import BrochureIndustries from "./BrochureIndustries";
import BrochurePricingTable from "./BrochurePricingTable";
import BrochureOrderProcess from "./BrochureOrderProcess";
import BrochureFAQ from "./BrochureFAQ";
import BrochureFileAndFeedback from "./BrochureFileAndFeedback";
import BaoBiHeroBanner from "./BaoBiHeroBanner";
import BaoBiPricingTable from "./BaoBiPricingTable";
import BaoBiGallery from "./BaoBiGallery";
import BaoBiOrderProcess from "./StandeeOrderProcess";
import BaoBiFileAndFeedback from "./BaoBiFileAndFeedback";
import BaoBiFAQ from "./BaoBiFAQ";
import DanhThiepHeroBanner from "./DanhThiepHeroBanner";
import DanhThiepPricingTable from "./DanhThiepPricingTable";
import DanhThiepGallery from "./DanhThiepGallery";
import DanhThiepChooseType from "./DanhThiepChooseType";
import DanhThiepFileAndFeedback from "./DanhThiepFileAndFeedback";
import DanhThiepFAQ from "./DanhThiepFAQ";
import DanhThiepBannerCTA from "./DanhThiepBannerCTA";
import BaoBiChooseType from "./BaoBiChooseType";
import ToRoiHeroBanner from "./ToRoiHeroBanner";
import ToRoiPricingTable from "./ToRoiPricingTable";
import ToRoiComparison from "./ToRoiComparison";
import ToRoiGallery from "./ToRoiGallery";
import ToRoiFileAndFeedback from "./ToRoiFileAndFeedback";
import ToRoiFAQ from "./ToRoiFAQ";
import MenuHeroBanner from "./MenuHeroBanner";
import MenuPricingTable from "./MenuPricingTable";
import MenuGallery from "./MenuGallery";
import MenuFAQ from "./MenuFAQ";
import MenuFileAndFeedback from "./MenuFileAndFeedback";
import MenuComparison from "./MenuComparison";
import MenuBannerCTA from "./MenuBannerCTA";
import VoucherHeroBanner from "./VoucherHeroBanner";
import VoucherPricingTable from "./VoucherPricingTable";
import VoucherComparison from "./VoucherComparison";
import VoucherGallery from "./VoucherGallery";
import VoucherFileAndFeedback from "./VoucherFileAndFeedback";
import VoucherFAQ from "./VoucherFAQ";
import VoucherBannerCTA from "./VoucherBannerCTA";
import HashtagHeroBanner from "./HashtagHeroBanner";
import HashtagPricingTable from "./HashtagPricingTable";
import HashtagComparison from "./HashtagComparison";
import HashtagGallery from "./HashtagGallery";
import HashtagFileAndFeedback from "./HashtagFileAndFeedback";
import HashtagFAQ from "./HashtagFAQ";
import HashtagBannerCTA from "./HashtagBannerCTA";
import CatalogueHeroBanner from "./CatalogueHeroBanner";
import CataloguePricingTable from "./CataloguePricingTable";
import CatalogueComparison from "./CatalogueComparison";
import CatalogueFileAndFeedback from "./CatalogueFileAndFeedback";
import CatalogueFAQ from "./CatalogueFAQ";
import CatalogueBannerCTA from "./CatalogueBannerCTA";
import HiflexHeroBanner from "./HiflexHeroBanner";
import HiflexPricingTable from "./HiflexPricingTable";
import HiflexComparison from "./HiflexComparison";
import HiflexGallery from "./HiflexGallery";
import HiflexFileAndFeedback from "./HiflexFileAndFeedback";
import HiflexFAQ from "./HiflexFAQ";
import HiflexBannerCTA from "./HiflexBannerCTA";
import QualityCommitment from "@/components/QualityCommitment";
import StoreLocationSection from "@/components/StoreLocationSection";

type Props = {
  data: CategoryData;
};

export default function CategoryLandingTemplate({ data }: Props) {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-amber-200 selection:text-amber-900">
      {/* Navigation */}
      <Navbar />

      {/* 1. Hero Banner */}
      {data.slug === "poster" ? (
        <StandeeHeroBanner />
      ) : data.slug === "nhan-dan" ? (
        <NhanDanHeroBanner />
      ) : data.slug === "to-gap" ? (
        <BrochureHeroBanner />
      ) : data.slug === "bao-bi" ? (
        <BaoBiHeroBanner />
      ) : data.slug === "to-roi" ? (
        <ToRoiHeroBanner />
      ) : data.slug === "danh-thiep" ? (
        <DanhThiepHeroBanner />
      ) : data.slug === "catalogue" ? (
        <CatalogueHeroBanner />
      ) : data.slug === "menu" ? (
        <MenuHeroBanner />
      ) : data.slug === "voucher" ? (
        <VoucherHeroBanner />
      ) : data.slug === "hashtag-cam-tay" ? (
        <HashtagHeroBanner />
      ) : data.slug === "hiflex" ? (
        <HiflexHeroBanner />
      ) : (
        <CategoryHero
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          bgImage={data.heroBg}
          floatingImages={data.hero.floatingImages}
          categoryLabel={data.categoryLabel}
        />
      )}

      {/* Nhan-dan sections */}
      {data.slug === "nhan-dan" && (
        <>
          <NhanDanPricingTable />

          {/* Why choose section: three-column feature with image + CTA (placed after pricing) */}
          <section className="container mx-auto py-12 md:py-16">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2C1A10]">
                VÌ SAO NÊN CHỌN <span className="text-[#E6792A]">IN TEM NHÃN</span> TẠI INTEM CẦN THƠ?
              </h2>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="h-0.5 w-10 rounded-full bg-amber-200" />
                <span className="h-0.5 w-16 rounded-full bg-[#E6792A]" />
                <span className="h-0.5 w-10 rounded-full bg-amber-200" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left: bullets (card style) */}
              <BrandCard className="order-2 md:order-1 rounded-2xl p-6 bg-[#FFFBF6]">
                <ul className="space-y-3 text-sm md:text-[15px] text-[#6F5B4E]">
                  {[
                    "Chất liệu đa dạng, phù hợp mọi nhu cầu",
                    "In sắc nét, màu chuẩn, bền đẹp",
                    "Dính chắc chắn, không bong tróc",
                    "Giá cạnh tranh — Ưu đãi hấp dẫn",
                    "Hỗ trợ thiết kế 100% miễn phí",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#E6792A] shadow-[0_0_0_2px_#FCE6D6]">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </BrandCard>

              {/* Center: product image with circular background */}
              <div className="order-1 md:order-2 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute h-[220px] w-[220px] md:h-[280px] md:w-[280px] rounded-full bg-[#FFF1E7]" />
                  <Image
                    src="/nhandan/danhmuc1.png"
                    alt="In tem nhãn"
                    width={260}
                    height={180}
                    className="relative z-10 object-contain drop-shadow-[0_18px_30px_rgba(170,98,38,0.3)]"
                  />
                </div>
              </div>

              {/* Right: CTA box (card) */}
              <BrandCard className="order-3 rounded-2xl p-6 bg-white">
                <h4 className="text-[15px] font-semibold text-[#E6792A] uppercase tracking-wide mb-2">Chưa biết chọn loại nào?</h4>
                <p className="text-sm md:text-[15px] text-[#6F5B4E] mb-4">Gửi nhu cầu, chúng tôi sẽ tư vấn chất liệu phù hợp nhất cho bạn!</p>
                <a
                  href="https://zalo.me/0985463403"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[#E6792A] text-white font-semibold shadow-md hover:opacity-95"
                >
                  <Image src="/Icon_of_Zalo.svg.png" alt="Zalo" width={22} height={22} className="h-5 w-5" />
                  TƯ VẤN NGAY QUA ZALO
                </a>
              </BrandCard>
            </div>
          </section>

          <NhanDanGallery />
          <StandeeOrderProcess label="NHÃN DÁN" />
          <NhanDanFileAndFeedback />
          <StoreLocationSection />
          <NhanDanFAQ />
          <NhanDanBannerCTA />
        </>
      )}

      {/* Standee sections */}
      {data.slug === "poster" && (
        <>
          <StandeePricingTable />
          <StandeeComparison />
          <StandeeGallery />
          <QualityCommitment />
          <StandeeOrderProcess />
          <StandeeFileAndFeedback />
          <StoreLocationSection />
          <StandeeFAQ />
          <StandeeBannerCTA />
        </>
      )}

      {/* To Roi sections */}
      {data.slug === "to-roi" && (
        <>
          <ToRoiPricingTable />
          <ToRoiComparison />
          <ToRoiGallery />
          <QualityCommitment />
          <StandeeOrderProcess label="TỜ RƠI" />
          <ToRoiFileAndFeedback />
          <StoreLocationSection />
          <ToRoiFAQ />
        </>
      )}

      {/* Brochure sections */}
      {data.slug === "to-gap" && (
        <>
          <BrochureIndustries />
          <BrochureGallery />
          <BrochurePricingTable />
          <BrochureFileAndFeedback />
          <BrochureOrderProcess />
          <StoreLocationSection />
          <BrochureFAQ />
        </>
      )}

      {/* Bao Bi sections */}
      {data.slug === "bao-bi" && (
        <>
          <BaoBiPricingTable />
          <BaoBiChooseType />
          <BaoBiGallery />
          <BaoBiOrderProcess label="BAO BÌ" />
          <BaoBiFileAndFeedback />
          <StoreLocationSection />
          <BaoBiFAQ />
        </>
      )}

      {/* Danh Thiếp sections */}
      {data.slug === "danh-thiep" && (
        <>
          <DanhThiepPricingTable />
          <DanhThiepChooseType />
          <DanhThiepGallery />
          <StandeeOrderProcess label="DANH THIẾP" />
          <DanhThiepFileAndFeedback />
          <StoreLocationSection />
          <DanhThiepFAQ />
          <DanhThiepBannerCTA />
        </>
      )}

      {/* Menu sections */}
      {data.slug === "menu" && (
        <>
          <MenuPricingTable />
          <MenuComparison />
          <MenuGallery />
          <QualityCommitment />
          <StandeeOrderProcess label="MENU" />
          <MenuFileAndFeedback />
          <StoreLocationSection />
          <MenuFAQ />
          <MenuBannerCTA />
        </>
      )}

      {/* Voucher sections */}
      {data.slug === "voucher" && (
        <>
          <VoucherPricingTable />
          <VoucherComparison />
          <VoucherGallery />
          <QualityCommitment />
          <StandeeOrderProcess label="VOUCHER" />
          <VoucherFileAndFeedback />
          <StoreLocationSection />
          <VoucherFAQ />
          <VoucherBannerCTA />
        </>
      )}

      {/* Hashtag cam tay sections */}
      {data.slug === "hashtag-cam-tay" && (
        <>
          <HashtagPricingTable />
          <HashtagComparison />
          <HashtagGallery />
          <QualityCommitment />
          <StandeeOrderProcess label="HASHTAG CẦM TAY" />
          <HashtagFileAndFeedback />
          <StoreLocationSection />
          <HashtagFAQ />
          <HashtagBannerCTA />
        </>
      )}

      {/* Hiflex sections */}
      {data.slug === "hiflex" && (
        <>
          <HiflexPricingTable />
          <HiflexComparison />
          <HiflexGallery />
          <QualityCommitment />
          <StandeeOrderProcess label="BẠT HIFLEX" />
          <HiflexFileAndFeedback />
          <StoreLocationSection />
          <HiflexFAQ />
          <HiflexBannerCTA />
        </>
      )}

      {/* Catalogue sections */}
      {data.slug === "catalogue" && (
        <>
          <CataloguePricingTable />
          <CatalogueComparison />
          <StandeeGallery />
          <QualityCommitment />
          <StandeeOrderProcess label="CATALOGUE" />
          <CatalogueFileAndFeedback />
          <StoreLocationSection />
          <CatalogueFAQ />
          <CatalogueBannerCTA />
        </>
      )}

      {/* Generic sections (không hiển thị cho các trang đã có section riêng) */}
      {data.slug !== "poster" && data.slug !== "to-gap" && data.slug !== "nhan-dan" && data.slug !== "bao-bi" && data.slug !== "to-roi" && data.slug !== "danh-thiep" && data.slug !== "menu" && data.slug !== "voucher" && data.slug !== "hashtag-cam-tay" && data.slug !== "catalogue" && data.slug !== "hiflex" && (
        <>
          <CategoryPricing
            title={data.pricing.title}
            subtitle={data.pricing.subtitle}
            packages={data.pricing.packages}
          />
          <CategoryGallery
            title={data.gallery.title}
            subtitle={data.gallery.subtitle}
            images={data.gallery.images}
          />
          <CategoryCaseStudy
            client={data.caseStudy.client}
            industry={data.caseStudy.industry}
            challenge={data.caseStudy.challenge}
            solution={data.caseStudy.solution}
            result={data.caseStudy.result}
            image={data.caseStudy.image}
          />
          <CategoryFeedback testimonials={data.testimonials} />
        </>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
