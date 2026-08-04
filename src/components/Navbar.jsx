import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/Logo_Iyconsoft 1.png";
import NavSearch from "./NavSearch";

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
          <li>
            <NavLink to="/industries" className={({ isActive }) => `navbar__link${isActive ? " navbar__link--active" : ""}`} onClick={closeMenu}>
              Industries
            </NavLink>
          </li>
          <li>
            <NavLink to="/insights" className={({ isActive }) => `navbar__link${isActive ? " navbar__link--active" : ""}`} onClick={closeMenu}>
              Insights
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" className={({ isActive }) => `navbar__link${isActive ? " navbar__link--active" : ""}`} onClick={closeMenu}>
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className={({ isActive }) => `navbar__link${isActive ? " navbar__link--active" : ""}`} onClick={closeMenu}>
              FAQs
            </NavLink>
          </li>
        </ul>

        {/* CTA Button */}
        <NavSearch />
        <a href="/contact" className="navbar__cta">Contact Us</a>

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
