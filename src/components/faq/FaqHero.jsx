import React from "react";
import "../../styles/faq/FaqHero.css";
import faqImg from "../../assets/images/faq.png";

const FaqHero = ({ search, onSearch }) => {
  return (
    <section className="faq-hero">
      {/* Page title */}
      <div className="faq-hero__title-bar">
        <h1 className="faq-hero__page-title">
          <span className="faq-hero__title-freq">Frequently </span>
          <span className="faq-hero__title-asked">Asked </span>
          <span className="faq-hero__title-questions">Questions</span>
        </h1>
      </div>

      {/* Hero card */}
      <div className="faq-hero__card">
        <div className="faq-hero__left reveal-left">
          <h2 className="faq-hero__heading">
            How Can We<br />Help You ?
          </h2>
          <p className="faq-hero__desc">
            Find answers to common questions about Iyconsoft's digital solutions,
            from caller identification and transportation services to digital voting
            and e-ticketing. Browse by product or search for the information you need.
          </p>
          <div className="faq-hero__actions">
            <a href="#faq-accordion" className="faq-hero__btn faq-hero__btn--dark">
              View FAQs
            </a>
            <a href="#contact" className="faq-hero__btn faq-hero__btn--primary">
              Contact Us
            </a>
          </div>
        </div>
        <div className="faq-hero__right reveal-right">
          <img src={faqImg} alt="FAQ Help Center" className="faq-hero__img" />
        </div>
      </div>

      {/* Search bar */}
      <div className="faq-hero__search-wrap">
        <div className="faq-hero__search-bar">
          <svg className="faq-hero__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            className="faq-hero__search-input"
            placeholder="Search questions, keywords, or products............"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
          {search && (
            <button className="faq-hero__search-clear" onClick={() => onSearch("")}>✕</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqHero;
