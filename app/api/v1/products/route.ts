import { getProducts } from "@/lib/wordpress";
import { success, error } from "@/lib/apiResponse";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get("category");
    const query = url.searchParams.get("q")?.trim().toLowerCase();

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
