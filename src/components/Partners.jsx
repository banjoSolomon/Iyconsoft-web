import React from "react";
import "../styles/Partners.css";
import airtelLogo    from "../assets/images/airtelmycaller.png";
import mtnLogo       from "../assets/images/Mtnwhodeycall.jpg";
import guoLogo       from "../assets/images/Guopartnals.jpg";
import eternalLogo   from "../assets/images/eternalpartnal.jpg";
import greenSwishLogo from "../assets/images/greenswishpartnal.png";
import johnHoltLogo  from "../assets/images/johnholtpartnal.png";
import wemaBankLogo  from "../assets/images/wemabankpartnal.png";
import trippleGLogo  from "../assets/images/TrippleGpartnals.png";

const partners = [
  { name: "Airtel Nigeria",    logo: airtelLogo,     color: "#CC2360", bg: "#fef0f5" },
  { name: "MTN Nigeria",       logo: mtnLogo,        color: "#f5a623", bg: "#fff8ec" },
  { name: "GUO Transport",     logo: guoLogo,        color: "#1a1a6e", bg: "#eef0ff" },
  { name: "Eternal Energy",    logo: eternalLogo,    color: "#f5a623", bg: "#fff8ec" },
  { name: "Greenwich",         logo: greenSwishLogo, color: "#1a6e3a", bg: "#f0fff4" },
  { name: "John Holt",         logo: johnHoltLogo,   color: "#e03030", bg: "#fff0f0" },
  { name: "Wema Bank",         logo: wemaBankLogo,   color: "#6c3ef4", bg: "#f0ebff" },
  { name: "Tripple G",         logo: trippleGLogo,   color: "#1a1a6e", bg: "#eef0ff" },
];

// Double for seamless infinite loop
const items = [...partners, ...partners];

const Partners = () => (
  <section className="partners">

    {/* Header */}
    <div className="partners__header reveal">
      <div className="partners__header-line">
        <span className="partners__eyebrow">Our Partners & Clients</span>
      </div>
      <h2 className="partners__title">
        Trusted by <span>Leading Organisations</span>
      </h2>
      <p className="partners__sub">
        Powering digital solutions for businesses and institutions across Nigeria
      </p>
    </div>

    {/* Scrolling strip */}
    <div className="partners__track-wrap">
      <div className="partners__fade partners__fade--left" />
      <div className="partners__fade partners__fade--right" />

      <div className="partners__track">
        {items.map((p, i) => (
          <div
            key={i}
            className="partners__item"
            style={{ "--p-color": p.color, "--p-bg": p.bg }}
          >
            <div className="partners__logo-wrap">
              <img src={p.logo} alt={p.name} className="partners__logo" />
            </div>
            <span className="partners__name">{p.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Count */}
    <div className="partners__count reveal">
      <p><strong>{partners.length}+</strong> trusted partners and clients</p>
    </div>

  </section>
);

export default Partners;
