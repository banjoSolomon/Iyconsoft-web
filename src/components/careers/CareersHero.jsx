import React from "react";
import "../../styles/careers/CareersHero.css";
import heroImg1 from "../../assets/images/image 4.png";
import heroImg2 from "../../assets/images/image 5.png";
import heroImg3 from "../../assets/images/image 3.png";

const CareersHero = () => {
  return (
    <section className="careers-hero">
      {/* Page title banner */}
      <div className="careers-hero__banner">
        <div className="careers-hero__banner-inner">
          <h1 className="careers-hero__page-title">
            <span className="careers-hero__title-join">Join </span>
            <span className="careers-hero__title-our">Our </span>
            <span className="careers-hero__title-team">Team</span>
          </h1>
          <p className="careers-hero__banner-sub">
            Shape the future of digital innovation with us
          </p>
        </div>
      </div>

      {/* Main hero content */}
      <div className="careers-hero__container">
        {/* Left: text */}
        <div className="careers-hero__content reveal-left">
          <h2 className="careers-hero__title">
            Build The Future<br />With Us.
          </h2>
          <p className="careers-hero__text">
            At Iyconsoft, we're building innovative digital solutions that transform everyday
            experiences. Join a team of passionate professionals committed to creating
            technology that makes an impact.
          </p>
          <div className="careers-hero__actions">
            <a href="#open-positions" className="careers-hero__btn careers-hero__btn--dark">
              View Open Positions
            </a>
            <a href="#contact" className="careers-hero__btn careers-hero__btn--primary">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right: image grid */}
        <div className="careers-hero__images reveal-right">
          <div className="careers-hero__img-grid">
            {/* Top left — team meeting (tall) */}
            <img src={heroImg1} alt="Team meeting" className="careers-hero__img careers-hero__img--tl" />
            {/* Top right — office photo (tall) */}
            <img src={heroImg2} alt="Iyconsoft office" className="careers-hero__img careers-hero__img--tr" />
            {/* Bottom left — laptop/frame (spans left column) */}
            <img src={heroImg3} alt="Join our team" className="careers-hero__img careers-hero__img--bl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
