import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi there! 👋 I'm</p>
            <h1 className="hero-name">
              <span className="gradient-text">Nagabhushan Adiga</span>
            </h1>
            <h2 className="hero-title">UI Developer | 6+ Years Experience</h2>
            <p className="hero-description">
              Crafting exceptional digital experiences with 6+ years of expertise in
              React, React Native, and modern web technologies. Experienced with package managers
              like npm and Yarn and deployment on Vercel, GitHub Pages,
              and Render. Proficient with API testing tools like Postman, Insomnia, and Thunder Client.
              Skilled in design tools including Figma, Adobe XD, and Canva. Passionate about building
              scalable, user-centric applications that make a difference.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </button>
            </div>
            <div className="hero-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:your.email@example.com" className="social-icon">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="profile-image">
                <div className="profile-border">
                  <img
                    src="https://ui-avatars.com/api/?name=Nagabhushan+Adiga&size=400&background=3b82f6&color=fff&bold=true&format=svg"
                    alt="Nagabhushan Adiga"
                    className="profile-photo"
                  />
                </div>
                <div className="floating-icon icon-1">
                  <i className="fab fa-react"></i>
                </div>
                <div className="floating-icon icon-2">
                  <i className="fab fa-node-js"></i>
                </div>
                <div className="floating-icon icon-3">
                  <i className="fab fa-js"></i>
                </div>
                <div className="floating-icon icon-4">
                  <i className="fab fa-css3-alt"></i>
                </div>
              </div>
              <div className="code-block">
                <div className="code-header">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <div className="code-content">
                  <p><span className="keyword">const</span> <span className="variable">developer</span> = {'{'}</p>
                  <p>&nbsp;&nbsp;name: <span className="string">'Nagabhushan Adiga'</span>,</p>
                  <p>&nbsp;&nbsp;experience: <span className="number">6+</span>,</p>
                  {/* <p>&nbsp;&nbsp;stack: <span className="string">'MERN'</span>,</p> */}
                  <p>&nbsp;&nbsp;passion: <span className="string">'Infinite'</span></p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero;

