// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    // Use a simple, widely-supported call for compatibility
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
