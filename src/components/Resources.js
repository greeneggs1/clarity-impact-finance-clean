import React, { useState } from 'react';
import './Resources.css';

const Resources = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCdfiLoading, setIsCdfiLoading] = useState(true);
  
  // Handle iframe loading
  const handleIframeLoad = () => {
    setIsLoading(false);
  };
  
  // Handle CDFI iframe loading
  const handleCdfiIframeLoad = () => {
    setIsCdfiLoading(false);
  };

  return (
    <section id="resources" className="resources">
      <div className="resources-container">
        <div className="resources-header">
          <h1>Resource Hub</h1>
          <p>Connect to specialized resources and tools in community development finance.</p>
        </div>
        
        {isLoading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading resource database...</p>
          </div>
        )}
        
        <div className="airtable-embed-container" style={{ display: isLoading ? 'none' : 'block' }}>
          <iframe 
            className="airtable-embed" 
            src="https://airtable.com/embed/appxqHchDUCHIokSr/shrfzKNa7nhV5LsNP?viewControls=on" 
            frameBorder="0" 
            onMouseWheel="" 
            width="100%" 
            height="700" 
            style={{background: 'transparent', border: '1px solid #ccc'}}
            onLoad={handleIframeLoad}
            title="Clarity Impact Finance Resource Hub"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Find a CDFI Section */}
        <div className="find-cdfi-section">
          <h2>Find a CDFI</h2>
          <p>Search for Community Development Financial Institutions across the United States.</p>
          
          {isCdfiLoading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading CDFI database...</p>
            </div>
          )}
          
          <div className="airtable-embed-container" style={{ display: isCdfiLoading ? 'none' : 'block' }}>
            <iframe 
              className="airtable-embed" 
              src="https://airtable.com/embed/appiQhf68CbcYRfEx/shrpqwodZijg2rVXX" 
              frameBorder="0" 
              onMouseWheel="" 
              width="100%" 
              height="700" 
              style={{background: 'transparent', border: '1px solid #ccc'}}
              onLoad={handleCdfiIframeLoad}
              title="Find a CDFI Database"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;