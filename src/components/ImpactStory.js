import React from 'react';
import './ImpactStory.css';

const ImpactStory = () => {
  // Sample impact stories data
  const stories = [
    {
      id: 1,
      title: "Central City Concern, Portland, OR",
      description: "The Blackburn Center provides 124 units of supportive housing and integrated healthcare services through innovative financing.",
      image: "/images/central-city-concern.jpg",
      stats: [
        { value: "124", label: "Supportive Housing Units" },
        { value: "3,000+", label: "Patients Served Annually" },
        { value: "35K SF", label: "FQHC" }
      ]
    },
    {
      id: 2,
      title: "Martha O'Bryan Center, Nashville, TN",
      description: "Helping families leave poverty in a single generation through family support services, job training, and high-quality education.",
      image: "/images/martha-obryan-center.jpg",
      stats: [
        { value: "$15M", label: "Capital Deployed" },
        { value: "5,000+", label: "Families Served" },
        { value: "85%", label: "Program Success Rate" }
      ]
    },
    {
      id: 3,
      title: "Amana Academy, Atlanta, GA",
      description: "Supporting the expansion of a STEM-focused charter school with innovative educational program and facilities",
      image: "/images/amana-academy.jpg",
      stats: [
        { value: "700+", label: "Students Served" },
        { value: "15+ Yrs", label: "Track Record" },
        { value: "2", label: "School Campuses" }
      ]
    }
  ];

  return (
    <section className="impact-stories" id="impact">
      <div className="container">
        <div className="section-header">
          <h2>Our Impact Stories</h2>
          <p className="section-subtitle">
            Discover how our financial solutions are creating positive change in communities and businesses across the country.
          </p>
        </div>

        <div className="stories-container">
          {stories.map((story, index) => (
            <div 
              key={story.id} 
              className={`story-card ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="story-image">
                <img 
                  src={story.image} 
                  alt={`Impact story: ${story.title} - ${story.description}`} 
                  loading="lazy"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="story-content">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div className="story-stats">
                  {story.stats.map((stat, statIndex) => (
                    <div className="stat" key={statIndex}>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStory; 