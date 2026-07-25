import React from "react";
import "../../styles/about/AboutHero.css";
import ussdImage from "../../assets/images/image 2.png";

const AboutHero = () => {
  return (
    <section className="about-hero">
      {/* Page title banner */}
      <div className="about-hero__banner">
        <div className="about-hero__banner-inner">
          <h1 className="about-hero__page-title">
            About{" "}
            <span className="about-hero__highlight-word">Iy</span><span className="about-hero__highlight-shimmer">consoft</span>
          </h1>
          <p className="about-hero__banner-sub">
            Transforming everyday experiences through digital innovation
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="about-hero__container">
        {/* Left: text */}
        <div className="about-hero__content reveal-left">
          <h2 className="about-hero__title">
            Empowering Digital Experiences Through Innovation.
          </h2>
          <p className="about-hero__text">
            For years, Iyconsoft has been committed to building innovative USSD and digital
            solutions that simplify everyday experiences and enable organizations to serve
            their customers more effectively.
          </p>
          <div className="about-hero__actions">
            <a href="#solutions" className="btn btn--dark">Explore Solutions</a>
            <a href="#contact" className="btn btn--primary">Contact Us</a>
          </div>
        </div>

        {/* Right: single image */}
        <div className="about-hero__image-wrap reveal-right">
          <img src={ussdImage} alt="Iyconsoft USSD Services" className="about-hero__image" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
