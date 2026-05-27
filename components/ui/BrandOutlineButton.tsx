"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

interface BrandOutlineButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export default function BrandOutlineButton({
  children,
  className = "",
  active = false,
  ...props
}: BrandOutlineButtonProps) {
  const brandColor = "#E6792A";
  const softBrandBorder = "rgba(230, 121, 42, 0.65)";

  return (
    <motion.button
      className={`cursor-pointer px-8 py-3 rounded-[10px] font-medium text-sm uppercase tracking-wider transition-all duration-200 ${className}`}
      style={
        active
          ? {
              border: `2px solid ${softBrandBorder}`,
              color: brandColor,
              background: "#fff",
              boxShadow: `0 0 0 2px rgba(230, 121, 42, 0.18)`,
            }
          : {
              border: "1px solid #d1d5db",
              color: "#4b5563",
              background: "#fff",
            }
      }
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.borderColor = brandColor;
          e.currentTarget.style.color = brandColor;
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.borderColor = "#d1d5db";
          e.currentTarget.style.color = "#4b5563";
        }
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
