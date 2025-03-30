import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });

  // The email address where all form submissions will be sent
  const contactEmail = 'amir@clarityimpactfinance.com';

  // EmailJS configuration - you'll need to sign up at emailjs.com and get these values
  const EMAILJS_SERVICE_ID = 'service_8yvh652'; 
  const EMAILJS_TEMPLATE_ID = 'template_asituhs';
  const EMAILJS_PUBLIC_KEY = '3f4qpHZXPHhPyyL7Y';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      loading: true
    });

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: contactEmail,
        from_name: formData.name,
        from_email: formData.email,
        organization: formData.organization || 'Not provided',
        service: formData.service,
        message: formData.message,
        reply_to: formData.email
      };

      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully to:', contactEmail);
      
      // Update form status on success
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message. We will contact you soon!',
        loading: false
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          organization: '',
          service: '',
          message: ''
        });
        setFormStatus({
          submitted: false,
          error: false,
          message: '',
          loading: false
        });
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'There was an error sending your message. Please try again later.',
        loading: false
      });
    }
  };

  const services = [
    'Underwriting & Lending Strategy',
    'NMTC Consulting',
    'Federal Program Compliance',
    'Asset Management',
    'Impact Measurement',
    'Portfolio Risk Analysis',
    'Other'
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <div className="contact-subtitle">
            <p>Ready to transform your community impact?</p>
          </div>
        </div>
        
        <div className="contact-wrapper">
          <div className="contact-info-panel">
            <div className="contact-info-content">
              <h3>Get in Touch</h3>
              <p>We're here to help you maximize your community impact through strategic financial solutions.</p>
              
              <div className="contact-method">
                <div className="contact-method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-method-details">
                  <h4>Email</h4>
                  <a href="mailto:amir@clarityimpactfinance.com">amir@clarityimpactfinance.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="contact-method-details">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/amirali86" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div className="contact-method-details">
                  <h4>Services</h4>
                  <p>CDFI Consulting, NMTC Advisory, Federal Program Compliance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-panel">
            {formStatus.submitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>{formStatus.message}</p>
              </div>
            ) : formStatus.error ? (
              <div className="form-error">
                <div className="error-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3>Something went wrong</h3>
                <p>{formStatus.message}</p>
                <button type="button" className="try-again-btn" onClick={() => setFormStatus({...formStatus, error: false})}>
                  Try Again
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="organization">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization (optional)"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-btn ${formStatus.loading ? 'loading' : ''}`}
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? 'Sending...' : 'Send Message'}
                </button>
                
                <div className="form-privacy">
                  <p>Your information is secure and will not be shared with third parties.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 