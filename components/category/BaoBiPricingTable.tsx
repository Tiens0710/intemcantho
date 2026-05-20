import React from "react";
import BrandCard from "@/components/ui/BrandCard";

export default function BaoBiPricingTable() {
  const hopGiayData = [
    {
      name: "Hộp Giấy Kraft",
      image: "/danhmuc5.png",
      size: "Theo yêu cầu",
      material: "Giấy Kraft 300gsm",
      finishing: "Bế + dán, in offset 1-4 màu",
      price: "8.000 VNĐ/hộp",
    },
    {
      name: "Hộp Carton Bế Dán",
      image: "/danhmuc5.png",
      size: "Theo yêu cầu",
      material: "Carton 3 lớp – 5 lớp",
      finishing: "Bế + dán, in flexo",
      price: "5.500 VNĐ/hộp",
    },
  ];

  const tuiGiayData = [
    {
      name: "Túi Giấy Kraft",
      image: "/danhmuc6.png",
      size: "20x26x10cm",
      material: "Giấy Kraft nâu/trắng",
      finishing: "In offset, dán đáy, xỏ dây",
      price: "4.500 VNĐ/túi",
    },
    {
      name: "Túi Giấy Cao Cấp",
      image: "/danhmuc6.png",
      size: "25x35x12cm",
      material: "Giấy Couche 250gsm",
      finishing: "In offset, cán mờ, xỏ dây rope",
      price: "8.000 VNĐ/túi",
    },
  ];

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900 uppercase tracking-tight">
          BẢNG GIÁ <span className="text-[#e87c22]">IN BAO BÌ</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-items-center items-start">
          {/* Bảng Hộp Giấy */}
          <div className="w-full flex flex-col">
            <div className="flex justify-center -mb-px relative z-10">
              <div className="bg-gradient-to-r from-[#e87c22] to-[#f09343] text-white font-bold text-base py-2 px-8 rounded-t-xl shadow-sm uppercase tracking-wider">
                HỘP GIẤY
              </div>
            </div>
            <BrandCard className="overflow-hidden bg-white">
              <div className="overflow-x-hidden">
                    <table className="w-full text-center text-[13px] table-fixed">
                      <thead className="bg-[#FFFDF9] border-b border-[#f3e4d5] text-[#9a5b24]">
                        <tr>
                          <th className="py-4 px-3 border-r border-[#f3e4d5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[22%]">LOẠI HỘP</th>
                          <th className="py-4 px-2 border-r border-[#f3e4d5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[14%]">KÍCH THƯỚC</th>
                          <th className="py-4 px-2 border-r border-[#f3e4d5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[16%]">CHẤT LIỆU</th>
                          <th className="py-4 px-2 border-r border-[#f3e4d5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[24%]">GIA CÔNG</th>
                          <th className="py-4 px-2 uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[24%]">GIÁ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hopGiayData.map((item, index) => (
                      <tr key={index} className={`hover:bg-[#faf6f0] transition-colors ${index !== hopGiayData.length - 1 ? "border-b border-[#f3e4d5]" : ""}`}>
                        <td className="py-4 px-3 border-r border-[#f3e4d5]">
                          <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-3 text-center sm:text-left">
                            <img src={item.image} alt={item.name} className="h-14 lg:h-16 object-contain w-10 lg:w-12 flex-shrink-0 drop-shadow-sm" />
                            <span className="font-bold text-gray-800 text-[12px] lg:text-[13px] leading-snug">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-2 border-r border-[#f3e4d5] text-gray-700 font-medium text-[12px]">{item.size}</td>
                        <td className="py-4 px-2 border-r border-[#f3e4d5] text-gray-700 font-medium text-[12px]">{item.material}</td>
                        <td className="py-4 px-2 border-r border-[#f3e4d5] text-gray-700 font-medium text-[11px] lg:text-[12px] leading-relaxed">{item.finishing}</td>
                        <td className="py-4 px-2">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <span className="text-[#e87c22] font-black text-[14px] lg:text-[16px] whitespace-nowrap">{item.price}</span>
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

          {/* Bảng Túi Giấy */}
          <div className="w-full flex flex-col">
            <div className="flex justify-center -mb-px relative z-10">
              <div className="bg-white border-t border-l border-r border-[#e5d5c5] text-[#9a5b24] font-bold text-base py-2 px-8 rounded-t-xl shadow-[0_-4px_10px_rgba(0,0,0,0.02)] uppercase tracking-wider">
                TÚI GIẤY
              </div>
            </div>
            <BrandCard className="overflow-hidden bg-white">
              <div className="overflow-x-hidden">
                    <table className="w-full text-center text-[13px] table-fixed">
                      <thead className="bg-[#FFFDF9] border-b border-[#e5d5c5] text-[#9a5b24]">
                        <tr>
                          <th className="py-4 px-3 border-r border-[#e5d5c5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[22%]">LOẠI TÚI</th>
                          <th className="py-4 px-2 border-r border-[#e5d5c5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[14%]">KÍCH THƯỚC</th>
                          <th className="py-4 px-2 border-r border-[#e5d5c5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[16%]">CHẤT LIỆU</th>
                          <th className="py-4 px-2 border-r border-[#e5d5c5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[24%]">GIA CÔNG</th>
                          <th className="py-4 px-2 uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[24%]">GIÁ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tuiGiayData.map((item, index) => (
                      <tr key={index} className={`hover:bg-[#faf6f0] transition-colors ${index !== tuiGiayData.length - 1 ? "border-b border-[#e5d5c5]" : ""}`}>
                        <td className="py-4 px-3 border-r border-[#e5d5c5]">
                          <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-3 text-center sm:text-left">
                            <img src={item.image} alt={item.name} className="h-14 lg:h-16 object-contain w-10 lg:w-12 flex-shrink-0 drop-shadow-sm" />
                            <span className="font-bold text-gray-800 text-[12px] lg:text-[13px] leading-snug">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-2 border-r border-[#e5d5c5] text-gray-700 font-medium text-[12px]">{item.size}</td>
                        <td className="py-4 px-2 border-r border-[#e5d5c5] text-gray-700 font-medium text-[12px]">{item.material}</td>
                        <td className="py-4 px-2 border-r border-[#e5d5c5] text-gray-700 font-medium text-[11px] lg:text-[12px] leading-relaxed">{item.finishing}</td>
                        <td className="py-4 px-2">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <span className="text-[#e87c22] font-black text-[14px] lg:text-[16px] whitespace-nowrap">{item.price}</span>
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
          <span className="text-[#e87c22] font-bold">Lưu ý:</span> Giá in chưa bao gồm phí thiết kế. Thành phẩm sẽ có sau 5 - 7 ngày (tính từ ngày khách hàng duyệt file). Giá có thể thay đổi theo số lượng và kích thước tùy chỉnh.
        </p>
      </div>
    </section>
  );
}