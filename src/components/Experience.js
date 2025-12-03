import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      year: '2023 - Present',
      role: 'UI Developer',
      company: 'Clinisys',
      description: 'Specializing in creating visually stunning and intuitive user interfaces using React and modern web technologies.',
      achievements: [
        'Utilized HTML, CSS, JavaScript, and jQuery to develop responsive and interactive web applications in a collaborative team environment.',
        'Implemented reusable component libraries',
        'Collaborated with design teams to create intuitive user interfaces',
        'Contributed to open-source projects'
      ],
      tech: ['React', 'Material-UI', 'Git', 'Postman', 'Copilot', 'VS Code', 'Cursor']
    },
    {
      year: '2021 - 2023',
      role: 'Frontend Developer 1',
      company: 'Mewurk Technologies Pvt Ltd.',
      description: 'Developed responsive web applications, collaborated with design teams to create intuitive user interfaces, and integrated RESTful APIs.',
      achievements: [
        'Utilized HTML, CSS, JavaScript, and jQuery to develop responsive and interactive web applications in a collaborative team environment.',
        'Leveraged Redux to effectively manage complex application state',
        'Utilized AG-Grid (both standard and enterprise versions) to visualize and interact with large datasets'
      ],
      tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Material-UI', 'Git', 'npm', 'Postman', 'AG-Grid', 'React Bootstrap', 'React Native']
    },
    {
      year: '2019 - 2021',
      role: 'Software Developer',
      company: 'Medicloq services Pvt Ltd.',
      description: 'Created dynamic web pages, maintained existing codebases, and learned modern web development practices.',
      achievements: [
        'Developed 10+ landing pages and web applications',
        'Built reusable components for future use and optimized web pages for speed and scalability.',
        'Learned React, Node.js, and modern development tools',
        'Contributed to open-source projects'
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Git', 'React Native Paper', 'VS Code', 'React Native']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            My professional journey in software development
          </p>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{exp.year}</div>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">
                  <i className="fas fa-building"></i> {exp.company}
                </h4>
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i> {achievement}
                    </li>
                  ))}
                </ul>
                <div className="timeline-tech">
                  {exp.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

