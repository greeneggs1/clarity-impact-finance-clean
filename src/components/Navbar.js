import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/scroll';
import logo from '../assets/logo-new.svg';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Update scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
      
      // Check if page is scrolled to add background
      setIsScrolled(currentScrollPos > 50);
      
      // Don't hide navbar when menu is open
      if (isMenuOpen) {
        setIsVisible(true);
        return;
      }
      
      // Hide/show navbar based on scroll direction
      // Only apply this behavior when we're scrolled down a bit to avoid flickering at the top
      if (currentScrollPos > 100) {
        // Determine if scrolling up or down
        const isScrollingDown = currentScrollPos > prevScrollPos;
        
        // Only change visibility if we've scrolled more than 10px to avoid flickering
        if (Math.abs(currentScrollPos - prevScrollPos) > 10) {
          setIsVisible(!isScrollingDown);
        }
      } else {
        // Always show navbar at the top of the page
        setIsVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);

      // Update active section
      const sections = ['home', 'about', 'services', 'blog', 'resources', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isMenuOpen]);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // Always show navbar when menu is open
    if (newMenuState) {
      setIsVisible(true);
      document.addEventListener('click', closeMenuOnClickOutside);
    } else {
      document.removeEventListener('click', closeMenuOnClickOutside);
    }
  };

  const closeMenuOnClickOutside = (e) => {
    if (!e.target.closest('.navbar-container')) {
      setIsMenuOpen(false);
      document.removeEventListener('click', closeMenuOnClickOutside);
    }
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
    document.removeEventListener('click', closeMenuOnClickOutside);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="Clarity Impact Finance Logo" className="navbar-logo" />
        </div>

        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''}>
              <button onClick={() => handleNavClick('home')}>Home</button>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <button onClick={() => handleNavClick('about')}>About</button>
            </li>
            <li className={activeSection === 'services' ? 'active' : ''}>
              <button onClick={() => handleNavClick('services')}>Services</button>
            </li>
            <li className={activeSection === 'blog' ? 'active' : ''}>
              <button onClick={() => handleNavClick('blog')}>Blog</button>
            </li>
            <li className={activeSection === 'resources' ? 'active' : ''}>
              <button onClick={() => handleNavClick('resources')}>Resources</button>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <button onClick={() => handleNavClick('contact')}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Progress indicator bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;