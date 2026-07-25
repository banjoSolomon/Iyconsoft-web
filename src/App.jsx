import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/global.css";
import "./styles/animations.css";

import useScrollReveal from "./hooks/useScrollReveal";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import IndustriesPage from "./pages/IndustriesPage";

// Scroll reveal runs on every route render
const AppContent = () => {
  useScrollReveal();
  const location = useLocation();

  // Re-trigger scroll reveal on route change
  React.useEffect(() => {
    // Small delay lets new DOM elements mount first
    const t = setTimeout(() => {
      const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
      const elements = document.querySelectorAll(selectors);
      elements.forEach((el) => el.classList.remove("is-visible"));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
