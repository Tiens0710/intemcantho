"use client";

import type { CategoryData } from "@/lib/category-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryHero from "./CategoryHero";
import CategoryPricing from "./CategoryPricing";
import CategoryGallery from "./CategoryGallery";
import CategoryCaseStudy from "./CategoryCaseStudy";
import CategoryFeedback from "./CategoryFeedback";

type Props = {
  data: CategoryData;
};

export default function CategoryLandingTemplate({ data }: Props) {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-amber-200 selection:text-amber-900">
      {/* Navigation */}
      <Navbar />

      {/* 1. Hero Banner */}
      <CategoryHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        bgImage={data.heroBg}
        floatingImages={data.hero.floatingImages}
        categoryLabel={data.categoryLabel}
      />

      {/* 2. Báo Giá */}
      <CategoryPricing
        title={data.pricing.title}
        subtitle={data.pricing.subtitle}
        packages={data.pricing.packages}
      />

      {/* 3. Thư Viện Mẫu */}
      <CategoryGallery
        title={data.gallery.title}
        subtitle={data.gallery.subtitle}
        images={data.gallery.images}
      />

      {/* 4. Case Study */}
      <CategoryCaseStudy
        client={data.caseStudy.client}
        industry={data.caseStudy.industry}
        challenge={data.caseStudy.challenge}
        solution={data.caseStudy.solution}
        result={data.caseStudy.result}
        image={data.caseStudy.image}
      />

      {/* 5. Feedback Khách Hàng */}
      <CategoryFeedback testimonials={data.testimonials} />

      {/* Footer */}
      <Footer />
    </div>
  );
}