import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ResourcesPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from './ChatBot';
import coverImage from '../assets/resources-cover.jpg'; // We'll need to save the image to this location

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedType, setSelectedType] = useState('All Types');
  const [activeView, setActiveView] = useState('resources'); // 'resources' or 'learning-path'
  const [activeLearningPath, setActiveLearningPath] = useState(null);
  const [activePathStep, setActivePathStep] = useState(null);
  const [showAllResources, setShowAllResources] = useState(false);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Learning paths
  const learningPaths = [
    {
      id: 'loan-officer',
      title: 'CDFI Loan Officer',
      description: 'A comprehensive learning journey for new and experienced CDFI loan officers covering the entire lending process from application to monitoring.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      steps: [
        {
          id: 'collateral',
          title: 'Collateral',
          description: 'Understanding collateral types, valuation methods, and appraisal review for different asset classes.',
          resources: [2, 9, 13] // IDs of related resources
        },
        {
          id: 'guarantees',
          title: 'Guarantees',
          description: 'Evaluating personal and corporate guarantees and other credit enhancement structures.',
          resources: [3, 10] // IDs of related resources
        },
        {
          id: 'covenants',
          title: 'Covenants',
          description: 'Designing effective covenant packages and understanding loan documentation.',
          resources: [4, 11, 14] // IDs of related resources
        },
        {
          id: 'underwriting-checklists',
          title: 'Underwriting Checklists',
          description: 'Comprehensive checklists and frameworks for thorough loan underwriting.',
          resources: [1, 8, 12, 15] // IDs of related resources
        }
      ]
    },
    {
      id: 'asset-management',
      title: 'Asset Management and Compliance',
      description: 'Essential knowledge for managing loan portfolios, monitoring performance, and maintaining regulatory compliance.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      steps: [
        {
          id: 'portfolio-monitoring',
          title: 'Portfolio Monitoring',
          description: 'Techniques and tools for effective loan portfolio monitoring and risk assessment.',
          resources: [5, 6] // IDs of related resources
        },
        {
          id: 'compliance-reporting',
          title: 'Compliance Reporting',
          description: 'Understanding regulatory requirements and creating efficient reporting systems.',
          resources: [7] // IDs of related resources
        },
        {
          id: 'workout-strategies',
          title: 'Workout Strategies',
          description: 'Approaches for managing troubled loans and implementing effective workout plans.',
          resources: [6, 15] // IDs of related resources
        },
        {
          id: 'portfolio-analysis',
          title: 'Portfolio Analysis',
          description: 'Methods for analyzing portfolio performance and identifying trends and risks.',
          resources: [5, 14] // IDs of related resources
        }
      ]
    }
  ];

  // External resources database with IDs
  const resources = [
    {
      id: 1,
      title: "CDFI Underwriting Best Practices Guide",
      description: "Comprehensive guide to CDFI underwriting standards and best practices for various loan types.",
      category: "Lending",
      type: "Guide",
      link: "/resources/cdfi-underwriting-guide.pdf",
      featured: true,
      tags: ["underwriting", "best practices", "loan officer"]
    },
    {
      id: 2,
      title: "Collateral Valuation Handbook",
      description: "Detailed handbook on valuing different types of collateral in community development lending.",
      category: "Lending",
      type: "Handbook",
      link: "/resources/collateral-valuation-handbook.pdf",
      featured: true,
      tags: ["collateral", "valuation", "appraisal"]
    },
    {
      id: 3,
      title: "Guarantee Structures for CDFI Loans",
      description: "Overview of different guarantee structures and their applications in CDFI lending.",
      category: "Lending",
      type: "Guide",
      link: "/resources/guarantee-structures.pdf",
      featured: false,
      tags: ["guarantees", "credit enhancement", "risk mitigation"]
    },
    {
      id: 4,
      title: "Loan Covenant Design Toolkit",
      description: "Toolkit for designing effective covenant packages for different loan types and borrowers.",
      category: "Lending",
      type: "Toolkit",
      link: "/resources/covenant-design-toolkit.pdf",
      featured: true,
      tags: ["covenants", "loan documentation", "compliance"]
    },
    {
      id: 5,
      title: "Portfolio Risk Management Framework",
      description: "Framework for assessing and managing risk across a CDFI loan portfolio.",
      category: "Asset Management",
      type: "Framework",
      link: "/resources/portfolio-risk-framework.pdf",
      featured: true,
      tags: ["risk management", "portfolio monitoring", "asset management"]
    },
    {
      id: 6,
      title: "Troubled Loan Workout Guide",
      description: "Guide to identifying and managing troubled loans in a CDFI portfolio.",
      category: "Asset Management",
      type: "Guide",
      link: "/resources/troubled-loan-workout.pdf",
      featured: false,
      tags: ["workout", "troubled loans", "default management"]
    },
    {
      id: 7,
      title: "CDFI Fund Compliance Handbook",
      description: "Comprehensive handbook on CDFI Fund compliance requirements and reporting.",
      category: "Compliance",
      type: "Handbook",
      link: "/resources/cdfi-fund-compliance.pdf",
      featured: true,
      tags: ["compliance", "reporting", "CDFI Fund"]
    },
    {
      id: 8,
      title: "Small Business Loan Underwriting Template",
      description: "Template for underwriting small business loans with focus on mission-driven lending.",
      category: "Lending",
      type: "Template",
      link: "/resources/small-business-underwriting.xlsx",
      featured: false,
      tags: ["small business", "underwriting", "template"]
    },
    {
      id: 9,
      title: "Real Estate Appraisal Review Checklist",
      description: "Checklist for reviewing real estate appraisals for CDFI lending.",
      category: "Lending",
      type: "Checklist",
      link: "/resources/appraisal-review-checklist.pdf",
      featured: false,
      tags: ["real estate", "appraisal", "collateral"]
    },
    {
      id: 10,
      title: "Personal Guarantee Analysis Worksheet",
      description: "Worksheet for analyzing the strength of personal guarantees in loan applications.",
      category: "Lending",
      type: "Worksheet",
      link: "/resources/guarantee-analysis.xlsx",
      featured: false,
      tags: ["guarantees", "analysis", "underwriting"]
    },
    {
      id: 11,
      title: "Loan Documentation Checklist",
      description: "Comprehensive checklist for CDFI loan documentation and closing.",
      category: "Lending",
      type: "Checklist",
      link: "/resources/loan-documentation-checklist.pdf",
      featured: false,
      tags: ["documentation", "closing", "checklist"]
    },
    {
      id: 12,
      title: "Cash Flow Analysis Tool",
      description: "Tool for analyzing borrower cash flow and repayment capacity.",
      category: "Lending",
      type: "Tool",
      link: "/resources/cash-flow-analysis.xlsx",
      featured: true,
      tags: ["cash flow", "analysis", "underwriting"]
    },
    {
      id: 13,
      title: "Equipment Collateral Valuation Guide",
      description: "Guide to valuing equipment collateral for CDFI lending.",
      category: "Lending",
      type: "Guide",
      link: "/resources/equipment-valuation.pdf",
      featured: false,
      tags: ["equipment", "collateral", "valuation"]
    },
    {
      id: 14,
      title: "Loan Monitoring System Template",
      description: "Template for creating a loan monitoring system for CDFI portfolios.",
      category: "Asset Management",
      type: "Template",
      link: "/resources/loan-monitoring-template.xlsx",
      featured: false,
      tags: ["monitoring", "portfolio management", "template"]
    },
    {
      id: 15,
      title: "Loan Restructuring Decision Tree",
      description: "Decision tree for evaluating loan restructuring options for troubled loans.",
      category: "Asset Management",
      type: "Tool",
      link: "/resources/restructuring-decision-tree.pdf",
      featured: false,
      tags: ["restructuring", "workout", "troubled loans"]
    }
  ];

  // Filter resources based on search term, category, and type
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All Categories' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All Types' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  // Get initial 4 resources to display
  const initialResources = filteredResources.filter(resource => resource.featured).slice(0, 4);
  
  // Determine which resources to display based on showAllResources state
  const displayedResources = showAllResources ? filteredResources : initialResources;

  // Handle tag click
  const handleTagClick = (tag) => {
    setSearchTerm(tag);
    setSelectedCategory('All Categories');
    setSelectedType('All Types');
    setActiveView('resources');
    setShowAllResources(true); // Show all resources when filtering by tag
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setSelectedType('All Types');
    setShowAllResources(false); // Reset to showing only initial resources
  };

  // Handle learning path selection
  const handleLearningPathSelect = (path) => {
    setActiveLearningPath(path);
    setActivePathStep(path.steps[0]);
    setActiveView('learning-path');
    setShowAllResources(true); // Show all resources when viewing learning path
  };

  // Handle learning path step selection
  const handleStepSelect = (step) => {
    setActivePathStep(step);
  };

  // Get resources for current learning path step
  const getStepResources = () => {
    if (!activePathStep) return [];
    return resources.filter(resource => activePathStep.resources.includes(resource.id));
  };

  // Return to main resources view
  const handleBackToResources = () => {
    setActiveView('resources');
    setActiveLearningPath(null);
    setActivePathStep(null);
    setShowAllResources(false);
  };

  // Get unique categories and types for filters
  const categories = ['All Categories', ...new Set(resources.map(r => r.category))];
  const types = ['All Types', ...new Set(resources.map(r => r.type))];

  return (
    <div className="resources-page">
      <Navbar />
      
      <div className="resources-hero">
        <img src={coverImage} alt="CDFI community development" className="resources-cover-image" />
        <div className="resources-hero-overlay"></div>
        <div className="resources-hero-content">
          <h1>Resource Hub</h1>
          <p>Comprehensive training and development resources for the CDFI sector</p>
        </div>
      </div>
      
      <div className="resources-page-container">
        <div className="resources-description">
          <h2>CDFI Training & Development Resources</h2>
          <p>
            Welcome to our Resource Hub, a comprehensive collection of training materials, guides, templates, 
            and tools designed specifically for CDFI professionals. Whether you're a loan officer, portfolio 
            manager, or compliance specialist, our curated resources will help you enhance your skills and 
            improve your organization's impact in underserved communities.
          </p>
          <p>
            Explore our Learning Pathways for structured professional development or browse our resource 
            library for specific tools and guides to address your immediate needs.
          </p>
        </div>
        
        {activeView === 'resources' ? (
          <div className="resources-main-view">
            <div className="resources-filters">
              <div className="search-bar">
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="filter-selects">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                
                <button className="reset-filters" onClick={handleResetFilters}>
                  Reset Filters
                </button>
              </div>
            </div>
            
            <div className="resources-grid">
              {displayedResources.length > 0 ? (
                displayedResources.map(resource => (
                  <div key={resource.id} className="resource-card">
                    <h3>{resource.title}</h3>
                    <p className="resource-category">{resource.category} | {resource.type}</p>
                    <p className="resource-description">{resource.description}</p>
                    <div className="resource-tags">
                      {resource.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="resource-tag"
                          onClick={() => handleTagClick(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={resource.link} className="resource-link" target="_blank" rel="noopener noreferrer">
                      Download Resource
                    </a>
                  </div>
                ))
              ) : (
                <div className="no-resources">
                  <p>No resources match your search criteria. Please try different filters.</p>
                  <button onClick={handleResetFilters}>Reset Filters</button>
                </div>
              )}
            </div>
            
            {!showAllResources && filteredResources.length > initialResources.length && (
              <div className="show-more">
                <button onClick={() => setShowAllResources(true)}>
                  Show All Resources
                </button>
              </div>
            )}
            
            <div className="resources-disclaimer">
              <p>
                Note: Some resources are provided by third parties and are shared for educational purposes. 
                Clarity Impact Finance does not endorse all content within these resources.
              </p>
            </div>
            
            <div className="learning-paths-section">
              <h2>Learning Pathways</h2>
              <p>
                Follow structured learning paths designed for specific CDFI roles and skill development. 
                Each pathway includes curated resources to guide your professional development.
              </p>
              
              <div className="learning-paths-grid">
                {learningPaths.map(path => (
                  <div key={path.id} className="learning-path-card" onClick={() => handleLearningPathSelect(path)}>
                    <div className="path-image">
                      <img src={path.image} alt={path.title} />
                    </div>
                    <div className="path-content">
                      <h3>{path.title}</h3>
                      <p>{path.description}</p>
                      <span className="path-steps">{path.steps.length} Steps</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="learning-path-view">
            <button className="back-button" onClick={handleBackToResources}>
              ← Back to Resources
            </button>
            
            <div className="learning-path-header">
              <h2>{activeLearningPath?.title}</h2>
              <p>{activeLearningPath?.description}</p>
            </div>
            
            <div className="learning-path-content">
              <div className="path-sidebar">
                <h3>Learning Steps</h3>
                <ul className="path-steps-list">
                  {activeLearningPath?.steps.map(step => (
                    <li 
                      key={step.id} 
                      className={activePathStep?.id === step.id ? 'active' : ''}
                      onClick={() => handleStepSelect(step)}
                    >
                      {step.title}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="path-main-content">
                <div className="path-step-header">
                  <h3>{activePathStep?.title}</h3>
                  <p>{activePathStep?.description}</p>
                </div>
                
                <div className="path-resources">
                  <h4>Curated Resources</h4>
                  <div className="path-resources-grid">
                    {getStepResources().map(resource => (
                      <div key={resource.id} className="resource-card">
                        <h3>{resource.title}</h3>
                        <p className="resource-category">{resource.category} | {resource.type}</p>
                        <p className="resource-description">{resource.description}</p>
                        <div className="resource-tags">
                          {resource.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="resource-tag"
                              onClick={() => handleTagClick(tag)}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a href={resource.link} className="resource-link" target="_blank" rel="noopener noreferrer">
                          Download Resource
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ResourcesPage; 