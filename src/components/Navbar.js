import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="header">
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-left logo-container">
          <button aria-label="Home" className="logo-button">
            <img src={logo} alt="Logo" className="logo" />
          </button>
          <span className="logo-text">Rajiv Ranjan</span>
        </div>

        <div className="navbar-right nav-links">
     <a
  href="https://calendly.com/rajiv23061999/new-meeting"
  className="nav-link"
  target="_blank"
  rel="noopener noreferrer"
>
  Book Call
</a>


        </div>
      </nav>

      {menuOpen && (
        <div className="right-panel-menu animate-slide-in-right">
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#case-studies" onClick={() => setMenuOpen(false)}>Case Studies</a></li>
            <li><a href="#tools" onClick={() => setMenuOpen(false)}>Tools</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li><a href="#linkedin" onClick={() => setMenuOpen(false)}>Free Consultant using LinkedIn</a></li>
            <li><a href="#schedule" onClick={() => setMenuOpen(false)}>Schedule a Call</a></li>
            <li><a href="#awwards" onClick={() => setMenuOpen(false)}>Awwwards</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;