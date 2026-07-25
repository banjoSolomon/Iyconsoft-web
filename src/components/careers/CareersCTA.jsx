import React from "react";
import "../../styles/careers/CareersCTA.css";

const CareersCTA = () => {
  return (
    <section className="careers-cta">
      <div className="careers-cta__orb careers-cta__orb--1"></div>
      <div className="careers-cta__orb careers-cta__orb--2"></div>

      <div className="careers-cta__container">
        <div className="careers-cta__text reveal-left">
          <h2 className="careers-cta__title">Ready to Make an Impact?</h2>
          <p className="careers-cta__sub">
            Become part of a team that's shaping the future through innovative digital solutions.
          </p>
        </div>
        <div className="careers-cta__actions reveal-right">
          <a href="#open-positions" className="careers-cta__btn careers-cta__btn--primary">
            Explore Opportunities
          </a>
          <a href="#contact" className="careers-cta__btn careers-cta__btn--outline">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
