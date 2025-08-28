import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HeroSection.css";
import heroImage from "../assets/Ru.png";
import bgVideo from "../assets/hero-bg.mp4";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background video */}
      <div className="hero-bg-video">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>

      <div className="hero-section-wrapper">
        <div className="hero-content">
          {/* Animated Heading */}
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Rajiv Ranjan - <br />
            Full Stack Designer & <br />
            Developer
          </motion.h1>

          {/* Animated Subheading */}
          <motion.p
            className="hero-subheading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <strong>Driving 40% more leads</strong> with SEO-ready websites that
            load in under 2 seconds. Transforming visions into exceptional
            digital experiences that{" "}
            <strong>convert visitors into customers</strong>.
          </motion.p>

          {/* Animated Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            As a full-stack designer and developer with over 5 years of
            experience, I specialize in creating digital solutions that deliver
            measurable business results...
          </motion.p>

          {/* Buttons with hover animation */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            <a href="#quote" className="btn primary">
              Get a Quote
            </a>
            <Link to="/ux-audit" className="btn secondary">
              Free UX Audit
            </Link>
          </motion.div>
        </div>

        {/* Right side visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="hero-image-stack">
            <img
              src={heroImage}
              alt="Rajiv Ranjan"
              className="hero-photo"
            />

            <motion.div
              className="hero-testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <div className="hero-client-avatars">
                <img src={client1} alt="Client 1" className="hero-client-avatar" />
                <img src={client2} alt="Client 2" className="hero-client-avatar" />
                <img src={client3} alt="Client 3" className="hero-client-avatar" />
              </div>
              <div className="hero-stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="hero-star"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.955c.3.922-.755 1.688-1.538 1.118l-3.371-2.449a1 1 0 00-1.175 0l-3.37 2.45c-.783.57-1.838-.196-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118l-3.37-2.45c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.951-.69l1.286-3.956z" />
                  </svg>
                ))}
              </div>
              <p className="hero-rating-text">Trusted by 40+ clients</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator animation */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-mouse">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
