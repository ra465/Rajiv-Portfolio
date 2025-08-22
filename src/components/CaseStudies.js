// components/CaseStudies.js

import React from 'react';
import { caseStudies } from '../data/caseStudies';
import './CaseStudies.css'; // ← Optional CSS file

const CaseStudies = () => {
  return (
    <section className="case-studies-wrapper">
      {caseStudies.map((study) => (
        <div key={study.id} className="case-study-card-horizontal">
          {/* Image */}
          <div className="case-study-image">
            <img src={study.image} alt={study.title} />
          </div>

          {/* Content */}
          <div className="case-study-content">
            <div className="case-study-header">
              <span className="case-study-tag">{study.industry}</span>
              <span className="case-study-duration">{study.duration}</span>
            </div>

            <h3 className="case-study-title">{study.title}</h3>
            <p className="case-study-challenge">
              <strong>Challenge:</strong> {study.challenge}
            </p>

            {/* Key Results */}
            <div className="case-study-results">
              <h4>Key Results:</h4>
              <ul>
                {study.results.slice(0, 4).map((result, index) => (
                  <li key={index}>✅ {result}</li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="case-study-tech">
              {study.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CaseStudies;
