import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ArticlePage.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Social sharing images (with optimized dimensions for different platforms)
const socialImages = {
  'ai-cdfis-part-2': '/images/social/ai-cdfis-part2-social.jpg',
  // Add more social images for other articles as needed
};

// Default social image if article-specific one isn't available
const defaultSocialImage = '/images/social/clarity-social-default.jpg';

const articles = {
  'ai-cdfis-part-2': {
    title: "AI and CDFIs: From Concept to Implementation (Part II)",
    author: "Dr. Maria Rodriguez",
    date: "March 23, 2025",
    category: "Technology & Innovation",
    imageUrl: "/images/cdfi-community-school.jpg",
    socialImageUrl: '/images/social/ai-cdfis-part2-social.jpg', // Dedicated social sharing image
    linkedinUrl: "https://www.linkedin.com/pulse/ai-cdfis-from-concept-implementation-part-ii-amir-ali-ncxbe/",
    excerpt: 'A year ago, we explored how CDFIs could leverage Artificial Intelligence. Since then, AI technology has advanced rapidly.'
    // Removed content property
  }
  // More articles would be defined here
};

const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const getArticle = () => {
      const foundArticle = articles[articleId];
      setArticle(foundArticle);
      
      // Redirect to LinkedIn article if found
      if (foundArticle && foundArticle.linkedinUrl) {
        window.location.href = foundArticle.linkedinUrl;
      }
    };

    getArticle();
  }, [articleId]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!article) {
    return (
      <div className="article-page loading">
        <Navbar />
        <div className="container">
          <h1>Loading article...</h1>
        </div>
      </div>
    );
  }

  // Get the social sharing image URL (use article-specific if available, otherwise default)
  const socialImageUrl = article.socialImageUrl 
    ? `${window.location.origin}${article.socialImageUrl}`
    : `${window.location.origin}${defaultSocialImage}`;

  return (
    <div className="article-page">
      <Helmet>
        <title>{article.title} | Clarity Impact Finance</title>
        <meta name="description" content={article.excerpt} />
        
        {/* OpenGraph Meta Tags for social sharing */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={socialImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={socialImageUrl} />
        
        {/* LinkedIn specific */}
        <meta property="og:site_name" content="Clarity Impact Finance" />
        <meta property="article:published_time" content={new Date(article.date).toISOString()} />
        <meta property="article:author" content={article.author} />
      </Helmet>
      
      <div className="redirect-message">
        <div className="redirect-container">
          <i className="fab fa-linkedin"></i>
          <h2>Redirecting to LinkedIn article...</h2>
          <p>If you are not automatically redirected, <a href={article.linkedinUrl}>click here</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;