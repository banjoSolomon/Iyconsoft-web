import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/images/Frame 57.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content reveal-left">
          <h1 className="hero__title">
            Transforming Everyday Experiences Through Digital Innovation.
          </h1>
          <p className="hero__subtitle">
            Building innovative digital solutions that work with or without internet connectivity.
          </p>
          <div className="hero__actions">
            <a href="/solutions" className="btn btn--primary">Explore Solutions</a>
            <a href="#contact" className="btn btn--outline">Contact Us</a>
          </div>
        </div>
        <div className="hero__image-wrap reveal-right">
          <img src={heroImage} alt="Iyconsoft digital solutions network" className="hero__image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
