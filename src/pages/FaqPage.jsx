import React, { useState, useEffect } from "react";
import FaqHero from "../components/faq/FaqHero";
import FaqAccordion from "../components/faq/FaqAccordion";
import FaqCTA from "../components/faq/FaqCTA";

const FaqPage = () => {
  const [search, setSearch] = useState("");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <FaqHero search={search} onSearch={setSearch} />
      <FaqAccordion search={search} />
      <FaqCTA />
    </main>
  );
};

export default FaqPage;
