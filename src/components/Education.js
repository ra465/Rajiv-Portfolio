import React, { useEffect } from "react";
import "./Education.css";

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
  useEffect(() => {
    if (!document.querySelector('script[src*="platform.linkedin.com/badges"]')) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="education-section" id="education">
      <h2 className="education-title">🎓 My Education</h2>

      {/* Timeline */}
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-icon">
              <img src={edu.image} alt={`${edu.school} logo`} loading="lazy" />
            </div>
            <div className="timeline-content">
              <span className="timeline-year">{edu.year}</span>
              <h3>{edu.degree}</h3>
              <h4>{edu.school}</h4>
              <p>{edu.specialization}</p>
              <p className="edu-status">
                <strong>Status:</strong> {edu.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* LinkedIn Profile Badge */}
      <div className="linkedin-section">
        <h3 className="linkedin-title">💼 Connect with Me</h3>
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="rajivranjan123"
          data-version="v1"
        >
         <a
  className="badge-base__link LI-simple-link"
  href="https://in.linkedin.com/in/rajivranjan123?trk=profile-badge"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my LinkedIn profile"
>
</a>


        </div>
      </div>
    </section>
  );
};

export default Education;
