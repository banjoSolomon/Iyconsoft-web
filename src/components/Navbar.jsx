import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/Logo_Iyconsoft 1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="Iyconsoft Logo" />
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => `navbar__link${isActive ? " navbar__link--active" : ""}`} onClick={closeMenu} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `navbar__link${isActive ? " navbar__link--active" : ""}`} onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/solutions" className={({ isActive }) => `navbar__link${isActive ? " navbar__link--active" : ""}`} onClick={closeMenu}>
              Solutions
            </NavLink>
          </li>
          <li><a href="#industries" className="navbar__link" onClick={closeMenu}>Industries</a></li>
          <li><a href="#insights" className="navbar__link" onClick={closeMenu}>Insights</a></li>
          <li><a href="#careers" className="navbar__link" onClick={closeMenu}>Careers</a></li>
          <li><a href="#faq" className="navbar__link" onClick={closeMenu}>FAQs</a></li>
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="navbar__cta">Contact Us</a>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
