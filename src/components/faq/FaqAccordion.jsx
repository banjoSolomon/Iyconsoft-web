import React, { useState, useMemo } from "react";
import "../../styles/faq/FaqAccordion.css";
import faqData from "../../data/faqData";
import myCallerLogo  from "../../assets/images/Group 39.png";
import whoDeyLogo    from "../../assets/images/Group 39.png";
import itravelLogo   from "../../assets/images/itravel_logo-removebg-preview (1) 1.png";
import vvpssLogo     from "../../assets/images/vvpss logo 1.png";
import teticketLogo  from "../../assets/images/Group 41.png";

// Map product name → logo
const productLogos = {
  "MyCaller":    myCallerLogo,
  "WhoDeyCall":  whoDeyLogo,
  "iTravel":     itravelLogo,
  "VVPSS":       vvpssLogo,
  "TeTicket":    teticketLogo,
};

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const FaqAccordion = ({ search, selectedProduct }) => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [openCategory, setOpenCategory]   = useState(null);
  const [openQuestion, setOpenQuestion]   = useState(null);

  React.useEffect(() => {
    if (selectedProduct !== null && selectedProduct !== undefined) {
      setActiveProduct(selectedProduct);
      setOpenCategory(null);
      setOpenQuestion(null);
    }
  }, [selectedProduct]);

  const product = activeProduct !== null ? faqData[activeProduct] : null;

  const filtered = useMemo(() => {
    if (!product) return [];
    if (!search.trim()) return product.categories;
    const q = search.toLowerCase();
    return product.categories
      .map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (item) =>
            item.q.toLowerCase().includes(q) ||
            item.a.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.questions.length > 0);
  }, [search, product]);

  const toggleCategory = (i) => { setOpenCategory(openCategory === i ? null : i); setOpenQuestion(null); };
  const toggleQuestion = (key) => { setOpenQuestion(openQuestion === key ? null : key); };
  const hexToLight = (hex) => `${hex}18`;
  const totalQ = (p) => p.categories.reduce((a, c) => a + c.questions.length, 0);

  return (
    <section className="faq-acc" id="faq-accordion">

      {/* ── Eyebrow ── */}
      <div className="faq-acc__eyebrow-wrap">
        <p className="faq-acc__eyebrow">Browse By Product</p>
      </div>

      {/* ── Two-column layout ── */}
      <div className="faq-acc__layout">

        {/* LEFT — always the heading + description */}
        <div className="faq-acc__left">
          {activeProduct !== null ? (
            <>
              <button className="faq-acc__back-left" onClick={() => { setActiveProduct(null); setOpenCategory(null); setOpenQuestion(null); }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="14" height="14">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                Back
              </button>
              <h3 className="faq-acc__left-title">{product.product}</h3>
              {product.network && (
                <span className="faq-acc__left-network"
                  style={{ background: product.networkBg, color: product.networkColor }}>
                  {product.network}
                </span>
              )}
              <p className="faq-acc__left-sub">
                Browse {totalQ(product)} frequently asked questions about {product.product}.
              </p>
              <div className="faq-acc__left-stats">
                <div className="faq-acc__left-stat" style={{ "--sc": product.color }}>
                  <span className="faq-acc__left-stat-num">{totalQ(product)}</span>
                  <span className="faq-acc__left-stat-lbl">Questions</span>
                </div>
                <div className="faq-acc__left-stat" style={{ "--sc": product.color }}>
                  <span className="faq-acc__left-stat-num">{product.categories.length}</span>
                  <span className="faq-acc__left-stat-lbl">Categories</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <h3 className="faq-acc__left-title">What can we help<br />you with?</h3>
              <p className="faq-acc__left-sub">
                Select a product to view its frequently asked questions and answers.
              </p>
              <div className="faq-acc__left-hint">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
                Pick a product on the right
              </div>
            </>
          )}
        </div>

        {/* RIGHT — cards grid OR FAQ accordion */}
        <div className="faq-acc__right">

          {activeProduct === null ? (
            /* 2×2 Product cards */
            <div className="faq-acc__cards-grid">
              {faqData.map((p, i) => (
                <button
                  key={p.product}
                  className="faq-acc__pcard"
                  style={{ "--pc": p.color, "--pb": p.lightBg }}
                  onClick={() => { setActiveProduct(i); setOpenCategory(null); setOpenQuestion(null); }}
                >
                  {/* Top accent bar */}
                  <div className="faq-acc__pcard-bar" />

                  {/* Logo */}
                  <div className="faq-acc__pcard-icon">
                    <img
                      src={productLogos[p.product]}
                      alt={p.product}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </div>

                  {/* Name + network */}
                  <div className="faq-acc__pcard-top">
                    <span className="faq-acc__pcard-name">{p.product}</span>
                    {p.network && (
                      <span className="faq-acc__pcard-net"
                        style={{ background: p.networkBg, color: p.networkColor }}>
                        {p.network}
                      </span>
                    )}
                  </div>

                  {/* Count */}
                  <span className="faq-acc__pcard-count">{totalQ(p)} Questions</span>

                  {/* Arrow */}
                  <div className="faq-acc__pcard-footer">
                    <span className="faq-acc__pcard-cta">View FAQs</span>
                    <svg className="faq-acc__pcard-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="16" height="16">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* FAQ accordion */
            <div className="faq-acc__body" style={{ animation: "faq-fadeIn 0.35s ease both" }}>
              <h2 className="faq-acc__product-title" style={{ color: product.color }}>
                {product.product} FAQS
              </h2>

              {filtered.length === 0 ? (
                <p className="faq-acc__empty">No results found for "{search}"</p>
              ) : (
                filtered.map((cat, ci) => {
                  const isOpenCat = openCategory === ci;
                  return (
                    <div key={cat.name} className="faq-acc__category"
                      style={{ "--cat-color": product.color, "--cat-color-light": hexToLight(product.color) }}>
                      <button
                        className={`faq-acc__cat-btn ${isOpenCat ? "faq-acc__cat-btn--open" : ""}`}
                        onClick={() => toggleCategory(ci)}
                      >
                        <span className="faq-acc__cat-badge"
                          style={{ background: isOpenCat ? product.color : "#f0f0f8", color: isOpenCat ? "#fff" : "#aaa" }}>
                          {ci + 1}
                        </span>
                        <span className="faq-acc__cat-label">{cat.name}</span>
                        <span className="faq-acc__cat-count">{cat.questions.length} Q</span>
                        <span className="faq-acc__cat-chevron"><ChevronDown /></span>
                      </button>

                      {isOpenCat && (
                        <div className="faq-acc__questions">
                          {cat.questions.map((item, qi) => {
                            const key = `${ci}-${qi}`;
                            const isOpen = openQuestion === key;
                            return (
                              <div key={key} className="faq-acc__item">
                                <button
                                  className={`faq-acc__question ${isOpen ? "faq-acc__question--open" : ""}`}
                                  onClick={() => toggleQuestion(key)}
                                >
                                  <span className="faq-acc__q-num">{qi + 1}</span>
                                  <span className="faq-acc__q-text">{item.q}</span>
                                  <span className={`faq-acc__q-chevron ${isOpen ? "faq-acc__q-chevron--open" : ""}`}>
                                    <ChevronDown />
                                  </span>
                                </button>
                                {isOpen && <div className="faq-acc__answer">{item.a}</div>}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FaqAccordion;
