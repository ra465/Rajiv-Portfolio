import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import './ClientSuccessStories.css';

// Import avatars
import royimazor from '../assets/h1.jpg';
import omarturner from '../assets/h2.jpg';
import bradleythompson from '../assets/h3.jpg';
import sophiagreen from '../assets/h4.jpg';
import liamjohnson from '../assets/h5.jpg';
import emilybrown from '../assets/h6.jpg';
import danielsmith from '../assets/h7.jpg';
import avamiller from '../assets/h8.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Royi Mazor',
    role: 'Owner',
    company: 'A Secure Annapolis Locksmith',
    avatar: royimazor,
    rating: 5,
    quote:
      'Very professional wonderful customer service, thank you Rajiv Ranjan for all the work you put in, will definitely be using for future projects!',
  },
  {
    id: 2,
    name: 'Omar Turner',
    role: 'CEO',
    company: 'Binns Media Group, New York',
    avatar: omarturner,
    rating: 5,
    quote:
      "Rajiv Ranjan was able to execute the vision perfectly! He's big on communication and easy to speak with. Highly recommend Rajiv's services.",
  },
  {
    id: 3,
    name: 'Bradley Thompson',
    role: 'Marketing Director',
    company: '',
    avatar: bradleythompson,
    rating: 5,
    quote:
      "Rajiv Ranjan's expertise in web development is truly exceptional. Delivered a website that looks stunning and performs flawlessly.",
  },
  {
    id: 4,
    name: 'Sophia Green',
    role: 'Founder',
    company: 'Green Media Co.',
    avatar: sophiagreen,
    rating: 5,
    quote:
      'Working with Rajiv Ranjan was an absolute pleasure. His attention to detail is unmatched.',
  },
  {
    id: 5,
    name: 'Liam Johnson',
    role: 'CTO',
    company: 'Innovatech Solutions',
    avatar: liamjohnson,
    rating: 5,
    quote:
      'Rajiv Ranjan transformed our outdated website into a high-performing platform. Could not be happier.',
  },
  {
    id: 6,
    name: 'Emily Brown',
    role: 'Marketing Lead',
    company: 'Brown Consulting',
    avatar: emilybrown,
    rating: 5,
    quote:
      'Professional, reliable, and results-driven. Highly recommend his services.',
  },
  {
    id: 7,
    name: 'Daniel Smith',
    role: 'Co-Founder',
    company: 'NextGen Creatives',
    avatar: danielsmith,
    rating: 5,
    quote:
      'Rajiv Ranjan is a true expert. From design to deployment, flawless execution.',
  },
  {
    id: 8,
    name: 'Ava Miller',
    role: 'Director of Operations',
    company: 'Miller Enterprises',
    avatar: avamiller,
    rating: 5,
    quote: 'Great communication and top-notch development skills.',
  },
];

export default function ClientSuccessStories() {
  const [visibleCount, setVisibleCount] = useState(3);
  const increment = 3;

  const handleToggle = () => {
    setVisibleCount((prev) =>
      prev >= testimonials.length ? 3 : Math.min(prev + increment, testimonials.length)
    );
  };

  return (
    <section className="client-success">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">
            <span>Client</span> <span className="highlight">Success</span> Stories
          </h2>
          <p className="section-subtitle">
            Real results from real clients. See how we’ve helped businesses transform their
            digital presence and achieve measurable growth.
          </p>
        </header>

        <div className="testimonials-grid">
          {testimonials.slice(0, visibleCount).map((t) => (
            <article key={t.id} className="testimonial-card">
              <header className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src={t.avatar} alt={t.name} />
                </div>
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p className="testimonial-role">
                    {t.role}
                    {t.company && `, ${t.company}`}
                  </p>
                  <div className="testimonial-rating">{'★'.repeat(t.rating)}</div>
                </div>
                <a
                  href={`https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(
                    t.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-btn"
                >
                  <FaLinkedin />
                </a>
              </header>
              <blockquote className="testimonial-quote">“{t.quote}”</blockquote>
            </article>
          ))}
        </div>

        <div className="show-more-container">
          <button className="show-more-btn" onClick={handleToggle}>
            {visibleCount >= testimonials.length ? 'Show Less Reviews' : 'Show More Reviews'}
          </button>
        </div>

        <div className="cta-section">
          <p className="cta-text">Ready to join our satisfied clients?</p>
          <div className="cta-buttons">
            <button className="primary-btn">Start Your Project</button>
            <Link to="/projects" className="secondary-btn">
              View Our Work
            </Link>
            <Link to="/website-analysis" className="secondary-btn">
              Free Website Analysis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
