import React from "react";
import "../../styles/solutions/SolutionsHero.css";
import img1 from "../../assets/images/insignt1.png";
import img2 from "../../assets/images/insight2.png";
import img3 from "../../assets/images/insignt3.png";

const SolutionsHero = () => {
  return (
    <section className="sol-hero">
      {/* Page title banner */}
      <div className="sol-hero__banner">
        <div className="sol-hero__banner-inner">
          <h1 className="sol-hero__page-title">
            Our{" "}
            <span className="sol-hero__highlight-word">Sol</span><span className="sol-hero__highlight-shimmer">utions</span>
          </h1>
          <p className="sol-hero__banner-sub">
            Innovative products designed to simplify everyday experiences
          </p>
        </div>
      </div>

      {/* Main hero block */}
      <div className="sol-hero__block">
        <div className="sol-hero__container">
          {/* Left: text */}
          <div className="sol-hero__content reveal-left">
            <h2 className="sol-hero__title">
              Innovative Solutions Designed for Real World Challenges.
            </h2>
            <p className="sol-hero__text">
              Iyconsoft delivers secure, reliable, and accessible digital solutions that
              simplify operations, improve customer experiences, and drive business growth
              across multiple industries.
            </p>
            <div className="sol-hero__actions">
              <a href="#sol-caller" className="btn btn--dark">Explore Solutions</a>
              <a href="#contact" className="btn btn--outline">Contact Us</a>
            </div>
          </div>

          {/* Right: 3 stacked promo images */}
          <div className="sol-hero__images reveal-right">
            <div className="sol-hero__img-col sol-hero__img-col--left">
              <div className="sol-hero__img-card">
                <img src={img2} alt="VVPSS solution" />
              </div>
            </div>
            <div className="sol-hero__img-col sol-hero__img-col--right">
              <div className="sol-hero__img-card">
                <img src={img1} alt="MyCaller solution" />
              </div>
              <div className="sol-hero__img-card">
                <img src={img3} alt="iTravel solution" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
