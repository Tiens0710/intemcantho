"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "Quy Định Chung",
    icon: "◈",
    subsections: [
      {
        subtitle: "1.1. Xác nhận đơn hàng",
        content:
          "Đơn hàng chỉ được xem là chính thức khi khách hàng đã nhận được xác nhận từ Intem Cần Thơ và hoàn tất việc đặt cọc hoặc thanh toán theo quy định.",
      },
      {
        subtitle: "1.2. Phạm vi dịch vụ",
        content:
          "Chúng tôi chỉ cung cấp dịch vụ dựa trên các thông số kỹ thuật, chất liệu và thiết kế cuối cùng đã được hai bên thống nhất.",
      },
      {
        subtitle: "1.3. Thông tin khách hàng",
        content:
          "Khách hàng cam kết cung cấp đầy đủ và chính xác thông tin liên hệ để đảm bảo quá trình xử lý đơn hàng và giao nhận diễn ra thuận lợi.",
      },
    ],
  },

  {
    id: 2,
    title: "Duyệt Mẫu Và Chất Lượng In",
    icon: "◉",
    subsections: [
      {
        subtitle: "2.1. Kiểm tra mẫu thiết kế",
        content:
          "Khách hàng chịu trách nhiệm kiểm tra kỹ nội dung, chính tả, bố cục và màu sắc trước khi xác nhận duyệt file in.",
        highlight: true,
      },
      {
        subtitle: "2.2. Sai lệch màu sắc",
        content:
          "Màu sắc thực tế có thể chênh lệch nhẹ so với hiển thị trên màn hình do sự khác biệt thiết bị và công nghệ in.",
        highlight: true,
      },
      {
        subtitle: "2.3. Miễn trừ trách nhiệm",
        content:
          "Chúng tôi không chịu trách nhiệm đối với các lỗi phát sinh sau khi khách hàng đã xác nhận duyệt mẫu cuối cùng.",
      },
    ],
  },

  {
    id: 3,
    title: "Thanh Toán Và Báo Giá",
    icon: "◎",
    subsections: [
      {
        subtitle: "3.1. Chính sách đặt cọc",
        content:
          "Một số đơn hàng có thể yêu cầu khách hàng đặt cọc trước khi tiến hành thiết kế hoặc sản xuất.",
      },
      {
        subtitle: "3.2. Thanh toán hoàn tất",
        content:
          "Khách hàng cần thanh toán đầy đủ giá trị đơn hàng trước khi nhận sản phẩm, trừ khi có thỏa thuận riêng.",
      },
      {
        subtitle: "3.3. Hiệu lực báo giá",
        content:
          "Báo giá chỉ có hiệu lực trong khoảng thời gian được thông báo. Mọi thay đổi về yêu cầu có thể làm thay đổi chi phí cuối cùng.",
      },
    ],
  },

  {
    id: 4,
    title: "Đổi Trả Và Khiếu Nại",
    icon: "◇",
    subsections: [
      {
        subtitle: "4.1. Điều kiện khiếu nại",
        content:
          "Khiếu nại chỉ được hỗ trợ trong vòng 03 ngày kể từ thời điểm khách hàng nhận sản phẩm.",
      },
      {
        subtitle: "4.2. Lỗi sản xuất",
        content:
          "Chúng tôi hỗ trợ in lại hoặc hoàn tiền đối với các sản phẩm có lỗi nghiêm trọng do quá trình sản xuất.",
      },
      {
        subtitle: "4.3. Trường hợp không hỗ trợ",
        content:
          "Các lỗi phát sinh từ file thiết kế khách hàng đã duyệt hoặc lỗi do đơn vị vận chuyển bên thứ ba sẽ không thuộc phạm vi hỗ trợ đổi trả.",
      },
    ],
  },

  {
    id: 5,
    title: "Trách Nhiệm Và Liên Hệ",
    icon: "◻",
    subsections: [
      {
        subtitle: "5.1. Giới hạn trách nhiệm",
        content:
          "Mức trách nhiệm tối đa của Intem Cần Thơ sẽ không vượt quá tổng giá trị đơn hàng mà khách hàng đã thanh toán.",
      },
      {
        subtitle: "5.2. Thông tin liên hệ",
        content:
          "Mọi thắc mắc liên quan đến giao dịch, thanh toán hoặc dịch vụ vui lòng liên hệ trực tiếp với chúng tôi để được hỗ trợ.",
      },
    ],
  },
];

