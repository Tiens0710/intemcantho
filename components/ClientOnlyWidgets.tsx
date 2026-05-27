"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const SocialFloatingLinks = dynamic(() => import("./SocialFloatingLinks"), { ssr: false });
const ChatSearch = dynamic(() => import("./ChatSearch"), { ssr: false });
const ScrollToTop = dynamic(() => import("./ScrollToTop"), { ssr: false });

export default function ClientOnlyWidgets() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const script = document.createElement("script");
      script.src = "//unpkg.com/react-grab/dist/index.global.js";
      script.crossOrigin = "anonymous";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <SocialFloatingLinks />
      <ChatSearch />
      <ScrollToTop />
    </>
  );
}
