"use client";

import { isLandingCategory, getCategoryData } from "@/lib/category-data";
import CategoryLandingTemplate from "./CategoryLandingTemplate";
import Link from "next/link";
import type { Product } from "@/lib/wordpress";

type Props = {
  slug: string;
  products: Product[];
};

export default function CategoryPageClient({ slug, products }: Props) {
  // Landing Page for 6 main categories
  if (isLandingCategory(slug)) {
    const data = getCategoryData(slug)!;
    return <CategoryLandingTemplate data={data} />;
  }

  // Fallback: Product grid for other categories
  const filtered = products.filter((p) => p.category === slug);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Danh mục: {slug}</h1>

      {filtered.length === 0 ? (
        <p className="mb-6 text-gray-600">Không có sản phẩm cho danh mục này.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/san-pham/${product.id}`}
              className="block border rounded p-4 hover:shadow"
            >
              <div className="h-40 mb-3 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-semibold mb-1">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}