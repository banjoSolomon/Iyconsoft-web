import React from "react";
import "../../styles/industries/IndustrySection.css";
import promoImg from "../../assets/images/AGM.png";

const GovernmentSection = () => (
  <section className="ind-section" id="ind-government" style={{ background: "linear-gradient(135deg, #f0fff4 0%, #e8f5e9 100%)" }}>
    <div className="ind-section__container">
      {/* Left: text */}
      <div className="ind-section__content reveal-left">
        <h2 className="ind-section__title" style={{ color: "#1a6e3a" }}>
          Government &amp; Public Sector
        </h2>
        <p className="ind-section__text">
          Supporting transparent voting, digital collections, and citizen self-service platforms.
        </p>
        <p className="ind-section__text">
          Providing secure digital platforms for collections, payments, citizen engagement,
          and voting processes.
        </p>
        <p className="ind-section__text">
          Iyconsoft helps governments and institutions improve transparency, voting processes,
          and revenue collection through secure digital platforms.
        </p>
        <div className="ind-section__btn-group">
          <a href="/solutions#sol-vvpss" className="ind-section__btn" style={{ borderColor: "#1a6e3a", color: "#1a6e3a", "--btn-color": "#1a6e3a" }}>
            Explore VVPSS
          </a>
          <a href="/solutions#sol-itravel" className="ind-section__btn" style={{ borderColor: "#2e7d32", color: "#2e7d32", "--btn-color": "#2e7d32" }}>
            Explore iTravel
          </a>
        </div>
      </div>

      {/* Right: image */}
      <div className="ind-section__image reveal-right">
        <img src={promoImg} alt="Government - VVPSS AGM" />
      </div>
    </div>
  </section>
);

export default GovernmentSection;
