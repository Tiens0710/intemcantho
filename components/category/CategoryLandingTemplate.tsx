"use client";

import type { CategoryData } from "@/lib/category-data";
import { motion } from "framer-motion";
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
      {/* Background Decorations — same as van-phong */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-amber-300/10 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-16 -left-16 h-[400px] w-[400px] rounded-full bg-amber-400/10 blur-[90px]"
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            animate={{ y: [-15, 15, -15], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            className="absolute h-2 w-2 rounded-full bg-amber-600/10"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

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