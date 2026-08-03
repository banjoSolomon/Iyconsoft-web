import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    featured: true,
    text: "MyCaller has completely changed how I answer calls. I no longer pick up numbers I don't recognise blindly — the flash SMS tells me who's calling before I even touch my phone. It's brilliant.",
    name: "Adaeze O.",
    role: "Business Owner, Lagos",
    product: "MyCaller",
    initials: "AO",
    color: "#CC2360",
    bg: "#fef0f5",
    stars: 5,
  },
  {
    id: 2,
    text: "WhoDeyCall saved me from a scam. I got a call and the SMS showed an unfamiliar name — I didn't answer. Later I found out it was a fraud attempt. This service is a must-have for every MTN subscriber.",
    name: "Emeka T.",
    role: "IT Professional, Abuja",
    product: "WhoDeyCall",
    initials: "ET",
    color: "#f5a623",
    bg: "#fff8ec",
    stars: 5,
  },
  {
    id: 3,
    text: "iTravel made booking our company transport so easy. No queues, no cash, just dial the code and the tickets come straight to my phone. Our staff love it.",
    name: "Funke A.",
    role: "Operations Manager, Ibadan",
    product: "iTravel",
    initials: "FA",
    color: "#00bcd4",
    bg: "#e8fafd",
    stars: 5,
  },
  {
    id: 4,
    text: "We conducted our AGM entirely through VVPSS and it was seamless. Members voted remotely, results were instant, and there were zero disputes. Iyconsoft delivered exactly what they promised.",
    name: "Dr. Chuka N.",
    role: "Board Secretary, Lagos",
    product: "VVPSS",
    initials: "CN",
    color: "#1a6e3a",
    bg: "#f0fff4",
    stars: 5,
  },
  {
    id: 5,
    text: "TeTicket transformed our market levy collection. Revenue leakage dropped significantly and our agents are more accountable. The reporting dashboard gives us real-time visibility we never had before.",
    name: "Mallam Usman K.",
    role: "Revenue Officer, Kano",
    product: "TeTicket",
    initials: "UK",
    color: "#f39c12",
    bg: "#fff8ec",
    stars: 5,
  },
  {
    id: 6,
    text: "What impresses me most about Iyconsoft is that their solutions work on any phone without internet. Our rural customers can access services they never could before. That's real innovation.",
    name: "Ngozi E.",
    role: "Telecom Consultant, Port Harcourt",
    product: "MyCaller",
    initials: "NE",
    color: "#6c3ef4",
    bg: "#f0ebff",
    stars: 5,
  },
];

// All non-featured doubled for seamless scroll
const scrollItems = [
  ...testimonials.filter(t => !t.featured),
  ...testimonials.filter(t => !t.featured),
];

const Stars = ({ count }) => (
  <div className="test-card__stars">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="test-card__star">★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const featured = testimonials.find(t => t.featured);

  return (
    <section className="testimonials">
      {/* Background orbs */}
      <div className="testimonials__orb testimonials__orb--1" />
      <div className="testimonials__orb testimonials__orb--2" />
      <div className="testimonials__orb testimonials__orb--3" />

      <div className="testimonials__container">

        {/* Header */}
        <div className="testimonials__header reveal">
          <p className="testimonials__eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Client Testimonials
          </p>
          <h2 className="testimonials__title">
            Trusted by <span>Thousands</span> Across Nigeria
          </h2>
          <p className="testimonials__sub">
            Real stories from real users of our digital solutions
          </p>
        </div>

        {/* Featured card */}
        {featured && (
          <div
            className="test-card--featured reveal"
            style={{ "--tc-color": featured.color, "--tc-bg": featured.bg }}
          >
            <span className="test-card__quote-big">"</span>
            <div className="test-card__content">
              <Stars count={featured.stars} />
              <p className="test-card__text">"{featured.text}"</p>
              <div className="test-card__author-block">
                <div className="test-card__avatar">{featured.initials}</div>
                <div>
                  <span className="test-card__name">{featured.name}</span>
                  <span className="test-card__role">{featured.role}</span>
                </div>
              </div>
            </div>
            <span className="test-card__product">{featured.product}</span>
          </div>
        )}

        {/* Scrolling row */}
        <div className="testimonials__scroll-wrap">
          <div className="testimonials__scroll-fade testimonials__scroll-fade--left" />
          <div className="testimonials__scroll-fade testimonials__scroll-fade--right" />

          <div className="testimonials__scroll-track">
            {scrollItems.map((t, i) => (
              <div
                key={i}
                className="test-card--scroll"
                style={{ "--tc-color": t.color, "--tc-bg": t.bg }}
              >
                <span className="test-card__quote-sm">"</span>
                <Stars count={t.stars} />
                <p className="test-card__text">"{t.text}"</p>
                <div className="test-card__footer">
                  <div className="test-card__author">
                    <div className="test-card__avatar">{t.initials}</div>
                    <div>
                      <span className="test-card__name">{t.name}</span>
                      <span className="test-card__role">{t.role}</span>
                    </div>
                  </div>
                  <span className="test-card__product">{t.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="testimonials__stats">
          {[
            { num: "10K+", label: "Active Users" },
            { num: "5★",   label: "Average Rating" },
            { num: "5+",   label: "Years of Trust" },
            { num: "4",    label: "Products" },
          ].map((s, i) => (
            <div
              key={i}
              className="testimonials__stat reveal-scale"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="testimonials__stat-num testimonials__stat-num--grad">{s.num}</span>
              <span className="testimonials__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
