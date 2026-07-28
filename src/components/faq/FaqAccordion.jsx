import React, { useState, useMemo } from "react";
import "../../styles/faq/FaqAccordion.css";
import faqData from "../../data/faqData";

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const FaqAccordion = ({ search, selectedProduct }) => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  // Sync when Popular Questions fires a selection
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

  const toggleCategory = (i) => {
    setOpenCategory(openCategory === i ? null : i);
    setOpenQuestion(null);
  };

  const toggleQuestion = (key) => {
    setOpenQuestion(openQuestion === key ? null : key);
  };

  const hexToLight = (hex) => `${hex}18`;

  const handleBack = () => {
    setActiveProduct(null);
    setOpenCategory(null);
    setOpenQuestion(null);
    // Scroll back to popular questions
    const el = document.getElementById("faq-accordion");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="faq-acc" id="faq-accordion">

      {/* ── No product selected: show prompt only ── */}
      {activeProduct === null && (
        <div className="faq-acc__prompt">
          <p className="faq-acc__prompt-eyebrow">Browse By Product</p>
          <h3 className="faq-acc__prompt-title">What can we help you with?</h3>
          <p className="faq-acc__prompt-sub">
            Select a product below to view its frequently asked questions and answers.
          </p>

          {/* Product cards */}
          <div className="faq-acc__product-cards">
            {faqData.map((p, i) => (
              <button
                key={p.product}
                className="faq-acc__product-card"
                style={{ "--pc-color": p.color, "--pc-bg": p.lightBg }}
                onClick={() => {
                  setActiveProduct(i);
                  setOpenCategory(null);
                  setOpenQuestion(null);
                  setTimeout(() => {
                    const el = document.getElementById("faq-accordion");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100);
                }}
              >
                <div className="faq-acc__product-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <div className="faq-acc__product-card-body">
                  <span className="faq-acc__product-card-name">{p.product}</span>
                  {p.network && (
                    <span
                      className="faq-acc__product-card-network"
                      style={{ background: p.networkBg, color: p.networkColor }}
                    >
                      {p.network}
                    </span>
                  )}
                  <span className="faq-acc__product-card-count">
                    {p.categories.reduce((acc, c) => acc + c.questions.length, 0)} Questions
                  </span>
                </div>
                <svg className="faq-acc__product-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Product selected: show ONLY that product's FAQs ── */}
      {activeProduct !== null && product && (
        <div className="faq-acc__body" style={{ animation: "faq-fadeIn 0.35s ease both" }}>

          {/* Header with back button */}
          <div className="faq-acc__header">
            <button className="faq-acc__back" onClick={handleBack}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              Back
            </button>
            <h2 className="faq-acc__product-title" style={{ color: product.color }}>
              {product.product}
              {product.network && (
                <span
                  className="faq-acc__product-network"
                  style={{ background: product.networkBg, color: product.networkColor }}
                >
                  {product.network}
                </span>
              )}
              &nbsp;FAQS
            </h2>
          </div>

          {filtered.length === 0 ? (
            <p className="faq-acc__empty">No results found for "{search}"</p>
          ) : (
            filtered.map((cat, ci) => {
              const isOpenCat = openCategory === ci;
              return (
                <div
                  key={cat.name}
                  className="faq-acc__category"
                  style={{
                    "--cat-color": product.color,
                    "--cat-color-light": hexToLight(product.color),
                  }}
                >
                  <button
                    className={`faq-acc__cat-btn ${isOpenCat ? "faq-acc__cat-btn--open" : ""}`}
                    onClick={() => toggleCategory(ci)}
                  >
                    <span
                      className="faq-acc__cat-badge"
                      style={{ background: isOpenCat ? product.color : "#f0f0f8", color: isOpenCat ? "#fff" : "#aaa" }}
                    >
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
                            {isOpen && (
                              <div className="faq-acc__answer">{item.a}</div>
                            )}
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
    </section>
  );
};

export default FaqAccordion;
