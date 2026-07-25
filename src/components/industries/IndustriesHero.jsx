import React from "react";
import "../../styles/industries/IndustriesHero.css";
import transportIcon from "../../assets/images/transportation.png";
import telecomIcon from "../../assets/images/telicomication.png";
import govIcon from "../../assets/images/goverment.png";
import enterpriseIcon from "../../assets/images/enterprise.png";

const cards = [
  {
    icon: transportIcon,
    color: "#00bcd4",
    iconBg: "#e0f7fa",
    cardBg: "#fce4ec",
    title: "Transportation",
    desc: "iTravel enables passengers to book trips using USSD while helping transport operators streamline reservation and payments.",
  },
  {
    icon: telecomIcon,
    color: "#6c3ef4",
    iconBg: "#ede7f6",
    cardBg: "#ede7f6",
    title: "Telecommunications",
    desc: "MyCaller and WhoDeyCall helps subscribers identify callers before answering, reducing spam, and unwanted interruptions.",
  },
  {
    icon: govIcon,
    color: "#f39c12",
    iconBg: "#fff3e0",
    cardBg: "#fff8e1",
    title: "Government",
    desc: "VVPSS provides secure digital voting, and survey capabilities for AGMs, elections, and stakeholder engagement processes.",
  },
  {
    icon: enterpriseIcon,
    color: "#CC2360",
    iconBg: "#fce4ec",
    cardBg: "#fdf5f7",
    title: "Enterprise",
    desc: "Scalable USSD and digital platforms that help businesses automate operations and improve service delivery.",
  },
];

const IndustriesHero = () => {
  return (
    <section className="ind-hero">
      {/* Banner */}
      <div className="ind-hero__banner">
        <div className="ind-hero__banner-inner">
          <h1 className="ind-hero__page-title">
            Industries We{" "}
            <span className="ind-hero__highlight">Em</span><span className="ind-hero__highlight2">power</span>
          </h1>
          <p className="ind-hero__banner-sub">
            Delivering digital innovation across every sector
          </p>
        </div>
      </div>

      {/* Main block */}
      <div className="ind-hero__block">
        <div className="ind-hero__container">

          {/* Left: text */}
          <div className="ind-hero__content reveal-left">
            <h2 className="ind-hero__title">
              Delivering Industry Specific Digital Solutions
            </h2>
            <p className="ind-hero__text">
              From telecommunications and transportation to government and enterprise
              organizations, Iyconsoft empowers businesses with innovative technologies
              that simplify operations, improve accessibility, and create seamless
              digital experiences.
            </p>
            <div className="ind-hero__actions">
              <a href="#ind-telecom" className="btn btn--dark">Explore Solutions</a>
              <a href="#contact" className="btn btn--primary">Contact Us</a>
            </div>
          </div>

          {/* Right: 2×2 cards */}
          <div className="ind-hero__cards reveal-right stagger">
            {cards.map((c, i) => (
              <div key={i} className="ind-hero__card reveal-scale" style={{ background: c.cardBg }}>
                <div className="ind-hero__card-icon" style={{ background: c.iconBg }}>
                  <img src={c.icon} alt={c.title} />
                </div>
                <h3 className="ind-hero__card-title" style={{ color: c.color }}>{c.title}</h3>
                <p className="ind-hero__card-desc">{c.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;
