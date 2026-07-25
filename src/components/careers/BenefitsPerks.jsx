import React from "react";
import "../../styles/careers/BenefitsPerks.css";
import officeImg from "../../assets/images/image 8.png";
import rocketIcon from "../../assets/images/Rocket.png";
import gradCapIcon from "../../assets/images/GraduationCap.png";
import usersIcon from "../../assets/images/UsersFour.png";
import users2Icon from "../../assets/images/UsersFour (1).png";
import arrowIcon from "../../assets/images/ArrowFatLinesUp.png";
import clockIcon from "../../assets/images/Clock.png";

const perks = [
  { icon: rocketIcon,   text: "Professional development opportunities", color: "#CC2360" },
  { icon: clockIcon,    text: "Flexible work environment",              color: "#6c3ef4" },
  { icon: usersIcon,    text: "Collaborative culture",                  color: "#CC2360" },
  { icon: gradCapIcon,  text: "Learning and growth support",            color: "#f39c12" },
  { icon: arrowIcon,    text: "Competitive compensation",               color: "#6c3ef4" },
  { icon: users2Icon,   text: "Meaningful projects",                    color: "#00bcd4" },
];

const BenefitsPerks = () => {
  return (
    <section className="benefits">
      <div className="benefits__container">
        {/* Left: office photo */}
        <div className="benefits__image-wrap reveal-left">
          <img src={officeImg} alt="Iyconsoft office" className="benefits__image" />
          <div className="benefits__image-badge reveal-scale">
            <span className="benefits__badge-num">6+</span>
            <span className="benefits__badge-label">Employee Benefits</span>
          </div>
        </div>

        {/* Right: perks list */}
        <div className="benefits__content reveal-right">
          <p className="benefits__eyebrow">What We Offer</p>
          <h2 className="benefits__heading">Benefits &amp; Perks</h2>
          <p className="benefits__sub">
            We invest in the people who build with us. Enjoy a package designed to
            support your growth, wellbeing, and career ambitions.
          </p>

          <ul className="benefits__list stagger">
            {perks.map((p) => (
              <li key={p.text} className="benefits__item reveal">
                <div
                  className="benefits__item-icon"
                  style={{ "--perk-color": p.color }}
                >
                  <img src={p.icon} alt="" />
                </div>
                <span className="benefits__item-text">{p.text}</span>
              </li>
            ))}
          </ul>

          <a href="#open-positions" className="benefits__cta">
            Explore Opportunities →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsPerks;
