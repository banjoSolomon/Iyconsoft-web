import React from "react";
import "../styles/CTA.css";

const CTA = () => {
  return (
    <section className="cta-banner" id="contact">
      <div className="cta-banner__container">
        <div className="cta-banner__text reveal-left">
          <h2 className="cta-banner__title">Ready to transform your business?</h2>
          <p className="cta-banner__subtitle">
            Let's discuss how Iyconsoft can help you deliver innovative digital experiences.
          </p>
        </div>
        <div className="cta-banner__actions reveal-right">
          <a href="#contact" className="btn btn--outline-white">Contact Us</a>
          <a href="/solutions" className="btn btn--white">Explore Solutions</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
