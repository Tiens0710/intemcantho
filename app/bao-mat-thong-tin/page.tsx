"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "Thu Thập Thông Tin Cá Nhân",
    icon: "◈",
    subsections: [
      {
        subtitle: "1.1. Thông tin được thu thập",
        content:
          "Chúng tôi có thể thu thập các thông tin bao gồm họ tên, số điện thoại, email, địa chỉ giao hàng và thông tin thanh toán khi khách hàng sử dụng dịch vụ tại Intem Cần Thơ.",
      },
      {
        subtitle: "1.2. Phương thức thu thập",
        content:
          "Thông tin được thu thập thông qua biểu mẫu đặt hàng, liên hệ tư vấn, đăng ký nhận tin hoặc các tương tác trực tiếp trên website.",
      },
    ],
  },
  {
    id: 2,
    title: "Mục Đích Sử Dụng Thông Tin",
    icon: "◉",
    subsections: [
      {
        subtitle: "2.1. Xử lý đơn hàng",
        content:
          "Thông tin khách hàng được sử dụng để xác nhận đơn hàng, sản xuất, giao hàng và hỗ trợ sau bán hàng.",
      },
      {
        subtitle: "2.2. Chăm sóc khách hàng",
        content:
          "Chúng tôi có thể sử dụng thông tin để gửi thông báo, cập nhật tiến độ đơn hàng và hỗ trợ kỹ thuật khi cần thiết.",
      },
      {
        subtitle: "2.3. Marketing & ưu đãi",
        content:
          "Nếu khách hàng đồng ý, chúng tôi có thể gửi email hoặc tin nhắn liên quan đến chương trình khuyến mãi, sản phẩm mới và các ưu đãi khác.",
      },
    ],
  },
  {
    id: 3,
    title: "Bảo Mật Và Lưu Trữ Dữ Liệu",
    icon: "◎",
    subsections: [
      {
        subtitle: "3.1. Cam kết bảo mật",
        content:
          "Chúng tôi cam kết không bán, trao đổi hoặc chia sẻ thông tin cá nhân khách hàng cho bên thứ ba nếu không có sự đồng ý của khách hàng.",
        highlight: true,
      },
      {
        subtitle: "3.2. Bảo vệ dữ liệu",
        content:
          "Dữ liệu khách hàng được lưu trữ trên hệ thống có các biện pháp bảo mật phù hợp nhằm ngăn chặn truy cập trái phép hoặc rò rỉ thông tin.",
        highlight: true,
      },
      {
        subtitle: "3.3. Thời gian lưu trữ",
        content:
          "Thông tin cá nhân sẽ được lưu trữ cho đến khi khách hàng yêu cầu xóa hoặc khi không còn cần thiết cho mục đích cung cấp dịch vụ.",
      },
    ],
  },
  {
    id: 4,
    title: "Quyền Lợi Của Khách Hàng",
    icon: "◇",
    subsections: [
      {
        subtitle: "4.1. Kiểm tra & cập nhật thông tin",
        content:
          "Khách hàng có quyền yêu cầu kiểm tra, chỉnh sửa hoặc cập nhật thông tin cá nhân bất kỳ lúc nào.",
      },
      {
        subtitle: "4.2. Yêu cầu xóa dữ liệu",
        content:
          "Khách hàng có thể yêu cầu chúng tôi ngừng sử dụng hoặc xóa thông tin cá nhân khỏi hệ thống theo quy định hiện hành.",
      },
    ],
  },
  {
    id: 5,
    title: "Liên Hệ Và Thay Đổi Chính Sách",
    icon: "◻",
    subsections: [
      {
        subtitle: "5.1. Thay đổi chính sách",
        content:
          "Intem Cần Thơ có quyền cập nhật hoặc điều chỉnh chính sách bảo mật này bất kỳ lúc nào để phù hợp với quy định pháp luật và hoạt động kinh doanh.",
      },
      {
        subtitle: "5.2. Thông tin liên hệ",
        content:
          "Nếu có bất kỳ thắc mắc nào liên quan đến chính sách bảo mật, vui lòng liên hệ trực tiếp với chúng tôi qua thông tin bên dưới.",
      },
    ],
  },
];

