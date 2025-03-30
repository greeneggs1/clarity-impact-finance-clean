import React, { useState, useEffect } from 'react';
import './ThoughtLeadership.css';

const ThoughtLeadership = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [emailValue, setEmailValue] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  useEffect(() => {
    // Simulated articles data
    const articlesData = [
      {
        id: 1,
        title: 'The Future of CDFI Funding: Trends and Opportunities',
        excerpt: 'Explore emerging funding sources and strategies for CDFIs in a changing economic landscape.',
        category: 'cdfi',
        author: 'Amir Ali',
        date: 'March 2, 2025',
        url: 'https://www.linkedin.com/pulse/future-cdfi-funding-trends-opportunities'
      },
      {
        id: 2,
        title: 'Maximizing Impact: New Approaches to NMTC Deployment',
        excerpt: 'How innovative NMTC strategies are creating deeper impact in underserved communities.',
        category: 'nmtc',
        author: 'Amir Ali',
        date: 'February 15, 2025',
        url: 'https://www.linkedin.com/pulse/maximizing-impact-new-approaches-nmtc-deployment'
      },
      {
        id: 3,
        title: 'Charter School Facility Financing: Overcoming Common Challenges',
        excerpt: 'Practical solutions to the most pressing facility financing obstacles facing charter schools today.',
        category: 'charter-schools',
        author: 'Amir Ali',
        date: 'January 28, 2025',
        url: 'https://www.linkedin.com/pulse/charter-school-facility-financing-overcoming-common-challenges'
      },
      {
        id: 4,
        title: 'Building Resilient CDFI Portfolios in Uncertain Times',
        excerpt: 'Risk management strategies that help CDFIs maintain financial health while serving their communities.',
        category: 'cdfi',
        author: 'Amir Ali',
        date: 'January 10, 2025',
        url: 'https://www.linkedin.com/pulse/building-resilient-cdfi-portfolios-uncertain-times'
      },
      {
        id: 5,
        title: 'The Role of Data in Measuring Community Development Impact',
        excerpt: 'How data-driven approaches are transforming impact measurement for mission-driven lenders.',
        category: 'impact',
        author: 'Amir Ali',
        date: 'December 5, 2024',
        url: 'https://www.linkedin.com/pulse/role-data-measuring-community-development-impact'
      },
      {
        id: 6,
        title: 'NMTC Compliance: Best Practices for Success',
        excerpt: 'Essential compliance strategies to maximize the benefits of New Markets Tax Credits.',
        category: 'nmtc',
        author: 'Amir Ali',
        date: 'November 18, 2024',
        url: 'https://www.linkedin.com/pulse/nmtc-compliance-best-practices-success'
      }
    ];

    setArticles(articlesData);
    setFilteredArticles(articlesData);
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(article => article.category === activeCategory));
    }
  }, [activeCategory, articles]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    
    // Validate email
    if (!emailValue || !/\S+@\S+\.\S+/.test(emailValue)) {
      setSubscribeStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // In a real implementation, this would be replaced with actual Mailchimp form submission
    // For now, we'll simulate a successful subscription
    setSubscribeStatus({
      submitted: true,
      success: true,
      message: 'Thank you for subscribing! Please check your email to confirm your subscription.'
    });
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubscribeStatus({
        submitted: false,
        success: false,
        message: ''
      });
      setEmailValue('');
    }, 5000);
  };

  return (
    <section id="thought-leadership" className="thought-leadership">
      <div className="container">
        <h2 className="section-title">Thought Leadership</h2>
        <p className="section-subtitle">
          Insights and perspectives on community development finance from our team of experts.
        </p>

        <div className="category-filter">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'cdfi' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('cdfi')}
          >
            CDFI
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'nmtc' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('nmtc')}
          >
            NMTC
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'charter-schools' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('charter-schools')}
          >
            Charter Schools
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'impact' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('impact')}
          >
            Impact
          </button>
        </div>

        <div className="articles-grid">
          {filteredArticles.map(article => (
            <div className="article-card" key={article.id}>
              <div className="article-category">{article.category.toUpperCase()}</div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="article-meta">
                <span className="article-author">{article.author}</span>
                <span className="article-date">{article.date}</span>
              </div>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-link">
                Read on LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="thought-leadership-cta">
          <h3>Want more insights delivered to your inbox?</h3>
          <p>Subscribe to our newsletter for the latest trends and strategies in community development finance.</p>
          
          {subscribeStatus.submitted ? (
            <div className={`subscription-message ${subscribeStatus.success ? 'success' : 'error'}`}>
              {subscribeStatus.message}
            </div>
          ) : (
            <div id="mc_embed_signup">
              <form 
                action="https://clarityimpactfinance.us21.list-manage.com/subscribe/post?u=YOUR_U_VALUE&amp;id=YOUR_ID_VALUE" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="newsletter-form" 
                target="_blank" 
                onSubmit={handleSubscribeSubmit}
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <input 
                      type="email" 
                      name="EMAIL" 
                      className="required email" 
                      id="mce-EMAIL" 
                      placeholder="Your email address" 
                      required 
                      value={emailValue}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_YOUR_U_VALUE_AGAIN_HERE_YOUR_ID_VALUE_AGAIN" tabIndex="-1" value="" readOnly />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button-primary">Subscribe</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
          <p className="privacy-note">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadership; 