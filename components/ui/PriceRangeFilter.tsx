"use client";

import { SlidersHorizontal } from "lucide-react";

type PriceRangeFilterProps = {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
};

function formatCurrency(value: number) {
  return `${value.toLocaleString("vi-VN")}đ`;
}

export default function PriceRangeFilter({
  min,
  max,
  step = 10000,
  value,
  onChange,
}: PriceRangeFilterProps) {
  const [minValue, maxValue] = value;
  const range = Math.max(max - min, 1);
  const minPercent = ((minValue - min) / range) * 100;
  const maxPercent = ((maxValue - min) / range) * 100;

  const updateMin = (nextValue: number) => {
    onChange([Math.min(nextValue, maxValue - step), maxValue]);
  };

  const updateMax = (nextValue: number) => {
    onChange([minValue, Math.max(nextValue, minValue + step)]);
  };

  return (
    <div className="price-range-filter bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 shadow-2xl shadow-amber-900/5">
      <div className="mb-5 flex items-center gap-3 text-[#E6792A]">
        <SlidersHorizontal className="h-5 w-5 shrink-0" strokeWidth={2.4} />
        <h3 className="text-sm font-black leading-tight">
          Hoặc chọn mức giá phù hợp với bạn
        </h3>
      </div>

      <div className="relative mb-7 h-[20px] rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(230,121,42,0.16),0_2px_10px_rgba(230,121,42,0.12)]">
        <div className="absolute left-[18px] right-[18px] top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#E6792A]/15">
          <div
            className="absolute top-0 h-full rounded-full bg-[#E6792A]"
            style={{
              left: `${minPercent}%`,
              right: `${100 - maxPercent}%`,
            }}
          />
        </div>
        <input
          aria-label="Giá thấp nhất"
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={(event) => updateMin(Number(event.target.value))}
        />
        <input
          aria-label="Giá cao nhất"
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={(event) => updateMax(Number(event.target.value))}
        />
      </div>

      <div className="flex items-center gap-3">
        <output className="min-w-0 flex-1 rounded-md border border-[#E6792A]/25 bg-white px-3 py-2 text-right text-sm font-bold text-amber-950/80 shadow-sm">
          {formatCurrency(minValue)}
        </output>
        <span className="h-px w-8 shrink-0 bg-[#E6792A]/30" />
        <output className="min-w-0 flex-1 rounded-md border border-[#E6792A]/25 bg-white px-3 py-2 text-right text-sm font-bold text-amber-950/80 shadow-sm">
          {formatCurrency(maxValue)}
        </output>
      </div>

      <style>{`
        .price-range-filter input[type="range"] {
          pointer-events: none;
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          width: 100%;
          height: 20px;
          margin: 0;
          appearance: none;
          transform: translateY(-50%);
          background: transparent;
        }

        .price-range-filter input[type="range"]::-webkit-slider-thumb {
          pointer-events: auto;
          width: 20px;
          height: 20px;
          border: 4px solid #E6792A;
          border-radius: 9999px;
          appearance: none;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(230, 121, 42, 0.28);
          cursor: grab;
        }

        .price-range-filter input[type="range"]:active::-webkit-slider-thumb {
          cursor: grabbing;
        }

        .price-range-filter input[type="range"]::-moz-range-thumb {
          pointer-events: auto;
          width: 12px;
          height: 12px;
          border: 4px solid #E6792A;
          border-radius: 9999px;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(230, 121, 42, 0.28);
          cursor: grab;
        }

        .price-range-filter input[type="range"]::-webkit-slider-runnable-track,
        .price-range-filter input[type="range"]::-moz-range-track {
          background: transparent;
          border: 0;
        }
      `}</style>
    </div>
  );
}
