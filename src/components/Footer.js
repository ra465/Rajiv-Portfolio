import React from "react";
import "./Footer.css";

// Import your icons as images
import penIcon from '../assets/pen.png';
import briefcaseIcon from '../assets/briefcase.png';
import toolsIcon from '../assets/tools.png';
import calculatorIcon from '../assets/calculator.png';
import calendarIcon from '../assets/calendar.png';
import robotIcon from '../assets/robot.png';
import linkedinIcon from '../assets/linkedin.png';
import phoneIcon from '../assets/phone.png';
import trophyIcon from '../assets/trophy.png';
import dribbbleIcon from '../assets/dribbble.png';
import starIcon from '../assets/star.png';
import designrushIcon from '../assets/designrush.png';
import clutchIcon from '../assets/clutch.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Start a Project</h3>
          <p>Let's create your next big idea.</p>
          <a href="request-quote.html" className="footer-link">
            <img src={penIcon} alt="Request a Quote" className="footer-icon" /> Request a Quote
          </a>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><img src={briefcaseIcon} alt="Binns Media Group" className="footer-icon" /> Binns Media Group</li>
            <li><img src={briefcaseIcon} alt="Untapped Africa" className="footer-icon" /> Untapped Africa</li>
            <li><img src={briefcaseIcon} alt="View All Projects" className="footer-icon" /> View All Projects</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Tools</h3>
          <ul>
            <li><img src={toolsIcon} alt="Website Analyzer" className="footer-icon" /> Website Analyzer</li>
            <li><img src={calculatorIcon} alt="ROI Calculator" className="footer-icon" /> ROI Calculator</li>
            <li><img src={calendarIcon} alt="Project Timeline" className="footer-icon" /> Project Timeline</li>
            <li><img src={robotIcon} alt="AI Crawler Optimization" className="footer-icon" /> AI Crawler Optimization</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li><img src={linkedinIcon} alt="LinkedIn" className="footer-icon" /> LinkedIn</li>
            <li><img src={phoneIcon} alt="Schedule a Call" className="footer-icon" /> Schedule a Call</li>
            <li><img src={trophyIcon} alt="Awwwards" className="footer-icon" /> Awwwards</li>
            <li><img src={dribbbleIcon} alt="Dribbble" className="footer-icon" /> Dribbble</li>
            <li><img src={starIcon} alt="Google Reviews" className="footer-icon" /> 5.0/5 Google Reviews</li>
            <li><img src={designrushIcon} alt="Design Rush" className="footer-icon" /> Design Rush</li>
            <li><img src={clutchIcon} alt="Clutch" className="footer-icon" /> Clutch</li>
          </ul>
        </div>
      </div>

      <hr className="footer-separator" />

      <div className="footer-bottom">
        <p>© 2025 Rajiv Ranjan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
