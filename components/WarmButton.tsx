"use client";

/**
 * WarmButton — Reusable warm-brown CTA button.
 * Style inspired by the footer's glassmorphic "Tư vấn" button.
 * Base color: #c7742c
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
  variant?: "filled" | "outline" | "white";
}

const SIZES = {
  sm: {
    padding: "8px 18px",
    fontSize: "12px",
  },
  md: {
    padding: "12px 28px",
    fontSize: "14px",
  },
  lg: {
    padding: "16px 36px",
    fontSize: "15px",
  },
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

  const isFilled = variant === "filled";
  const isWhite = variant === "white";

  const buttonStyle = {
    ...sizeStyle,
    borderRadius: "10px",
    fontWeight: 600,
    whiteSpace: "nowrap" as const,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "fit-content",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    position: "relative" as const,
    border: isFilled
      ? "2px solid rgba(255,255,255,0.55)"
      : isWhite
        ? "1.5px solid rgba(255,255,255,0.6)"
        : "1.5px solid #c7742c",
    background: isFilled
      ? "linear-gradient(180deg, #c7742c 0%, #a85f20 100%)"
      : isWhite
        ? "rgba(255,255,255,0.1)"
        : "transparent",
    color: isFilled ? "#fff" : isWhite ? "#fff" : "#c7742c",
    boxShadow: isFilled
      ? "0 6px 20px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.12)"
      : "none",
    transition: "all 300ms cubic-bezier(0.22, 1, 0.36, 1)",
  };

  const content = (
    <>
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  const hoverBg = isFilled
    ? "linear-gradient(135deg, #d48030 0%, #b06828 100%)"
    : isWhite
      ? "rgba(255,255,255,0.2)"
      : "rgba(199, 116, 44, 0.06)";

  const hoverShadow = isFilled
    ? "0 8px 28px rgba(0,0,0,0.3), 0 3px 8px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.12)"
    : isWhite
      ? "0 0 0 1.5px rgba(255,255,255,0.8)"
      : "0 0 0 1.5px #c7742c";

  const leaveBg = buttonStyle.background;
  const leaveShadow = buttonStyle.boxShadow;

  if (href && !disabled) {
    return (
      <Link href={href} className={className}>
        <motion.span
          whileHover={{ scale: 1.03, y: -1 }}
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
      whileHover={disabled ? {} : { scale: 1.03, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={className}
      style={buttonStyle}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = hoverBg;
          e.currentTarget.style.boxShadow = hoverShadow;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = leaveBg;
          e.currentTarget.style.boxShadow = leaveShadow;
        }
      }}
    >
      {content}
    </motion.button>
  );
}