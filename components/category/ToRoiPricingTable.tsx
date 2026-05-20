"use client";

import BrandCard from "@/components/ui/BrandCard";

export default function ToRoiPricingTable() {
  const oneSideData = [
    {
      name: "Tờ rơi A5",
      image: "/danhmuc4.png",
      size: "14.8 x 21cm",
      material: "Couche 100gsm",
      price: "80.000 VNĐ / 500 tờ",
    },
    {
      name: "Tờ rơi A4",
      image: "/danhmuc5.png",
      size: "21 x 29.7cm",
      material: "Couche 100gsm",
      price: "140.000 VNĐ / 500 tờ",
    },
    {
      name: "Tờ rơi A5 cao cấp",
      image: "/danhmuc6.png",
      size: "14.8 x 21cm",
      material: "Couche 150gsm",
      price: "100.000 VNĐ / 500 tờ",
    },
  ];

  const twoSideData = [
    {
      name: "Tờ rơi A5",
      image: "/danhmuc4.png",
      size: "14.8 x 21cm",
      material: "Couche 100gsm",
      price: "130.000 VNĐ / 500 tờ",
    },
    {
      name: "Tờ rơi A4",
      image: "/danhmuc5.png",
      size: "21 x 29.7cm",
      material: "Couche 100gsm",
      price: "220.000 VNĐ / 500 tờ",
    },
    {
      name: "Tờ rơi A5 cao cấp",
      image: "/danhmuc6.png",
      size: "14.8 x 21cm",
      material: "Couche 150gsm",
      price: "160.000 VNĐ / 500 tờ",
    },
  ];

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900 uppercase tracking-tight">
          BẢNG GIÁ <span className="text-[#e87c22]">IN TỜ RƠI</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-items-center items-start">

          {/* Bảng Tờ Rơi 1 Mặt */}
          <div className="w-full flex flex-col">
            <div className="flex justify-center -mb-px relative z-10">
              <div className="bg-gradient-to-r from-[#e87c22] to-[#f09343] text-white font-bold text-base py-2 px-8 rounded-t-xl shadow-sm uppercase tracking-wider">
                TỜ RƠI 1 MẶT
              </div>
            </div>
            <BrandCard className="overflow-hidden bg-white">
              <div className="overflow-x-hidden">
                <table className="w-full text-center text-[13px] table-fixed">
                  <thead className="bg-[#FFFDF9] border-b border-[#f3e4d5] text-[#9a5b24]">
                    <tr>
                      <th className="py-4 px-3 border-r border-[#f3e4d5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[30%]">LOẠI TỜ RƠI</th>
                      <th className="py-4 px-2 border-r border-[#f3e4d5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[15%]">KÍCH THƯỚC</th>
                      <th className="py-4 px-2 border-r border-[#f3e4d5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[25%]">CHẤT LIỆU</th>
                      <th className="py-4 px-2 uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[30%]">GIÁ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {oneSideData.map((item, index) => (
                      <tr key={index} className={`hover:bg-[#faf6f0] transition-colors ${index !== oneSideData.length - 1 ? "border-b border-[#f3e4d5]" : ""}`}>
                        <td className="py-4 px-3 border-r border-[#f3e4d5]">
                          <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-3 text-center sm:text-left">
                            <img src={item.image} alt={item.name} className="h-14 lg:h-16 object-contain w-10 lg:w-12 flex-shrink-0 drop-shadow-sm" />
                            <span className="font-bold text-gray-800 text-[12px] lg:text-[13px] leading-snug">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-2 border-r border-[#f3e4d5] text-gray-700 font-medium text-[12px]">{item.size}</td>
                        <td className="py-4 px-2 border-r border-[#f3e4d5] text-gray-700 font-medium text-[12px]">{item.material}</td>
                        <td className="py-4 px-2">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <span className="text-[#e87c22] font-extrabold text-[12px] lg:text-[13px] whitespace-nowrap">{item.price}</span>
                            <button className="bg-gradient-to-r from-[#e87c22] to-[#d66e1b] hover:from-[#d66e1b] hover:to-[#c25e11] text-white text-[10px] font-bold py-1.5 px-2 rounded-lg transition-all shadow-md hover:shadow-lg uppercase tracking-wider w-full max-w-[110px]">
                              ĐẶT HÀNG
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </BrandCard>
          </div>

          {/* Bảng Tờ Rơi 2 Mặt */}
          <div className="w-full flex flex-col">
            <div className="flex justify-center -mb-px relative z-10">
              <div className="bg-white border-t border-l border-r border-[#e5d5c5] text-[#9a5b24] font-bold text-base py-2 px-8 rounded-t-xl shadow-[0_-4px_10px_rgba(0,0,0,0.02)] uppercase tracking-wider">
                TỜ RƠI 2 MẶT
              </div>
            </div>
            <BrandCard className="overflow-hidden bg-white">
              <div className="overflow-x-hidden">
                <table className="w-full text-center text-[13px] table-fixed">
                  <thead className="bg-[#FFFDF9] border-b border-[#e5d5c5] text-[#9a5b24]">
                    <tr>
                      <th className="py-4 px-3 border-r border-[#e5d5c5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[30%]">LOẠI TỜ RƠI</th>
                      <th className="py-4 px-2 border-r border-[#e5d5c5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[15%]">KÍCH THƯỚC</th>
                      <th className="py-4 px-2 border-r border-[#e5d5c5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[25%]">CHẤT LIỆU</th>
                      <th className="py-4 px-2 uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[30%]">GIÁ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {twoSideData.map((item, index) => (
                      <tr key={index} className={`hover:bg-[#faf6f0] transition-colors ${index !== twoSideData.length - 1 ? "border-b border-[#e5d5c5]" : ""}`}>
                        <td className="py-4 px-3 border-r border-[#e5d5c5]">
                          <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-3 text-center sm:text-left">
                            <img src={item.image} alt={item.name} className="h-14 lg:h-16 object-contain w-10 lg:w-12 flex-shrink-0 drop-shadow-sm" />
                            <span className="font-bold text-gray-800 text-[12px] lg:text-[13px] leading-snug">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-2 border-r border-[#e5d5c5] text-gray-700 font-medium text-[12px]">{item.size}</td>
                        <td className="py-4 px-2 border-r border-[#e5d5c5] text-gray-700 font-medium text-[12px]">{item.material}</td>
                        <td className="py-4 px-2">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <span className="text-[#e87c22] font-extrabold text-[12px] lg:text-[13px] whitespace-nowrap">{item.price}</span>
                            <button className="bg-gradient-to-r from-[#e87c22] to-[#d66e1b] hover:from-[#d66e1b] hover:to-[#c25e11] text-white text-[10px] font-bold py-1.5 px-2 rounded-lg transition-all shadow-md hover:shadow-lg uppercase tracking-wider w-full max-w-[110px]">
                              ĐẶT HÀNG
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </BrandCard>
          </div>

        </div>

        {/* Note */}
        <p className="mt-10 text-center text-[13px] text-gray-500 leading-relaxed">
          <span className="text-[#e87c22] font-bold">Lưu ý:</span> Giá in chưa bao gồm phí thiết kế. Thành phẩm sẽ có sau 2 - 4 ngày (tính từ ngày khách hàng duyệt file). Giá có thể thay đổi theo kích thước mẫu, chất liệu giấy và số lượng.
        </p>
      </div>
    </section>
  );
}