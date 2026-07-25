import React from "react";
import "../styles/Solutions.css";
import myCallerIcon from "../assets/images/Group 39.png";
import teticketIcon from "../assets/images/Group 41.png";
import itravelIcon from "../assets/images/itravel_logo-removebg-preview (1) 1.png";
import vvpssIcon from "../assets/images/vvpss logo 1.png";

const solutions = [
  {
    id: 1,
    icon: myCallerIcon,
    iconBg: "#f0ebff",
    title: "MyCaller",
    description: "Know who's calling before you pick up.",
    btnColor: "#6c3ef4",
  },
  {
    id: 2,
    icon: teticketIcon,
    iconBg: "#fff4e0",
    title: "Teticket",
    description: "Seamless digital ticketing and payment collections.",
    btnColor: "#f39c12",
  },
  {
    id: 3,
    icon: itravelIcon,
    iconBg: "#e0f8ff",
    title: "iTravel",
    description: "Travel booking made easy.",
    btnColor: "#00bcd4",
  },
  {
    id: 4,
    icon: vvpssIcon,
    iconBg: "#eae4ff",
    title: "VVPSS",
    description: "Digital governance made simple.",
    btnColor: "#1a1a6e",
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
                <a
                  href="#solutions"
                  className="solution-card__btn"
                  style={{
                    background: solution.btnColor,
                    color: "#fff",
                    "--btn-hover": solution.btnColor,
                  }}
                >
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
