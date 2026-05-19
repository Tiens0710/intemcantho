import React from "react";

interface BrandCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  /** Border color, default is Intem orange #E6792A. */
  borderColor?: string;
  /** Border opacity (0-1), default 0.42. */
  borderOpacity?: number;
  /** Shadow color. Defaults to borderColor. */
  shadowColor?: string;
  /** Shadow opacity (0-1), default 0.12. */
  shadowOpacity?: number;
  /** Border width in px, default 1.5. */
  borderWidth?: number;
}

const BRAND_ORANGE = "#E6792A";

function toRgb(hexColor: string) {
  const normalized = hexColor.trim().replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalized;

  if (!/^[0-9a-fA-F]{6}$/.test(value)) {
    return { r: 230, g: 121, b: 42 };
  }

  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function rgba(hexColor: string, opacity: number) {
  const { r, g, b } = toRgb(hexColor);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default function BrandCard({
  children,
  className = "",
  borderColor = BRAND_ORANGE,
  borderOpacity = 0.42,
  shadowColor = borderColor,
  shadowOpacity = 0.12,
  borderWidth = 1.5,
  style,
  ...props
}: BrandCardProps) {
  return (
    <div
      className={`rounded-2xl bg-white transition-all ${className}`}
      style={{
        ...style,
        border: `${borderWidth}px solid ${rgba(borderColor, borderOpacity)}`,
        boxShadow: `0 4px 20px ${rgba(shadowColor, shadowOpacity)}`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
