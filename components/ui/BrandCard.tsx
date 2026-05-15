import React from "react";

interface BrandCardProps {
  children: React.ReactNode;
  className?: string;
  /** Opacity của viền cam (0–1), mặc định 0.35 */
  borderOpacity?: number;
  /** Opacity của bóng mờ cam (0–1), mặc định 0.1 */
  shadowOpacity?: number;
}

/**
 * Card có viền và bóng mờ màu cam thương hiệu #E6792A.
 * Dùng để bao bọc bất kỳ nội dung nào cần hiệu ứng viền cam Intem.
 */
export default function BrandCard({
  children,
  className = "",
  borderOpacity = 0.35,
  shadowOpacity = 0.1,
}: BrandCardProps) {
  const r = 230, g = 121, b = 42;

  return (
    <div
      className={`rounded-2xl transition-all ${className}`}
      style={{
        border: `1.5px solid rgba(${r},${g},${b},${borderOpacity})`,
        boxShadow: `0 4px 20px rgba(${r},${g},${b},${shadowOpacity})`,
      }}
    >
      {children}
    </div>
  );
}
