"use client";

import { Suspense } from "react";
import ExperiencePage from "@/components/ExperiencePage";

export default function ExperienceParent() {
  const allowedCategories = ["tem-nhan", "bao-bi", "an-pham", "thiet-ke", "mua-in"];
  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Kinh nghiệm", href: "/kinh-nghiem" },
  ];

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E6792A]"></div>
      </div>
    }>
      <ExperiencePage
        allowedCategories={allowedCategories}
        pageTitle="Kinh nghiệm"
        pageSubtitle="Chia sẻ kinh nghiệm và kiến thức về in ấn tem nhãn"
        breadcrumbs={breadcrumbs}
      />
    </Suspense>
  );
}