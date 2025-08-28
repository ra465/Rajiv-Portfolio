import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Home from './pages/Home';  
import UXAuditPage from './pages/UXAuditPage';
import WebsiteAnalysisPage from './pages/WebsiteAnalysisPage';
import StrategyCallPage from './pages/StrategyCallPage';
import AllProjects from './components/AllProjects';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* UX Audit Page */}
        <Route path="/ux-audit" element={<UXAuditPage />} />

        {/* Website Analysis Page */}
        <Route path="/website-analysis" element={<WebsiteAnalysisPage />} />

        {/* Strategy Call Page */}
        <Route path="/strategy-call" element={<StrategyCallPage />} />

        {/* All Projects Page */}
        <Route
          path="/projects"
          element={
            <>
              <AllProjects />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
