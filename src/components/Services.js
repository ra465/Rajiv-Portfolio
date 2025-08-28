import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';

// Import image icons
import webIcon from '../assets/web.png';
import designIcon from '../assets/design.png';
import saasIcon from '../assets/saas.png';

const servicesData = [
  {
    icon: webIcon,
    title: 'Web Development',
    description: 'SEO-ready websites that load in under 2 seconds and drive up to ',
    highlight: '40% more leads',
    features: [
      '98/100 PageSpeed score',
      'Mobile-first responsive design',
      'Conversion-optimized layouts',
    ],
  },
  {
    icon: designIcon,
    title: 'UI/UX Design',
    description: 'User-centered designs that increase engagement by ',
    highlight: '35% and reduce bounce rates by 40%',
    features: [
      'Data-driven design decisions',
      'Intuitive user journeys',
      'A/B tested interfaces',
    ],
  },
  {
    icon: saasIcon,
    title: 'SaaS Development',
    description: 'End-to-end SaaS solutions that reduce operational costs by ',
    highlight: '25% and scale with your business',
    features: [
      'Scalable architecture',
      '99.9% uptime guarantee',
      'Secure data handling',
    ],
  },
];

const Services = () => {
  return (
    <section className="services-section dark-theme" id="services">
      <div className="services-header">
        <h1>What I Deliver</h1>
        <p>
          <strong>Results-focused solutions</strong> tailored to your business goals.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, idx) => (
          <motion.div
            className="service-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="service-icon">
              <img src={service.icon} alt={`${service.title} Icon`} />
            </div>
            <h3>{service.title}</h3>
            <p className="service-description">
              {service.description} <span className="highlight">{service.highlight}</span>.
            </p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>→ {feature}</li>
              ))}
            </ul>
            <button
              className="learn-more-btn"
              onClick={() => window.location.href = '#contact'}
            >
              Learn More →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
