import type React from "react";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/intemcantho.duky",
    icon: "/facebook-f-logo.svg",
    className: "p-1.5",
    accent: "#1877F2",
  },
  {
    label: "Zalo",
    href: "https://zalo.me/0985463403",
    icon: "/Icon_of_Zalo.svg.png",
    className: "p-1",
    accent: "#0068FF",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/intemcantho/",
    icon: "/Instagram_logo_2022.svg",
    className: "p-1.5",
    accent: "#E4405F",
  },
];

export default function SocialFloatingLinks() {
  return (
    <nav
      aria-label="Liên kết mạng xã hội"
      className="fixed right-3 top-1/2 z-[70] flex -translate-y-1/2 flex-col gap-2 sm:right-5"
    >
      {SOCIAL_LINKS.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={`social-floating-link group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/78 text-[#9A5B24] shadow-[0_10px_24px_rgba(30,41,59,0.12),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-[22px] transition duration-300 hover:-translate-x-1 hover:scale-105 hover:bg-white hover:shadow-[0_14px_34px_rgba(30,41,59,0.18)] ${item.className}`}
          style={
            {
              "--social-accent": item.accent,
              animationDelay: `${index * 0.45}s`,
            } as React.CSSProperties
          }
        >
          <img
            src={item.icon}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </a>
      ))}
    </nav>
  );
}
