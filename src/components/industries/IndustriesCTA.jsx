import React from "react";
import "../../styles/industries/IndustriesCTA.css";

const IndustriesCTA = () => (
  <section className="ind-cta">
    <div className="ind-cta__container">
      <div className="ind-cta__text reveal-left">
        <h2 className="ind-cta__title">Empowering Industries Through Digital Innovation</h2>
        <p className="ind-cta__subtitle">
          Discover how Iyconsoft solutions can help your organization improve efficiency,
          engagement, and growth.
        </p>
      </div>
      <div className="ind-cta__actions reveal-right">
        <a href="/solutions" className="btn btn--primary">Explore Solutions</a>
        <a href="#contact" className="btn btn--outline-white">Contact Us</a>
      </div>
    </div>
  </section>
);

export default IndustriesCTA;
