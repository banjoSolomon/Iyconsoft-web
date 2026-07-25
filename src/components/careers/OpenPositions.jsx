import React from "react";
import "../../styles/careers/OpenPositions.css";
import briefcaseIcon from "../../assets/images/Briefcase.png";

const hiringSteps = [
  { step: "01", label: "Apply", desc: "Submit your CV and application online." },
  { step: "02", label: "Review", desc: "Our team reviews your profile within 3–5 days." },
  { step: "03", label: "Interview", desc: "A conversation to learn more about you." },
  { step: "04", label: "Assessment", desc: "A short task relevant to the role." },
  { step: "05", label: "Offer", desc: "We make it official and welcome you aboard." },
];

const OpenPositions = () => {
  return (
    <section className="open-positions" id="open-positions">
      <div className="open-positions__header reveal">
        <p className="open-positions__eyebrow">Join the Team</p>
        <h2 className="open-positions__heading">Opportunities</h2>
      </div>

      <div className="open-positions__container">
        {/* Left: No current openings */}
        <div className="open-positions__no-roles reveal-left">
          <div className="open-positions__no-roles-icon">
            <img src={briefcaseIcon} alt="Briefcase" />
          </div>
          <h3 className="open-positions__no-roles-title">No Current Openings</h3>
          <p className="open-positions__no-roles-text">
            We're always looking for exceptional talent. Send us your CV and we'll keep
            your profile for future opportunities.
          </p>
          <a href="mailto:tech@iyconsoft.com" className="open-positions__submit-btn">
            Submit Resume →
          </a>
        </div>

        {/* Right: Hiring process */}
        <div className="open-positions__process reveal-right">
          <h3 className="open-positions__process-title">Our Hiring Process</h3>
          <div className="open-positions__steps stagger">
            {hiringSteps.map((s, i) => (
              <div key={s.step} className="open-positions__step reveal">
                <div className="open-positions__step-connector">
                  <div
                    className="open-positions__step-dot"
                    style={{ "--step-color": i % 2 === 0 ? "#CC2360" : "#6c3ef4" }}
                  ></div>
                  {i < hiringSteps.length - 1 && (
                    <div className="open-positions__step-line"></div>
                  )}
                </div>
                <div className="open-positions__step-body">
                  <span className="open-positions__step-num">{s.step}</span>
                  <div>
                    <h4 className="open-positions__step-label">{s.label}</h4>
                    <p className="open-positions__step-desc">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
