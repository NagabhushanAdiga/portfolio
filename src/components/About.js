import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm <strong>Nagabhushan Adiga</strong>, a passionate <strong>UI Developer</strong> with over <strong>6+ years of experience </strong>
              in building modern, responsive, and user-friendly web and mobile applications. My expertise lies
              in the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js) and I specialize in
              creating seamless user experiences.
            </p>
            {/*             <p className="about-description">
              Throughout my career, I've worked on diverse projects ranging from e-commerce platforms to 
              enterprise applications, always focusing on writing clean, maintainable code and following 
              best practices. I have hands-on experience with <strong>Azure DevOps</strong>, <strong>GitHub</strong>, 
              <strong>GitHub Desktop</strong>, and deployment platforms like <strong>Vercel</strong>, <strong>GitHub Pages</strong>, 
              and <strong>Render</strong>. I use tools like <strong>Postman</strong> and <strong>Thunder Client</strong> for 
              API testing and development. I also work with design tools like <strong>Figma</strong>, <strong>Adobe XD</strong>, 
              and <strong>Canva</strong> to create beautiful, user-centric designs. I'm constantly learning and staying 
              updated with the latest technologies and trends in web development.
            </p> */}
            {/* <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">6+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">30+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

