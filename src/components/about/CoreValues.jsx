import React from "react";
import "../../styles/about/CoreValues.css";
import lightbulbIcon from "../../assets/images/LightbulbFilament.png";
import shieldIcon from "../../assets/images/ShieldCheck.png";
import mobileIcon from "../../assets/images/DeviceMobile.png";
import medalIcon from "../../assets/images/Medal.png";

const values = [
  {
    id: 1,
    icon: lightbulbIcon,
    label: "Innovation",
    bg: "#00bcd4",
  },
  {
    id: 2,
    icon: shieldIcon,
    label: "Reliability",
    bg: "#1a1a6e",
  },
  {
    id: 3,
    icon: mobileIcon,
    label: "Accessibility",
    bg: "#6c3ef4",
  },
  {
    id: 4,
    icon: medalIcon,
    label: "Excellence",
    bg: "#f39c12",
  },
];

const CoreValues = () => {
  return (
    <section className="core-values">
      <div className="core-values__container">
        {/* Left: title */}
        <div className="core-values__left reveal-left">
          <h2 className="core-values__title">Our Core Values</h2>
        </div>

        {/* Right: 2×2 grid */}
        <div className="core-values__grid stagger">
          {values.map((v) => (
            <div
              key={v.id}
              className="cv-card reveal-scale"
              style={{ background: v.bg }}
            >
              <div className="cv-card__icon-wrap">
                <img src={v.icon} alt={v.label} className="cv-card__icon" />
              </div>
              <span className="cv-card__label">{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