export default function DoiTraHoanTien() {
  const [activeSection, setActiveSection] = useState<number | null>(1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap');

        .return-page {
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

        .return-page * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .return-page .page-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }

        /* HERO */
        .return-page .hero {
          padding: 5rem 0 3rem;
          position: relative;
        }

        .return-page .hero::before {
          content: 'ĐỔI TRẢ';
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
          z-index: 0;
        }

        .return-page .hero-inner {
          position: relative;
          z-index: 2;
        }

        .return-page .eyebrow {
          display: flex;
          align-items: center;
          gap: .75rem;
          margin-bottom: 1.25rem;
        }

        .return-page .eyebrow-line {
          width: 2.5rem;
          height: 1px;
          background: var(--accent);
        }

        .return-page .eyebrow-text {
          font-size: .72rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
        }

        .return-page .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.05;
          font-weight: 900;
          margin-bottom: 1.5rem;
          letter-spacing: -.03em;
        }

        .return-page .hero-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: .8rem;
          color: var(--muted);
        }

        .return-page .hero-meta strong {
          color: var(--ink);
        }

        .return-page .meta-dot {
          width: 4px;
          height: 4px;
          background: var(--rule);
          border-radius: 50%;
        }

        /* INTRO */
        .return-page .intro-card {
          margin: 2.5rem 0 3.5rem;
          padding: 2rem 2.5rem;
          border-left: 3px solid var(--accent);
          background: var(--accent-light);
          border-radius: 0 4px 4px 0;
        }

        .return-page .intro-card p {
          font-size: .97rem;
          line-height: 1.85;
          color: #3a2a20;
        }

        .return-page .intro-card strong {
          color: var(--accent);
        }

        /* TOC */
        .return-page .toc {
          margin-bottom: 3rem;
          padding: 1.75rem 2rem;
          border: 1px solid var(--rule);
          background: white;
          border-radius: 6px;
        }

        .return-page .toc-title {
          font-size: .72rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .return-page .toc-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: .45rem;
        }

        .return-page .toc-list li {
          display: flex;
          align-items: center;
          gap: .75rem;
        }

        .return-page .toc-num {
          min-width: 1.5rem;
          color: var(--accent);
          font-family: 'Playfair Display', serif;
          font-weight: 700;
        }

        .return-page .toc-link {
          text-decoration: none;
          color: var(--muted);
          transition: color .2s;
          font-size: .9rem;
        }

        .return-page .toc-link:hover {
          color: var(--ink);
        }

        /* SECTION */
        .return-page .section-card {
          margin-bottom: 1.25rem;
          border: 1px solid var(--rule);
          border-radius: 6px;
          overflow: hidden;
          background: white;
          transition: .25s;
        }

        .return-page .section-card:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,.06);
        }

        .return-page .section-card.active {
          border-color: var(--accent);
          box-shadow: 0 4px 24px rgba(200,65,26,.08);
        }

        .return-page .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.4rem 1.75rem;
          cursor: pointer;
        }

        .return-page .section-icon {
          color: var(--accent);
          font-size: 1.3rem;
          width: 2rem;
          text-align: center;
        }

        .return-page .section-num {
          font-family: 'Playfair Display', serif;
          font-size: .72rem;
          color: var(--muted);
          font-weight: 700;
          letter-spacing: .1em;
        }

        .return-page .section-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--ink);
        }

        .return-page .section-toggle {
          margin-left: auto;
          color: var(--muted);
          transition: transform .3s;
        }

        .return-page .section-card.active .section-toggle {
          transform: rotate(180deg);
        }

        .return-page .section-body {
          display: none;
          padding: 0 1.75rem 1.75rem;
        }

        .return-page .section-card.active .section-body {
          display: block;
        }

        .return-page .separator {
          height: 1px;
          background: var(--rule);
          margin-bottom: 1.5rem;
        }

        .return-page .subsection {
          margin-bottom: 1.5rem;
        }

        .return-page .sub-title {
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

        .return-page .sub-title::before {
          content: '';
          width: 1rem;
          height: 1px;
          background: var(--gold);
        }

        .return-page .sub-content {
          font-size: .94rem;
          line-height: 1.8;
          color: #3d3830;
          padding-left: 1.5rem;
        }

        .return-page .sub-content.highlight {
          padding: .85rem 1rem .85rem 1.5rem;
          background: #fdf6f3;
          border-left: 2px solid var(--accent);
          border-radius: 0 3px 3px 0;
        }

        /* CONTACT */
        .return-page .contact-block {
          margin-top: 4rem;
          padding: 2.5rem;
          background: var(--ink);
          color: var(--paper);
          border-radius: 8px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .return-page .contact-block h3 {
          grid-column: 1 / -1;
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          margin-bottom: .5rem;
        }

        .return-page .contact-block h3 span {
          color: var(--accent);
        }

        .return-page .contact-item {
          display: flex;
          flex-direction: column;
          gap: .25rem;
        }

        .return-page .contact-label {
          font-size: .72rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: rgba(250,248,244,.45);
          font-weight: 600;
        }

        .return-page .contact-value {
          font-size: .95rem;
          color: var(--paper);
        }

        .return-page .contact-value a {
          color: var(--accent);
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .return-page .page-wrap {
            padding: 0 1.25rem 4rem;
          }

          .return-page .hero::before {
            display: none;
          }

          .return-page .contact-block {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="return-page">
        <Navbar />
        <div className="page-wrap">
          {/* HERO */}
          <section className="hero">
            <div className="hero-inner">
              <div className="eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">
                  Giao dịch & thanh toán
                </span>
              </div>

              <h1 className="hero-title">
                Đổi Trả<br />
                Và Hoàn Tiền
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
              Các điều khoản dưới đây quy định quyền và nghĩa vụ giữa{" "}
              <strong>Intem Cần Thơ</strong> và khách hàng trong
              quá trình đặt hàng, thanh toán và sử dụng dịch vụ in ấn.
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
