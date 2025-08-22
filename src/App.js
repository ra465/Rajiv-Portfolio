import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Home Page Components
import HeroSection from './components/HeroSection';
import Education from './components/Education';   // ✅ FIXED: Import correctly
import Experience from "./components/Experience";
import TechnologyStack from './components/TechnologyStack';
import ProjectShowcase from './components/ProjectShowcase';
import ClientSuccessStories from './components/ClientSuccessStories';
import CaseStudies from './components/CaseStudies';
import FullStackExpertise from './components/FullStackExpertise';
import Services from './components/Services';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';

// Pages
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
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Education /> {/* ✅ FIXED: Now it will render your education section */}
              <Experience/>
              <TechnologyStack />
              <ProjectShowcase />
              <ClientSuccessStories />
              <CaseStudies />
              <FullStackExpertise />
              <Services />
              <FAQ />
              <ContactForm />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />

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
