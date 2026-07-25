import React from "react";
import "../../styles/solutions/ProductSection.css";

/* ── Clean SVG icons — one per benefit slot ── */
const BenefitSVGs = [
  // 0 — Shield / Security
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>,
  // 1 — Spam / Block / Circle X
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
  </svg>,
  // 2 — Eye / Awareness
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>,
  // 3 — Sliders / Flexible options
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
    <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/>
    <line x1="17" y1="16" x2="23" y2="16"/>
  </svg>,
  // 4 — Clock / Speed
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>,
  // 5 — Users / People
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
  // 6 — Chart / Revenue / Analytics
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6"  y1="20" x2="6"  y2="14"/>
    <line x1="2"  y1="20" x2="22" y2="20"/>
  </svg>,
  // 7 — Zap / Efficiency / Speed
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>,
];

const ProductSection = ({
  id,
  bgColor = "#fff",
  accentColor = "#6c3ef4",
  benefitsBg,
  imgLeft,
  imgRight,
  logoImg,
  logoAlt,
  headline,
  subheadline,
  description,
  features = [],
  rightTitle,
  rightContent,
  benefits = [],
  benefitBorder = "#6c3ef4",
}) => {
  const stripBg = benefitsBg || accentColor;

  return (
    <section className="prod-section" id={id} style={{ background: bgColor }}>

      {/* ── Image row ── */}
      <div className="prod-section__imgs-row">
        <div className="prod-section__img-card reveal-left">
          <img src={imgLeft} alt={logoAlt + " promo 1"} />
        </div>
        <div className="prod-section__logo-center reveal">
          <img src={logoImg} alt={logoAlt + " logo"} className="prod-section__logo" />
        </div>
        <div className="prod-section__img-card reveal-right">
          <img src={imgRight} alt={logoAlt + " promo 2"} />
        </div>
      </div>

      {/* ── Content row ── */}
      <div className="prod-section__content-row">
        <div className="prod-section__left reveal-left">
          <h2 className="prod-section__headline" style={{ color: accentColor }}>
            {headline}
          </h2>
          {subheadline && <p className="prod-section__subheadline">{subheadline}</p>}
          <p className="prod-section__desc">{description}</p>
          {features.length > 0 && (
            <>
              <h4 className="prod-section__features-title">Features</h4>
              <ul className="prod-section__features">
                {features.map((f, i) => (
                  <li key={i}><span className="prod-section__check">✓</span> {f}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="prod-section__right reveal-right">
          <h3 className="prod-section__right-title" style={{ color: accentColor }}>
            {rightTitle}
          </h3>
          <div className="prod-section__right-body">{rightContent}</div>
          <a href="#contact" className="prod-section__demo-btn">Request Demo</a>
        </div>
      </div>

      {/* ── Benefits ── */}
      <div className="prod-section__benefits-block" style={{ background: stripBg }}>
        <div className="prod-section__benefits-inner">
          <h3 className="prod-section__benefits-title">Benefits</h3>
          <div className="prod-section__benefits-grid stagger">
            {benefits.map((b, i) => (
              <div key={i} className="prod-section__benefit-card reveal-scale">
                <div className="prod-section__benefit-icon-wrap">
                  <span className="prod-section__benefit-icon">
                    {BenefitSVGs[i] || BenefitSVGs[0]}
                  </span>
                </div>
                <span className="prod-section__benefit-num">0{i + 1}</span>
                <p className="prod-section__benefit-label">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductSection;
