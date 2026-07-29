import React from "react";
import "../../styles/faq/PopularQuestions.css";

const popularItems = [
  {
    question: "How do I activate MyCaller ?",
    tag: "Activate MyCaller",
    productIndex: 0,  // MyCaller
    color: "#CC2360",
  },
  {
    question: "How do I book an iTravel ticket ?",
    tag: "Book iTravel Ticket",
    productIndex: 2,  // iTravel
    color: "#00bcd4",
  },
  {
    question: "How do I subscribe to WhoDeyCall ?",
    tag: "WhoDeyCall Subscription",
    productIndex: 1,  // WhoDeyCall
    color: "#f5a623",
  },
  {
    question: "How secure is VVPSS ?",
    tag: "VVPSS Security",
    productIndex: 3,
    color: "#1a6e3a",
  },
  {
    question: "How do I purchase a TeTicket ?",
    tag: "Pricing",
    productIndex: null,
    color: "#f39c12",
  },
];

const PopularQuestions = ({ onSelectProduct }) => {
  const handleClick = (item) => {
    if (item.productIndex !== null) {
      onSelectProduct(item.productIndex);
      // Scroll to accordion
      setTimeout(() => {
        const el = document.getElementById("faq-accordion");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section className="popular-q">
      <div className="popular-q__container reveal">
        <h2 className="popular-q__title">Popular Questions</h2>
        <div className="popular-q__list">
          {popularItems.map((item, i) => (
            <div
              key={i}
              className="popular-q__item"
              onClick={() => handleClick(item)}
              style={{ "--pq-color": item.color, cursor: item.productIndex !== null ? "pointer" : "default" }}
            >
              <div className="popular-q__item-left">
                <span className="popular-q__icon">?</span>
                <span className="popular-q__question">{item.question}</span>
              </div>
              <span
                className="popular-q__tag"
                style={{ borderColor: item.color, color: item.color }}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularQuestions;