export default function ChinhSachBaoMat() {
  const [activeSection, setActiveSection] = useState<number | null>(1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap');

        .privacy-page {
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

        .privacy-page * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .privacy-page .page-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }

        /* HERO */
        .privacy-page .hero {
          padding: 5rem 0 3rem;
          position: relative;
        }

        .privacy-page .hero::before {
          content: 'BẢO MẬT';
          position: absolute;
          top: 2rem;
          left: -1rem;
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 12vw, 9rem);
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px var(--rule);
          line-height: 1;
          z-index: 0;
          pointer-events: none;
        }

        .privacy-page .hero-inner {
          position: relative;
          z-index: 1;
        }

        .privacy-page .eyebrow {
          display: flex;
          align-items: center;
          gap: .75rem;
          margin-bottom: 1.25rem;
        }

        .privacy-page .eyebrow-line {
          width: 2.5rem;
          height: 1px;
          background: var(--accent);
        }

        .privacy-page .eyebrow-text {
          font-size: .72rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
        }

        .privacy-page .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -.03em;
          margin-bottom: 1.5rem;
        }

        .privacy-page .hero-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: .8rem;
          color: var(--muted);
        }

        .privacy-page .hero-meta strong {
          color: var(--ink);
          font-weight: 600;
        }

        .privacy-page .meta-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--rule);
        }

        /* INTRO */
        .privacy-page .intro-card {
          margin: 2.5rem 0 3.5rem;
          padding: 2rem 2.5rem;
          border-left: 3px solid var(--accent);
          background: var(--accent-light);
          border-radius: 0 4px 4px 0;
        }

        .privacy-page .intro-card p {
          font-size: .97rem;
          line-height: 1.9;
          color: #3a2a20;
        }

        .privacy-page .intro-card strong {
          color: var(--accent);
        }

        /* TOC */
        .privacy-page .toc {
          margin-bottom: 3rem;
          padding: 1.75rem 2rem;
          border: 1px solid var(--rule);
          border-radius: 6px;
          background: white;
        }

        .privacy-page .toc-title {
          font-size: .72rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .privacy-page .toc-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: .45rem;
        }

        .privacy-page .toc-list li {
          display: flex;
          align-items: center;
          gap: .75rem;
        }

        .privacy-page .toc-num {
          color: var(--accent);
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          min-width: 1.5rem;
        }

        .privacy-page .toc-link {
          text-decoration: none;
          color: var(--muted);
          transition: color .2s;
          font-size: .9rem;
        }

        .privacy-page .toc-link:hover {
          color: var(--ink);
        }

        /* SECTION */
        .privacy-page .section-card {
          margin-bottom: 1.25rem;
          border: 1px solid var(--rule);
          border-radius: 6px;
          overflow: hidden;
          background: white;
          transition: .25s;
        }

        .privacy-page .section-card:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,.06);
        }

        .privacy-page .section-card.active {
          border-color: var(--accent);
          box-shadow: 0 4px 24px rgba(200,65,26,.08);
        }

        .privacy-page .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.4rem 1.75rem;
          cursor: pointer;
        }

        .privacy-page .section-icon {
          color: var(--accent);
          font-size: 1.3rem;
          width: 2rem;
          text-align: center;
        }

        .privacy-page .section-num {
          font-family: 'Playfair Display', serif;
          font-size: .72rem;
          color: var(--muted);
          font-weight: 700;
          letter-spacing: .1em;
        }

        .privacy-page .section-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--ink);
        }

        .privacy-page .section-toggle {
          margin-left: auto;
          transition: transform .3s;
          color: var(--muted);
        }

        .privacy-page .section-card.active .section-toggle {
          transform: rotate(180deg);
        }

        .privacy-page .section-body {
          display: none;
          padding: 0 1.75rem 1.75rem;
        }

        .privacy-page .section-card.active .section-body {
          display: block;
        }

        .privacy-page .separator {
          height: 1px;
          background: var(--rule);
          margin-bottom: 1.5rem;
        }

        .privacy-page .subsection {
          margin-bottom: 1.5rem;
        }

        .privacy-page .sub-title {
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

        .privacy-page .sub-title::before {
          content: '';
          width: 1rem;
          height: 1px;
          background: var(--gold);
        }

        .privacy-page .sub-content {
          font-size: .94rem;
          line-height: 1.8;
          color: #3d3830;
          padding-left: 1.5rem;
        }

        .privacy-page .sub-content.highlight {
          padding: .85rem 1rem .85rem 1.5rem;
          background: #fdf6f3;
          border-left: 2px solid var(--accent);
          border-radius: 0 3px 3px 0;
        }

        /* CONTACT */
        .privacy-page .contact-block {
          margin-top: 4rem;
          padding: 2.5rem;
          background: #8B5E3C;
          color: #fff;
          border-radius: 8px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .privacy-page .contact-block h3 {
          grid-column: 1 / -1;
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          margin-bottom: .5rem;
        }

        .privacy-page .contact-block h3 span {
          color: #FFD7A8;
        }

        .privacy-page .contact-item {
          display: flex;
          flex-direction: column;
          gap: .25rem;
        }

        .privacy-page .contact-label {
          font-size: .72rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: rgba(255,255,255,.7);
          font-weight: 600;
        }

        .privacy-page .contact-value {
          font-size: .95rem;
          color: #fff;
        }

        .privacy-page .contact-value a {
          color: #FFD7A8;
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .privacy-page .page-wrap {
            padding: 0 1.25rem 4rem;
          }

          .privacy-page .hero::before {
            display: none;
          }

          .privacy-page .contact-block {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="privacy-page">
        <Navbar />
        <div className="page-wrap">
          {/* HERO */}
          <section className="hero">
            <div className="hero-inner">
              <div className="eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">
                  Chính sách & bảo vệ dữ liệu
                </span>
              </div>

              <h1 className="hero-title">
                Chính Sách<br />
                Bảo Mật
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
              Tại <strong>Intem Cần Thơ</strong>, chúng tôi cam kết bảo vệ quyền
              riêng tư và đảm bảo an toàn cho mọi thông tin cá nhân của khách
              hàng trong quá trình sử dụng website và dịch vụ in ấn.
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

                <span className="section-toggle">▼</span>
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
