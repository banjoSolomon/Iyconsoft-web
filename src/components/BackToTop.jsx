import React, { useState, useEffect } from "react";
import "../styles/BackToTop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPct(Math.min(pct, 100));
      setVisible(scrollTop > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle progress
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (scrollPct / 100) * circumference;

  return (
    <button
      className={`btt ${visible ? "btt--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      {/* Progress ring */}
      <svg className="btt__ring" viewBox="0 0 48 48">
        {/* Track */}
        <circle
          cx="24" cy="24" r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="3"
        />
        {/* Progress */}
        <circle
          cx="24" cy="24" r={radius}
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform="rotate(-90 24 24)"
          className="btt__progress"
        />
      </svg>
      {/* Arrow icon */}
      <svg className="btt__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  );
};

export default BackToTop;
