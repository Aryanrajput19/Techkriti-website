// src/components/Navbar.jsx

// 1. Import React Hooks and Framer Motion
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  // 2. Add state to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // 3. Add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set state to 'true' if scrolled more than 50px, else 'false'
      setIsScrolled(window.scrollY > 50);
    };

    // Add the listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array means this effect runs only once on mount

  // Responsive: detect small screens to adjust spacing & logo size
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // 4. Define our "variants" for animation
  const navVariants = {
    // This is the style at the top of the page
    top: {
      backgroundColor: 'rgba(26, 26, 26, 0.0)', // Fully transparent
      backdropFilter: 'blur(0px)',
      borderBottom: '1px solid rgba(51, 51, 51, 0.0)',
    },
    // This is the style when scrolled down
    scrolled: {
      backgroundColor: 'rgba(26, 26, 26, 0.7)', // The "glass" effect
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(51, 51, 51, 1.0)',
    },
  };

  // Animation variants for the nav links
  const linkItemVariants = {
    hover: {
      y: -3, // Move up slightly
      color: '#00c1ff', // Change color to our accent
      transition: { type: 'spring', stiffness: 300 }
    },
    tap: {
      scale: 0.95
    }
  };
  
  // Base style for links
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem'
  };

  return (
    // 5. Change <nav> to <motion.nav> and add animation props
    <motion.nav
      style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 10,
          display: 'flex',
          gap: isMobile ? '0.75rem' : '1rem',
          padding: isMobile ? '0.75rem 1rem' : '1.5rem 2rem',
          alignItems: 'center',
          flexWrap: 'wrap', // <-- FIX 1: Allow wrapping
        }}
      variants={navVariants}
      animate={isScrolled ? 'scrolled' : 'top'} // Animate based on state
      transition={{ duration: 0.3, ease: 'easeInOut' }} // Animation speed
    >
      {/* Logo image from public/logo.png (clickable, links to home) */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} aria-label="Techkriti Home">
        <img src="/logo.png" alt="Techकृति 2.O" style={{ height: isMobile ? '3rem' : '5rem', width: 'auto' }} />
      </Link>
      
      {/* This is the container for the right-side links */}
      <div 
        className="nav-links" 
        style={{ 
          display: 'flex', 
          gap: isMobile ? '1rem' : '2rem', 
          alignItems: 'center', 
          flexWrap: 'wrap',
          flexGrow: 1, // <-- FIX 2: Allow to grow
          justifyContent: 'flex-end', // <-- FIX 3: Push links to the right
        }}
      >
        
        {/* 6. Wrap each link in a motion.div for animation */}
        <motion.div
          variants={linkItemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link to="/" style={linkStyle}>Home</Link>
        </motion.div>

        <motion.div
          variants={linkItemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link to="/events" style={linkStyle}>Events</Link>
        </motion.div>


        <motion.div
          variants={linkItemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <a href="https://Techkriti2.vercel.app/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Register</a>
        </motion.div>

        <motion.div
          variants={linkItemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <a href="/#schedule" style={linkStyle}>Schedule</a>
        </motion.div>

        <motion.div variants={linkItemVariants} whileHover="hover" whileTap="tap">
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </motion.div>

      </div>
    </motion.nav>
  );
}

export default Navbar;