import React from "react";
import "../../styles/about/WhoWeAre.css";
import whoWeAreImg from "../../assets/images/whoweAre.png";

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="who-we-are__container">
        {/* Left: image */}
        <div className="who-we-are__image-wrap reveal-left">
          <img src={whoWeAreImg} alt="Who We Are - Iyconsoft" className="who-we-are__image" />
        </div>

        {/* Right: text */}
        <div className="who-we-are__content reveal-right">
          <h2 className="who-we-are__title">Who We Are</h2>
          <p className="who-we-are__text">
            Iyconsoft is a technology company dedicated to transforming everyday experiences
            through innovative USSD and digital solutions. Through products such as Caller
            Services, iTravel, VVPSS, and SelfServe/TeTicket, we empower businesses and
            individuals with secure, reliable, and accessible services that work with or
            without internet connectivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
