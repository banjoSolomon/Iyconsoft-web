import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Solutions from "../components/Solutions";
import Industries from "../components/Industries";
import WhyChooseUs from "../components/WhyChooseUs";
import Insights from "../components/Insights";
import CTA from "../components/CTA";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Solutions />
      <Industries />
      <WhyChooseUs />
      <Insights />
      <CTA />
    </main>
  );
};

export default HomePage;
