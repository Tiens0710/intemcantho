import { getProduct } from "@/lib/wordpress";
import { success, notFound, error } from "@/lib/apiResponse";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
      return notFound("Product not found");
    }

    return success(product);
  } catch (err) {
    return error("Failed to fetch product", 500);
  }
}
