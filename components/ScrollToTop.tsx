"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-8 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer animate-fade-in"
      style={{
        background: "#E6792A",
        boxShadow: "0 4px 14px rgba(230,121,42,0.35)",
      }}
      aria-label="Cuộn lên đầu trang"
    >
      <ChevronUp className="w-5 h-5 text-white" strokeWidth={2.5} />
    </button>
  );
}