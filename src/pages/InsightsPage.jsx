import React, { useState, useEffect } from "react";
import InsightsHero from "../components/insights/InsightsHero";
import InsightsTicker from "../components/insights/InsightsTicker";
import InsightsGrid from "../components/insights/InsightsGrid";
import ArticleModal from "../components/insights/ArticleModal";

const InsightsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <InsightsHero onReadArticle={setSelectedArticle} />
      <InsightsTicker />
      <InsightsGrid onReadArticle={setSelectedArticle} />
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </main>
  );
};

export default InsightsPage;
