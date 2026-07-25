import React from "react";
import "../../styles/industries/IndustrySection.css";
import promoImg from "../../assets/images/enterprise2.png";

const EnterpriseSection = () => (
  <section className="ind-section ind-section--cream" id="ind-enterprise">
    <div className="ind-section__container ind-section__container--reverse">
      {/* Left: image */}
      <div className="ind-section__image reveal-left">
        <img src={promoImg} alt="Enterprise - USSD Services" />
      </div>

      {/* Right: text */}
      <div className="ind-section__content reveal-right">
        <h2 className="ind-section__title" style={{ color: "#f39c12" }}>
          Enterprise
        </h2>
        <p className="ind-section__text">
          Providing scalable digital platforms that help organizations improve efficiency
          and stakeholder engagement.
        </p>
        <p className="ind-section__text">
          Empowering businesses with scalable technologies that improve productivity and
          operational efficiency.
        </p>
        <p className="ind-section__text">
          Our scalable platforms help businesses automate operations, engage stakeholders,
          and improve service delivery.
        </p>
        <a href="/solutions" className="ind-section__btn" style={{ borderColor: "#f39c12", color: "#f39c12", "--btn-color": "#f39c12" }}>
          Explore Solutions
        </a>
      </div>
    </div>
  </section>
);

export default EnterpriseSection;
