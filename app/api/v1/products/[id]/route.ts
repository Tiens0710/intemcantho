import { getProduct } from "@/lib/wordpress";
import { NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

export async function GET(request: Request, { params }: Props) {
  try {
    const { id } = params;
    const product = await getProduct(id);

    if (!product) {
      return NextResponse.json(
        { status: "error", message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: "success",
      data: product,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
