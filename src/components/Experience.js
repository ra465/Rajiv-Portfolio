import React from "react";
import "./Experience.css";

// Import logos from assets
import upgradLogo from "../assets/upgrad.png";
import techmLogo from "../assets/Tech-mahindra.png";

const experienceData = [
  {
    company: "UpGrad",
    role: "Data Scientist Intern",
    duration: "Jan 2024 - June 2024",
    image: upgradLogo,
  },
  {
    company: "Tech Mahindra Ltd",
    role: "Associate Trainee",
    duration: "July 2024 - July 2025",
    image: techmLogo,
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">💼 My <span>Experience</span></h2>

      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <img src={exp.image} alt={exp.company} className="exp-image" />
            <div className="exp-content">
              <h3>{exp.company}</h3>
              <p>{exp.role}</p>
              <p className="exp-duration">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
