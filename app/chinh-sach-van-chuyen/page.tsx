"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "Phạm Vi Giao Hàng",
    icon: "◈",
    subsections: [
      {
        subtitle: "1.1. Khu vực hỗ trợ",
        content:
          "Intem Cần Thơ hỗ trợ giao hàng trên toàn quốc thông qua các đơn vị vận chuyển đối tác hoặc giao hàng nội thành trực tiếp.",
      },
      {
        subtitle: "1.2. Đối tượng áp dụng",
        content:
          "Chính sách vận chuyển áp dụng cho tất cả khách hàng đặt in và sử dụng dịch vụ trên website Intem Cần Thơ.",
      },
    ],
  },

  {
    id: 2,
    title: "Thời Gian Xử Lý Và Giao Hàng",
    icon: "◉",
    subsections: [
      {
        subtitle: "2.1. Thời gian xử lý",
        content:
          "Đơn hàng sẽ được xác nhận và tiến hành sản xuất sau khi khách hàng duyệt file thiết kế và hoàn tất thanh toán hoặc đặt cọc.",
      },
      {
        subtitle: "2.2. Thời gian giao hàng",
        content:
          "Thời gian giao hàng phụ thuộc vào khu vực nhận hàng, số lượng sản phẩm và tiến độ sản xuất thực tế.",
      },
      {
        subtitle: "2.3. Các trường hợp chậm trễ",
        content:
          "Trong các trường hợp bất khả kháng như thời tiết, lỗi vận chuyển hoặc ngày lễ, thời gian giao hàng có thể thay đổi.",
      },
    ],
  },

  {
    id: 3,
    title: "Chi Phí Vận Chuyển",
    icon: "◎",
    subsections: [
      {
        subtitle: "3.1. Phí vận chuyển",
        content:
          "Chi phí vận chuyển được tính dựa trên khu vực giao hàng, trọng lượng hàng hóa và đơn vị vận chuyển được lựa chọn.",
        highlight: true,
      },
      {
        subtitle: "3.2. Miễn phí giao hàng",
        content:
          "Một số đơn hàng hoặc chương trình khuyến mãi có thể được áp dụng miễn phí vận chuyển theo chính sách từng thời điểm.",
        highlight: true,
      },
      {
        subtitle: "3.3. Phụ phí phát sinh",
        content:
          "Các chi phí phát sinh do thay đổi địa chỉ, giao lại nhiều lần hoặc yêu cầu giao hàng đặc biệt sẽ được thông báo riêng.",
      },
    ],
  },

  {
    id: 4,
    title: "Kiểm Tra Và Nhận Hàng",
    icon: "◇",
    subsections: [
      {
        subtitle: "4.1. Kiểm tra khi nhận",
        content:
          "Khách hàng vui lòng kiểm tra tình trạng sản phẩm và số lượng trước khi ký nhận với đơn vị vận chuyển.",
      },
      {
        subtitle: "4.2. Hàng hóa hư hỏng",
        content:
          "Nếu sản phẩm bị hư hỏng hoặc thiếu hụt trong quá trình vận chuyển, vui lòng liên hệ ngay với chúng tôi để được hỗ trợ.",
      },
      {
        subtitle: "4.3. Từ chối nhận hàng",
        content:
          "Khách hàng có quyền từ chối nhận hàng nếu sản phẩm không đúng với thông tin đã xác nhận trước đó.",
      },
    ],
  },

  {
    id: 5,
    title: "Liên Hệ Và Hỗ Trợ",
    icon: "◻",
    subsections: [
      {
        subtitle: "5.1. Hỗ trợ vận chuyển",
        content:
          "Đội ngũ Intem Cần Thơ luôn sẵn sàng hỗ trợ khách hàng về thông tin giao hàng, tra cứu đơn hàng và xử lý sự cố.",
      },
      {
        subtitle: "5.2. Thông tin liên hệ",
        content:
          "Mọi thắc mắc liên quan đến chính sách vận chuyển vui lòng liên hệ trực tiếp với chúng tôi qua hotline hoặc email.",
      },
    ],
  },
];

