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
  return (
    <motion.button
      className={`
        cursor-pointer 
        px-8 py-3 
        rounded-[10px] 
        font-semibold 
        text-sm 
        uppercase 
        tracking-wider 
        transition-all 
        duration-300 
        ease-out
        ${
          active
            ? "border-2 border-[#E6792A]/65 text-[#E6792A] bg-white shadow-[0_0_0_2px_rgba(230,121,42,0.18)] hover:bg-[#E6792A] hover:text-white hover:border-[#E6792A] hover:shadow-[0_8px_20px_rgba(230,121,42,0.25)]"
            : "border border-gray-300 text-gray-600 bg-white hover:border-[#E6792A] hover:text-[#E6792A] hover:bg-[#E6792A]/5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
        }
        ${className}
      `}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

