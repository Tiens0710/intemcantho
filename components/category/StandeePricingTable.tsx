import React from "react";
import BrandCard from "@/components/ui/BrandCard";

export default function StandeePricingTable() {
  const xStandeeData = [
    {
      name: "Standee chữ X mini",
      image: "/standee/section1_1.png",
      size: "160 x 60cm",
      material: "In PP",
      finishing: "Cán bóng/mờ, khoen 4 lỗ",
      price: "240.000 VNĐ",
    },
    {
      name: "Standee chữ X tiêu chuẩn",
      image: "/standee/section1_1.png",
      size: "80 x 180cm",
      material: "In PP",
      finishing: "Cán bóng/mờ, khoen 4 lỗ",
      price: "320.000 VNĐ",
    },
  ];

  const cuonStandeeData = [
    {
      name: "Standee cuốn nhôm mini",
      image: "/standee/section1_2.png",
      size: "160 x 60cm",
      material: "In PP",
      finishing: "Cán bóng/mờ, sắc nét",
      price: "370.000 VNĐ",
    },
    {
      name: "Standee cuốn nhôm cao",
      image: "/standee/section1_2.png",
      size: "80 x 200cm",
      material: "In PP",
      finishing: "Cán bóng/mờ, sắc nét",
      price: "470.000 VNĐ",
    },
  ];

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900 uppercase tracking-tight">
          BẢNG GIÁ <span className="text-[#e87c22]">IN STANDEE</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-items-center items-start">
          
          {/* Bảng Standee Chữ X */}
          <div className="w-full flex flex-col">
            {/* Tiêu đề bảng */}
            <div className="flex justify-center -mb-px relative z-10">
              <div className="bg-gradient-to-r from-[#e87c22] to-[#f09343] text-white font-bold text-base py-2 px-8 rounded-t-xl shadow-sm uppercase tracking-wider">
                STANDEE CHÂN CHỮ X
              </div>
            </div>
            
            {/* Table */}
            <BrandCard className="overflow-hidden bg-white">
              <div className="overflow-x-hidden">
                <table className="w-full text-center text-[13px] table-fixed">
                  <thead className="bg-[#FFFDF9] border-b border-[#f3e4d5] text-[#9a5b24]">
                    <tr>
                      <th className="py-4 px-3 border-r border-[#f3e4d5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[30%]">LOẠI STANDEE</th>
                      <th className="py-4 px-2 border-r border-[#f3e4d5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[15%]">KÍCH THƯỚC</th>
                      <th className="py-4 px-2 border-r border-[#f3e4d5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[13%]">CHẤT LIỆU</th>
                      <th className="py-4 px-2 border-r border-[#f3e4d5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[22%]">GIA CÔNG</th>
                      <th className="py-4 px-2 uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[20%]">GIÁ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {xStandeeData.map((item, index) => (
                      <tr key={index} className={`hover:bg-[#faf6f0] transition-colors ${index !== xStandeeData.length - 1 ? "border-b border-[#f3e4d5]" : ""}`}>
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

          {/* Bảng Standee Cuốn Nhôm */}
          <div className="w-full flex flex-col">
            {/* Tiêu đề bảng */}
            <div className="flex justify-center -mb-px relative z-10">
              <div className="bg-white border-t border-l border-r border-[#e5d5c5] text-[#9a5b24] font-bold text-base py-2 px-8 rounded-t-xl shadow-[0_-4px_10px_rgba(0,0,0,0.02)] uppercase tracking-wider">
                STANDEE CHÂN CUỐN NHÔM
              </div>
            </div>
            
            {/* Table */}
            <BrandCard className="overflow-hidden bg-white">
              <div className="overflow-x-hidden">
                <table className="w-full text-center text-[13px] table-fixed">
                  <thead className="bg-[#FFFDF9] border-b border-[#e5d5c5] text-[#9a5b24]">
                    <tr>
                      <th className="py-4 px-3 border-r border-[#e5d5c5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[30%]">LOẠI STANDEE</th>
                      <th className="py-4 px-2 border-r border-[#e5d5c5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[15%]">KÍCH THƯỚC</th>
                      <th className="py-4 px-2 border-r border-[#e5d5c5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[13%]">CHẤT LIỆU</th>
                      <th className="py-4 px-2 border-r border-[#e5d5c5] uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[22%]">GIA CÔNG</th>
                      <th className="py-4 px-2 uppercase text-[11px] lg:text-[12px] tracking-wider font-bold w-[20%]">GIÁ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cuonStandeeData.map((item, index) => (
                      <tr key={index} className={`hover:bg-[#faf6f0] transition-colors ${index !== cuonStandeeData.length - 1 ? "border-b border-[#e5d5c5]" : ""}`}>
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
          <span className="text-[#e87c22] font-bold">Lưu ý:</span> Giá in chưa bao gồm phí thiết kế. Thành phẩm sẽ có sau 3 - 5 ngày (tính từ ngày khách hàng duyệt file). Màu sắc thành phẩm có thể chênh lệch 8/10 so với màu duyệt (do màn hình mỗi máy khác nhau).
        </p>
      </div>
    </section>
  );
}
