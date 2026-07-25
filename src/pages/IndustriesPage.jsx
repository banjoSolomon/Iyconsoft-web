import React, { useEffect } from "react";
import IndustriesHero from "../components/industries/IndustriesHero";
import IndustriesIntro from "../components/industries/IndustriesIntro";
import TelecomSection from "../components/industries/TelecomSection";
import TransportSection from "../components/industries/TransportSection";
import GovernmentSection from "../components/industries/GovernmentSection";
import EnterpriseSection from "../components/industries/EnterpriseSection";
import IndustriesCTA from "../components/industries/IndustriesCTA";

const IndustriesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <IndustriesHero />
      <IndustriesIntro />
      <TelecomSection />
      <TransportSection />
      <GovernmentSection />
      <EnterpriseSection />
      <IndustriesCTA />
    </main>
  );
};

export default IndustriesPage;
