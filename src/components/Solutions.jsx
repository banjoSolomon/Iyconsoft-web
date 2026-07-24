import React from "react";
import "../styles/Solutions.css";
import myCallerIcon from "../assets/images/mycaller.png";
import teticketIcon from "../assets/images/eticket.png";
import itravelIcon from "../assets/images/itravel.png";
import vvpssIcon from "../assets/images/vpss.png";

const solutions = [
  {
    id: 1,
    icon: myCallerIcon,
    iconBg: "#f0ebff",
    title: "MyCaller",
    description: "Know who's calling before you pick up.",
    btnClass: "btn--purple",
  },
  {
    id: 2,
    icon: teticketIcon,
    iconBg: "#fff4e0",
    title: "Teticket",
    description: "Seamless digital ticketing and payment collections.",
    btnClass: "btn--orange",
  },
  {
    id: 3,
    icon: itravelIcon,
    iconBg: "#e0f8ff",
    title: "iTravel",
    description: "Travel booking made easy.",
    btnClass: "btn--teal",
  },
  {
    id: 4,
    icon: vvpssIcon,
    iconBg: "#f0ebff",
    title: "VVPSS",
    description: "Digital governance made simple.",
    btnClass: "btn--dark",
  },
];

const Solutions = () => {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__container">
        <div className="solutions__header reveal">
          <h2 className="solutions__title">
            <span className="underline-purple shimmer-text">Our Solutions</span>
          </h2>
          <p className="solutions__subtitle">
            Innovative products designed to simplify everyday experiences
          </p>
        </div>

        <div className="solutions__grid stagger">
          {solutions.map((solution) => (
            <div key={solution.id} className="solution-card reveal">
              <div
                className="solution-card__icon"
                style={{ background: solution.iconBg }}
              >
                <img src={solution.icon} alt={solution.title} />
              </div>
              <div className="solution-card__body">
                <h3 className="solution-card__title">{solution.title}</h3>
                <p className="solution-card__desc">{solution.description}</p>
                <a href="#solutions" className={`btn ${solution.btnClass} solution-card__btn`}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
