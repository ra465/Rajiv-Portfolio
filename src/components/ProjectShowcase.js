import React, { useState } from 'react';
import './ProjectShowcase.css';
import { technologies } from '../data/technologies';

const projects = [
  {
    title: 'Binns Media Group',
    description: 'A cutting-edge digital media platform showcasing diverse content portfolio.',
    image: 'https://c.animaapp.com/mdsxxp0chieBfb/assets/IU0mmH7.jpeg',
    liveSite: 'https://www.binnsmediagroup.com/',
    sourceCode: 'https://github.com/example/binns',
    features: [
      'Content Management System',
      'Custom Video Gallery',
      'Interactive Blog',
      'SEO Optimized'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'GraphQL', 'PostgreSQL']
  },
  {
    title: 'Next Gen Studio',
    description: 'Creative branding and web solutions for modern agencies and startups.',
    image: 'https://via.placeholder.com/800x500?text=Next+Gen+Studio',
    liveSite: 'https://nextgenstudio.com',
    sourceCode: 'https://github.com/example/nextgen',
    features: [
      'Brand Strategy Tools',
      'Portfolio Showcase',
      'Custom Forms',
      'Smooth Animations'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS']
  },
  {
    title: 'PixelCraft Agency',
    description: 'Design-first digital agency focused on storytelling and UI excellence.',
    image: 'https://via.placeholder.com/800x500?text=PixelCraft+Agency',
    liveSite: 'https://pixelcraft.io',
    sourceCode: 'https://github.com/example/pixelcraft',
    features: [
      'Rich Hero Animations',
      'Dark Mode Toggle',
      'Component Library',
      'Team Profiles'
    ],
    technologies: ['HTML5', 'CSS3', 'Docker', 'MongoDB']
  }
];

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);
  const current = projects[index];

  const handlePrev = () => setIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () => setIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <section className="project-showcase" id="projects">
      <div className="container">

        {/* Header */}
        <div className="portfolio-header text-center">
          <span className="section-badge">Featured Projects</span>
          <h2 className="section-title">Interactive Portfolio</h2>
          <p className="section-description">
            <strong>Explore real results</strong> from my recent work. Each project delivered <br />
            <strong>measurable impact</strong> for clients across industries.
          </p>
        </div>

        {/* Project Card */}
        <div className="project-card fade-in">
          <div className="project-image">
            <img src={current.image} alt={current.title} />
          </div>

          <div className="project-content">
            <h3 className="project-title">{current.title}</h3>
            <p className="project-description">{current.description}</p>

            {/* All Features */}
            <ul className="project-features">
              {current.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="project-tech-slider">
              {current.technologies.map((tech, i) => {
                const match = technologies.find(t => t.name === tech);
                return (
                  <div key={i} className="tech-pill" title={tech}>
                    {match ? <img src={match.icon} alt={match.name} /> : <span>{tech}</span>}
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="project-buttons">
              <a href={current.liveSite} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Website <img src="https://c.animaapp.com/mdsxxp0chieBfb/assets/icon-12.svg" alt="Live" className="icon" />
              </a>
              <a href={current.sourceCode} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                View Code <img src="https://c.animaapp.com/mdsxxp0chieBfb/assets/icon-11.svg" alt="Code" className="icon" />
              </a>
            </div>
          </div>

          {/* Nav Buttons */}
          <button className="project-nav prev" onClick={handlePrev} aria-label="Previous Project">
            <img src="https://c.animaapp.com/mdsxxp0chieBfb/assets/icon-13.svg" alt="Previous" />
          </button>
          <button className="project-nav next" onClick={handleNext} aria-label="Next Project">
            <img src="https://c.animaapp.com/mdsxxp0chieBfb/assets/icon-14.svg" alt="Next" />
          </button>
        </div>

        <div className="text-center mt-12">
          <a href="/projects" className="view-all-projects">View All Projects →</a>
        </div>
      </div>
    </section>
  );
}
