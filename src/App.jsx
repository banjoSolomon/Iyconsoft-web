import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/global.css";
import "./styles/animations.css";

import useScrollReveal from "./hooks/useScrollReveal";

import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import IndustriesPage from "./pages/IndustriesPage";
import CareersPage from "./pages/CareersPage";
import FaqPage from "./pages/FaqPage";
import InsightsPage from "./pages/InsightsPage";

// Global contact modal context
export const ContactContext = React.createContext(null);

const AppContent = () => {
  useScrollReveal();
  const location = useLocation();
  const [showContact, setShowContact] = React.useState(false);

  // Re-trigger scroll reveal on route change
  React.useEffect(() => {
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

  // Intercept all #contact clicks globally
  React.useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a");
      if (link && link.getAttribute("href") === "#contact") {
        e.preventDefault();
        setShowContact(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <ContactContext.Provider value={{ openContact: () => setShowContact(true) }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Routes>
        <Footer />
        {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      </div>
    </ContactContext.Provider>
  );
};

function App() {
  const [showSplash, setShowSplash] = React.useState(true);

  return (
    <BrowserRouter>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      {!showSplash && <AppContent />}
    </BrowserRouter>
  );
}

export default App;
