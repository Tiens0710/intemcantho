/**
 * JSON-LD Structured Data components for SEO.
 * Renders <script type="application/ld+json"> tags.
 */

import { SITE_URL } from "@/lib/seo";

/** Organization + LocalBusiness — used on all pages via layout */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}#organization`,
    name: "In tem Cần Thơ",
    alternateName: "Intemcantho.vn",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description:
      "Dịch vụ in tem nhãn decal, bao bì, ấn phẩm văn phòng, standee, tờ rơi, danh thiếp chất lượng cao tại Cần Thơ.",
    telephone: "+84985463403",
    email: "thanhngan989@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "122 Nguyễn Hiền, P. Tân An",
      addressLocality: "Cần Thơ",
      addressRegion: "Cần Thơ",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.0452,
      longitude: 105.7469,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/intemcantho.duky",
      "https://www.instagram.com/intemcantho/",
      "https://www.youtube.com/@intemduky",
      "https://www.pinterest.com/intemduky/",
      "https://zalo.me/0985463403",
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Cần Thơ",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** WebSite with SearchAction — used on homepage */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "In tem Cần Thơ",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/san-pham/{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Product schema — used on /san-pham/[id] pages */
export function ProductSchema({
  name,
  description,
  image,
  price,
  currency = "VND",
  url,
  category,
}: {
  name: string;
  description: string;
  image: string;
  price?: number;
  currency?: string;
  url: string;
  category?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    url,
    brand: {
      "@type": "Brand",
      name: "In tem Cần Thơ",
    },
    manufacturer: {
      "@type": "Organization",
      name: "In tem Cần Thơ",
      url: SITE_URL,
    },
  };

  if (category) {
    schema.category = category;
  }

  if (price && price > 0) {
    schema.offers = {
      "@type": "Offer",
      url,
      priceCurrency: currency,
      price: price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "In tem Cần Thơ",
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** BreadcrumbList schema */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}