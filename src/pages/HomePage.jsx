// src/pages/HomePage.jsx
import React from 'react';
import { Slide } from "react-awesome-reveal";

import HeroSection from '../components/HeroSection.jsx';
import CountdownTimer from '../components/CountdownTimer.jsx';
import RegisterButton from '../components/RegisterButton.jsx';
import AboutSection from '../components/AboutSection.jsx';
import EventPreviewSection from '../components/EventPreviewSection.jsx';
import GallerySection from '../components/GallerySection.jsx';

function HomePage() {

  // This style is for the "Countdown" section
  const mainContentStyle = {
    padding: '3rem 2rem 2rem 2rem',
    textAlign: 'center',
    // backgroundColor: '#121212',
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
        <Slide direction="up" triggerOnce>
          <h2 style={timerTitleStyle}>Fest Begins In:</h2>
          <CountdownTimer />
          <div style={{marginTop: '1rem'}}>
            <RegisterButton />
          </div>
        </Slide>
      </div>
      
      {/* Section 3: The "About" Section */}
      <AboutSection />

      {/* Section 4: The "Events Preview" Section */}
      <EventPreviewSection />

      {/* Section 5: The "Gallery" Section */}
      <GallerySection />
      
      {/* We can add a Footer component here later */}
    </div>
  );
}

export default HomePage;