export default function ChinhSachVanChuyen() {
  const [activeSection, setActiveSection] = useState<number | null>(1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap');

        .shipping-page {
          --ink: #0f0e0c;
          --paper: #faf8f4;
          --accent: #c8411a;
          --accent-light: #f2e8e3;
          --gold: #b8962e;
          --rule: #d9d2c5;
          --muted: #7a7268;
          background: var(--paper);
          color: var(--ink);
          font-family: 'Be Vietnam Pro', sans-serif;
          font-weight: 300;
          line-height: 1.75;
          min-height: 100vh;
        }

        .shipping-page * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .shipping-page .page-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }

        /* HERO */
        .shipping-page .hero {
          padding: 5rem 0 3rem;
          position: relative;
        }

        .shipping-page .hero::before {
          content: 'VẬN CHUYỂN';
          position: absolute;
          top: 2rem;
          left: -1rem;
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 12vw, 9rem);
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px var(--rule);
          line-height: 1;
          pointer-events: none;
          z-index: 0;
        }

        .shipping-page .hero-inner {
          position: relative;
          z-index: 2;
        }

        .shipping-page .eyebrow {
          display: flex;
          align-items: center;
          gap: .75rem;
          margin-bottom: 1.25rem;
        }

        .shipping-page .eyebrow-line {
          width: 2.5rem;
          height: 1px;
          background: var(--accent);
        }

        .shipping-page .eyebrow-text {
          font-size: .72rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
        }

        .shipping-page .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.05;
          font-weight: 900;
          margin-bottom: 1.5rem;
          letter-spacing: -.03em;
        }

        .shipping-page .hero-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: .8rem;
          color: var(--muted);
        }

        .shipping-page .hero-meta strong {
          color: var(--ink);
        }

        .shipping-page .meta-dot {
          width: 4px;
          height: 4px;
          background: var(--rule);
          border-radius: 50%;
        }

        /* INTRO */
        .shipping-page .intro-card {
          margin: 2.5rem 0 3.5rem;
          padding: 2rem 2.5rem;
          border-left: 3px solid var(--accent);
          background: var(--accent-light);
          border-radius: 0 4px 4px 0;
        }

        .shipping-page .intro-card p {
          font-size: .97rem;
          line-height: 1.85;
          color: #3a2a20;
        }

        .shipping-page .intro-card strong {
          color: var(--accent);
        }

        /* TOC */
        .shipping-page .toc {
          margin-bottom: 3rem;
          padding: 1.75rem 2rem;
          border: 1px solid var(--rule);
          background: white;
          border-radius: 6px;
        }

        .shipping-page .toc-title {
          font-size: .72rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .shipping-page .toc-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: .45rem;
        }

        .shipping-page .toc-list li {
          display: flex;
          align-items: center;
          gap: .75rem;
        }

        .shipping-page .toc-num {
          min-width: 1.5rem;
          color: var(--accent);
          font-family: 'Playfair Display', serif;
          font-weight: 700;
        }

        .shipping-page .toc-link {
          text-decoration: none;
          color: var(--muted);
          transition: color .2s;
          font-size: .9rem;
        }

        .shipping-page .toc-link:hover {
          color: var(--ink);
        }

        /* SECTIONS */
        .shipping-page .section-card {
          margin-bottom: 1.25rem;
          border: 1px solid var(--rule);
          border-radius: 6px;
          overflow: hidden;
          background: white;
          transition: .25s;
        }

        .shipping-page .section-card:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,.06);
        }

        .shipping-page .section-card.active {
          border-color: var(--accent);
          box-shadow: 0 4px 24px rgba(200,65,26,.08);
        }

        .shipping-page .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.4rem 1.75rem;
          cursor: pointer;
        }

        .shipping-page .section-icon {
          color: var(--accent);
          font-size: 1.3rem;
          width: 2rem;
          text-align: center;
        }

        .shipping-page .section-num {
          font-family: 'Playfair Display', serif;
          font-size: .72rem;
          color: var(--muted);
          font-weight: 700;
          letter-spacing: .1em;
        }

        .shipping-page .section-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--ink);
        }

        .shipping-page .section-toggle {
          margin-left: auto;
          color: var(--muted);
          transition: transform .3s;
        }

        .shipping-page .section-card.active .section-toggle {
          transform: rotate(180deg);
        }

        .shipping-page .section-body {
          display: none;
          padding: 0 1.75rem 1.75rem;
        }

        .shipping-page .section-card.active .section-body {
          display: block;
        }

        .shipping-page .separator {
          height: 1px;
          background: var(--rule);
          margin-bottom: 1.5rem;
        }

        .shipping-page .subsection {
          margin-bottom: 1.5rem;
        }

        .shipping-page .sub-title {
          font-size: .8rem;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: .5rem;
          display: flex;
          align-items: center;
          gap: .5rem;
        }

        .shipping-page .sub-title::before {
          content: '';
          width: 1rem;
          height: 1px;
          background: var(--gold);
        }

        .shipping-page .sub-content {
          font-size: .94rem;
          line-height: 1.8;
          color: #3d3830;
          padding-left: 1.5rem;
        }

        .shipping-page .sub-content.highlight {
          padding: .85rem 1rem .85rem 1.5rem;
          background: #fdf6f3;
          border-left: 2px solid var(--accent);
          border-radius: 0 3px 3px 0;
        }

        /* CONTACT */
        .shipping-page .contact-block {
          margin-top: 4rem;
          padding: 2.5rem;
          background: #8B5E3C;
          color: #fff;
          border-radius: 8px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .shipping-page .contact-block h3 {
          grid-column: 1 / -1;
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          margin-bottom: .5rem;
        }

        .shipping-page .contact-block h3 span {
          color: #FFD7A8;
        }

        .shipping-page .contact-item {
          display: flex;
          flex-direction: column;
          gap: .25rem;
        }

        .shipping-page .contact-label {
          font-size: .72rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: rgba(255,255,255,.7);
          font-weight: 600;
        }

        .shipping-page .contact-value {
          font-size: .95rem;
          color: #fff;
        }

        .shipping-page .contact-value a {
          color: #FFD7A8;
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .shipping-page .page-wrap {
            padding: 0 1.25rem 4rem;
          }

          .shipping-page .hero::before {
            display: none;
          }

          .shipping-page .contact-block {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="shipping-page">
        <Navbar />
        <div className="page-wrap">
          {/* HERO */}
          <section className="hero">
            <div className="hero-inner">
              <div className="eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">
                  Giao hàng & vận chuyển
                </span>
              </div>

              <h1 className="hero-title">
                Chính Sách<br />
                Vận Chuyển
              </h1>

              <div className="hero-meta">
                <span>
                  Cập nhật lần cuối: <strong>14/05/2026</strong>
                </span>

                <span className="meta-dot" />

                <span>
                  Thời gian đọc: <strong>~3 phút</strong>
                </span>
              </div>
            </div>
          </section>

          {/* INTRO */}
          <div className="intro-card">
            <p>
              <strong>Intem Cần Thơ</strong> cam kết hỗ trợ giao hàng
              nhanh chóng, an toàn và minh bạch nhằm đảm bảo sản phẩm
              được bàn giao đúng thời gian và đúng chất lượng đến khách hàng.
            </p>
          </div>

          {/* TOC */}
          <nav className="toc">
            <p className="toc-title">Mục Lục</p>

            <ul className="toc-list">
              {sections.map((s) => (
                <li key={s.id}>
                  <span className="toc-num">{s.id}.</span>

                  <a
                    href={`#section-${s.id}`}
                    className="toc-link"
                    onClick={(e) => {
                      e.preventDefault();

                      setActiveSection(
                        activeSection === s.id ? null : s.id
                      );

                      document
                        .getElementById(`section-${s.id}`)
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* SECTIONS */}
          {sections.map((sec) => (
            <article
              key={sec.id}
              id={`section-${sec.id}`}
              className={`section-card${
                activeSection === sec.id ? " active" : ""
              }`}
            >
              <div
                className="section-header"
                onClick={() =>
                  setActiveSection(
                    activeSection === sec.id ? null : sec.id
                  )
                }
              >
                <span className="section-icon">{sec.icon}</span>

                <div style={{ flex: 1 }}>
                  <div className="section-num">
                    Điều {sec.id}
                  </div>

                  <div className="section-name">
                    {sec.title}
                  </div>
                </div>

                <span className="section-toggle">
                  ▼
                </span>
              </div>

              <div className="section-body">
                <div className="separator" />

                {sec.subsections.map((sub, i) => (
                  <div className="subsection" key={i}>
                    <p className="sub-title">
                      {sub.subtitle}
                    </p>

                    <p
                      className={`sub-content${
                        sub.highlight ? " highlight" : ""
                      }`}
                    >
                      {sub.content}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}

          {/* CONTACT */}
          <div className="contact-block">
            <h3>
              Liên Hệ <span>Intem Cần Thơ</span>
            </h3>

            <div className="contact-item">
              <span className="contact-label">
                Địa Chỉ
              </span>

              <span className="contact-value">
                Lầu 1, số 122 Nguyễn Hiền, P. Tân An, TP. Cần Thơ
              </span>
            </div>

            <div className="contact-item">
              <span className="contact-label">
                Điện Thoại
              </span>

              <span className="contact-value">
                <a href="tel:0985463403">
                  0985 463 403
                </a>
              </span>
            </div>

            <div className="contact-item">
              <span className="contact-label">
                Email
              </span>

              <span className="contact-value">
                <a href="mailto:thanhngan989@gmail.com">
                  thanhngan989@gmail.com
                </a>
              </span>
            </div>

            <div className="contact-item">
              <span className="contact-label">
                Website
              </span>

              <span className="contact-value">
                <a href="https://intemcantho.vn">
                  intemcantho.vn
                </a>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
