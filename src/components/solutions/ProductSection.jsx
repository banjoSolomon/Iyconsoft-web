import React from "react";
import "../../styles/solutions/ProductSection.css";

/**
 * Reusable product section used by MyCaller, iTravel, VVPSS, TeTicket
 *
 * Props:
 *  id           – anchor id
 *  bgColor      – section background color
 *  accentColor  – title / feature color
 *  imgLeft      – left promo image
 *  imgRight     – right promo image
 *  logoImg      – product logo
 *  logoAlt      – alt text for logo
 *  headline     – main heading (can contain JSX)
 *  subheadline  – italic tagline under headline (optional)
 *  description  – paragraph text
 *  features     – array of feature strings
 *  rightTitle   – right column title (e.g. "Caller Services" / "Customer Journey Timeline")
 *  rightContent – JSX for right column body
 *  benefits     – array of benefit strings
 *  benefitBorder– border color for benefit cards
 */
const ProductSection = ({
  id,
  bgColor = "#fff",
  accentColor = "#6c3ef4",
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
        {/* Left: description + features */}
        <div className="prod-section__left reveal-left">
          <h2 className="prod-section__headline" style={{ color: accentColor }}>
            {headline}
          </h2>
          {subheadline && (
            <p className="prod-section__subheadline">{subheadline}</p>
          )}
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

        {/* Right: service details */}
        <div className="prod-section__right reveal-right">
          <h3 className="prod-section__right-title" style={{ color: accentColor }}>
            {rightTitle}
          </h3>
          <div className="prod-section__right-body">
            {rightContent}
          </div>
          <a href="#contact" className="btn prod-section__demo-btn">Request Demo</a>
        </div>
      </div>

      {/* ── Benefits ── */}
      <div className="prod-section__benefits-block">
        <h3 className="prod-section__benefits-title" style={{ color: accentColor }}>
          Benefits
        </h3>
        <div className="prod-section__benefits-grid stagger">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="prod-section__benefit-card reveal-scale"
              style={{ borderColor: benefitBorder }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
