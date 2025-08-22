import React from 'react';
import './Services.css';

// Import image icons from assets
import webIcon from '../assets/web.png';
import designIcon from '../assets/design.png';
import saasIcon from '../assets/saas.png';

const servicesData = [
  {
    icon: webIcon,
    title: 'Web Development',
    description: 'SEO-ready websites that load in under 2 seconds and drive up to 40% more leads.',
    features: [
      '98/100 PageSpeed score',
      'Mobile-first responsive design',
      'Conversion-optimized layouts',
    ],
  },
  {
    icon: designIcon,
    title: 'UI/UX Design',
    description: 'User-centered designs that increase engagement by 35% and reduce bounce rates by 40%.',
    features: [
      'Data-driven design decisions',
      'Intuitive user journeys',
      'A/B tested interfaces',
    ],
  },
  {
    icon: saasIcon,
    title: 'SaaS Development',
    description: 'End-to-end SaaS solutions that reduce operational costs by 25% and scale with your business.',
    features: [
      'Scalable architecture',
      '99.9% uptime guarantee',
      'Secure data handling',
    ],
  },
];

const Services = () => {
  return (
    <section className="services-section dark-theme">
      <div className="services-header">
        <h1>What I Deliver</h1>
        <p>
          <strong>Results-focused solutions</strong> tailored to your specific business goals.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">
              <img src={service.icon} alt={`${service.title} Icon`} />
            </div>
            <h2>{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>→ {feature}</li>
              ))}
            </ul>
            <button className="learn-more-btn">Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
