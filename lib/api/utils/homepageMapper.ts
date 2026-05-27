import { Product } from "@/lib/wordpress";

// Map backend homepage response to frontend expected shape
export function mapHomepageSections(sections: any[]) {
  const result: {
    recommendedProducts: Product[];
    featuredProducts: Product[];
    testimonials: any[];
    processSteps: any[];
  } = {
    recommendedProducts: [],
    featuredProducts: [],
    testimonials: [],
    processSteps: []
  };

  if (!Array.isArray(sections)) return result;

  sections.forEach((section) => {
    switch (section.type) {
      case "FEATURED_PRODUCTS":
      case "BEST_SELLERS":
      case "NEW_PRODUCTS":
        const products = section.items.map((item: any) => ({
          id: item.product?.slug || item.productId,
          title: item.product?.name || item.title || "Product",
          description: item.subtitle || "",
          category: "featured",
          image: item.product?.thumbnailMedia?.url || item.imageMedia?.url || "/no-image.svg",
          price: item.product?.originalPrice ? String(item.product.originalPrice) : "0",
          personas: [],
          featured: true,
          deliveryDate: "Liên hệ",
          gallery: [],
          specs: [],
          sizes: [],
          purposes: []
        }));
        
        if (section.type === "FEATURED_PRODUCTS") {
            result.featuredProducts = products;
        } else {
            result.recommendedProducts = [...result.recommendedProducts, ...products];
        }
        break;

      case "FEEDBACK":
        result.testimonials = section.items.map((item: any) => ({
            id: item.id,
            author: item.title || "Customer",
            role: item.subtitle || "Verified Buyer",
            content: item.content || "",
            rating: 5
        }));
        break;
        
      // Assuming process steps might come from a CUSTOM section or we mock them if not present
      case "CUSTOM":
         // Check if this looks like process steps
         if (section.title?.toLowerCase().includes("quy trình") || section.title?.toLowerCase().includes("process")) {
             result.processSteps = section.items.map((item: any) => ({
                 id: item.id,
                 title: item.title || "",
                 description: item.content || "",
                 icon: "CheckCircle" // Default icon
             }));
         }
         break;
    }
  });

  return result;
}
