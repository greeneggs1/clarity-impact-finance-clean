import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ClientResources.css';

const ClientResources = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const email = localStorage.getItem('userEmail');
    
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    setUserEmail(email || '');
    
    // Simulate loading client resources
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/');
  };
  
  if (isLoading) {
    return (
      <div className="client-resources loading">
        <div className="loading-spinner"></div>
        <p>Loading your resources...</p>
      </div>
    );
  }
  
  return (
    <div className="client-resources">
      <div className="client-header">
        <h1>Client Resources</h1>
        <div className="user-controls">
          <span className="welcome-message">Welcome, {userEmail}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>
      
      <div className="resources-section">
        <h2>Your Exclusive Resources</h2>
        
        <div className="resource-grid">
          <div className="resource-card premium">
            <div className="resource-icon">📊</div>
            <h3>Financial Analysis Template</h3>
            <p>Comprehensive Excel template for analyzing nonprofit and small business financials.</p>
            <a href="/downloads/financial_analysis_template.xlsx" className="resource-link">Download Template</a>
          </div>
          
          <div className="resource-card premium">
            <div className="resource-icon">📝</div>
            <h3>Underwriting Checklist - Nonprofit</h3>
            <p>Complete checklist for underwriting loans to nonprofit organizations.</p>
            <a href="/downloads/nonprofit_underwriting_checklist.pdf" className="resource-link">Download PDF</a>
          </div>
          
          <div className="resource-card premium">
            <div className="resource-icon">📋</div>
            <h3>Due Diligence Guide</h3>
            <p>Comprehensive guide to conducting due diligence for community development projects.</p>
            <a href="/downloads/due_diligence_guide.pdf" className="resource-link">Download Guide</a>
          </div>
          
          <div className="resource-card premium">
            <div className="resource-icon">🏢</div>
            <h3>Real Estate Pro Forma</h3>
            <p>Advanced pro forma template for community real estate development projects.</p>
            <a href="/downloads/real_estate_pro_forma.xlsx" className="resource-link">Download Template</a>
          </div>
          
          <div className="resource-card premium">
            <div className="resource-icon">📈</div>
            <h3>Impact Measurement Toolkit</h3>
            <p>Tools and templates for measuring and reporting social impact metrics.</p>
            <a href="/downloads/impact_measurement_toolkit.zip" className="resource-link">Download Toolkit</a>
          </div>
          
          <div className="resource-card premium">
            <div className="resource-icon">📚</div>
            <h3>Client Case Studies</h3>
            <p>In-depth case studies of successful client projects with financial details.</p>
            <a href="/downloads/client_case_studies.pdf" className="resource-link">View Case Studies</a>
          </div>
        </div>
      </div>
      
      <div className="client-support">
        <h2>Client Support</h2>
        <p>Need help with these resources or have questions about your project?</p>
        <div className="support-options">
          <a href="/schedule-consultation" className="support-option">
            <div className="support-icon">📅</div>
            <div className="support-text">
              <h4>Schedule a Consultation</h4>
              <p>Book a one-on-one session with our experts</p>
            </div>
          </a>
          
          <a href="mailto:support@clarityimpact.finance" className="support-option">
            <div className="support-icon">✉️</div>
            <div className="support-text">
              <h4>Email Support</h4>
              <p>support@clarityimpact.finance</p>
            </div>
          </a>
          
          <a href="tel:+18005551234" className="support-option">
            <div className="support-icon">📞</div>
            <div className="support-text">
              <h4>Phone Support</h4>
              <p>1-800-555-1234</p>
            </div>
          </a>
        </div>
      </div>
      
      <div className="back-to-home">
        <Link 
          to="/" 
          className="home-link" 
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          ← Back to Website
        </Link>
      </div>
    </div>
  );
};

export default ClientResources;
