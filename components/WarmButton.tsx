"use client";

/**
 * WarmButton — Reusable warm-brown CTA button with consistent styling.
 * Matches the brand's amber/brown color palette across the entire site.
 *
 * Props:
 * - children: Button content (text, icons, etc.)
 * - onClick: Optional click handler
 * - type: Button type (default: "button")
 * - href: If provided, renders as a Link
 * - disabled: Disabled state
 * - className: Additional CSS classes
 * - icon: Optional right icon/element
 * - size: "sm" | "md" | "lg" (default: "md")
 * - fullWidth: Stretch to full width
 * - variant: "filled" | "outline" (default: "filled")
 */

import { motion } from "framer-motion";
import Link from "next/link";

interface WarmButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "filled" | "outline";
}

const SIZES = {
  sm: {
    padding: "8px 18px",
    fontSize: "12px",
    borderRadius: "8px",
  },
  md: {
    padding: "10px 22px",
    fontSize: "13px",
    borderRadius: "50px",
  },
  lg: {
    padding: "16px 32px",
    fontSize: "14px",
    borderRadius: "10px",
  },
};

const FILLED_STYLE = {
  background: "#b36e39",
  borderColor: "#b36e39",
  color: "#FFFFFF",
};

const FILLED_HOVER = {
  background: "#9a5b24",
  borderColor: "#9a5b24",
};

const OUTLINE_STYLE = {
  background: "transparent",
  borderColor: "#b36e39",
  color: "#b36e39",
};

const OUTLINE_HOVER = {
  background: "#b36e39",
  borderColor: "#b36e39",
  color: "#FFFFFF",
};

export default function WarmButton({
  children,
  onClick,
  type = "button",
  href,
  disabled = false,
  className = "",
  icon,
  size = "md",
  fullWidth = false,
  variant = "filled",
}: WarmButtonProps) {
  const sizeStyle = SIZES[size];
  const baseStyle = variant === "filled" ? FILLED_STYLE : OUTLINE_STYLE;
  const hoverStyle = variant === "filled" ? FILLED_HOVER : OUTLINE_HOVER;

  const buttonStyle = {
    ...sizeStyle,
    ...baseStyle,
    border: `1.5px solid ${baseStyle.borderColor}`,
    fontWeight: 600,
    whiteSpace: "nowrap" as const,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "fit-content",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  };

  const content = (
    <>
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={className}>
        <motion.span
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center"
          style={buttonStyle}
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={className}
      style={buttonStyle}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = hoverStyle.background;
          e.currentTarget.style.borderColor = hoverStyle.borderColor;
          if ("color" in hoverStyle) {
            e.currentTarget.style.color = (hoverStyle as { color: string }).color;
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = baseStyle.background;
          e.currentTarget.style.borderColor = baseStyle.borderColor;
          e.currentTarget.style.color = baseStyle.color;
        }
      }}
    >
      {content}
    </motion.button>
  );
}