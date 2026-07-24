import React, { useEffect } from "react";
import SolutionsHero from "../components/solutions/SolutionsHero";
import SolutionsIntro from "../components/solutions/SolutionsIntro";
import MyCallerSection from "../components/solutions/MyCallerSection";
import ITravelSection from "../components/solutions/ITravelSection";
import VVPSSSection from "../components/solutions/VVPSSSection";
import TeTicketSection from "../components/solutions/TeTicketSection";
import CTA from "../components/CTA";

const SolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <SolutionsHero />
      <SolutionsIntro />
      <MyCallerSection />
      <ITravelSection />
      <VVPSSSection />
      <TeTicketSection />
      <CTA />
    </main>
  );
};

export default SolutionsPage;
