import React from "react";
import "../../styles/about/Leadership.css";
import ceoPic   from "../../assets/images/Ikechukwu Kalu ceo.jpeg";
import adminPic from "../../assets/images/Dimma team lead.jpeg";
import techPic  from "../../assets/images/Adeel teamlead.jpeg";
import bizPic   from "../../assets/images/Joachim team lead1.jpeg";
import opsPic   from "../../assets/images/Austina team lead2.jpeg";

const LeaderCard = ({ photo, name, title, accent, bg, extraClass = "" }) => (
  <div
    className={`leader-card reveal-scale ${extraClass}`}
    style={{ "--accent": accent, "--card-bg": bg }}
  >
    <div className="leader-card__photo-wrap">
      <img src={photo} alt={name} className="leader-card__photo" />
      {/* Hover overlay */}
      <div className="leader-card__hover-overlay">
        <p className="leader-card__hover-name">{name}</p>
        <p className="leader-card__hover-title">{title}</p>
      </div>
    </div>
    <div className="leader-card__info">
      <div className="leader-card__accent-bar"></div>
      <h3 className="leader-card__name">{name}</h3>
      <p className="leader-card__title">{title}</p>
    </div>
  </div>
);

const Leadership = () => (
  <section className="leadership">
    <div className="leadership__container">
      <div className="leadership__header reveal">
        <p className="leadership__eyebrow">The People Behind Iyconsoft</p>
        <h2 className="leadership__title">Meet Our Leadership Team</h2>
        <p className="leadership__subtitle">
          Passionate professionals driving innovation, growth, and impact.
        </p>
      </div>

      <div className="leadership__grid">

        {/* Row 1 — CEO centered */}
        <div className="leadership__row">
          <LeaderCard
            photo={ceoPic}
            name="Prince Ikechukwu Kalu"
            title="Chief Executive Officer"
            accent="#6c3ef4"
            bg="#f0ebff"
            extraClass="leader-card--ceo"
          />
        </div>

        {/* Row 2 — All 4 in one straight line */}
        <div className="leadership__row">
          <LeaderCard
            photo={adminPic}
            name="Chidimma Kalu"
            title="Admin & HR"
            accent="#CC2360"
            bg="#fef0f5"
          />
          <LeaderCard
            photo={techPic}
            name="Adeel Abbasi"
            title="Technical Team Lead"
            accent="#1a1a6e"
            bg="#eef0ff"
            extraClass="leader-card--adeel"
          />
          <LeaderCard
            photo={bizPic}
            name="Egwuonwu Ikechukwu Joachim"
            title="Business Development Team Lead"
            accent="#f39c12"
            bg="#fff8ec"
            extraClass="leader-card--joachim"
          />
          <LeaderCard
            photo={opsPic}
            name="Austina Unwana Ekpe"
            title="Operations Team Lead"
            accent="#00bcd4"
            bg="#e8fafd"
          />
        </div>

      </div>
    </div>
  </section>
);

export default Leadership;
