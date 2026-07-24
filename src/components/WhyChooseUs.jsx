import React from "react";
import "../styles/WhyChooseUs.css";
import noInternetImg from "../assets/images/noInternet.png";
import noAppImg from "../assets/images/noAppneeded.png";
import worksOnPhoneImg from "../assets/images/worksonphone.png";
import shieldImg from "../assets/images/ShieldCheck.png";

const features = [
  {
    id: 1,
    icon: noInternetImg,
    title: "No Internet Required",
    description: "Access services seamlessly without relying on internet connectivity.",
  },
  {
    id: 2,
    icon: noAppImg,
    title: "No App Needed",
    description: "No downloads or installations required.",
  },
  {
    id: 3,
    icon: worksOnPhoneImg,
    title: "Works on Any Phone",
    description: "Compatible with both smartphones and feature phones.",
  },
  {
    id: 4,
    icon: shieldImg,
    title: "Secure and Reliable",
    description: "Built to deliver trusted and dependable digital experiences.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why" id="why">
      <div className="why__container">
        <div className="why__content reveal-left">
          <h2 className="why__title">Why Choose Us?</h2>
          <p className="why__subtitle">
            Technology designed for convenience, accessibility and reliability.
          </p>
        </div>

        <div className="why__grid stagger">
          {features.map((feature) => (
            <div key={feature.id} className="why-card reveal">
              <div className="why-card__icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div className="why-card__body">
                <h3 className="why-card__title">{feature.title}</h3>
                <p className="why-card__desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
