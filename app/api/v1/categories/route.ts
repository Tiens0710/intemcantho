import { getProducts } from "@/lib/wordpress";
import { success, error } from "@/lib/apiResponse";
import axios from "axios";

export async function GET() {
  try {
    const API_MODE = process.env.NEXT_PUBLIC_API_MODE || "mock";

    if (API_MODE === "live") {
      // Proxy to real backend
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";
      const response = await axios.get(`${API_URL}/categories`);
      return success(response.data.DT);
    }

    // Mock mode
    const allProducts = await getProducts();

    // Extract unique categories
    const categorySet = new Set<string>();
    allProducts.forEach((p) => categorySet.add(p.category));

    const categories = Array.from(categorySet).map((slug) => ({
      slug,
      name: slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      count: allProducts.filter((p) => p.category === slug).length,
    }));

    return success({
      categories,
      total: categories.length,
    });
  } catch (err) {
    return error("Failed to fetch categories", 500);
  }
}
