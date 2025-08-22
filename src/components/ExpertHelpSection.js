import React from 'react';
import './ExpertHelpSection.css';

export default function ExpertHelpSection() {
  return (
    <>
      {/* Get Expert Help Section */}
      <section className="expert-help">
        <div className="expert-content">
          <h2>Get Expert Help</h2>
          <p>While our free analyzer provides valuable insights, nothing beats a personalized review from an expert. Book a free strategy call to discuss:</p>
          <ul className="expert-list">
            <li>➔ In-depth analysis of your specific business goals</li>
            <li>➔ Custom conversion strategy tailored to your audience</li>
            <li>➔ Competitive analysis and positioning recommendations</li>
            <li>➔ Actionable roadmap for implementation</li>
          </ul>
          <button className="primary-btn">Book a Free Strategy Call</button>
        </div>
        <div className="expert-image">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Expert Help" />
        </div>
      </section>
  
    </>
  );
}
