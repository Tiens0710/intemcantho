"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─────────────── Slide Data ─────────────── */

const SLIDES = [
  {
    tag: "Mẫu nổi bật — Spa & Beauty",
    title: "Standee khai trương sang trọng & ấn tượng",
    desc: "Thiết kế chuyên nghiệp theo yêu cầu — in sắc nét, màu chuẩn, giao hàng nhanh tại Cần Thơ và toàn quốc.",
    image: "/standee/herobanner1.png",
  },
  {
    tag: "Mẫu nổi bật — Grand Opening",
    title: "Standee khai trương rực rỡ & festive",
    desc: "Gây ấn tượng mạnh ngay từ giây đầu tiên — màu sắc tươi sáng, layout chuyên nghiệp, sẵn sàng in trong 24 giờ.",
    image: "/standee/herobanner2.png",
  },
];

/* ─────────────── Main Component ─────────────── */

export default function StandeeHeroBanner() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((idx: number) => {
    const next = ((idx % SLIDES.length) + SLIDES.length) % SLIDES.length;
    setActive(next);
    // Reset progress bar
    const prog = progressRef.current;
    if (prog) {
      prog.style.transition = "none";
      prog.style.width = "0%";
      void prog.offsetWidth;
      prog.style.transition = "width 5s linear";
      prog.style.width = "100%";
    }
  }, []);

  // Auto-play
  useEffect(() => {
    const prog = progressRef.current;
    if (prog) {
      prog.style.transition = "width 5s linear";
      prog.style.width = "100%";
    }

    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % SLIDES.length;
        if (prog) {
          prog.style.transition = "none";
          prog.style.width = "0%";
          void prog.offsetWidth;
          prog.style.transition = "width 5s linear";
          prog.style.width = "100%";
        }
        return next;
      });
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .shb-hero {
          position: relative;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          font-family: 'Be Vietnam Pro', 'Nunito', sans-serif;
        }

        /* ── Background with ripple animation ── */
        .shb-bg-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .shb-bg-img {
          position: absolute;
          inset: -20px;
          width: calc(100% + 40px);
          height: calc(100% + 40px);
          object-fit: cover;
          animation: shbRipple 12s ease-in-out infinite alternate;
        }

        @keyframes shbRipple {
          0% {
            transform: scale(1.02) translate(0, 0);
          }
          25% {
            transform: scale(1.04) translate(-8px, 5px);
          }
          50% {
            transform: scale(1.03) translate(5px, -3px);
          }
          75% {
            transform: scale(1.05) translate(-5px, -8px);
          }
          100% {
            transform: scale(1.02) translate(3px, 5px);
          }
        }

        .shb-overlay {
          position: absolute;
          inset: 0;
          background: none;
          z-index: 2;
        }

        /* ── Slide content ── */
        .shb-slide {
          position: absolute;
          inset: 0;
          z-index: 5;
          display: flex;
          align-items: center;
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .shb-slide.active {
          opacity: 1;
          pointer-events: auto;
        }

        .shb-content {
          position: relative;
          z-index: 10;
          padding: 0 5% 0 12%;
          max-width: 780px;
          width: 55%;
        }

        .shb-mockup {
          position: absolute;
          right: 20%;
          top: 50%;
          transform: translateY(-50%);
          width: clamp(200px, 22vw, 340px);
          z-index: 10;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,.5));
        }

        .shb-tag {
          display: inline-block;
          font-size: 0.68rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #E8C06A;
          font-weight: 500;
          border: 1px solid rgba(201,150,58,.4);
          padding: 0.35em 1em;
          margin-bottom: 1.2rem;
        }

        .shb-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 5.5vw, 5rem);
          font-weight: 900;
          line-height: 1.05;
          color: #fff;
          text-shadow: 0 4px 30px rgba(0,0,0,.4);
          margin: 0;
        }

        .shb-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255,255,255,.75);
          margin-top: 1rem;
          max-width: 580px;
        }

        .shb-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-top: 1.8rem;
        }

        .shb-btn-primary {
          background: #C9963A;
          color: #fff;
          font-weight: 600;
          font-size: 0.82rem;
          padding: 0.75em 2em;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
          transition: background .2s, filter .2s;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
        }

        .shb-btn-primary:hover {
          background: #E8C06A !important;
          filter: brightness(1.1);
        }

        .shb-btn-secondary {
          color: rgba(255,255,255,.75);
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: underline;
          text-underline-offset: 4px;
          cursor: pointer;
          transition: color .2s;
          background: none;
          border: none;
        }

        .shb-nav {
          position: absolute;
          bottom: 2rem;
          left: 8%;
          z-index: 20;
          display: flex;
          gap: 0.7rem;
          align-items: center;
        }

        .shb-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,.3);
          cursor: pointer;
          transition: all .4s ease;
        }

        .shb-dot.active {
          width: 24px;
          border-radius: 3px;
          background: #C9963A;
        }

        .shb-counter {
          position: absolute;
          bottom: 2rem;
          right: 5%;
          z-index: 20;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          color: rgba(255,255,255,.4);
        }

        .shb-counter span {
          color: #fff;
          font-size: 1.4rem;
        }

        .shb-arrow {
          position: absolute;
          top: 50%;
          z-index: 20;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,.6);
          font-size: 1rem;
          transition: all .2s;
          clip-path: polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));
          background: transparent;
        }

        .shb-arrow:hover {
          border-color: #C9963A !important;
          color: #C9963A !important;
          background: rgba(201, 150, 58, 0.1);
        }

        .shb-arrow-left { left: 2%; }
        .shb-arrow-right { right: 2%; }

        .shb-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: #C9963A;
          width: 0%;
          z-index: 20;
          box-shadow: 0 0 10px #C9963A;
        }
      `}</style>

      <section className="shb-hero">
        {/* Fixed background image with ripple animation */}
        <div className="shb-bg-wrap">
          <img
            src="/standee/bạn_hãy_giúp_tôi_xóa_202605151015.jpeg"
            alt=""
            className="shb-bg-img"
            draggable={false}
          />
        </div>

        {/* Dark overlay */}
        <div className="shb-overlay" />

        {/* Slides — content only (background is fixed above) */}
        {SLIDES.map((slide, i) => (
          <div key={i} className={`shb-slide ${i === active ? "active" : ""}`}>
            <div className="shb-content">
              <div className="shb-tag">{slide.tag}</div>
              <h1 className="shb-title">{slide.title}</h1>
              <p className="shb-desc">{slide.desc}</p>
              <div className="shb-actions">
                <Link href="#san-pham" className="shb-btn-primary">
                  Xem mẫu standee
                </Link>
                <Link href="#bao-gia" className="shb-btn-secondary">
                  Báo giá miễn phí →
                </Link>
              </div>
            </div>

            <div className="shb-mockup">
              <Image
                src={slide.image}
                alt="Standee mockup"
                width={340}
                height={560}
                style={{ width: "100%", height: "auto" }}
                priority={i === 0}
              />
            </div>
          </div>
        ))}

        {/* Nav Dots */}
        <div className="shb-nav">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className={`shb-dot ${i === active ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="shb-counter">
          <span>{String(active + 1).padStart(2, "0")}</span> / {String(SLIDES.length).padStart(2, "0")}
        </div>

        {/* Arrows */}
        <div
          className="shb-arrow shb-arrow-left"
          onClick={() => goTo((active - 1 + SLIDES.length) % SLIDES.length)}
        >
          ←
        </div>
        <div
          className="shb-arrow shb-arrow-right"
          onClick={() => goTo((active + 1) % SLIDES.length)}
        >
          →
        </div>

        {/* Progress Bar */}
        <div ref={progressRef} className="shb-progress" />
      </section>
    </>
  );
}