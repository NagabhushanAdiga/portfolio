import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Shopeee - E-Commerce Platform',
      description: 'A complete end-to-end e-commerce platform built with MERN stack (MongoDB, Express, React, Node.js). Features a full shopping workflow including user authentication, product catalog, shopping cart, checkout, order management, and admin dashboard for comprehensive store management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'MERN Stack', 'JavaScript', 'Vercel'],
      features: [
        'Complete end-to-end shopping workflow',
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout system',
        'Order management and tracking',
        'Admin dashboard for store management',
        'Responsive design for all devices'
      ],
      github: '#',
      demo: 'https://shopeui.vercel.app/'
    },
    {
      title: 'Search with OpenAI - AI Chat Application',
      description: 'An intelligent search and chat application powered by OpenAI API. Users can interact with AI to get answers, search information, and have natural conversations. Built with React and integrated with OpenAI\'s API for advanced AI capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80',
      tech: ['React', 'OpenAI API', 'JavaScript', 'CSS3', 'Vercel'],
      features: [
        'AI-powered search and chat interface',
        'Integration with OpenAI API',
        'Natural language conversations',
        'Real-time AI responses',
        'Modern and intuitive UI design',
        'Responsive design for all devices'
      ],
      github: '#',
      demo: 'https://searchwith-open-ai.vercel.app/'
    },
    {
      title: 'Chatbot - AI Suggestion App',
      description: 'An interactive chatbot application built with React and JavaScript that provides intelligent suggestions and conversational interface. A frontend-only solution that delivers a seamless chat experience with modern UI/UX design.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop&q=80',
      tech: ['React', 'JavaScript', 'CSS3', 'Vercel'],
      features: [
        'Interactive chatbot interface',
        'Intelligent suggestion system',
        'Modern and responsive UI design',
        'Real-time conversation flow',
        'Frontend-only application',
        'Smooth user experience'
      ],
      github: '#',
      demo: 'https://chatbot-bice-one-70.vercel.app/'
    },
    {
      title: 'Make My Resume - Resume Builder',
      description: 'A user-friendly resume builder application that allows users to create professional resumes effortlessly. Built as a frontend-only application with powerful export capabilities to Word and PDF formats, enabling users to download their resumes in multiple formats.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80',
      tech: ['React', 'JavaScript', 'Vercel', 'CSS3', 'PDF Export', 'Word Export'],
      features: [
        'Intuitive resume builder interface',
        'Export to Word (.docx) format',
        'Export to PDF format',
        'Frontend-only application (no backend required)',
        'Multiple resume templates',
        'Real-time preview of resume'
      ],
      github: '#',
      demo: 'https://makemyresume-ui.vercel.app/login'
    },
    {
      title: 'Event Pro - Event Management Software',
      description: 'A comprehensive event management platform for creating, organizing, and managing events efficiently. Built with modern web technologies to provide a seamless experience for event organizers and participants.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&q=80',
      tech: ['React', 'Node.js', 'Vercel', 'JavaScript', 'CSS3'],
      features: [
        'Event creation and management',
        'User-friendly interface for organizers',
        'Real-time event updates',
        'Responsive design for all devices'
      ],
      github: '#',
      demo: 'https://evento-drab.vercel.app/'
    },
    {
      title: "Nagabhushan Adiga's Theme - VS Code Extension",
      description: 'A focused VS Code color theme featuring a clean, high-contrast chrome with F5F102 header color. The theme provides a calm workspace with deep navy editor background and pastel syntax highlighting, optimized for React/JS, markdown, and general scripting.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop&q=80',
      tech: ['VS Code Extension', 'JSON', 'JavaScript', 'GitHub'],
      features: [
        'Custom F5F102 header and footer styling',
        'Dark editor background (#10121A) for focus',
        'Balanced selection and line highlight colors',
        'Optimized color palette for React/JS development',
        'Published and available on VS Code Marketplace'
      ],
      github: 'https://github.com/NagabhushanAdiga/vs-code-theme1',
      demo: 'https://marketplace.visualstudio.com/items?itemName=NagabhushanAdiga.f5f102-theme'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Some of the projects I've worked on recently
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <i className="fas fa-eye"></i>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

