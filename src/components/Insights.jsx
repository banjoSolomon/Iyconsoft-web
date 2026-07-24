import React from "react";
import "../styles/Insights.css";
import insight1 from "../assets/images/insignt1.png";
import insight2 from "../assets/images/insight2.png";
import insight3 from "../assets/images/insignt3.png";

const Insights = () => {
  return (
    <section className="insights" id="insights">
      <div className="insights__container">

        {/* Left: 2-column image grid — bigger */}
        <div className="insights__grid reveal-left">
          {/* Column 1: two cards stacked */}
          <div className="insights__col">
            <div className="insights__card">
              <img src={insight3} alt="GUO Terminals insight" />
            </div>
            <div className="insights__card">
              <img src={insight1} alt="One Unknown Caller insight" />
            </div>
          </div>

          {/* Column 2: one tall card */}
          <div className="insights__col">
            <div className="insights__card insights__card--tall">
              <img src={insight2} alt="VVPSS Corporate Governance insight" />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="insights__content reveal-right">
          <h2 className="insights__title">Latest Insights</h2>
          <p className="insights__text">
            Explore our latest articles, updates and industry stories.
          </p>
          <a href="#insights" className="btn btn--dark insights__cta">Read More</a>
        </div>

      </div>
    </section>
  );
};

export default Insights;
