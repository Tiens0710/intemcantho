import { getProducts } from "@/lib/wordpress";
import { NextResponse } from "next/server";

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

    return NextResponse.json({
      status: "success",
      data: {
        categories,
        total: categories.length,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
