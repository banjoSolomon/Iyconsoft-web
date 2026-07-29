import React, { useEffect } from "react";
import "../styles/contact/ContactPage.css";
import heroImg        from "../assets/images/contact uslogo.png";
import phoneIcon      from "../assets/images/Group 62 contact us.png";
import emailIcon      from "../assets/images/Group 64 contact us.png";
import websiteIcon    from "../assets/images/Group 65 contactus.png";
import mapPin         from "../assets/images/MapPin.png";
import callerLogo     from "../assets/images/Group 39.png";
import itravelLogo    from "../assets/images/itravel_logo-removebg-preview (1) 1.png";
import vvpssLogo      from "../assets/images/vvpss logo 1.png";
import teticketLogo   from "../assets/images/Group 41.png";

/* ── Contact Info Cards ── */
const infoCards = [
  {
    icon: phoneIcon,
    label: "Phone",
    value: "+234 906 362 8282",
    href: "tel:+2349063628282",
    color: "#6c3ef4",
    bg: "#f0ebff",
  },
  {
    icon: emailIcon,
    label: "E-mail",
    value: "tech@iyconsoft.com",
    href: "mailto:tech@iyconsoft.com",
    color: "#f39c12",
    bg: "#fff8ec",
  },
  {
    icon: websiteIcon,
    label: "Website",
    value: "www.iyconsoft.com",
    href: "https://www.iyconsoft.com",
    color: "#CC2360",
    bg: "#fef0f5",
  },
  {
    icon: mapPin,
    label: "Location",
    value: "9 Durban Street, Wuse 2, Abuja.",
    href: "https://maps.google.com/?q=Wuse+2+Abuja",
    color: "#00bcd4",
    bg: "#e8fafd",
  },
];

/* ── Support cards ── */
const supportCards = [
  {
    logo: callerLogo,
    title: "Caller Services",
    desc: "Support for WhoDeyCall and MyCaller subscription services.",
    color: "#6c3ef4",
    bg: "#f0ebff",
    link: "/solutions#sol-caller",
  },
  {
    logo: itravelLogo,
    title: "iTravel",
    desc: "Assistance with ticketing and booking solutions.",
    color: "#00bcd4",
    bg: "#e8fafd",
    link: "/solutions#sol-itravel",
  },
  {
    logo: vvpssLogo,
    title: "VVPSS",
    desc: "Support for virtual voting, polling and survey systems.",
    color: "#1a6e3a",
    bg: "#f0fff4",
    link: "/solutions#sol-vvpss",
  },
  {
    logo: teticketLogo,
    title: "TeTicket",
    desc: "Help with digital ticketing and revenue collection.",
    color: "#f39c12",
    bg: "#fff8ec",
    link: "/solutions#sol-teticket",
  },
];

/* ── Social handles ── */
const socials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
    ),
    label: "LinkedIn",
    handle: "@iyconsoft.Solutions",
    href: "https://www.linkedin.com/company/iyconsoft",
    color: "#0077b5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    ),
    label: "Instagram",
    handle: "@iyconsoft.Solutions",
    href: "https://www.instagram.com/p/DbC1hjXNFsm/",
    color: "#e1306c",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
    label: "Facebook",
    handle: "@iyconsoft.Solutions",
    href: "https://www.facebook.com/share/p/1EcBNHfPmc/",
    color: "#1877f2",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/></svg>
    ),
    label: "TikTok",
    handle: "@iyconsoft.Solutions",
    href: "https://vt.tiktok.com/ZSX4s951X/",
    color: "#010101",
  },
];

const ContactPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you shortly.");
    e.target.reset();
  };

  return (
    <main className="contact-page">

      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero__container">
          <div className="contact-hero__content reveal-left">
            <p className="contact-hero__eyebrow">Get In Touch</p>
            <h1 className="contact-hero__title">
              Let's Build Innovative<br />
              Digital Experiences<br />
              <span className="contact-hero__title-accent">Together.</span>
            </h1>
            <p className="contact-hero__desc">
              Whether you have questions about our solutions, need technical support, or want
              to discuss a partnership, our team is ready to help you transform your ideas
              into impactful digital experiences.
            </p>
            <div className="contact-hero__actions">
              <a href="#contact-form" className="contact-hero__btn contact-hero__btn--dark">
                Contact Us
              </a>
              <a href="/solutions" className="contact-hero__btn contact-hero__btn--outline">
                Explore Solutions
              </a>
            </div>
          </div>
          <div className="contact-hero__image reveal-right">
            <img src={heroImg} alt="Iyconsoft Contact" />
          </div>
        </div>
      </section>

      {/* ── Contact Info ── */}
      <section className="contact-info">
        <div className="contact-info__container">
          <h2 className="contact-info__title reveal">Contact Information</h2>
          <p className="contact-info__sub reveal">Reach out to us through any of the channels below.</p>
          <div className="contact-info__cards stagger">
            {infoCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-info__card reveal-scale"
                style={{ "--ci-color": c.color, "--ci-bg": c.bg }}
              >
                <div className="contact-info__card-icon">
                  <img src={c.icon} alt={c.label} />
                </div>
                <span className="contact-info__card-label">{c.label}</span>
                <span className="contact-info__card-value">{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="contact-form-section" id="contact-form">
        <div className="contact-form__container">
          <h2 className="contact-form__title reveal">Send Us a Message</h2>
          <p className="contact-form__sub reveal">Fill out the form below and our team will respond as soon as possible.</p>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="contact-form__group">
                <input type="text" placeholder="Name" required className="contact-form__input" />
              </div>
              <div className="contact-form__group">
                <input type="email" placeholder="E-mail" required className="contact-form__input" />
              </div>
            </div>
            <div className="contact-form__row">
              <div className="contact-form__group">
                <input type="tel" placeholder="Phone Number" className="contact-form__input" />
              </div>
              <div className="contact-form__group">
                <input type="text" placeholder="Subject" required className="contact-form__input" />
              </div>
            </div>
            <div className="contact-form__group contact-form__group--full">
              <textarea
                placeholder="Message"
                rows={6}
                required
                className="contact-form__input contact-form__textarea"
              />
            </div>
            <button type="submit" className="contact-form__submit">
              Send Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* ── Support Cards ── */}
      <section className="contact-support">
        <div className="contact-support__container">
          <div className="contact-support__left reveal-left">
            <h2 className="contact-support__title">Need Support?</h2>
            <p className="contact-support__sub">
              Get dedicated help for any of our products. Our support team is ready to assist you.
            </p>
          </div>
          <div className="contact-support__cards stagger">
            {supportCards.map((s) => (
              <a
                key={s.title}
                href={s.link}
                className="contact-support__card reveal-scale"
                style={{ "--cs-color": s.color, "--cs-bg": s.bg }}
              >
                <div className="contact-support__card-logo">
                  <img src={s.logo} alt={s.title} />
                </div>
                <h3 className="contact-support__card-title">{s.title}</h3>
                <p className="contact-support__card-desc">{s.desc}</p>
                <span className="contact-support__card-link">
                  Learn More →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social + Connect ── */}
      <section className="contact-social">
        <div className="contact-social__container">
          <div className="contact-social__left reveal-left">
            <h2 className="contact-social__title">Connect With Us</h2>
            <p className="contact-social__sub">
              Stay connected and follow Iyconsoft for updates, innovations, and insights.
            </p>
          </div>
          <div className="contact-social__right reveal-right">
            <h3 className="contact-social__handles-title">Social Media Handles</h3>
            <div className="contact-social__handles">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social__handle"
                  style={{ "--sh-color": s.color }}
                >
                  <div className="contact-social__handle-icon">
                    {s.icon}
                  </div>
                  <span className="contact-social__handle-text">{s.handle}</span>
                  <svg className="contact-social__handle-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="contact-cta">
        <div className="contact-cta__orb contact-cta__orb--1"></div>
        <div className="contact-cta__orb contact-cta__orb--2"></div>
        <div className="contact-cta__container">
          <div className="contact-cta__text reveal-left">
            <h2 className="contact-cta__title">Ready to Transform your Business?</h2>
            <p className="contact-cta__sub">
              Let's discuss how Iyconsoft can help you deliver innovative digital experiences
              across telecommunications, transportation, government, and enterprise sectors.
            </p>
          </div>
          <div className="contact-cta__actions reveal-right">
            <a href="#contact-form" className="contact-cta__btn contact-cta__btn--primary">
              Contact Us
            </a>
            <a href="/careers" className="contact-cta__btn contact-cta__btn--outline">
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;
