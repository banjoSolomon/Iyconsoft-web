import React from "react";
import "../../styles/careers/LifeAtIyconsoft.css";
import growthIcon from "../../assets/images/Growth.png";
import collabIcon from "../../assets/images/Colaboration.png";
import innovationIcon from "../../assets/images/Inovation.png";

const values = [
  { icon: growthIcon, label: "GROWTH", color: "#fce4ec", accent: "#CC2360" },
  { icon: collabIcon, label: "COLLABORATION", color: "#fff3e0", accent: "#f39c12" },
  { icon: innovationIcon, label: "INNOVATION", color: "#e3f2fd", accent: "#00bcd4" },
];

const LifeAtIyconsoft = () => {
  return (
    <section className="life-at">
      <div className="life-at__container">
        {/* Left: value cards */}
        <div className="life-at__cards-wrap reveal-left">
          <div className="life-at__cards stagger">
            {values.map((v) => (
              <div
                key={v.label}
                className="life-at__card reveal-scale"
                style={{ "--card-bg": v.color, "--card-accent": v.accent }}
              >
                <div className="life-at__card-icon">
                  <img src={v.icon} alt={v.label} />
                </div>
                <span className="life-at__card-label">{v.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: text */}
        <div className="life-at__text reveal-right">
          <h2 className="life-at__heading">
            Life at <span className="life-at__brand">Iyconsoft</span>
          </h2>
          <p className="life-at__desc">
            Innovation thrives when people collaborate. At Iyconsoft, we foster an environment
            where creativity, teamwork, and continuous learning drive everything we do.
          </p>
          <ul className="life-at__points stagger">
            <li className="life-at__point reveal">
              <span className="life-at__point-dot" style={{ background: "#CC2360" }}></span>
              A diverse and inclusive team culture
            </li>
            <li className="life-at__point reveal">
              <span className="life-at__point-dot" style={{ background: "#f39c12" }}></span>
              Continuous learning and career development
            </li>
            <li className="life-at__point reveal">
              <span className="life-at__point-dot" style={{ background: "#00bcd4" }}></span>
              Work that makes a real-world impact
            </li>
            <li className="life-at__point reveal">
              <span className="life-at__point-dot" style={{ background: "#6c3ef4" }}></span>
              Flexible, collaborative work environment
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LifeAtIyconsoft;
