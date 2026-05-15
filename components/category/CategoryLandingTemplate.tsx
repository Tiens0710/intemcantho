"use client";

import type { CategoryData } from "@/lib/category-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryHero from "./CategoryHero";
import StandeeHeroBanner from "./StandeeHeroBanner";
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
      ) : (
        <CategoryHero
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          bgImage={data.heroBg}
          floatingImages={data.hero.floatingImages}
          categoryLabel={data.categoryLabel}
        />
      )}

      {/* Standee sections */}
      {data.slug === "poster" && (
        <>
          <StandeePricingTable />
          <StandeeComparison />
          <StandeeGallery />
          <StandeeOrderProcess />
          <StandeeFileAndFeedback />
          <StandeeFAQ />
          <StandeeBannerCTA />
        </>
      )}

      {/* Generic sections (không hiển thị cho Standee) */}
      {data.slug !== "poster" && (
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