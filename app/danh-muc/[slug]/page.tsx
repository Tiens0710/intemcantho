import Link from "next/link";

type Props = { params: { slug: string } };

export default function Page({ params }: Props) {
  const { slug } = params;
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Danh mục: {slug}</h1>
      <p className="mb-6 text-gray-600">Trang danh mục tạm — nội dung cần triển khai.</p>
      <Link href="/van-phong" className="inline-flex items-center px-4 py-2 bg-amber-800 text-white rounded">
        Xem sản phẩm ấn phẩm văn phòng
      </Link>
    </div>
  );
}
