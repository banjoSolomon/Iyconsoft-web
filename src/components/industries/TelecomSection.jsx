import React from "react";
import "../../styles/industries/IndustrySection.css";
import promoImg from "../../assets/images/Tele1.jpeg";

const TelecomSection = () => (
  <section className="ind-section ind-section--light" id="ind-telecom">
    <div className="ind-section__container">
      {/* Left: text */}
      <div className="ind-section__content reveal-left">
        <h2 className="ind-section__title" style={{ color: "#2F3A95" }}>
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
        <a href="/solutions#sol-caller" className="ind-section__btn" style={{ borderColor: "#2F3A95", color: "#2F3A95", "--btn-color": "#2F3A95" }}>
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
