import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-bracket">{'<'}</span>
              <span className="logo-text">Developer</span>
              <span className="logo-bracket">{'/>'}</span>
            </h3>
            <p className="footer-description">
              Building exceptional digital experiences with modern web technologies.
            </p>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-stack-overflow"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Projects</h4>
            <ul className="footer-links">
              <li><a href="#projects">All Projects</a></li>
              <li><a href="#projects">Web Apps</a></li>
              <li><a href="#projects">Mobile Apps</a></li>
              <li><a href="#projects">Open Source</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li><i className="fas fa-envelope"></i> nagabhushan.adiga@gmail.com</li>
              <li><i className="fas fa-phone"></i> +91 7899087516</li>
              <li><i className="fas fa-map-marker-alt"></i> Bengaluru, Karnataka, India</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Nagabhushan Adiga. Made with <i className="fas fa-heart"></i> and <span className="highlight">React</span>
          </p>
          {/* <div className="footer-tech">
            <span><i className="fab fa-react"></i> React</span>
            <span><i className="fab fa-node-js"></i> Node.js</span>
            <span><i className="fab fa-css3-alt"></i> CSS3</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

