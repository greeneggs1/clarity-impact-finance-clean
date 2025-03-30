import React, { useState } from 'react';
import './TeamSection.css';
import profileImage from '../assets/profile.jpg';
import logoEmblem from '../assets/logo-emblem.svg';

const TeamSection = () => {
  const [showFullBio, setShowFullBio] = useState(false);

  const fullBio = `I organize my work around a fundamental belief: that equitable access to capital can transform underserved communities and address critical social determinants of health. Throughout my career spanning more than 14 years, I have consistently delivered results by leveraging my expertise in financial analysis, community development, and tax credit finance.

As the founder of Clarity Impact Finance, I partner with CDFIs and mission-driven lenders to optimize their operations, strengthen their impact measurement frameworks, and unlock new capital sources. My approach combines financial expertise with a commitment to improving housing, healthcare, education, and childcare access in low-income communities.

Prior to launching Clarity Impact Finance, I served as Vice President of National Community Facilities Lending & New Market Tax Credit at Low Income Investment Fund, where I led initiatives to expand community facilities in underserved areas.

My experience includes managing a portfolio of real estate private equity funds at Aviva Investors and supporting high-net-worth clients with wealth management services at Bank of New York Mellon. I also founded GroceryBox, an online grocery marketplace delivering essentials to seniors and people with disabilities.

I hold a B.Com in Finance and Accounting from McGill University and am a CFA Charterholder. I remain actively engaged in community service through volunteer work with the Mental Health Association of Rockland and previously with the Grameen Foundation's Bankers Without Borders program, and Yonkers YMCA.

What drives me most is witnessing the tangible differences that strategic capital deployment makes in people's lives—whether through affordable housing developments, community health centers, quality educational facilities, or accessible childcare options.`;

  const bioPreview = fullBio.substring(0, 300) + '...';

  return (
    <section id="about" className="about">
      <div className="about-content-wrapper">
        <div className="logo-emblem-container">
          <img src={logoEmblem} alt="Clarity Impact Finance Logo Emblem" className="logo-emblem" />
        </div>
        
        {/* Vision Section - Changed from Leadership Section */}
        <h2>Our Vision</h2>
        
        <div className="vision-statement">
          <p>A thriving CDFI ecosystem where all organizations, regardless of size, have the capacity to deliver equitable lending and TA solutions that meet the needs of underserved communities.</p>
        </div>

        {/* Team Section Heading */}
        <h3 className="section-subheading team-heading">Our Team</h3>

        {/* Founder Bio Card */}
        <div className="team-section">
          <div className="team-member founder">
            <div className="member-image-container">
              <img src={profileImage} alt="Amir Ali, CFA - Founder and Principal Consultant" className="member-image" />
            </div>
            <div className="member-content">
              <h3>Amir Ali, CFA</h3>
              <p className="member-title">Founder and Principal Consultant</p>
              <div className="member-bio">
                <p>{showFullBio ? fullBio : bioPreview}</p>
                <button 
                  className="read-more-btn" 
                  onClick={() => setShowFullBio(!showFullBio)}
                >
                  {showFullBio ? "Show Less" : "Read More"}
                </button>
              </div>
              <div className="member-social">
                <a 
                  href="https://www.linkedin.com/in/amirali86" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link linkedin"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="mailto:amir@clarityimpactfinance.com" 
                  className="social-link email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;