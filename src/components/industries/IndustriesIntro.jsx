import React from "react";
import "../../styles/industries/IndustriesIntro.css";
import useCountUp from "../../hooks/useCountUp";

// Each stat: numeric target + suffix displayed after the number
const stats = [
  { target: 4,   suffix: "+",  label: "Industries Served"  },
  { target: 10,  suffix: "K+", label: "Active Users"        },
  { target: 99,  suffix: "%",  label: "Uptime Reliability"  },
  { target: 5,   suffix: "+",  label: "Years of Innovation" },
];

// Individual animated stat — needs its own component so each hook call is isolated
const StatItem = ({ target, suffix, label }) => {
  const { count, ref } = useCountUp(target, 2200);

  return (
    <div className="ind-intro__stat reveal-scale" ref={ref}>
      <span className="ind-intro__stat-num">
        {count}{suffix}
      </span>
      <span className="ind-intro__stat-label">{label}</span>
    </div>
  );
};

const IndustriesIntro = () => (
  <section className="ind-intro">
    {/* Decorative orbs */}
    <div className="ind-intro__orb ind-intro__orb--1"></div>
    <div className="ind-intro__orb ind-intro__orb--2"></div>

    <div className="ind-intro__container">
      {/* Eyebrow */}
      <p className="ind-intro__eyebrow reveal">What We Cover</p>

      {/* Title */}
      <h2 className="ind-intro__title reveal">
        Supporting Organisations{" "}
        <span className="ind-intro__highlight">Across Diverse</span> Sectors
      </h2>

      {/* Description */}
      <p className="ind-intro__text reveal">
        Every industry has unique challenges and operational requirements. Iyconsoft develops
        scalable digital solutions that help organizations improve efficiency, enhance customer
        experiences, and accelerate digital transformation. Our technologies are designed to
        adapt to diverse environments while delivering secure, reliable, and accessible services.
      </p>

      {/* Divider */}
      <div className="ind-intro__divider reveal"></div>

      {/* Stats row — each counts up when scrolled into view */}
      <div className="ind-intro__stats stagger">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesIntro;
