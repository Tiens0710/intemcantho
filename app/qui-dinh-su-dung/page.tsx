"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "Chấp Nhận Và Phạm Vi Dịch Vụ",
    icon: "◈",
    subsections: [
      {
        subtitle: "1.1. Chấp nhận điều khoản",
        content:
          "Khi truy cập và sử dụng website Intem Cần Thơ, khách hàng đồng ý tuân thủ toàn bộ điều khoản và điều kiện được quy định tại trang này.",
      },
      {
        subtitle: "1.2. Phạm vi dịch vụ",
        content:
          "Chúng tôi cung cấp các dịch vụ in ấn kỹ thuật số, in offset, thiết kế ấn phẩm và gia công thành phẩm theo yêu cầu của khách hàng.",
      },
    ],
  },

  {
    id: 2,
    title: "Quy Trình Đặt Hàng Và Thanh Toán",
    icon: "◉",
    subsections: [
      {
        subtitle: "2.1. Xác nhận đơn hàng",
        content:
          "Đơn hàng chỉ được xem là hợp lệ khi khách hàng xác nhận đầy đủ thông tin sản phẩm, file thiết kế và thanh toán theo thỏa thuận.",
      },
      {
        subtitle: "2.2. Thanh toán",
        content:
          "Chúng tôi chấp nhận thanh toán bằng chuyển khoản ngân hàng, tiền mặt hoặc các phương thức thanh toán điện tử được hỗ trợ.",
      },
      {
        subtitle: "2.3. Chính sách giá",
        content:
          "Giá sản phẩm có thể thay đổi tùy theo số lượng, chất liệu, kích thước và yêu cầu gia công của từng đơn hàng.",
      },
    ],
  },

  {
    id: 3,
    title: "Quyền Sở Hữu Nội Dung",
    icon: "◎",
    subsections: [
      {
        subtitle: "3.1. Nội dung khách hàng cung cấp",
        content:
          "Khách hàng chịu hoàn toàn trách nhiệm đối với hình ảnh, logo, nội dung và dữ liệu cung cấp cho việc in ấn, đảm bảo không vi phạm pháp luật hoặc bản quyền.",
        highlight: true,
      },
      {
        subtitle: "3.2. Quyền sở hữu thiết kế",
        content:
          "Các thiết kế do Intem Cần Thơ thực hiện vẫn thuộc quyền sở hữu của chúng tôi nếu không có thỏa thuận chuyển giao bằng văn bản.",
        highlight: true,
      },
      {
        subtitle: "3.3. Sử dụng hình ảnh sản phẩm",
        content:
          "Chúng tôi có quyền sử dụng hình ảnh sản phẩm đã hoàn thiện cho mục đích portfolio hoặc truyền thông, trừ khi khách hàng yêu cầu bảo mật.",
      },
    ],
  },

  {
    id: 4,
    title: "Đổi Trả Và Khiếu Nại",
    icon: "◇",
    subsections: [
      {
        subtitle: "4.1. Chính sách đổi trả",
        content:
          "Chúng tôi hỗ trợ in lại hoặc đổi trả đối với các sản phẩm bị lỗi kỹ thuật do quá trình sản xuất.",
      },
      {
        subtitle: "4.2. Giới hạn trách nhiệm",
        content:
          "Intem Cần Thơ không chịu trách nhiệm đối với các lỗi phát sinh từ file thiết kế đã được khách hàng xác nhận.",
      },
      {
        subtitle: "4.3. Thời gian khiếu nại",
        content:
          "Mọi khiếu nại cần được gửi trong vòng 3 ngày kể từ thời điểm khách hàng nhận sản phẩm.",
      },
    ],
  },

  {
    id: 5,
    title: "Điều Khoản Chung Và Liên Hệ",
    icon: "◻",
    subsections: [
      {
        subtitle: "5.1. Thay đổi điều khoản",
        content:
          "Intem Cần Thơ có quyền thay đổi hoặc cập nhật nội dung điều khoản sử dụng mà không cần thông báo trước.",
      },
      {
        subtitle: "5.2. Liên hệ hỗ trợ",
        content:
          "Nếu có bất kỳ câu hỏi hoặc khiếu nại nào liên quan đến dịch vụ, khách hàng vui lòng liên hệ trực tiếp với chúng tôi.",
      },
    ],
  },
];

