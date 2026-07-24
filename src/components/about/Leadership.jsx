import React from "react";
import "../../styles/about/Leadership.css";

const leaders = [
  { id: 1, name: "NAME", title: "TITLE", bg: "#e0f8ff" },
  { id: 2, name: "NAME", title: "TITLE", bg: "#f0ebff" },
  { id: 3, name: "NAME", title: "TITLE", bg: "#fff4e0" },
];

const Leadership = () => {
  return (
    <section className="leadership">
      <div className="leadership__container">
        <div className="leadership__header reveal">
          <h2 className="leadership__title">Meet Our Leadership Team</h2>
        </div>

        <div className="leadership__grid stagger">
          {leaders.map((leader) => (
            <div key={leader.id} className="leader-card reveal-scale" style={{ background: leader.bg }}>
              <div className="leader-card__image-placeholder">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <line x1="10" y1="10" x2="70" y2="70" stroke="#ccc" strokeWidth="2" />
                  <line x1="70" y1="10" x2="10" y2="70" stroke="#ccc" strokeWidth="2" />
                </svg>
              </div>
              <div className="leader-card__info">
                <h3 className="leader-card__name">{leader.name}</h3>
                <p className="leader-card__title">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
