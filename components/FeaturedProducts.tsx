import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

type Product = {
  id: string | number
  title: string
  price?: string | number
  image?: string
  category?: string
  href?: string
}

type Props = {
  products?: Product[]
}

export default function FeaturedProducts({ products }: Props) {
  const items: Product[] =
    products && products.length
      ? products
      : [
          { id: 1, title: 'Danh Thiếp In Nhanh', price: 'Liên hệ', image: '/215-1.jpg', href: '#' },
          { id: 2, title: 'Đồng Phục Cổ Tròn', price: 'Liên hệ', image: '/217.jpg', href: '#' },
          { id: 3, title: 'Folder Tài Liệu', price: '12.000 đ', image: '/110-1.jpg', href: '#' },
          { id: 4, title: 'In Ấn Danh Thiếp MP', price: 'Liên hệ', image: '/2.jpg', href: '#' },
        ]

  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-2xl font-semibold text-[#9a5b24] mb-6">Sản phẩm nổi bật</h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((p) => (
            <div key={p.id} className="flex flex-col items-center">
              <div className="w-full h-48 overflow-hidden rounded-md">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-100" />
                )}
              </div>

              <div className="pt-4 text-center w-full">
                <div className="mx-auto h-1 w-36 bg-[#9a5b24] rounded-md mb-4" />
                <h4 className="text-lg md:text-xl font-semibold text-[#9a5b24] leading-snug whitespace-normal min-h-[3rem]">{p.title}</h4>
                <p className="text-sm text-gray-400 mt-2 whitespace-normal">{p.price || 'Liên hệ'}</p>

                <Link
                  href={p.href || '#'}
                  className="group/btn relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#b06a2b] px-6 py-2.5 text-sm font-medium text-white transition-all active:scale-95"
                >
                  <span className="text-white transition-opacity duration-200 group-hover/btn:opacity-0">
                    Đọc thêm
                  </span>
                  <ShoppingCart className="absolute h-5 w-5 text-white opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
