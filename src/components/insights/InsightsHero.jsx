import React from "react";
import "../../styles/insights/InsightsHero.css";
import insightsData from "../../data/insightsData";

const CalendarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const InsightsHero = ({ onReadArticle }) => {
  const featured = insightsData.find((a) => a.featured);

  return (
    <section className="ins-hero">
      {/* Banner */}
      <div className="ins-hero__banner">
        <div className="ins-hero__banner-inner">
          <h1 className="ins-hero__page-title">
            Iyconsoft{" "}
            <span className="ins-hero__title-shimmer">Insights</span>
          </h1>
          <p className="ins-hero__banner-sub">
            News, guides, and stories from the Iyconsoft team
          </p>
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <div className="ins-hero__featured-wrap">
          <div className="ins-hero__section-label">Featured Story</div>

          <div className="ins-hero__featured-card reveal">
            {/* Left: image */}
            <div className="ins-hero__featured-img-side">
              <img src={featured.image} alt={featured.title} />
              <div className="ins-hero__featured-img-overlay" />
              <div className="ins-hero__featured-badges">
                <span className="ins-hero__featured-badge-feat">Featured</span>
              </div>
            </div>

            {/* Right: content */}
            <div className="ins-hero__featured-content-side">
              <span
                className="ins-hero__featured-cat"
                style={{
                  color: featured.categoryColor,
                  borderColor: `${featured.categoryColor}40`,
                  background: `${featured.categoryColor}10`,
                }}
              >
                {featured.category}
              </span>

              <h2 className="ins-hero__featured-title">{featured.title}</h2>
              <p className="ins-hero__featured-excerpt">{featured.excerpt}</p>

              <div className="ins-hero__featured-meta">
                <span><ClockIcon />{featured.readTime}</span>
                <span><CalendarIcon />{featured.date}</span>
                <span>By {featured.author}</span>
              </div>

              <div className="ins-hero__featured-tags">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="ins-hero__tag"
                    style={{
                      background: `${featured.categoryColor}12`,
                      color: featured.categoryColor,
                      border: `1px solid ${featured.categoryColor}30`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button className="ins-hero__read-btn" onClick={() => onReadArticle(featured)}>
                Read Full Article <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InsightsHero;
