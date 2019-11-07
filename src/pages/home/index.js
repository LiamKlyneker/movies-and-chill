import React from 'react';

import FiltersSection from './components/filters-section';
import ResultsSection from './components/results-section';

const HomePage = () => {
  return (
    <div className="container">
      <FiltersSection />
      <ResultsSection />
    </div>
  );
};

export default HomePage;
