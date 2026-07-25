import React from "react";
import "../../styles/careers/OurCulture.css";
import bulbIcon from "../../assets/images/LightbulbFilament.png";
import shieldIcon from "../../assets/images/ShieldCheck.png";
import usersIcon from "../../assets/images/UsersFour.png";
import medalIcon from "../../assets/images/Medal.png";

const cultureValues = [
  { icon: bulbIcon,   label: "Innovation",    bg: "#00bcd4" },
  { icon: shieldIcon, label: "Integrity",     bg: "#1a1a6e" },
  { icon: usersIcon,  label: "Collaboration", bg: "#CC2360" },
  { icon: medalIcon,  label: "Excellence",    bg: "#f39c12" },
];

const OurCulture = () => {
  return (
    <section className="culture">
      <div className="culture__container">

        {/* Left: heading + description only */}
        <div className="culture__left reveal-left">
          <p className="culture__eyebrow">Our DNA</p>
          <h2 className="culture__heading">
            A Culture Built<br />on Excellence
          </h2>
          <p className="culture__sub">
            Everything we build reflects who we are. Our values aren't just words —
            they're the foundation of every decision, product, and partnership at Iyconsoft.
          </p>
        </div>

        {/* Right: 2×2 value cards */}
        <div className="culture__cards-wrap reveal-right">
          <div className="culture__cards stagger">
            {cultureValues.map((v) => (
              <div
                key={v.label}
                className="culture__card reveal-scale"
                style={{ "--culture-bg": v.bg }}
              >
                <div className="culture__card-icon">
                  <img src={v.icon} alt={v.label} />
                </div>
                <span className="culture__card-label">{v.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurCulture;
