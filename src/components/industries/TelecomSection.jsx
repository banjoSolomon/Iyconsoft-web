import React from "react";
import "../../styles/industries/IndustrySection.css";
import promoImg from "../../assets/images/insignt1.png";

const TelecomSection = () => (
  <section className="ind-section ind-section--light" id="ind-telecom">
    <div className="ind-section__container">
      {/* Left: text */}
      <div className="ind-section__content reveal-left">
        <h2 className="ind-section__title" style={{ color: "#6c3ef4" }}>
          Telecommunications
        </h2>
        <p className="ind-section__text">
          Enhancing customer engagement and digital communication through USSD and
          mobile-based solutions.
        </p>
        <p className="ind-section__text">
          Delivering caller identification and customer engagement services that improve
          communication and subscriber experiences.
        </p>
        <p className="ind-section__text">
          Helping mobile users identify callers and communicate with confidence.
        </p>
        <a href="/solutions#sol-caller" className="ind-section__btn" style={{ borderColor: "#6c3ef4", color: "#6c3ef4", "--btn-color": "#6c3ef4" }}>
          Explore Caller Services
        </a>
      </div>

      {/* Right: image */}
      <div className="ind-section__image reveal-right">
        <img src={promoImg} alt="Telecommunications - MyCaller" />
      </div>
    </div>
  </section>
);

export default TelecomSection;
