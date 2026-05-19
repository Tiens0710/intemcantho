import { getProducts } from "@/lib/wordpress";
import { success, error } from "@/lib/apiResponse";

export async function GET() {
  try {
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
