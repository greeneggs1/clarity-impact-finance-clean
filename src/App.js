import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import Services from './components/Services';
import ImpactStory from './components/ImpactStory';
import Blog from './components/Blog';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Login from './components/Login';
import ClientResources from './components/ClientResources';
import AdminPanel from './components/AdminPanel';
import TermsConditions from './components/TermsConditions';
import ArticlePage from './components/ArticlePage';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import { scrollToSection } from './utils/scroll';
import { Analytics } from '@vercel/analytics/react';
import SEO from './components/SEO';

// ScrollToTop component to handle scrolling to top on route changes
const ScrollToTop = () => {
  const location = useLocation();
  const { state } = location;
  
  useEffect(() => {
    // If specific section is provided in navigation state, scroll to that section
    if (state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(state.scrollTo);
      }, 100); // Short delay to ensure component is mounted
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.pathname, state]);
  
  return null;
};

// SEO component with current route pathname
const RouteAwareSEO = () => {
  const location = useLocation();
  return <SEO pathname={location.pathname} />;
};

function App() {
  // Get the base URL for proper routing on Vercel
  const baseUrl = document.getElementsByTagName('base')[0]?.getAttribute('href') || '/';
  
  return (
    <AuthProvider>
      <Router basename={baseUrl}>
        <div className="App">
          <a href="#main-content" className="skip-to-content">Skip to main content</a>
          <ScrollToTop />
          <Analytics />
          <RouteAwareSEO />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/article/:articleId" element={<ArticlePage />} />
            <Route path="/client-resources" element={
              <PrivateRoute>
                <ClientResources />
              </PrivateRoute>
            } />
            <Route path="/" element={
              <>
                <Navbar />
                <main id="main-content">
                  <Hero />
                  <TeamSection />
                  <Services />
                  <ImpactStory />
                  <Blog />
                  <Resources />
                  <Contact />
                </main>
                <Footer />
                <ChatBot />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;