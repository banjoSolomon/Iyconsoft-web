import React from "react";
import "../../styles/about/VisionMission.css";
import eyeIcon from "../../assets/images/Eye.png";
import targetIcon from "../../assets/images/Vector.png";

const VisionMission = () => {
  return (
    <section className="vision-mission">
      <div className="vision-mission__container">
        <div className="vision-mission__header reveal">
          <h2 className="vision-mission__title">Vision &amp; Mission</h2>
        </div>

        <div className="vision-mission__cards stagger">
          {/* Vision */}
          <div className="vm-card vm-card--vision reveal-left">
            <div className="vm-card__icon-wrap">
              <img src={eyeIcon} alt="Vision" className="vm-card__icon" />
            </div>
            <h3 className="vm-card__heading">Our Vision</h3>
            <p className="vm-card__text">
              To become a leading provider of innovative digital solutions that connect
              people and businesses seamlessly.
            </p>
          </div>

          {/* Mission */}
          <div className="vm-card vm-card--mission reveal-right">
            <div className="vm-card__icon-wrap">
              <img src={targetIcon} alt="Mission" className="vm-card__icon" />
            </div>
            <h3 className="vm-card__heading">Our Mission</h3>
            <p className="vm-card__text">
              To deliver reliable, secure, and accessible technology solutions that
              simplify everyday experiences and drive digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
