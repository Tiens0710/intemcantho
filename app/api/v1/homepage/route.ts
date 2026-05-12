import { getRecommendations, getFeaturedProducts, getTestimonials, getProcessSteps } from "@/lib/wordpress";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const personaParam = searchParams.get("persona");
    const persona =
      personaParam === "cafe-owner" ||
      personaParam === "office-worker" ||
      personaParam === "fashion-lover"
        ? personaParam
        : null;

    const [recommendations, featured, testimonials, processSteps] = await Promise.all([
      getRecommendations(persona),
      getFeaturedProducts(persona),
      getTestimonials(),
      getProcessSteps(),
    ]);

    return NextResponse.json({
      status: "success",
      data: {
        recommendedProducts: recommendations,
        featuredProducts: featured,
        testimonials,
        processSteps,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Failed to fetch homepage data" },
      { status: 500 }
    );
  }
}
