import React, { useState, useEffect } from "react";
import FaqHero from "../components/faq/FaqHero";
import PopularQuestions from "../components/faq/PopularQuestions";
import FaqAccordion from "../components/faq/FaqAccordion";
import FaqCTA from "../components/faq/FaqCTA";

const FaqPage = () => {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <FaqHero search={search} onSearch={setSearch} />
      <PopularQuestions onSelectProduct={setSelectedProduct} />
      <FaqAccordion search={search} selectedProduct={selectedProduct} />
      <FaqCTA />
    </main>
  );
};

export default FaqPage;
