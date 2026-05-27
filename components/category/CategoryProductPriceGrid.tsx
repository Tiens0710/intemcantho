"use client";

import Image from "next/image";
import Link from "next/link";
import BrandCard from "@/components/ui/BrandCard";

export type PriceGridProduct = {
  category?: string;
  name: string;
  detail: string;
  price: string;
  image: string;
  href: string;
};

type CategoryProductPriceGridProps = {
  title: string;
  accentTitle: string;
  products: PriceGridProduct[];
  note?: string;
  sectionClassName?: string;
};

export default function CategoryProductPriceGrid({
  title,
  accentTitle,
  products,
  note,
  sectionClassName = "relative bg-white py-16",
}: CategoryProductPriceGridProps) {
  return (
    <section className={sectionClassName}>
      <div className="container mx-auto max-w-[1440px] px-4">
        <div className="mb-10 flex items-center justify-center gap-4">
          <span
            className="hidden h-px w-20 md:block lg:w-32"
            style={{ background: "linear-gradient(to right, transparent, #C8A882)" }}
          />
          <h2
            className="text-center font-bold uppercase tracking-tight text-gray-900 text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px]"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              color: "#9a5b24",
            }}
          >
            {title} <span className="text-[#e8792a]">{accentTitle}</span>
          </h2>
          <span
            className="hidden h-px w-20 md:block lg:w-32"
            style={{ background: "linear-gradient(to left, transparent, #C8A882)" }}
          />
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <Link
              key={`${product.category ?? "product"}-${product.name}`}
              href={product.href}
              className="group block outline-none"
              aria-label={`Xem thông tin sản phẩm ${product.name}`}
            >
              <BrandCard
                className="overflow-hidden p-2"
                borderOpacity={0.45}
                shadowOpacity={0.08}
                borderWidth={1.5}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f3f4f6]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </BrandCard>

              <div className="mt-4 text-center">
                <h3
                  className="mt-1 font-bold text-[#141d2a] truncate !text-[18px] !leading-[24px] sm:!text-[20px] sm:!leading-[26px]"
                  title={product.name}
                >
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-semibold leading-snug text-gray-700">{product.detail}</p>
                <div className="mt-4 flex justify-center">
                  <p
                    className="inline-flex items-center rounded-full border-2 bg-white px-4 py-2 font-black shadow-[0_8px_20px_rgba(232,124,34,0.15)] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#e87c22] group-hover:to-[#f09343] group-hover:border-transparent group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(232,124,34,0.28)] group-hover:[--price-text-color:#ffffff] group-hover:[--price-border-color:transparent]"
                    style={{ 
                      fontSize: "18px", 
                      lineHeight: "24px",
                      color: "var(--price-text-color, #e87c22)",
                      borderColor: "var(--price-border-color, #e87c22)"
                    }}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {note ? <p className="mt-10 text-center text-[13px] leading-relaxed text-gray-500">{note}</p> : null}
      </div>
    </section>
  );
}
