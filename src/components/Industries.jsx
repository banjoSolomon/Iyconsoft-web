import React from "react";
import "../styles/Industries.css";
import telecomImg from "../assets/images/telicomication.png";
import transportImg from "../assets/images/transportation.png";
import governmentImg from "../assets/images/goverment.png";
import enterpriseImg from "../assets/images/enterprise.png";

const industries = [
  {
    id: 1,
    icon: telecomImg,
    title: "Telecommunications",
    description: "Powering communication experiences through USSD and caller identification solutions.",
  },
  {
    id: 2,
    icon: transportImg,
    title: "Transportation",
    description: "Making travel booking and passenger services more accessible.",
  },
  {
    id: 3,
    icon: governmentImg,
    title: "Government",
    description: "Supporting digital participation through voting and survey services.",
  },
  {
    id: 4,
    icon: enterpriseImg,
    title: "Enterprise",
    description: "Providing businesses with scalable and secure digital services.",
  },
];

const Industries = () => {
  return (
    <section className="industries" id="industries">
      <div className="industries__container">
        <div className="industries__header reveal">
          <h2 className="industries__title">Industries We Serve</h2>
          <p className="industries__subtitle">
            Delivering innovative digital experiences across multiple sectors
          </p>
        </div>

        <div className="industries__grid stagger">
          {industries.map((item) => (
            <div key={item.id} className="industry-card reveal-scale">
              <div className="industry-card__icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="industry-card__title">{item.title}</h3>
              <p className="industry-card__desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="industries__cta reveal">
          <a href="#industries" className="btn btn--primary">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
