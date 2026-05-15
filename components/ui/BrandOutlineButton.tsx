"use client";

import React from "react";

interface BrandOutlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function BrandOutlineButton({
  children,
  className = "",
  ...props
}: BrandOutlineButtonProps) {
  return (
    <button
      className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg ${className}`}
      style={{
        border: "2px solid #E6792A",
        color: "#E6792A",
        background: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#E6792A";
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "#E6792A";
      }}
      {...props}
    >
      {children}
    </button>
  );
}
