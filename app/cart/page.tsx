import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Giỏ hàng</h1>
      <p className="mb-6 text-gray-600">Giỏ hàng hiện đang trống.</p>
      <Link href="/" className="inline-flex items-center px-4 py-2 bg-amber-800 text-white rounded">
        Quay về trang chủ
      </Link>
    </div>
  );
}
