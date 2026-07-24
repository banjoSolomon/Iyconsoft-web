import React from "react";
import "../../styles/about/AboutCTA.css";

const AboutCTA = () => {
  return (
    <section className="about-cta">
      <div className="about-cta__container">
        <div className="about-cta__text reveal-left">
          <h2 className="about-cta__title">Building the Future of Digital Experiences</h2>
          <p className="about-cta__subtitle">
            Let's work together to create innovative solutions that transform the way people
            interact with technology.
          </p>
        </div>
        <div className="about-cta__actions reveal-right">
          <a href="#contact" className="btn btn--outline-white">Contact Us</a>
          <a href="#solutions" className="btn btn--primary">Explore Solutions</a>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
