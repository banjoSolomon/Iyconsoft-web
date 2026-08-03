import React, { useState, useEffect } from "react";
import "../styles/CookieConsent.css";

const COOKIE_KEY = "iyconsoft_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Show banner only if user hasn't made a choice yet
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay so it doesn't clash with the splash screen
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (choice) => {
    localStorage.setItem(COOKIE_KEY, choice);
    setHiding(true);
    setTimeout(() => setVisible(false), 420);
  };

  const handleAccept = () => dismiss("accepted");
  const handleDecline = () => dismiss("declined");

  if (!visible) return null;

  return (
    <div className={`cookie ${hiding ? "cookie--hiding" : ""}`} role="dialog" aria-label="Cookie consent">
      <div className="cookie__inner">

        {/* Icon */}
        <div className="cookie__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1"/>
            <circle cx="8.5"  cy="9"  r="1.5" fill="currentColor" stroke="none"/>
            <circle cx="14.5" cy="14" r="1.5" fill="currentColor" stroke="none"/>
            <circle cx="14.5" cy="8"  r="1"   fill="currentColor" stroke="none"/>
            <circle cx="9"    cy="14.5" r="1"  fill="currentColor" stroke="none"/>
          </svg>
        </div>

        {/* Text */}
        <div className="cookie__text">
          <h3 className="cookie__title">We use cookies 🍪</h3>
          <p className="cookie__desc">
            We use cookies to improve your experience on our website. By accepting, you agree to our use of cookies as described in our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>

        {/* Actions */}
        <div className="cookie__actions">
          <button className="cookie__btn cookie__btn--decline" onClick={handleDecline}>
            Decline
          </button>
          <button className="cookie__btn cookie__btn--accept" onClick={handleAccept}>
            Accept All
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookieConsent;
