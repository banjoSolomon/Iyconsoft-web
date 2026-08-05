import React from "react";
import "../../styles/about/CeoSpotlight.css";
import ceoImg from "../../assets/images/meet our ceo.jpeg";

const CeoSpotlight = () => (
  <section className="ceo-spotlight">
    <div className="ceo-spotlight__container">

      {/* Left: image */}
      <div className="ceo-spotlight__image-wrap reveal-left">
        <div className="ceo-spotlight__img-card">
          <img src={ceoImg} alt="Prince Ikechukwu Kalu — CEO, Iyconsoft Solutions" className="ceo-spotlight__img" />
          {/* Floating badge */}
          <div className="ceo-spotlight__badge">
            <span className="ceo-spotlight__badge-name">Prince Ikechukwu Kalu</span>
            <span className="ceo-spotlight__badge-role">Chief Executive Officer</span>
          </div>
        </div>
        {/* Decorative accent */}
        <div className="ceo-spotlight__accent" />
      </div>

      {/* Right: quote + bio */}
      <div className="ceo-spotlight__content reveal-right">
        <p className="ceo-spotlight__eyebrow">Meet Our CEO</p>
        <h2 className="ceo-spotlight__title">
          A Vision for <span>Digital Inclusion</span>
        </h2>

        {/* Pull quote */}
        <blockquote className="ceo-spotlight__quote">
          <span className="ceo-spotlight__quote-mark">"</span>
          Our goal at Iyconsoft is simple — to build technology that works for every Nigerian,
          whether they have a smartphone or a basic phone, internet or no internet.
          Every product we create starts with that principle.
        </blockquote>

        <p className="ceo-spotlight__bio">
          Prince Ikechukwu Kalu is the founder and Chief Executive Officer of Iyconsoft Solutions.
          With a passion for accessible technology, he has led the company in developing
          innovative USSD and digital platforms that empower millions of Nigerians across
          telecommunications, transportation, governance, and enterprise sectors.
        </p>

        <div className="ceo-spotlight__stats">
          <div className="ceo-spotlight__stat">
            <span className="ceo-spotlight__stat-num">5+</span>
            <span className="ceo-spotlight__stat-label">Years Leading</span>
          </div>
          <div className="ceo-spotlight__stat">
            <span className="ceo-spotlight__stat-num">5</span>
            <span className="ceo-spotlight__stat-label">Products Launched</span>
          </div>
          <div className="ceo-spotlight__stat">
            <span className="ceo-spotlight__stat-num">10K+</span>
            <span className="ceo-spotlight__stat-label">Users Reached</span>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default CeoSpotlight;
