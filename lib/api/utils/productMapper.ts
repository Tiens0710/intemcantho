import { Product } from "@/lib/wordpress";

// Map backend product to frontend Product type
export function mapProduct(backendProduct: any): Product {
  return {
    id: backendProduct.slug || backendProduct.id,
    title: backendProduct.name,
    description: backendProduct.description || backendProduct.shortDescription || "",
    category: backendProduct.categories?.[0]?.slug || "uncategorized",
    image: backendProduct.thumbnailMedia?.url || "/no-image.svg",
    price: backendProduct.contactForPrice ? "0" : String(backendProduct.originalPrice || 0),
    personas: [], // Map if backend provides this
    featured: backendProduct.isFeatured || false,
    specs: backendProduct.specs || [],
    sizes: backendProduct.sizes || [],
    purposes: backendProduct.purposes || [],
    deliveryDate: backendProduct.deliveryDate || "Liên hệ",
    gallery: backendProduct.images?.map((img: any) => img.url) || [],
  };
}
