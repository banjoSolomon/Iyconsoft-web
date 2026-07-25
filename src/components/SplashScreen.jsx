import React, { useEffect, useState } from "react";
import "../styles/SplashScreen.css";
import logo from "../assets/images/Logo_Iyconsoft 1.png";

const SplashScreen = ({ onFinish }) => {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Start fade-out after 4.4s, then notify parent at 5s
    const fadeTimer = setTimeout(() => setHiding(true), 4400);
    const doneTimer = setTimeout(() => onFinish(), 5000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash${hiding ? " splash--hide" : ""}`}>
      {/* Animated background orbs */}
      <div className="splash__orb splash__orb--1"></div>
      <div className="splash__orb splash__orb--2"></div>
      <div className="splash__orb splash__orb--3"></div>

      <div className="splash__content">
        {/* Logo */}
        <div className="splash__logo-wrap">
          <img src={logo} alt="Iyconsoft" className="splash__logo" />
        </div>

        {/* Brand name */}
        <p className="splash__brand">iyconsoft</p>

        {/* Loading bar */}
        <div className="splash__bar-track">
          <div className="splash__bar-fill"></div>
        </div>

        {/* Loading text */}
        <p className="splash__label">Loading experience...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
