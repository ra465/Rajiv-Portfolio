import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS file for styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "The duration depends on the scope of the project, but most projects take between 4-8 weeks."
    },
    {
      question: "What’s included in your web development service?",
      answer: "I offer SEO-ready websites, mobile-first responsive design, and conversion-optimized layouts."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, I work with clients around the globe via remote collaboration."
    },
    {
      question: "What technologies do you use?",
      answer: "I use a combination of the latest frontend and backend technologies, including React, Node.js, and MongoDB."
    },
    {
      question: "How do you ensure project success?",
      answer: "I follow a proven development process, including regular feedback loops, code reviews, and performance testing."
    },
    {
      question: "What’s your pricing structure?",
      answer: "Pricing varies based on project scope and complexity. I offer transparent, fixed-price quotes after our initial consultation."
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Get answers to common questions about our design and development process.</p>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-card" key={index}>
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
