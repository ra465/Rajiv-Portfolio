import React from "react";
import "./Education.css";

// Import images from assets
import lpuLogo from "../assets/lpu.png";
import bsebLogo from "../assets/bseb.png";
import cbseLogo from "../assets/cbse.png";

const educationData = [
  {
    school: "Lovely Professional University",
    degree: "B.Tech Computer Science and Engineering",
    specialization: "Machine Learning & Artificial Intelligence",
    year: "2020 - 2024",
    status: "Completed",
    image: lpuLogo,
  },
  {
    school: "Bihar School Examination Board",
    degree: "Higher Secondary (12th)",
    specialization: "Science (PCM)",
    year: "2017 - 2019",
    status: "Completed",
    image: bsebLogo,
  },
  {
    school: "CBSE Board",
    degree: "Matriculation (10th)",
    specialization: "CGPA: 10",
    year: "2016 - 2017",
    status: "Completed",
    image: cbseLogo,
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="education-title">🎓 My Education</h2>

      <div className="education-list">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <img src={edu.image} alt={edu.school} className="edu-image" />
            <div className="edu-content">
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
              <p>{edu.specialization}</p>
              <p className="edu-year">{edu.year}</p>
              <p className="edu-status">Status: {edu.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
