export const scrollToSection = (sectionId) => {
  let element;
  
  // Special case for resources section - target the heading instead of the section
  if (sectionId === 'resources') {
    element = document.querySelector('#resources h1');
  } 
  // Special case for about section - target the emblem instead of the section
  else if (sectionId === 'about') {
    element = document.querySelector('#about .logo-emblem-container');
  }
  // Special case for blog section - target the heading instead of the section
  else if (sectionId === 'blog') {
    element = document.querySelector('#blog h2');
  }
  else {
    element = document.getElementById(sectionId);
  }
  
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - -30; // Increased offset for more scrolling

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const createSectionObserver = (callback) => {
  const options = {
    root: null,
    rootMargin: '-80px 0px -20% 0px', // Adjust based on navbar height
    threshold: 0
  };

  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target.id);
      }
    });
  }, options);
};

export const initSmoothScrollPolyfill = () => {
  if (!(window && 'scrollBehavior' in document.documentElement.style)) {
    import('smoothscroll-polyfill').then(smoothscroll => {
      smoothscroll.polyfill();
    });
  }
};