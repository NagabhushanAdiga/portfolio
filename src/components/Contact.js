import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS configuration
  const PUBLIC_KEY = 'EVkZIaRS0ZnvmDSTQ';
  const SERVICE_ID = 'service_voj5soq';
  const AUTO_REPLY_TEMPLATE_ID = 'template_yk7ajp6'; // Auto-Reply template (to form submitter)
  const NOTIFICATION_TEMPLATE_ID = 'template_qxurx2a'; // Contact Us template (notification to you)

  // Initialize EmailJS when component mounts
  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // Validate EmailJS configuration
    if (!PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured.'
      });
      setIsLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsLoading(false);
      return;
    }

    // Clean email addresses (remove any whitespace)
    const submitterEmail = formData.email.trim();
    const ownerEmail = 'nagbhushan.adiga@gmail.com';

    // Prepare template parameters for auto-reply (to form submitter)
    // Template uses {{name}} and {{title}} - matching those parameters
    const autoReplyParams = {
      to_email: submitterEmail, // Recipient: the person who submitted the form
      to_name: formData.name.trim(),
      name: formData.name.trim(), // Template uses {{name}}
      title: formData.subject.trim(), // Template uses {{title}}
      subject: `Re: ${formData.subject.trim()}`,
      from_name: formData.name.trim(),
      from_email: submitterEmail,
      user_name: formData.name.trim(),
      user_email: submitterEmail,
      email: submitterEmail,
      message: formData.message.trim(),
      reply_to: ownerEmail
    };

    // Prepare template parameters for notification (to nagbhushan.adiga@gmail.com with form details)
    const notificationParams = {
      to_email: ownerEmail, // Your email - recipient of notification
      to_name: 'Nagabhushan',
      // Form submitter details
      from_name: formData.name.trim(),
      from_email: submitterEmail,
      user_name: formData.name.trim(),
      user_email: submitterEmail,
      name: formData.name.trim(),
      email: submitterEmail,
      // Form details
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      form_subject: formData.subject.trim(),
      form_message: formData.message.trim(),
      // Email subject
      email_subject: `New Contact Form Submission: ${formData.subject.trim()}`,
      // Reply information
      reply_to: submitterEmail,
      reply_to_email: submitterEmail,
      reply_to_name: formData.name.trim()
    };

    try {
      // Send both emails: auto-reply to submitter and notification to you
      const [autoReplyResponse, notificationResponse] = await Promise.all([
        emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, autoReplyParams, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, NOTIFICATION_TEMPLATE_ID, notificationParams, PUBLIC_KEY)
      ]);

      console.log('Auto-reply sent!', autoReplyResponse.status, autoReplyResponse.text);
      console.log('Notification sent!', notificationResponse.status, notificationResponse.text);

      setStatus({
        type: 'success',
        message: 'Message sent successfully! 🎉'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } catch (error) {
      console.error('FAILED...', error);
      setStatus({
        type: 'error',
        message: error.text || 'Failed to send message. Please try again or email me directly.'
      });
      setIsLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a project in mind? Let's work together!
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>nagbhushan.adiga@gmail.com</p>
              <a href="mailto:nagbhushan.adiga@gmail.com">Send Email</a>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Phone</h3>
              <p>+91 7899087516</p>
              <a href="tel:+917899087516">Call Now</a>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Location</h3>
              <p>Bengaluru, Karnataka, India</p>
              <a href="#">View Map</a>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Availability</h3>
              <p>Mon - Fri: 9AM - 6PM</p>
              <a href="#">Schedule Meeting</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <i className="fas fa-user"></i> Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">
                <i className="fas fa-tag"></i> Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment"></i> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Send Message
                </>
              )}
            </button>
            {status.message && (
              <div className={`form-status ${status.type === 'error' ? 'error' : 'success'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

