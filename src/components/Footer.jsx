import React from "react";
import "../styles/Footer.css";
import logo from "../assets/images/Logo_Iyconsoft 1.png";
import mapPin from "../assets/images/MapPin.png";
import phoneCall from "../assets/images/PhoneCall.png";
import envelope from "../assets/images/Envelope.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <img src={logo} alt="Iyconsoft" onError={(e) => { e.target.style.display = "none"; }} />
            </a>
            <p className="footer__brand-desc">
              Iyconsoft is dedicated to transforming everyday experiences through innovative USSD and
              digital solutions that work with or without internet connectivity.
            </p>
            <ul className="footer__contact">
              <li>
                <img src={mapPin} alt="Location" className="footer__contact-icon" />
                9 Durban Street, Wuse 2, Abuja.
              </li>
              <li>
                <img src={envelope} alt="Email" className="footer__contact-icon" />
                <a href="mailto:info@iyconsoft.com">info@iyconsoft.com</a>
              </li>
              <li>
                <img src={phoneCall} alt="Phone" className="footer__contact-icon" />
                <a href="tel:+2340809661333">+234 (0) 809-661-333</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/industries">Industries</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer__col">
            <h4 className="footer__heading">Solutions</h4>
            <ul className="footer__links">
              <li><a href="/solutions#sol-caller">Caller Services</a></li>
              <li><a href="/solutions#sol-itravel">iTravel</a></li>
              <li><a href="/solutions#sol-vvpss">VVPSS</a></li>
              <li><a href="/solutions#sol-teticket">TeTicket</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer__col">
            <h4 className="footer__heading">Legal</h4>
            <ul className="footer__links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Use</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="footer__col">
            <h4 className="footer__heading">Hours</h4>
            <p className="footer__hours">Mon - Fri</p>
            <p className="footer__hours">8AM – 5PM</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">2026 Iyconsoft. All Rights Reserved.</p>
          <div className="footer__social">
            <span className="footer__social-label">Follow Us:</span>
            <a href="https://www.facebook.com/share/p/1EcBNHfPmc/?mibextid=wwXIfr" className="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/iyconsoft" className="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/p/DbC1hjXNFsm/?igsh=OTh4ZWw3YjA5djll" className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://vt.tiktok.com/ZSX4s951X/" className="footer__social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/></svg>
            </a>
            <a href="https://x.com/iyconsoftltd/status/2051222369667096670?s=20" className="footer__social-link" aria-label="X / Twitter" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
