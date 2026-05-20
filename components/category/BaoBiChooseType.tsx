"use client";

import Link from "next/link";

const types = [
  {
    title: "HỘP GIẤY",
    image: "\\baobi\\sanpham1.png",
    label: "Phù hợp cho:",
    items: "Mỹ phẩm, dược phẩm, quà tặng, thực phẩm, F&B cao cấp...",
    tagline: "Tạo ấn tượng · Bảo vệ sản phẩm",
  },
  {
    title: "TÚI GIẤY",
    image: "\\baobi\\sanpham2.png",
    label: "Phù hợp cho:",
    items: "Shop thời trang, mỹ phẩm, showroom, sự kiện, quà tặng...",
    tagline: "Thẩm mỹ · Tiện dụng · Nâng tầm thương hiệu",
  },
  {
    title: "NHÃN HỘP / TEM",
    image: "\\baobi\\sanpham3.png",
    label: "Phù hợp cho:",
    items: "Sản phẩm có sẵn bao bì, chai lọ, hộp nhựa, túi zip, bao bì đóng gói...",
    tagline: "Nhận diện thương hiệu · Thông tin rõ ràng",
  },
];

function TypeCard({ item }: { item: (typeof types)[number] }) {
  return (
    <div className="baobi-type-card">
      <div className="baobi-card-inner">
        <div className="baobi-card-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="baobi-card-text">
          <div className="baobi-card-title">{item.title}</div>
          <div className="baobi-card-label">{item.label}</div>
          <div className="baobi-card-items">{item.items}</div>
        </div>
      </div>
      <div className="baobi-card-tagline">{item.tagline}</div>
    </div>
  );
}

function CtaCard() {
  return (
    <div className="baobi-type-card baobi-cta-card">
      <div className="baobi-cta-inner">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E6792A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
        <div className="baobi-cta-title">Cần tư vấn?</div>
        <div className="baobi-cta-desc">Đội ngũ Intem luôn sẵn sàng hỗ trợ bạn lựa chọn giải pháp bao bì tối ưu nhất!</div>
        <Link href="/lien-he" className="baobi-cta-btn">
          Liên hệ ngay
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function BaoBiChooseType() {
  return (
    <section style={{ padding: "4rem 0", background: "#FAFAFA" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1rem" }}>
        <div className="baobi-section-title">
          <span className="baobi-title-line" />
          <span className="baobi-title-text">NÊN CHỌN LOẠI BAO BÌ NÀO?</span>
          <span className="baobi-title-line" />
        </div>
        <div className="baobi-cards-grid">
          {types.map((t) => (
            <TypeCard key={t.title} item={t} />
          ))}
          <CtaCard />
        </div>
      </div>
      <style jsx global>{`
        .baobi-section-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 3rem;
        }
        .baobi-title-line {
          height: 1px;
          width: 64px;
          background: linear-gradient(to right, transparent, #c8a882);
        }
        .baobi-title-text {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 700;
          color: #e6792a;
          font-family: "Cormorant Garamond", "Playfair Display", serif;
          white-space: nowrap;
        }
        .baobi-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1023px) {
          .baobi-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 639px) {
          .baobi-cards-grid { grid-template-columns: 1fr; }
        }
        .baobi-type-card {
          background: #fff;
          border-radius: 16px;
          border: 1.5px solid rgba(230, 121, 42, 0.22);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
          box-shadow: 0 2px 8px rgba(154, 91, 36, 0.06);
          height: 220px;
        }
        .baobi-type-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(154, 91, 36, 0.12);
        }
        .baobi-card-inner {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          flex: 1;
        }
        .baobi-card-image {
          flex-shrink: 0;
          width: 42%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 10px;
          background: #ffffff;
        }
        .baobi-card-image img {
          max-width: 100%;
          max-height: 130px;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(150, 89, 38, 0.12));
        }
        .baobi-card-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 14px 14px 14px 0;
          min-width: 0;
        }
        .baobi-card-title {
          font-size: 17px;
          font-weight: 800;
          color: #e6792a;
          font-family: "Nunito", sans-serif;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }
        .baobi-card-label {
          font-size: 13px;
          font-weight: 600;
          color: #6f5b4e;
          font-family: "Nunito", sans-serif;
          margin-bottom: 4px;
        }
        .baobi-card-items {
          font-size: 13px;
          color: #6f5b4e;
          font-family: "Nunito", sans-serif;
          line-height: 1.65;
        }
        .baobi-card-tagline {
          margin: 0 12px 12px 12px;
          padding: 8px 16px;
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          color: #a08060;
          font-family: "Nunito", sans-serif;
          letter-spacing: 0.02em;
          background: linear-gradient(90deg, #FFF0E5, #FFF8F2, #FFF0E5);
          border: 1px solid rgba(230, 121, 42, 0.15);
          border-radius: 999px;
        }
        .baobi-cta-card {
          background: linear-gradient(180deg, #ffffff, #fff9f2);
          border: 1.5px solid rgba(230, 121, 42, 0.25);
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 220px;
        }
        .baobi-cta-inner {
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
        }
        .baobi-cta-icon {
          margin-bottom: 16px;
        }
        .baobi-cta-title {
          font-size: 17px;
          font-weight: 800;
          color: #e6792a;
          font-family: "Nunito", sans-serif;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }
        .baobi-cta-desc {
          font-size: 13px;
          color: #6f5b4e;
          font-family: "Nunito", sans-serif;
          line-height: 1.65;
          margin-bottom: 20px;
        }
        .baobi-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 13px;
          font-family: "Nunito", sans-serif;
          background: linear-gradient(135deg, #e6792a, #d26d23);
          color: #fff;
          box-shadow: 0 6px 20px rgba(230, 121, 42, 0.35);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .baobi-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(230, 121, 42, 0.45);
        }
      `}</style>
    </section>
  );
}