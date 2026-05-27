import { getProducts } from "@/lib/wordpress";
import { success, error } from "@/lib/apiResponse";
import axios from "axios";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get("category");
    const query = url.searchParams.get("q")?.trim().toLowerCase();

    const API_MODE = process.env.NEXT_PUBLIC_API_MODE || "mock";

    if (API_MODE === "live") {
      // Proxy to real backend
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";
      const response = await axios.get(`${API_URL}/products`, {
        params: { category, search: query }
      });
      return success(response.data.DT);
    }

    // Mock mode
    const allProducts = await getProducts();
    const filtered = allProducts.filter((product) => {
      const matchesCategory = category ? product.category === category : true;
      const matchesQuery = query ? product.title.toLowerCase().includes(query) : true;

      return matchesCategory && matchesQuery;
    });

    return success({
      products: filtered,
      total: filtered.length,
    });
  } catch {
    return error("Failed to fetch products", 500);
  }
}
