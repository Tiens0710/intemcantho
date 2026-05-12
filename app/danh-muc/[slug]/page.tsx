import { getProducts } from "@/lib/wordpress";
import Link from "next/link";

type Props = { params: { slug: string } };

export default async function Page({ params }: Props) {
  const { slug } = params;
  const products = await getProducts();
  const filtered = products.filter((p) => p.category === slug);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Danh mục: {slug}</h1>

      {filtered.length === 0 ? (
        <p className="mb-6 text-gray-600">Không có sản phẩm cho danh mục này.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <Link key={product.id} href={`/san-pham/${product.id}`} className="block border rounded p-4 hover:shadow">
              <div className="h-40 mb-3 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
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
