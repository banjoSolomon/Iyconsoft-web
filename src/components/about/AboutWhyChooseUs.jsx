import React from "react";
import "../../styles/about/AboutWhyChooseUs.css";
import noInternetImg from "../../assets/images/noInternet.png";
import noAppImg from "../../assets/images/noAppneeded.png";
import worksOnPhoneImg from "../../assets/images/worksonphone.png";
import shieldImg from "../../assets/images/ShieldCheck.png";

const features = [
  {
    id: 1,
    icon: noInternetImg,
    title: "No Internet Required",
    description: "Access services seamlessly without relying on internet connectivity.",
    color: "#CC2360",
  },
  {
    id: 2,
    icon: noAppImg,
    title: "No App Needed",
    description: "No downloads or installations required.",
    color: "#f39c12",
  },
  {
    id: 3,
    icon: worksOnPhoneImg,
    title: "Works on Any Phone",
    description: "Compatible with both smartphones and feature phones.",
    color: "#00bcd4",
  },
  {
    id: 4,
    icon: shieldImg,
    title: "Secure and Reliable",
    description: "Built to deliver trusted and dependable digital experiences.",
    color: "#6c3ef4",
  },
];

const AboutWhyChooseUs = () => {
  return (
    <section className="about-why">
      <div className="about-why__container">
        {/* Left: heading */}
        <div className="about-why__content reveal-left">
          <h2 className="about-why__title">Why Choose Us?</h2>
          <p className="about-why__subtitle">
            Technology designed for convenience, accessibility and reliability.
          </p>
        </div>

        {/* Right: 2×2 feature cards */}
        <div className="about-why__grid stagger">
          {features.map((f) => (
            <div key={f.id} className="about-why-card reveal">
              <div className="about-why-card__icon-wrap" style={{ borderColor: f.color }}>
                <img src={f.icon} alt={f.title} />
              </div>
              <div className="about-why-card__body">
                <h3 className="about-why-card__title" style={{ color: f.color }}>
                  {f.title}
                </h3>
                <p className="about-why-card__desc">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
