import React from "react";
import "../../styles/faq/FaqCTA.css";

const FaqCTA = () => (
  <section className="faq-cta">
    <div className="faq-cta__orb faq-cta__orb--1"></div>
    <div className="faq-cta__orb faq-cta__orb--2"></div>
    <div className="faq-cta__container">
      <div className="faq-cta__text reveal-left">
        <h2 className="faq-cta__title">Still Need Help ?</h2>
        <p className="faq-cta__sub">
          Can't find the answer you are looking for?<br />Our Team is ready to help.
        </p>
      </div>
      <div className="faq-cta__actions reveal-right">
        <a href="mailto:tech@iyconsoft.com" className="faq-cta__btn faq-cta__btn--outline">
          Send us a message
        </a>
        <a href="#contact" className="faq-cta__btn faq-cta__btn--primary">
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default FaqCTA;
