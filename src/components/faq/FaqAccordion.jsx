import React, { useState, useMemo } from "react";
import "../../styles/faq/FaqAccordion.css";
import faqData from "../../data/faqData";

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const FaqAccordion = ({ search }) => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const product = faqData[activeProduct];

  const filtered = useMemo(() => {
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

  // Hex to rgba helper for light bg
  const hexToLight = (hex) => `${hex}18`;

  return (
    <section className="faq-acc" id="faq-accordion">
      {/* Product tabs */}
      <div className="faq-acc__tabs">
        {faqData.map((p, i) => (
          <button
            key={p.product}
            className={`faq-acc__tab ${activeProduct === i ? "faq-acc__tab--active" : ""}`}
            style={activeProduct === i
              ? { background: p.color, borderColor: p.color, color: "#fff" }
              : { borderColor: "#e0e0e0", color: "#888" }
            }
            onClick={() => {
              setActiveProduct(i);
              setOpenCategory(null);
              setOpenQuestion(null);
            }}
          >
            {p.product}
            {p.network && (
              <span
                className="faq-acc__tab-network"
                style={activeProduct === i
                  ? { background: p.networkBg, color: p.networkColor }
                  : { background: "#f0f0f8", color: "#aaa" }
                }
              >
                {p.network}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="faq-acc__body">
        <h2 className="faq-acc__product-title" style={{ color: product.color }}>
          {product.product} FAQS
        </h2>

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
                {/* Category header */}
                <button
                  className={`faq-acc__cat-btn ${isOpenCat ? "faq-acc__cat-btn--open" : ""}`}
                  onClick={() => toggleCategory(ci)}
                >
                  <span
                    className="faq-acc__cat-badge"
                    style={{ "--cat-color": product.color, background: isOpenCat ? product.color : "#f0f0f8", color: isOpenCat ? "#fff" : "#aaa" }}
                  >
                    {ci + 1}
                  </span>
                  <span className="faq-acc__cat-label">{cat.name}</span>
                  <span className="faq-acc__cat-count">{cat.questions.length} Q</span>
                  <span className="faq-acc__cat-chevron">
                    <ChevronDown />
                  </span>
                </button>

                {/* Questions list */}
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
    </section>
  );
};

export default FaqAccordion;
