import React, { useState } from 'react';
import './Blog.css';
import { scrollToSection } from '../utils/scroll';
import SEO from './SEO';

function Blog() {
  // LinkedIn articles data - Updated with actual articles
  const linkedInArticles = [
    {
      id: 1,
      title: "AI for CDFIs: From Concept to Implementation (Part II)",
      date: "March 20, 2025",
      category: "AI & Technology",
      excerpt: "Following our exploration of AI opportunities in the CDFI sector, this article dives deeper into practical implementation strategies, real-world use cases, and how community lenders can leverage AI tools while maintaining their mission focus.",
      articleUrl: "https://www.linkedin.com/pulse/ai-cdfis-from-concept-implementation-part-ii-amir-ali-ncxbe/?trackingId=UzbylPP5YP0iQJ6XiCgbEg%3D%3D",
      imageUrl: "/images/ai-cdfi-implementation.jpg"
    },
    {
      id: 2,
      title: "MLK Day Reflections: Advancing Economic Justice with CDFI Lending",
      date: "January 21, 2025",
      category: "Economic Justice",
      excerpt: "Today, as we celebrate Martin Luther King Jr. Day, I'm reminded of Dr. King's vision for economic justice and how CDFIs can advance his legacy through inclusive lending practices.",
      articleUrl: "https://www.linkedin.com/pulse/mlk-day-reflections-advancing-economic-justice-cdfi-lending-amir-ali-sdvge/",
      imageUrl: "/images/mlk-day-reflections.jpg"
    },
    {
      id: 3,
      title: "256,000 New Jobs, 4.1% Unemployment—What Small CDFIs Need to Know",
      date: "January 12, 2025",
      category: "Economic Analysis",
      excerpt: "In December 2024, United States added 256,000 new jobs (vs. 160,000 expected) and pushed unemployment down slightly from 4.2% to 4.1%. With a strong labor market like this, interest rate cuts might be off the table for now.",
      articleUrl: "https://www.linkedin.com/pulse/256000-new-jobs-41-unemploymentwhat-small-cdfis-need-know-ali-cfa-smaqe/",
      imageUrl: "/images/jobs-report.jpg"
    },
    {
      id: 4,
      title: "Advancing Community Development in 2025",
      date: "January 7, 2025",
      category: "Community Development",
      excerpt: "2025 is here, and like many of you, I find myself reflecting on where we are and where we're headed in community development. What challenges and opportunities lie ahead for CDFIs and impact investors?",
      articleUrl: "https://www.linkedin.com/in/amirali86/recent-activity/articles/",
      imageUrl: "/images/community-development-2025.jpg"
    },
    {
      id: 5,
      title: "The Critical Role of NMTC in Promoting Climate Justice through Green Building and Technology",
      date: "May 15, 2024",
      category: "Climate Justice",
      excerpt: "The New Markets Tax Credit (NMTC) federal program, designed to stimulate economic development in historically excluded communities, plays a vital role in advancing climate justice initiatives.",
      articleUrl: "https://www.linkedin.com/in/amirali86/recent-activity/articles/",
      imageUrl: "/images/nmtc-climate.jpg"
    },
    {
      id: 6,
      title: "Pairing the New Markets Tax Credit with Early Care and Education Centers",
      date: "January 17, 2024",
      category: "Education Finance",
      excerpt: "LIIF believes that all children should be put on the road to success, no matter their ZIP code. We see this as a crucial application of the New Markets Tax Credit to promote equity in early childhood education.",
      articleUrl: "https://www.linkedin.com/in/amirali86/recent-activity/articles/",
      imageUrl: "/images/nmtc-education.jpg"
    },
    {
      id: 7,
      title: "New Markets Tax Credit: A Wealth-Building Tool Driving Economic Development for Under-resourced Communities",
      date: "May 16, 2023",
      category: "Economic Development",
      excerpt: "The pursuit of wealth creation and the fight for economic equality go hand in hand in our nation's under-resourced communities. The New Markets Tax Credit serves as a powerful tool in this important work.",
      articleUrl: "https://www.linkedin.com/in/amirali86/recent-activity/articles/",
      imageUrl: "/images/nmtc-wealth-building.jpg"
    }
  ];

  const [visibleArticles, setVisibleArticles] = useState(3);
  const linkedInProfileUrl = "https://www.linkedin.com/in/amirali86";

  const showMoreArticles = () => {
    setVisibleArticles(prev => Math.min(prev + 3, linkedInArticles.length));
  };

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <h2>Insights & Articles</h2>
        <p className="blog-intro">
          Thought leadership and industry insights on impact finance, community development, and innovative financing solutions.
        </p>
        
        {/* LinkedIn Articles Section */}
        <div className="linkedin-articles-section">
          <div className="linkedin-header">
            <div className="section-title-container">
              <h3>From Our LinkedIn</h3>
              <div className="section-divider"></div>
            </div>
            <a 
              href={linkedInProfileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-all-link"
            >
              View All on LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '6px' }}>
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
            </a>
          </div>
          
          <div className="linkedin-articles-grid">
            {linkedInArticles.slice(0, visibleArticles).map(article => (
              <div key={article.id} className="linkedin-article-card">
                <div className="article-image-container">
                  <div className="article-image" style={{ backgroundImage: `url(${article.imageUrl})` }}></div>
                  <span className="article-category">{article.category}</span>
                </div>
                <div className="article-content">
                  <span className="article-date">{article.date}</span>
                  <h4 className="article-title">{article.title}</h4>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <a 
                    href={article.articleUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="read-article"
                  >
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {visibleArticles < linkedInArticles.length && (
            <div className="show-more-container">
              <button onClick={showMoreArticles} className="show-more-btn">
                Show More Articles
              </button>
            </div>
          )}
        </div>

        <div className="services-cta">
          <h3>Ready to Create Innovative Solutions?</h3>
          <p>
            Our team has extensive experience in structuring complex financing for impactful community development projects.
            Let's discuss how we can help your organization achieve its mission.
          </p>
          <button 
            className="contact-btn"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog; 