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
            className="text-center font-bold uppercase tracking-tight text-gray-900"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              color: "#9a5b24",
              fontSize: "40px",
              lineHeight: "48px",
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
                  className="mt-1 font-semibold text-[#253245] truncate !text-[18px] !leading-[24px] sm:!text-[20px] sm:!leading-[26px]"
                  title={product.name}
                >
                  {product.name}
                </h3>
                <p className="mt-1 text-sm leading-snug text-gray-500">{product.detail}</p>
                <div className="mt-4 flex justify-center">
                  <p
                    className="inline-flex items-center rounded-full border border-[#f3d5bf] bg-[#fff4ec] px-3 py-1.5 font-bold text-[#e87c22] shadow-[0_6px_16px_rgba(232,124,34,0.12)] transition-colors group-hover:bg-[#ffe7d5]"
                    style={{ fontSize: "17px", lineHeight: "22px" }}
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
