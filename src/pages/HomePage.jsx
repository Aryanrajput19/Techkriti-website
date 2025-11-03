// src/pages/HomePage.jsx
import React from 'react';
import { Slide } from "react-awesome-reveal";

// Import all our components and sections
import HeroSection from '../components/HeroSection.jsx';
import CountdownTimer from '../components/CountdownTimer.jsx';
import RegisterButton from '../components/RegisterButton.jsx';
import AboutSection from '../components/AboutSection.jsx';
import EventPreviewSection from '../components/EventPreviewSection.jsx';
import ScheduleSection from '../components/ScheduleSection.jsx'; // 1. Import new section
import GallerySection from '../components/GallerySection.jsx';

function HomePage() {

  // ... (mainContentStyle and timerTitleStyle are the same)
  const mainContentStyle = {
    padding: '6rem 2rem 4rem 2rem',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  };
  const timerTitleStyle = {
    fontSize: '2rem',
    color: '#aaa',
    marginBottom: '-0.5rem'
  };

  return (
    <div>
      {/* Section 1: The Full-Screen Hero */}
      <HeroSection />

      {/* Section 2: The Countdown Timer & Register Button */}
      <div style={mainContentStyle}>
        {/* ... (Slide content is the same) ... */}
      </div>
      
      {/* Section 3: The "About" Section */}
      <AboutSection />

      {/* Section 4: The "Events Preview" Section */}
      <EventPreviewSection />

      {/* 2. Add the new Schedule Section here */}
      <ScheduleSection />

      {/* Section 5: The "Gallery" Section */}
      <GallerySection />
      
    </div>
  );
}

export default HomePage;