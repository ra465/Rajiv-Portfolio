import React from 'react';

// Home Page Components
import HeroSection from '../components/HeroSection';
import Education from '../components/Education';
import Experience from "../components/Experience";
import TechnologyStack from '../components/TechnologyStack';
import ProjectShowcase from '../components/ProjectShowcase';
import ClientSuccessStories from '../components/ClientSuccessStories';
import CaseStudies from '../components/CaseStudies';
import FullStackExpertise from '../components/FullStackExpertise';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <HeroSection />
      <About/>
      <Education />
      <Experience />
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
  );
};

export default Home;
