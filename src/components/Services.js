import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import { scrollToSection } from '../utils/scroll';

// Use the provided Cloudinary image URLs
const communityImagePaths = {
  lending: [
    'https://res.cloudinary.com/dxenrdunh/image/upload/v1743273981/ChatGPT_Image_Mar_29_2025_at_02_42_48_PM_giapsj.png',
    'https://res.cloudinary.com/dxenrdunh/image/upload/v1743274041/ChatGPT_Image_Mar_29_2025_at_11_24_59_AM_lh9pg1.png'
  ],
  nmtc: [
    'https://res.cloudinary.com/dxenrdunh/image/upload/v1743273981/ChatGPT_Image_Mar_29_2025_at_02_42_48_PM_giapsj.png',
    'https://res.cloudinary.com/dxenrdunh/image/upload/v1743274041/ChatGPT_Image_Mar_29_2025_at_11_24_59_AM_lh9pg1.png'
  ],
  compliance: [
    'https://res.cloudinary.com/dxenrdunh/image/upload/v1743273981/ChatGPT_Image_Mar_29_2025_at_02_42_48_PM_giapsj.png',
    'https://res.cloudinary.com/dxenrdunh/image/upload/v1743274041/ChatGPT_Image_Mar_29_2025_at_11_24_59_AM_lh9pg1.png'
  ],
  gallery: [
    'https://res.cloudinary.com/dxenrdunh/image/upload/v1743300558/Screenshot_2025-03-29_at_10.08.18_PM_tiuheb.png',
    'https://res.cloudinary.com/dxenrdunh/image/upload/v1743300561/Screenshot_2025-03-29_at_10.07.44_PM_clg9nv.png',
    'https://res.cloudinary.com/dxenrdunh/image/upload/v1743300566/Screenshot_2025-03-29_at_10.08.00_PM_wghcfl.png'
  ]
};

const Services = () => {
  const servicesRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When services section enters viewport
        if (entry.isIntersecting) {
          servicesRef.current.classList.add('in-view');
        } else {
          servicesRef.current.classList.remove('in-view');
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% visible
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    // Clean up the observer on unmount
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  // Set up image rotation for the gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex(prevIndex => 
        (prevIndex + 1) % communityImagePaths.gallery.length
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Define direct styling for the section
  const servicesStyle = {
    background: "linear-gradient(135deg, #E67E45 0%, #d16a33 100%)",
    position: "relative"
  };

  return (
    <section id="services" className="services" ref={servicesRef} style={servicesStyle}>
      <div className="services-container">
        <h2>Our Services</h2>
        <p className="services-intro">
          Specialized consulting services designed to strengthen CDFIs and maximize their community impact
        </p>

        {/* Image showcase at top */}
        <div className="community-impact-showcase">
          <div className="impact-image-container">
            {communityImagePaths.gallery.map((imagePath, index) => (
              <div 
                key={imagePath} 
                className={`impact-image ${index === activeImageIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${imagePath})` }}
              />
            ))}
          </div>
          <div className="impact-text">
            <h3>Creating Lasting Community Impact</h3>
            <p>Our services directly support projects that make a difference in communities across the country.</p>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Underwriting & Lending Strategy</h3>
            <div className="service-content">
              <p>Advising on lending product design, underwriting policies, and equitable lending practices.</p>
              
              <ul className="service-features">
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Lending Product Design & Innovation</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Underwriting Policy Development</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Risk Assessment Frameworks</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Equitable Lending Practices</span>
                </li>
              </ul>
              <div className="service-benefits">
                <h4>Key Benefits</h4>
                <ul>
                  <li>Streamlined lending processes</li>
                  <li>Enhanced risk management</li>
                  <li>Increased operational efficiency</li>
                  <li>Greater community impact</li>
                </ul>
              </div>
            </div>
            <button 
              className="learn-more-btn"
              onClick={() => scrollToSection('contact')}
            >
              Learn More
            </button>
          </div>

          <div className="service-card">
            <h3>NMTC Consulting</h3>
            <div className="service-content">
              <p>Strategic program development, compliance oversight, and asset management solutions for New Markets Tax Credit initiatives.</p>
              
              <ul className="service-features">
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Program Strategy Development</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Compliance Management</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Asset Management Solutions</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Impact Measurement</span>
                </li>
              </ul>
              <div className="service-benefits">
                <h4>Key Benefits</h4>
                <ul>
                  <li>Optimized NMTC strategies</li>
                  <li>Regulatory compliance</li>
                  <li>Enhanced portfolio management</li>
                  <li>Maximized community benefits</li>
                </ul>
              </div>
            </div>
            <button 
              className="learn-more-btn"
              onClick={() => scrollToSection('contact')}
            >
              Learn More
            </button>
          </div>

          <div className="service-card">
            <h3>Compliance & Asset Management</h3>
            <div className="service-content">
              <p>Comprehensive compliance oversight and asset management solutions for federal programs including BGP and Department of Education initiatives.</p>
              
              <ul className="service-features">
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Program Compliance Systems</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Risk Management & Monitoring</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Portfolio Oversight</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span>Reporting & Documentation</span>
                </li>
              </ul>
              <div className="service-benefits">
                <h4>Key Benefits</h4>
                <ul>
                  <li>Regulatory compliance assurance</li>
                  <li>Streamlined monitoring processes</li>
                  <li>Enhanced risk management</li>
                  <li>Improved reporting efficiency</li>
                </ul>
              </div>
            </div>
            <button 
              className="learn-more-btn"
              onClick={() => scrollToSection('contact')}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 