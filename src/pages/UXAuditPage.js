import React from 'react';
import { Link } from 'react-router-dom';
import './UXAuditPage.css';

const UXAuditPage = () => {
  return (
    <section className="ux-audit-page fade-in">
      <div className="container">
        <h1 className="page-title">Free UX Audit</h1>
        <p className="page-subtitle">
          Get a comprehensive audit of your website's user experience, performance & accessibility.
        </p>

        <div className="audit-content">
          <h2>What you'll get:</h2>
          <ul className="audit-features">
            <li>✅ Expert analysis</li>
            <li>✅ Performance tips</li>
            <li>✅ Accessibility review</li>
            <li>✅ Conversion suggestions</li>
          </ul>

          <div className="cta-section">
            <a href="#contact" className="btn primary">Request My Audit</a>
            <Link to="/" className="btn secondary">← Back to Home</Link>
          </div>
        </div>

        <div id="contact" className="contact-form-section">
          <h2>Request Your Free UX Audit</h2>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="url" name="website" placeholder="Your Website URL" required />
            <textarea name="message" placeholder="Anything specific?" rows="4"></textarea>
            <button type="submit" className="btn primary">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UXAuditPage;
