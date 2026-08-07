import React, { useState } from "react";
import "../styles/Videos.css";

// Product images used as video thumbnails
import wdcThumb    from "../assets/images/whodeycalltubnails.png";
import callerThumb from "../assets/images/mycallerthumbnails.png";
import wdc2Thumb   from "../assets/images/wodeycallthubnails2.png";
import vvpssThumb  from "../assets/images/vpssthumbnails.png";

const videos = [
  {
    id: 1,
    title: "WhoDeyCall — Know Who's Calling",
    desc: "See how WhoDeyCall on MTN identifies callers before you pick up — no internet, no app.",
    product: "WhoDeyCall",
    network: "MTN",
    color: "#f5a623",
    bg: "#fff8ec",
    thumb: wdcThumb,
    url: "https://www.instagram.com/reel/DXqmfmZDUTF/",
  },
  {
    id: 2,
    title: "MyCaller — Caller ID on Airtel",
    desc: "Watch how MyCaller helps Airtel subscribers identify unknown callers via flash SMS.",
    product: "MyCaller",
    network: "Airtel",
    color: "#CC2360",
    bg: "#fef0f5",
    thumb: callerThumb,
    url: "https://www.instagram.com/reel/DZ_9UeTtWPg/",
  },
  {
    id: 3,
    title: "WhoDeyCall — Subscriber Story",
    desc: "A real subscriber shares how WhoDeyCall changed the way they answer calls.",
    product: "WhoDeyCall",
    network: "MTN",
    color: "#f5a623",
    bg: "#fff8ec",
    thumb: wdc2Thumb,
    url: "https://www.instagram.com/reel/DYOmBMttOKC/",
  },
  {
    id: 4,
    title: "VVPSS — Digital Voting Platform",
    desc: "Discover how VVPSS powers secure, transparent elections and AGMs for organisations.",
    product: "VVPSS",
    network: null,
    color: "#1a6e3a",
    bg: "#f0fff4",
    thumb: vvpssThumb,
    url: "https://www.instagram.com/reel/DY6huTstiGP/",
  },
];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Videos = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="videos" id="videos">
      <div className="videos__container">

        {/* Header */}
        <div className="videos__header reveal">
          <p className="videos__eyebrow">
            <InstagramIcon />
            On Instagram
          </p>
          <h2 className="videos__title">
            See Our Products <span>In Action</span>
          </h2>
          <p className="videos__sub">
            Watch short demos and real stories from our product reels
          </p>
        </div>

        {/* Cards grid */}
        <div className="videos__grid stagger">
          {videos.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card reveal-scale"
              style={{ "--vc-color": v.color, "--vc-bg": v.bg }}
              onMouseEnter={() => setHoveredId(v.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Thumbnail */}
              <div className="video-card__thumb">
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="video-card__img"
                />
                {/* Dark overlay */}
                <div className="video-card__overlay" />

                {/* Play button */}
                <div className={`video-card__play ${hoveredId === v.id ? "video-card__play--active" : ""}`}>
                  <PlayIcon />
                </div>

                {/* Product + network badge */}
                <div className="video-card__badges">
                  <span className="video-card__product-badge"
                    style={{ background: v.bg, color: v.color }}>
                    {v.product}
                  </span>
                  {v.network && (
                    <span className="video-card__network-badge"
                      style={{ background: v.color, color: "#fff" }}>
                      {v.network}
                    </span>
                  )}
                </div>

                {/* Instagram label */}
                <div className="video-card__ig-label">
                  <InstagramIcon />
                  <span>Watch Reel</span>
                </div>
              </div>

              {/* Info */}
              <div className="video-card__body">
                <h3 className="video-card__title">{v.title}</h3>
                <p className="video-card__desc">{v.desc}</p>
                <span className="video-card__cta">
                  Watch on Instagram
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Follow us CTA */}
        <div className="videos__follow reveal">
          <a
            href="https://www.instagram.com/p/DbC1hjXNFsm/"
            target="_blank"
            rel="noopener noreferrer"
            className="videos__follow-btn"
          >
            <InstagramIcon />
            Follow @iyconsoft.Solutions for more
          </a>
        </div>

      </div>
    </section>
  );
};

export default Videos;
