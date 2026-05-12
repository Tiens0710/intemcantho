import { getProducts } from "@/lib/wordpress";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get("category");

    const allProducts = await getProducts();
    const filtered = category 
      ? allProducts.filter((p) => p.category === category)
      : allProducts;

    return NextResponse.json({
      status: "success",
      data: {
        products: filtered,
        total: filtered.length,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
