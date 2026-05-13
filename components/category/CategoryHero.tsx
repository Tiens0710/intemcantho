"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronRight } from "lucide-react";

/* ───────────────── Dynamic Imports (SSR-safe) ───────────────── */
const WebGLBackground = dynamic(() => import("./WebGLBackground"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f05] to-[#2d1810]" />
  ),
});

/* ───────────────── Props ───────────────── */
type Props = {
  title: string;
  subtitle: string;
  bgImage: string;
  floatingImages: string[];
  categoryLabel: string;
};

/* ───────────────── Energy Particles (Canvas 2D) ───────────────── */
function EnergyParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(217, 165, 80, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217, 165, 80, ${p.alpha})`;
        ctx.fill();

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}

/* ───────────────── Product Showcase (Center) ───────────────── */
function ProductShowcase({ images, alt }: { images: string[]; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const product = productRef.current;
    if (!container || !product) return;

    const ctx = gsap.context(() => {
      // Floating animation
      gsap.to(product, {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Mouse tilt (3D perspective)
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(product, {
          rotateY: x * 15,
          rotateX: -y * 10,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      {/* Glow behind product */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(217,165,80,0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Product image */}
      <div
        ref={productRef}
        className="relative z-10"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={images[0] || "/danhmuc1.png"}
          alt={alt}
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 30px rgba(217,165,80,0.4))",
          }}
        />
      </div>

      {/* Floating accent images */}
      {images.slice(1).map((src, i) => (
        <div
          key={src + i}
          className="absolute z-20"
          style={{
            [i % 2 === 0 ? "right" : "left"]: "5%",
            [i % 2 === 0 ? "bottom" : "top"]: "15%",
          }}
        >
          <div
            className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-xl overflow-hidden border border-amber-500/20 shadow-xl"
            style={{
              background: "rgba(217,165,80,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <img
              src={src}
              alt={`${alt} ${i + 2}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ───────────────── Main CategoryHero Component ───────────────── */
export default function CategoryHero({
  title,
  subtitle,
  bgImage,
  floatingImages,
  categoryLabel,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Breadcrumb
      tl.fromTo(
        breadcrumbRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );

      // Title — word-by-word clip reveal
      const titleEl = titleRef.current;
      if (titleEl) {
        const words = title.split(" ");
        titleEl.innerHTML = "";

        words.forEach((word) => {
          const wrapper = document.createElement("span");
          wrapper.style.display = "inline-block";
          wrapper.style.overflow = "hidden";
          wrapper.style.verticalAlign = "top";
          wrapper.style.marginRight = "0.25em";

          const inner = document.createElement("span");
          inner.textContent = word;
          inner.style.display = "inline-block";
          inner.style.transform = "translateY(110%)";

          wrapper.appendChild(inner);
          titleEl.appendChild(wrapper);

          tl.to(
            inner,
            { y: 0, duration: 0.9, ease: "power3.out" },
            "-=0.6"
          );
        });
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      );

      // Mouse parallax on UI elements
      const section = sectionRef.current;
      if (!section) return;

      const titleX = gsap.quickTo(titleRef.current, "x", { duration: 1, ease: "power2.out" });
      const titleY = gsap.quickTo(titleRef.current, "y", { duration: 1, ease: "power2.out" });
      const subX = gsap.quickTo(subtitleRef.current, "x", { duration: 1.2, ease: "power2.out" });
      const subY = gsap.quickTo(subtitleRef.current, "y", { duration: 1.2, ease: "power2.out" });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = section.getBoundingClientRect();
        const mx = (e.clientX - rect.left) / rect.width - 0.5;
        const my = (e.clientY - rect.top) / rect.height - 0.5;

        titleX(mx * 10);
        titleY(my * 5);
        subX(mx * 15);
        subY(my * 8);
      };

      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#1a0f05]"
    >
      {/* ── Layer 0: WebGL Background ── */}
      <div className="absolute inset-0 z-0">
        <WebGLBackground />
      </div>

      {/* ── Layer 1: Energy Particles ── */}
      <div className="absolute inset-0 z-[1]">
        <EnergyParticles />
      </div>

      {/* ── Layer 2: Noise/Grain Overlay ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />

      {/* ── Main Content: Split Layout ── */}
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full py-20">

          {/* ── Left: Typography ── */}
          <div className="flex flex-col items-start text-left">
            {/* Breadcrumb */}
            <div
              ref={breadcrumbRef}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8
                         bg-white/5 backdrop-blur-md border border-white/10"
              style={{ opacity: 0 }}
            >
              <span className="text-[10px] font-bold text-amber-500/50 uppercase tracking-[0.3em]">
                Trang chủ
              </span>
              <ChevronRight className="w-3 h-3 text-amber-500/20" />
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.3em]">
                {categoryLabel}
              </span>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
              style={{ opacity: 0 }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-sm md:text-base text-amber-200/60 font-light leading-relaxed mb-8 max-w-lg"
              style={{ opacity: 0 }}
            >
              {subtitle}
            </p>

            {/* CTA Button */}
            <a
              href="#pricing"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full
                         bg-gradient-to-r from-amber-500 to-amber-600
                         text-sm font-bold text-[#1a0f05] uppercase tracking-wider
                         transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(217,165,80,0.5)]"
            >
              Xem Báo Giá
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              {/* Glow border */}
              <div className="absolute inset-0 rounded-full border border-amber-400/30 blur-sm" />
            </a>
          </div>

          {/* ── Right: Product Showcase ── */}
          <div className="relative h-[350px] md:h-[450px] lg:h-[550px]">
            <ProductShowcase images={floatingImages} alt={categoryLabel} />
          </div>

        </div>
      </div>

      {/* ── Bottom Gradient Fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
    </section>
  );
}