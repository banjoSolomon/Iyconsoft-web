import React, { useEffect } from "react";
import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import VisionMission from "../components/about/VisionMission";
import CoreValues from "../components/about/CoreValues";
import Leadership from "../components/about/Leadership";
import AboutWhyChooseUs from "../components/about/AboutWhyChooseUs";
import AboutCTA from "../components/about/AboutCTA";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <VisionMission />
      <CoreValues />
      <Leadership />
      <AboutWhyChooseUs />
      <AboutCTA />
    </main>
  );
};

export default AboutPage;
