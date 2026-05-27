import { getRecommendations, getFeaturedProducts, getTestimonials, getProcessSteps } from "@/lib/wordpress";
import { success, error } from "@/lib/apiResponse";
import axios from "axios";

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

    const API_MODE = process.env.NEXT_PUBLIC_API_MODE || "mock";

    if (API_MODE === "live") {
      // Proxy to real backend
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";
      const response = await axios.get(`${API_URL}/homepage`, { params: { persona } });
      // Backend returns { EC, EM, DT }, we want to return the same format
      return success(response.data.DT);
    }

    // Mock mode
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
