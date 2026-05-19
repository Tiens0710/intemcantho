import { success, error } from "@/lib/apiResponse";

export async function GET() {
  try {
    const settings = {
      siteName: "Intem Cần Thơ",
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      logo: "/logo.png",
      description: "In ấn chất lượng cao, dịch vụ chuyên nghiệp",
      contact: {
        phone: "+84 (0)292 3 999 999",
        email: "info@intem.vn",
        address: "Cần Thơ, Việt Nam",
      },
      socialLinks: {
        facebook: "https://facebook.com/intemcanho",
        instagram: "https://instagram.com/intemcanho",
      },
      features: {
        hasCart: true,
        hasCheckout: false,
        hasPayment: false,
      },
    };

    return success(settings);
  } catch (err) {
    return error("Failed to fetch settings", 500);
  }
}
