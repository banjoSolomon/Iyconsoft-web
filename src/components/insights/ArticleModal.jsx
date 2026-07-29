import React, { useEffect } from "react";
import "../../styles/insights/ArticleModal.css";

const ArticleModal = ({ article, onClose }) => {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!article) return null;

  // Render body: convert **text** to <strong>, newlines to <br>
  const renderBody = (text) => {
    return text.split("\n").map((line, i) => {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <React.Fragment key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <div className="art-modal__overlay" onClick={onClose}>
      <div className="art-modal__box" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button className="art-modal__close" onClick={onClose} aria-label="Close">✕</button>

        {/* Hero image */}
        <div className="art-modal__image">
          <img src={article.image} alt={article.title} />
          <div className="art-modal__image-overlay">
            <span
              className="art-modal__cat"
              style={{ background: article.categoryColor }}
            >
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="art-modal__content">
          <h2 className="art-modal__title">{article.title}</h2>

          <div className="art-modal__meta">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {article.readTime}
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {article.date}
            </span>
            <span>By {article.author}</span>
          </div>

          <div className="art-modal__tags">
            {article.tags.map((t) => (
              <span key={t} className="art-modal__tag">{t}</span>
            ))}
          </div>

          <div className="art-modal__divider"></div>

          <div className="art-modal__body">
            {renderBody(article.body)}
          </div>

          <div className="art-modal__footer">
            <button className="art-modal__back-btn" onClick={onClose}>
              ← Back to Insights
            </button>
            <a href="/contact" className="art-modal__cta">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
