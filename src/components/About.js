import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import profilePic from "../assets/profile.jpg"; // Replace with your image

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Profile Image */}
        <motion.div
          className="about-image-wrapper"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={profilePic} alt="Rajiv Ranjan" />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="about-content"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">About Me</h2>
          <p>
            Hi, I’m Rajiv Ranjan, Full Stack developer specializing in building
            interactive and high-performance React websites. I focus on clean
            code, modern UX, and scalable applications.
          </p>
          <p>
            I enjoy solving problems, learning new technologies, and bringing
            ideas to life through code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
