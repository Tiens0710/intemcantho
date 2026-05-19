import { getRecommendations, getFeaturedProducts, getTestimonials, getProcessSteps } from "@/lib/wordpress";
import { success, error } from "@/lib/apiResponse";

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

    return success({
      recommendedProducts: recommendations,
      featuredProducts: featured,
      testimonials,
      processSteps,
    });
  } catch (err) {
    return error("Failed to fetch homepage data", 500);
  }
}
