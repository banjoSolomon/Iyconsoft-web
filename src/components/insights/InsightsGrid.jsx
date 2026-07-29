import React, { useState, useMemo } from "react";
import "../../styles/insights/InsightsGrid.css";
import insightsData, { categories } from "../../data/insightsData";

const InsightsGrid = ({ onReadArticle }) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return insightsData
      .filter((a) => !a.featured) // exclude featured (shown in hero)
      .filter((a) => activeCategory === "All" || a.category === activeCategory)
      .filter((a) => {
        const q = search.toLowerCase();
        return (
          !q ||
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
  }, [search, activeCategory]);

  return (
    <section className="ins-grid">
      <div className="ins-grid__container">
        {/* Header + search */}
        <div className="ins-grid__header reveal">
          <h2 className="ins-grid__title">More Articles</h2>
          <div className="ins-grid__search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa", fontSize: "0.85rem" }}
              >✕</button>
            )}
          </div>
        </div>

        {/* Category filters */}
        <div className="ins-grid__filters reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`ins-grid__filter ${activeCategory === cat ? "ins-grid__filter--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="ins-grid__count">
          {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Cards */}
        <div className="ins-grid__cards">
          {filtered.length === 0 ? (
            <p className="ins-grid__empty">No articles found for your search.</p>
          ) : (
            filtered.map((article) => (
              <div
                key={article.id}
                className="ins-card"
                style={{ "--card-accent": article.categoryColor }}
                onClick={() => onReadArticle(article)}
              >
                <div className="ins-card__image">
                  <img src={article.image} alt={article.title} />
                  <span
                    className="ins-card__cat"
                    style={{ background: article.categoryColor }}
                  >
                    {article.category}
                  </span>
                </div>
                <div className="ins-card__body">
                  <h3 className="ins-card__title">{article.title}</h3>
                  <p className="ins-card__excerpt">{article.excerpt}</p>
                  <div className="ins-card__divider" />
                  <div className="ins-card__meta">
                    <span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {article.readTime}
                    </span>
                    <span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {article.date}
                    </span>
                  </div>
                  <div className="ins-card__tags">
                    {article.tags.map((t) => (
                      <span
                        key={t}
                        className="ins-card__tag"
                        style={{
                          background: `${article.categoryColor}12`,
                          color: article.categoryColor,
                          border: `1px solid ${article.categoryColor}30`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="ins-card__read-btn">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default InsightsGrid;
