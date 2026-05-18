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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-[1100px]">

        {/* Outer wrapper with animated border light */}
        <div className="standee-process-wrapper relative">
          <div className="standee-process-border" />

          {/* Title sitting on top border */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-6 whitespace-nowrap z-10">
            <h2
              className="text-2xl lg:text-3xl font-black uppercase tracking-tight"
              style={{ fontFamily: "'Nunito', sans-serif", color: "#111111" }}
            >
              QUY TRÌNH ĐẶT IN{" "}
              <span style={{ color: "#E6792A" }}>{label}</span>
            </h2>
          </div>

          {/* Inner content card */}
          <div className="standee-process-inner" style={{ border: "1.5px solid #E6792A", borderRadius: "14px" }}>

            {/* Row 1: Circles + Arrows */}
            <div className="flex flex-row items-center justify-between px-8 pt-12 pb-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-1 items-center">
                  {/* Circle */}
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white"
                      style={{ border: "2px solid #E6792A" }}
                    >
                      <span
                        className="text-xl font-black leading-none"
                        style={{ color: "#E6792A", fontFamily: "'Nunito', sans-serif" }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block flex-shrink-0 px-1">
                      <svg width="36" height="16" viewBox="0 0 36 16" fill="none">
                        <line x1="0" y1="8" x2="28" y2="8" stroke="#E6792A" strokeWidth="1.5" strokeLinecap="round" />
                        <polyline points="22,2 30,8 22,14" fill="none" stroke="#E6792A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Row 2: Titles + Descriptions */}
            <div className="flex flex-row items-stretch justify-between px-8 pb-8">
              {steps.map((step) => (
                <div key={step.number} className="flex-1 flex flex-col items-center text-center px-2">
                  <h3
                    className="font-semibold text-gray-900 text-[9px] mb-1 leading-tight min-h-[24px] flex items-center justify-center whitespace-nowrap"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-gray-500 text-[11px] leading-relaxed min-h-[40px] flex items-start justify-center"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}