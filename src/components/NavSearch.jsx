import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavSearch.css";
import searchIndex from "../data/searchIndex";

/* Category → icon + colors */
const categoryMeta = {
  Page:     { color: "#6c3ef4", bg: "#f0ebff" },
  Product:  { color: "#CC2360", bg: "#fef0f5" },
  Industry: { color: "#00bcd4", bg: "#e8fafd" },
  Careers:  { color: "#f39c12", bg: "#fff8ec" },
  FAQ:      { color: "#1a6e3a", bg: "#f0fff4" },
};

const CategoryIcon = ({ category }) => {
  const icons = {
    Page: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </svg>
    ),
    Product: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    Industry: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    Careers: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    FAQ: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  };
  return icons[category] || icons.Page;
};

/* Highlight matched text */
const highlight = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i}>{part}</mark> : part
  );
};

const NavSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  /* Open with Ctrl+K / Cmd+K */
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* Focus input when opened */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    else setQuery("");
  }, [open]);

  /* Filter results */
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex.filter((item) =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.toLowerCase().includes(q))
    ).slice(0, 8);
  }, [query]);

  /* Group by category */
  const grouped = useMemo(() => {
    const map = {};
    results.forEach((r) => {
      if (!map[r.category]) map[r.category] = [];
      map[r.category].push(r);
    });
    return map;
  }, [results]);

  /* Keyboard navigation */
  const handleKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, results.length - 1)); }
    if (e.key === "ArrowUp")   { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
    if (e.key === "Enter" && results[activeIdx]) {
      navigate(results[activeIdx].path);
      setOpen(false);
    }
  };

  const goTo = (path) => {
    navigate(path);
    setOpen(false);
  };

  let flatIdx = 0;

  return (
    <>
      {/* Search trigger button */}
      <button
        className="ns-trigger"
        onClick={() => setOpen(true)}
        aria-label="Search"
        title="Search (Ctrl+K)"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>

      {/* Search overlay */}
      {open && (
        <div className="ns-overlay" onClick={() => setOpen(false)}>
          <div className="ns-modal" onClick={(e) => e.stopPropagation()}>

            {/* Input */}
            <div className="ns-input-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                ref={inputRef}
                className="ns-input"
                placeholder="Search pages, products, FAQs..."
                value={query}
                onChange={(e) => { setQuery(e.target.value); setActiveIdx(0); }}
                onKeyDown={handleKey}
                autoComplete="off"
              />
              <button className="ns-close" onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Results */}
            <div className="ns-results">
              {query.trim() === "" ? (
                <div className="ns-hint">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  Type to search pages, products, FAQs and more
                </div>
              ) : results.length === 0 ? (
                <div className="ns-hint">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  No results for "<strong>{query}</strong>"
                </div>
              ) : (
                Object.entries(grouped).map(([cat, items], gi) => {
                  const meta = categoryMeta[cat] || categoryMeta.Page;
                  return (
                    <div key={cat}>
                      {gi > 0 && <div className="ns-divider" />}
                      <p className="ns-section-label">{cat}</p>
                      {items.map((item) => {
                        const idx = flatIdx++;
                        const isActive = idx === activeIdx;
                        return (
                          <div
                            key={item.path + item.title}
                            className={`ns-item ${isActive ? "ns-item--active" : ""}`}
                            onClick={() => goTo(item.path)}
                            onMouseEnter={() => setActiveIdx(idx)}
                          >
                            <div className="ns-item__icon" style={{ "--ic-color": meta.color, "--ic-bg": meta.bg }}>
                              <CategoryIcon category={cat} />
                            </div>
                            <div className="ns-item__body">
                              <span className="ns-item__title">{highlight(item.title, query)}</span>
                              <span className="ns-item__desc">{item.desc}</span>
                            </div>
                            <span className="ns-item__badge" style={{ "--ic-color": meta.color, "--ic-bg": meta.bg }}>
                              {cat}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="ns-footer">
              <span className="ns-footer-hint">
                <span className="ns-kbd">↑↓</span> navigate
              </span>
              <span className="ns-footer-hint">
                <span className="ns-kbd">Enter</span> go
              </span>
              <span className="ns-footer-hint">
                <span className="ns-kbd">Esc</span> close
              </span>
              <span className="ns-footer-hint" style={{ marginLeft: "auto" }}>
                <span className="ns-kbd">Ctrl</span>+<span className="ns-kbd">K</span> to open
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default NavSearch;
