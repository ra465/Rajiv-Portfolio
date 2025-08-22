import React from 'react';
import { technologies } from '../data/technologies';
import './TechnologyStack.css';

const TechnologyStack = () => {
  return (
    <section aria-label="Technology stack" className="tech-stack">
      <div className="text-center mb-8">
        <h3 className="tech-stack-title">Technologies I Work With</h3>
        <p className="tech-stack-subtitle">Modern tools for modern solutions</p>
      </div>

      <div className="tech-grid-wrapper">
        <div className="tech-grid">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="tech-item">
              <div className="tech-icon">
                <img src={tech.icon} alt={tech.name} />
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
