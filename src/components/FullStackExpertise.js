import React, { useState, useEffect } from 'react';
import './FullStackExpertise.css';

export default function FullStackExpertise() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed here

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="expertise">
      <div className="top-center-button">
        <button>Our Expertise</button>
      </div>

      <div className="container">
        <h2 className="expertise-title">Full-Stack Design Expertise</h2>

        <div className="progress-panel">
          <div className="progress-header">
            <span className="icon">{"<>"}</span>
            <span className="text">Coding in Progress...</span>
            <span className="percent">{progress}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="phase-row">
            <div className="phase active">
              <h4>Design Phase</h4>
              <ul>
                <li>✓ User Research</li>
                <li>✓ Wireframing</li>
                <li>✓ UI Design</li>
              </ul>
            </div>
            <div className="phase">
              <h4>Development Phase</h4>
              <ul>
                <li>✓ Frontend</li>
                <li>✓ Backend</li>
                <li>✓ Testing</li>
              </ul>
            </div>
          </div>
          {progress === 100 && (
            <div className="panel-footer">
              Project Successfully Completed! 🎉
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
