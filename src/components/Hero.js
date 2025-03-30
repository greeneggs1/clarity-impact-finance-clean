import React, { useRef, useEffect } from 'react';
import './Hero.css';
import { scrollToSection } from '../utils/scroll';

const Hero = () => {
  const heroRef = useRef(null);
  
  // Background image URL
  const backgroundImageUrl = "https://res.cloudinary.com/dxenrdunh/image/upload/v1743291175/iStock-1472610843_wxnesf.jpg";
  
  // Add animation effect when component mounts
  useEffect(() => {
    if (heroRef.current) {
      setTimeout(() => {
        heroRef.current.classList.add('loaded');
      }, 100);
    }
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="image-background">
        <div 
          className="background-image"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>
        <div className="image-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1>Transforming Communities Through Finance</h1>
        <h2>We provide strategic consulting and innovative solutions for mission-driven lenders</h2>
        <div className="hero-buttons">
          <button 
            className="primary-btn"
            onClick={() => scrollToSection('services')}
          >
            Explore Our Services
          </button>
          <button 
            className="secondary-btn"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="scroll-indicator">
        <p className="scroll-text">Meet Our Leadership</p>
        <span onClick={() => scrollToSection('about')}>↓</span>
      </div>
    </section>
  );
};

export default Hero;