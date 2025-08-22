import React from 'react';
import './StrategyCallPage.css'; // ✅ Keep CSS in the same folder
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const StrategyCallPage = () => {
  return (
    <>
      <section className="strategy-call-page dark-theme">
        {/* Hero Section */}
        <div className="strategy-hero">
          <h1>Book a Free Strategy Call</h1>
          <p>
            Get expert guidance to transform your website into a high-converting, results-driven asset for your business.
          </p>
          <button className="hero-btn">Schedule My Call →</button>
        </div>

        {/* What to Expect */}
        <div className="expect-section">
          <h2>What to Expect From the Call</h2>
          <div className="expect-grid">
            <div className="expect-card">
              <h3>Website Audit</h3>
              <p>We’ll review your current website and identify areas for improvement.</p>
            </div>
            <div className="expect-card">
              <h3>Custom Strategy</h3>
              <p>Get a personalized plan to boost engagement and conversions.</p>
            </div>
            <div className="expect-card">
              <h3>Growth Roadmap</h3>
              <p>Understand the exact steps to grow your business online.</p>
            </div>
          </div>
        </div>

        {/* Expert Help Section */}
        <div className="expert-help">
          <h2>Get Expert Help Every Step of the Way</h2>
          <p>We're not just consultants — we're hands-on collaborators invested in your success.</p>
          <button className="expert-btn">Book Your Strategy Call Now →</button>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq">
            <h4>Is the strategy call really free?</h4>
            <p>Yes, the call is 100% free with no obligation.</p>
          </div>
          <div className="faq">
            <h4>Who is this for?</h4>
            <p>Business owners, marketers, and founders looking to improve their website performance.</p>
          </div>
          <div className="faq">
            <h4>What will I get from this call?</h4>
            <p>A clear roadmap and actionable tips tailored to your specific website and goals.</p>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="final-cta">
          <h2>Ready to Grow Your Online Presence?</h2>
          <p>Don’t miss your chance to speak with a web strategy expert — it’s free and powerful.</p>
          <button className="final-btn">Book My Free Strategy Call →</button>
        </div>
      </section>

      {/* Reusable footer components */}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default StrategyCallPage;
