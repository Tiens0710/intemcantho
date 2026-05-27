type StandeeOrderProcessProps = {
  label?: string;
};

const steps = [
  {
    number: "01",
    title: "Gửi yêu cầu",
    description: "Chọn loại, kích thước, số lượng và gửi file.",
  },
  {
    number: "02",
    title: "Kiểm tra & tư vấn",
    description: "Tư vấn chất liệu và đề xuất phương án phù hợp.",
  },
  {
    number: "03",
    title: "Báo giá & xác nhận",
    description: "Xác nhận đơn hàng và thời gian hoàn thành.",
  },
  {
    number: "04",
    title: "In ấn & gia công",
    description: "In PP, cán bóng/mờ, lắp chân theo quy cách.",
  },
  {
    number: "05",
    title: "Giao hàng",
    description: "Đóng gói cẩn thận, giao tận nơi tại Cần Thơ.",
  },
];

export default function StandeeOrderProcess({ label = "STANDEE" }: StandeeOrderProcessProps) {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1100px]">

        {/* Outer wrapper with animated border light */}
        <div className="standee-process-wrapper relative">
          <div className="standee-process-border" />

          {/* Title sitting on top border */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-4 sm:px-6 whitespace-nowrap z-10">
            <h2
              className="text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-tight"
              style={{ fontFamily: "'Nunito', sans-serif", color: "#111111" }}
            >
              QUY TRÌNH ĐẶT IN{" "}
              <span style={{ color: "#E6792A" }}>{label}</span>
            </h2>
          </div>

          {/* Inner content card */}
          <div className="standee-process-inner" style={{ border: "1.5px solid #E6792A", borderRadius: "14px" }}>

            {/* Steps grid with arrows */}
            <div className="relative px-4 sm:px-8 pt-12 pb-6 md:pb-8">
              {/* Desktop: horizontal layout */}
              <div className="hidden md:flex items-start justify-between">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-start" style={{ flex: 1 }}>
                    {/* Step content */}
                    <div className="flex flex-col items-center text-center w-full">
                      <div
                        className="w-[52px] h-[52px] lg:w-[60px] lg:h-[60px] rounded-full flex items-center justify-center bg-white shrink-0"
                        style={{ border: "2px solid #E6792A" }}
                      >
                        <span
                          className="text-lg lg:text-xl font-black leading-none"
                          style={{ color: "#E6792A", fontFamily: "'Nunito', sans-serif" }}
                        >
                          {step.number}
                        </span>
                      </div>
                      <h3
                        className="font-semibold text-gray-900 text-[12px] lg:text-[13px] mt-3 lg:mt-4 mb-1 leading-tight"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-gray-500 text-[11px] lg:text-[12px] leading-relaxed mt-1 px-1 max-w-[140px]"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="flex items-center justify-center shrink-0" style={{ marginTop: "20px", paddingRight: "4px", paddingLeft: "4px" }}>
                        <svg width="36" height="16" viewBox="0 0 36 16" fill="none">
                          <line x1="0" y1="8" x2="28" y2="8" stroke="#E6792A" strokeWidth="1.5" strokeLinecap="round" />
                          <polyline points="22,2 30,8 22,14" fill="none" stroke="#E6792A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile: vertical stacked layout */}
              <div className="md:hidden space-y-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-start gap-4">
                    {/* Step content — left aligned */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center bg-white shrink-0"
                        style={{ border: "2px solid #E6792A" }}
                      >
                        <span
                          className="text-base font-black leading-none"
                          style={{ color: "#E6792A", fontFamily: "'Nunito', sans-serif" }}
                        >
                          {step.number}
                        </span>
                      </div>
                      {/* Vertical arrow */}
                      {index < steps.length - 1 && (
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="mt-2">
                          <line x1="8" y1="0" x2="8" y2="14" stroke="#E6792A" strokeWidth="1.5" strokeLinecap="round" />
                          <polyline points="3,10 8,16 13,10" fill="none" stroke="#E6792A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3
                        className="font-semibold text-gray-900 text-sm mb-0.5 leading-tight"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-gray-500 text-xs leading-relaxed"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commitment box */}
            <div
              className="mx-4 sm:mx-8 mb-6 sm:mb-8 rounded-xl px-4 sm:px-6 py-4 sm:py-5 flex items-start gap-3 sm:gap-4"
              style={{
                background: "#FFF7ED",
                border: "1.5px solid #E6792A",
              }}
            >
              {/* Shield icon */}
              <div className="shrink-0 mt-0.5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L3 7V12C3 17.25 6.75 21.5 12 22.75C17.25 21.5 21 17.25 21 12V7L12 2Z"
                    fill="#E6792A"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p
                  className="text-[#4a2c0f] font-bold text-[14px] leading-snug"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Cam kết in đúng file — hỗ trợ xử lý nếu lỗi do in ấn
                </p>
                <p
                  className="text-[#6b3a1a] text-[13px] leading-relaxed mt-1.5"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Nếu sản phẩm không đúng file hoặc phát sinh lỗi do in ấn, shop sẽ hỗ trợ in lại theo chính sách đổi trả.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
