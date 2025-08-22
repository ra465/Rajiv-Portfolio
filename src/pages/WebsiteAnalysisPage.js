import React from 'react';
import WebsiteAnalysis from '../components/WebsiteAnalysis';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { useNavigate } from 'react-router-dom';

const WebsiteAnalysisPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <WebsiteAnalysis />

      {/* Add Strategy Call CTA Button Below Analysis */}
      <section className="strategy-cta-section" style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h2>Need Personalized Help?</h2>
        <p>Book a free strategy call with our experts to discuss how to grow your website performance.</p>
        <button
          className="cta-button"
          onClick={() => navigate('/strategy-call')}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Book Strategy Call →
        </button>
      </section>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default WebsiteAnalysisPage;
