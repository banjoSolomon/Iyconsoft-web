import React, { useEffect } from "react";
import CareersHero from "../components/careers/CareersHero";
import LifeAtIyconsoft from "../components/careers/LifeAtIyconsoft";
import WhyJoinUs from "../components/careers/WhyJoinUs";
import BenefitsPerks from "../components/careers/BenefitsPerks";
import OurCulture from "../components/careers/OurCulture";
import OpenPositions from "../components/careers/OpenPositions";
import CareersCTA from "../components/careers/CareersCTA";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <CareersHero />
      <LifeAtIyconsoft />
      <WhyJoinUs />
      <BenefitsPerks />
      <OurCulture />
      <OpenPositions />
      <CareersCTA />
    </main>
  );
};

export default CareersPage;
