import React, { useState, useEffect } from 'react';
import './AccessibilityWidget.css';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(localStorage.getItem('accessibility-fontSize') || 'normal');
  const [contrast, setContrast] = useState(localStorage.getItem('accessibility-contrast') || 'normal');
  const [animations, setAnimations] = useState(localStorage.getItem('accessibility-animations') !== 'disabled');

  useEffect(() => {
    // Apply font size
    document.documentElement.setAttribute('data-font-size', fontSize);
    localStorage.setItem('accessibility-fontSize', fontSize);

    // Apply contrast
    document.documentElement.setAttribute('data-contrast', contrast);
    localStorage.setItem('accessibility-contrast', contrast);

    // Apply animations
    if (animations) {
      document.documentElement.removeAttribute('data-reduce-motion');
      localStorage.removeItem('accessibility-animations');
    } else {
      document.documentElement.setAttribute('data-reduce-motion', 'true');
      localStorage.setItem('accessibility-animations', 'disabled');
    }
  }, [fontSize, contrast, animations]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  const handleContrastChange = (mode) => {
    setContrast(mode);
  };

  const toggleAnimations = () => {
    setAnimations(!animations);
  };

  const resetSettings = () => {
    setFontSize('normal');
    setContrast('normal');
    setAnimations(true);
  };

  return (
    <div className={`accessibility-widget ${isOpen ? 'open' : ''}`}>
      <button 
        className="accessibility-toggle" 
        onClick={toggleWidget}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 8v8"></path>
          <path d="M8 12h8"></path>
        </svg>
        <span>Accessibility</span>
      </button>

      <div className="accessibility-panel">
        <h3>Accessibility Settings</h3>
        
        <div className="setting-group">
          <h4>Font Size</h4>
          <div className="button-group">
            <button 
              className={fontSize === 'small' ? 'active' : ''} 
              onClick={() => handleFontSizeChange('small')}
              aria-pressed={fontSize === 'small'}
            >
              Small
            </button>
            <button 
              className={fontSize === 'normal' ? 'active' : ''} 
              onClick={() => handleFontSizeChange('normal')}
              aria-pressed={fontSize === 'normal'}
            >
              Normal
            </button>
            <button 
              className={fontSize === 'large' ? 'active' : ''} 
              onClick={() => handleFontSizeChange('large')}
              aria-pressed={fontSize === 'large'}
            >
              Large
            </button>
            <button 
              className={fontSize === 'x-large' ? 'active' : ''} 
              onClick={() => handleFontSizeChange('x-large')}
              aria-pressed={fontSize === 'x-large'}
            >
              Extra Large
            </button>
          </div>
        </div>

        <div className="setting-group">
          <h4>Contrast</h4>
          <div className="button-group">
            <button 
              className={contrast === 'normal' ? 'active' : ''} 
              onClick={() => handleContrastChange('normal')}
              aria-pressed={contrast === 'normal'}
            >
              Normal
            </button>
            <button 
              className={contrast === 'high' ? 'active' : ''} 
              onClick={() => handleContrastChange('high')}
              aria-pressed={contrast === 'high'}
            >
              High Contrast
            </button>
          </div>
        </div>

        <div className="setting-group">
          <h4>Motion</h4>
          <div className="toggle-switch">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={animations} 
                onChange={toggleAnimations}
                aria-label="Enable animations"
              />
              <span className="slider round"></span>
            </label>
            <span>Enable animations</span>
          </div>
        </div>

        <button className="reset-button" onClick={resetSettings}>
          Reset to Default
        </button>
      </div>
    </div>
  );
};

export default AccessibilityWidget; 