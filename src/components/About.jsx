import React from "react";
import "../styles/About.css";
import aboutImage from "../assets/images/image 2.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image-wrap reveal-left">
          <img src={aboutImage} alt="Iyconsoft USSD Services" className="about__image" />
        </div>
        <div className="about__content reveal-right">
          <h2 className="about__title">About Iyconsoft</h2>
          <p className="about__text">
            Iyconsoft is a leading technology company focused on delivering innovative USSD and
            digital solutions that simplify everyday experiences.
          </p>
          <p className="about__text">
            Through products such as Caller Services, iTravel, VVPSS, and SelfServeTicket, we
            empower businesses and individuals with secure, reliable, and accessible services that
            work seamlessly with or without internet connectivity.
          </p>
          <a href="#about" className="btn btn--dark about__cta">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default About;
