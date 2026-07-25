import React from "react";
import "../../styles/careers/WhyJoinUs.css";
import briefcaseIcon from "../../assets/images/Briefcase.png";
import usersIcon from "../../assets/images/UsersFour.png";
import rocketIcon from "../../assets/images/Rocket.png";
import bulbIcon from "../../assets/images/LightbulbFilament.png";

const reasons = [
  {
    icon: briefcaseIcon,
    title: "Meaningful Work",
    desc: "Build solutions that impact millions of users.",
    accent: "#f39c12",
    bg: "#fff8ec",
  },
  {
    icon: usersIcon,
    title: "Inclusive Culture",
    desc: "Work with talented and diverse teams.",
    accent: "#CC2360",
    bg: "#fef0f5",
  },
  {
    icon: rocketIcon,
    title: "Career Growth",
    desc: "Develop your skills and advance your career.",
    accent: "#00bcd4",
    bg: "#e8fafd",
  },
  {
    icon: bulbIcon,
    title: "Innovation-Driven",
    desc: "Contribute to cutting-edge digital solutions.",
    accent: "#6c3ef4",
    bg: "#f0ebff",
  },
];

const WhyJoinUs = () => {
  return (
    <section className="why-join">
      <div className="why-join__container">
        {/* Left: heading */}
        <div className="why-join__left reveal-left">
          <p className="why-join__eyebrow">Our Values</p>
          <h2 className="why-join__heading">Why Join Us?</h2>
          <p className="why-join__sub">
            We're more than a workplace — we're a community of builders, thinkers,
            and innovators working together to shape the future.
          </p>
          <a href="#open-positions" className="why-join__cta">
            See Open Positions
          </a>
        </div>

        {/* Right: 2x2 cards */}
        <div className="why-join__cards stagger">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="why-join__card reveal-scale"
              style={{ "--card-bg": r.bg, "--card-accent": r.accent }}
            >
              <div className="why-join__card-icon">
                <img src={r.icon} alt={r.title} />
              </div>
              <h3 className="why-join__card-title">{r.title}</h3>
              <p className="why-join__card-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
