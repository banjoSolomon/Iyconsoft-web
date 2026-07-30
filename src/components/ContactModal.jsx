import React, { useEffect } from "react";
import "../styles/ContactModal.css";
import phoneIcon from "../assets/images/PhoneCall.png";
import envelopeIcon from "../assets/images/Envelope.png";

const ContactModal = ({ onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="cmodal__overlay" onClick={onClose}>
      <div className="cmodal__box" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="cmodal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* Header */}
        <div className="cmodal__header">
          <div className="cmodal__icon-wrap">
            <img src={phoneIcon} alt="Phone" />
          </div>
          <h2 className="cmodal__title">Get In Touch</h2>
          <p className="cmodal__sub">We'd love to hear from you. Reach us through any of the channels below.</p>
        </div>

        {/* Contact items */}
        <div className="cmodal__items">
          <a href="tel:+2349063628281" className="cmodal__item">
            <div className="cmodal__item-icon" style={{ background: "#fef0f5" }}>
              <img src={phoneIcon} alt="Phone" />
            </div>
            <div className="cmodal__item-body">
              <span className="cmodal__item-label">Call Us</span>
              <span className="cmodal__item-value">+234 (0) 906-362-8281</span>
            </div>
            <span className="cmodal__item-arrow">→</span>
          </a>

          <a href="mailto:tech@iyconsoft.com" className="cmodal__item">
            <div className="cmodal__item-icon" style={{ background: "#e8fafd" }}>
              <img src={envelopeIcon} alt="Email" />
            </div>
            <div className="cmodal__item-body">
              <span className="cmodal__item-label">Email Us</span>
              <span className="cmodal__item-value">tech@iyconsoft.com</span>
            </div>
            <span className="cmodal__item-arrow">→</span>
          </a>
        </div>

        {/* Hours note */}
        <p className="cmodal__hours">
          🕐 Available Mon – Fri, 8AM – 5PM (WAT)
        </p>
      </div>
    </div>
  );
};

export default ContactModal;
