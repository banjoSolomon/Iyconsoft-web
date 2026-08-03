import React from "react";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import About from "../components/About";
import Solutions from "../components/Solutions";
import Industries from "../components/Industries";
import WhyChooseUs from "../components/WhyChooseUs";
import Insights from "../components/Insights";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <About />
      <Solutions />
      <Industries />
      <WhyChooseUs />
      <Insights />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default HomePage;
