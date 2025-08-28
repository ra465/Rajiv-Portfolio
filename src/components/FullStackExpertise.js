import React, { useState, useEffect } from "react";
import { FiCode, FiCheckCircle } from "react-icons/fi";
import "./FullStackExpertise.css";

export default function FullStackExpertise() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 4000; // 4 seconds
    const step = 10;

    const interval = setInterval(() => {
      start += step / (duration / 1000) * 2.5;
      if (start >= 100) {
        setProgress(100);
        clearInterval(interval);
      } else {
        setProgress(Math.round(start));
      }
    }, step);

    return () => clearInterval(interval);
  }, []);

  const activePhase = progress < 50 ? "design" : "development";

  return (
    <section className="expertise">
      <div className="top-center-button">
        <button>Our Expertise</button>
      </div>

      <div className="container">
        <h2 className="expertise-title">Full-Stack Design Expertise</h2>

        <div className="progress-panel">
          <div className="progress-header">
            <span className="icon">
              {progress < 100 ? <FiCode /> : <FiCheckCircle />}
            </span>
            <span className="text">
              {progress < 100 ? "Coding in Progress..." : "Project Completed!"}
            </span>
            <span className="percent">{progress}%</span>
          </div>

          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="phase-row">
            <div className={`phase ${activePhase === "design" ? "active" : ""}`}>
              <h4>Design Phase</h4>
              <ul>
                <li>✓ User Research</li>
                <li>✓ Wireframing</li>
                <li>✓ UI Design</li>
              </ul>
            </div>
            <div
              className={`phase ${
                activePhase === "development" ? "active" : ""
              }`}
            >
              <h4>Development Phase</h4>
              <ul>
                <li>✓ Frontend</li>
                <li>✓ Backend</li>
                <li>✓ Testing</li>
              </ul>
            </div>
          </div>

          {progress === 100 && (
            <div className="panel-footer">🎉 Project Successfully Completed!</div>
          )}
        </div>
      </div>
    </section>
  );
}