export default function DieuKhoanSuDung() {
  const [activeSection, setActiveSection] = useState<number | null>(1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --ink: #0f0e0c;
          --paper: #faf8f4;
          --accent: #c8411a;
          --accent-light: #f2e8e3;
          --gold: #b8962e;
          --rule: #d9d2c5;
          --muted: #7a7268;
        }

        .terms-page {
          background: var(--paper);
          color: var(--ink);
          font-family: 'Be Vietnam Pro', sans-serif;
          line-height: 1.75;
          font-weight: 300;
          min-height: 100vh;
        }

        .terms-page .page-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }

        /* HERO */
        .terms-page .hero {
          padding: 5rem 0 3rem;
          position: relative;
        }

        .terms-page .hero::before {
          content: 'ĐIỀU KHOẢN';
          position: absolute;
          top: 2rem;
          left: -1rem;
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 12vw, 9rem);
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px var(--rule);
          pointer-events: none;
          line-height: 1;
        }

        .terms-page .hero-inner {
          position: relative;
          z-index: 2;
        }

        .terms-page .eyebrow {
          display: flex;
          align-items: center;
          gap: .75rem;
          margin-bottom: 1.25rem;
        }

        .terms-page .eyebrow-line {
          width: 2.5rem;
          height: 1px;
          background: var(--accent);
        }

        .terms-page .eyebrow-text {
          font-size: .72rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
        }

        .terms-page .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.05;
          font-weight: 900;
          margin-bottom: 1.5rem;
          letter-spacing: -.03em;
        }

        .terms-page .hero-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: .8rem;
          color: var(--muted);
        }

        .terms-page .hero-meta strong {
          color: var(--ink);
        }

        .terms-page .meta-dot {
          width: 4px;
          height: 4px;
          background: var(--rule);
          border-radius: 50%;
        }

        /* INTRO */
        .terms-page .intro-card {
          margin: 2.5rem 0 3.5rem;
          padding: 2rem 2.5rem;
          border-left: 3px solid var(--accent);
          background: var(--accent-light);
          border-radius: 0 4px 4px 0;
        }

        .terms-page .intro-card p {
          font-size: .97rem;
          line-height: 1.85;
          color: #3a2a20;
        }

        .terms-page .intro-card strong {
          color: var(--accent);
        }

        /* TOC */
        .terms-page .toc {
          margin-bottom: 3rem;
          padding: 1.75rem 2rem;
          border: 1px solid var(--rule);
          background: white;
          border-radius: 6px;
        }

        .terms-page .toc-title {
          font-size: .72rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .terms-page .toc-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: .45rem;
        }

        .terms-page .toc-list li {
          display: flex;
          align-items: center;
          gap: .75rem;
        }

        .terms-page .toc-num {
          min-width: 1.5rem;
          color: var(--accent);
          font-family: 'Playfair Display', serif;
          font-weight: 700;
        }

        .terms-page .toc-link {
          text-decoration: none;
          color: var(--muted);
          transition: color .2s;
          font-size: .9rem;
        }

        .terms-page .toc-link:hover {
          color: var(--ink);
        }

        /* SECTIONS */
        .terms-page .section-card {
          margin-bottom: 1.25rem;
          border: 1px solid var(--rule);
          border-radius: 6px;
          overflow: hidden;
          background: white;
          transition: .25s;
        }

        .terms-page .section-card:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,.06);
        }

        .terms-page .section-card.active {
          border-color: var(--accent);
          box-shadow: 0 4px 24px rgba(200,65,26,.08);
        }

        .terms-page .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.4rem 1.75rem;
          cursor: pointer;
        }

        .terms-page .section-icon {
          color: var(--accent);
          font-size: 1.3rem;
          width: 2rem;
          text-align: center;
        }

        .terms-page .section-num {
          font-family: 'Playfair Display', serif;
          font-size: .72rem;
          color: var(--muted);
          font-weight: 700;
          letter-spacing: .1em;
        }

        .terms-page .section-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--ink);
        }

        .terms-page .section-toggle {
          margin-left: auto;
          color: var(--muted);
          transition: transform .3s;
        }

        .terms-page .section-card.active .section-toggle {
          transform: rotate(180deg);
        }

        .terms-page .section-body {
          display: none;
          padding: 0 1.75rem 1.75rem;
        }

        .terms-page .section-card.active .section-body {
          display: block;
        }

        .terms-page .separator {
          height: 1px;
          background: var(--rule);
          margin-bottom: 1.5rem;
        }

        .terms-page .subsection {
          margin-bottom: 1.5rem;
        }

        .terms-page .sub-title {
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

        .terms-page .sub-title::before {
          content: '';
          width: 1rem;
          height: 1px;
          background: var(--gold);
        }

        .terms-page .sub-content {
          font-size: .94rem;
          line-height: 1.8;
          color: #3d3830;
          padding-left: 1.5rem;
        }

        .terms-page .sub-content.highlight {
          padding: .85rem 1rem .85rem 1.5rem;
          background: #fdf6f3;
          border-left: 2px solid var(--accent);
          border-radius: 0 3px 3px 0;
        }

        /* CONTACT */
        .terms-page .contact-block {
          margin-top: 4rem;
          padding: 2.5rem;
          background: #8B5E3C;
          color: #fff;
          border-radius: 8px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .terms-page .contact-block h3 {
          grid-column: 1 / -1;
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          margin-bottom: .5rem;
        }

        .terms-page .contact-block h3 span {
          color: #FFD7A8;
        }

        .terms-page .contact-item {
          display: flex;
          flex-direction: column;
          gap: .25rem;
        }

        .terms-page .contact-label {
          font-size: .72rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: rgba(255,255,255,.7);
          font-weight: 600;
        }

        .terms-page .contact-value {
          font-size: .95rem;
          color: #fff;
        }

        .terms-page .contact-value a {
          color: #FFD7A8;
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .terms-page .page-wrap {
            padding: 0 1.25rem 4rem;
          }

          .terms-page .hero::before {
            display: none;
          }

          .terms-page .contact-block {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="terms-page">
        <Navbar />
        <div className="page-wrap">
          {/* HERO */}
          <section className="hero">
            <div className="hero-inner">
              <div className="eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">
                  Pháp lý & dịch vụ
                </span>
              </div>

              <h1 className="hero-title">
                Điều Khoản<br />
                Sử Dụng
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
              Khi sử dụng dịch vụ tại <strong>Intem Cần Thơ</strong>,
              khách hàng đồng ý tuân thủ các điều khoản và điều kiện
              được quy định dưới đây nhằm đảm bảo quyền lợi cho cả hai bên.
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
