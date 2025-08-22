import React from 'react';
import './WebsiteAnalysis.css';
import { Link } from 'react-router-dom'; // ✅ Import Link
import ExpertHelpSection from '../components/ExpertHelpSection';

const WebsiteAnalysis = () => {
  return (
    <section className="website-analysis-page dark-theme">
      {/* Headline Section */}
      <div className="analysis-header">
        <h1>Free Website Analyzer</h1>
        <p>
          Get an instant AI-powered analysis of your website's design, performance, and conversion potential.
          Discover actionable improvements <strong>in seconds.</strong>
        </p>
      </div>

      {/* Analyzer Form Card */}
      <div className="analyzer-card">
        <h2>🔍 AI Website Analyzer</h2>
        <p>
          Get an instant AI-powered analysis of your website's design, performance, and conversion potential.
          Discover actionable improvements in seconds.
        </p>
        <div className="input-section">
          <label htmlFor="website-url">Enter your website URL</label>
          <input type="text" id="website-url" placeholder="https://yourcompany.com" />
          <button>Get Free Website Analysis →</button>
        </div>
        <div className="analyzer-hints">
          ⚡ Results in 30 seconds • 🗨️ Actionable insights • 🖥️ Optional detailed report
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <h2>Why Analyze Your Website?</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <h3>Identify Issues</h3>
            <p>Discover hidden problems that could be costing you leads and customers every day.</p>
          </div>
          <div className="benefit-card">
            <h3>Improve Conversions</h3>
            <p>Learn how to optimize your site to turn more visitors into leads and customers.</p>
          </div>
          <div className="benefit-card">
            <h3>Stay Competitive</h3>
            <p>Ensure your website meets modern standards and outperforms your competitors.</p>
          </div>
        </div>
      </div>

      {/* Expert Help Section */}
      <ExpertHelpSection />

      {/* Final CTA Section */}
      <div className="final-cta-section">
        <h2>Ready to Transform Your Website?</h2>
        <p>
          Let's create a website that doesn't just look great, but actively converts visitors into leads and customers.
        </p>
        {/* ✅ Use Link for navigation */}
        <Link to="/strategy-call" className="cta-button">
          Book a Free Strategy Call →
        </Link>
      </div>
    </section>
  );
};

export default WebsiteAnalysis;
