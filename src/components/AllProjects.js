import React, { useEffect } from 'react';
import './AllProjects.css';
import featuredBg from '../assets/featured-bg.jpg';

// Import project images
import binnsImage from '../assets/projects/binns.jpg';
import nextGenImage from '../assets/projects/next-gen.jpg';
import pixelcraftImage from '../assets/projects/pixelcraft.jpg';
import visionaryImage from '../assets/projects/visionary.jpg';
import dwellspaceImage from '../assets/projects/dwellspace.jpg';
import vibeverseImage from '../assets/projects/vibeverse.jpg';
import innohealthImage from '../assets/projects/innohealth.jpg';
import ecotrackImage from '../assets/projects/ecotrack.jpg';
import eduproImage from '../assets/projects/edupro.jpg';
import stylesyncImage from '../assets/projects/stylesync.jpg';
import cryptovistaImage from '../assets/projects/cryptovista.jpg';
import travelnestImage from '../assets/projects/travelnest.jpg';
import shopsphereImage from '../assets/projects/shopsphere.jpg';

const projects = [
  { title: 'Binns Media Group', description: 'A cutting-edge digital media platform showcasing diverse content portfolio.', image: binnsImage, liveSite: 'https://www.binnsmediagroup.com/', technologies: ['React', 'Node.js', 'MongoDB'] },
  { title: 'Next Gen Studio', description: 'Creative branding and web solutions for modern agencies and startups.', image: nextGenImage, liveSite: 'https://nextgenstudio.com', technologies: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'PixelCraft Agency', description: 'Design‑first digital agency focused on storytelling and UI excellence.', image: pixelcraftImage, liveSite: 'https://pixelcraft.io', technologies: ['Vue.js', 'Sass', 'Figma'] },
  { title: 'Visionary App', description: 'AI-powered mobile assistant for daily productivity and mental clarity.', image: visionaryImage, liveSite: 'https://visionaryapp.ai', technologies: ['React Native', 'TensorFlow', 'Firebase'] },
  { title: 'DwellSpace', description: 'Real estate platform with interactive 3D tours and dynamic listings.', image: dwellspaceImage, liveSite: 'https://dwellspace.com', technologies: ['Three.js', 'React', 'Express'] },
  { title: 'VibeVerse', description: 'A music discovery web app merging social trends and listening habits.', image: vibeverseImage, liveSite: 'https://vibeverse.com', technologies: ['Next.js', 'Tailwind CSS', 'Supabase'] },
  { title: 'InnoHealth', description: 'Telemedicine platform connecting patients with certified professionals.', image: innohealthImage, liveSite: 'https://innohealth.com', technologies: ['Angular', 'RxJS', 'Node.js'] },
  { title: 'EcoTrack', description: 'Sustainability app helping users track and reduce their carbon footprint.', image: ecotrackImage, liveSite: 'https://ecotrack.org', technologies: ['Flutter', 'Dart', 'Firebase'] },
  { title: 'EduPro', description: 'Learning management system for remote education and corporate training.', image: eduproImage, liveSite: 'https://edupro.io', technologies: ['Laravel', 'Vue.js', 'MySQL'] },
  { title: 'StyleSync', description: 'Virtual wardrobe app leveraging AI to suggest daily outfits.', image: stylesyncImage, liveSite: 'https://stylesync.app', technologies: ['Python', 'Flask', 'OpenCV'] },
  { title: 'CryptoVista', description: 'Real-time crypto analytics platform with advanced visualization.', image: cryptovistaImage, liveSite: 'https://cryptovista.io', technologies: ['React', 'D3.js', 'WebSockets'] },
  { title: 'TravelNest', description: 'Personalized travel planner with itinerary optimization.', image: travelnestImage, liveSite: 'https://travelnest.ai', technologies: ['Next.js', 'Redis', 'Python'] },
  { title: 'ShopSphere', description: 'E-commerce platform providing immersive shopping experiences.', image: shopsphereImage, liveSite: 'https://shopsphere.com', technologies: ['Shopify', 'Liquid', 'React'] }
];

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to top when loaded
    document.title = 'All Projects | Your Company Name';
  }, []);

  return (
    <section>
      <div
        className="featured-work"
        style={{
          backgroundImage: `url(${featuredBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay"></div>
        <div className="featured-work-content">
          <h2>Featured Work</h2>
          <p>
            Explore our portfolio of results-driven digital solutions that combine thoughtful design with robust development.
          </p>
          <div className="stats-grid">
            <div className="stat-card"><h3>50+</h3><p>Projects Completed</p></div>
            <div className="stat-card"><h3>40+</h3><p>Happy Clients</p></div>
            <div className="stat-card"><h3>5+</h3><p>Years Experience</p></div>
            <div className="stat-card"><h3>99%</h3><p>Client Satisfaction</p></div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <div className="projectCard-container">
          {projects.map((project, index) => (
            <div key={index} className="projectCard-card">
              <div className="projectCard-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projectCard-content">
                <h3 className="projectCard-title">{project.title}</h3>
                <p className="projectCard-description">{project.description}</p>
                <ul className="projectCard-techStack">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="projectCard-techItem">{tech}</li>
                  ))}
                </ul>
                <div className="projectCard-buttons">
                  <a
                    href={project.liveSite}
                    className="projectCard-btnPrimary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
