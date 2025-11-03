// src/components/AboutSection.jsx
import React from 'react';
import { Slide } from 'react-awesome-reveal';

function AboutSection() {
  const sectionStyle = {
    padding: '3rem 2rem',
    textAlign: 'center',
    // backgroundColor: '#1a1a1a', // A slightly different background
    position: 'relative',
    zIndex: 1,
  };

  const futuristicBoxStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    background: 'rgba(30, 30, 30, 0.7)', // Glassmorphism
    backdropFilter: 'blur(10px)',
    border: '1px solid #444',
    borderRadius: '12px',
    // The "futuristic" glow
    boxShadow: '0px 0px 20px 5px rgba(0, 193, 255, 0.2)',
  };

  const pStyle = {
    fontSize: '1.1rem',
    lineHeight: 1.7,
    color: '#ccc',
  };

  return (
    <div style={sectionStyle}>
      <Slide direction="up" triggerOnce>
        <div style={futuristicBoxStyle}>
          <h1 style={{ color: '#00c1ff' }}>About Techकृति 2.O</h1>
          <p style={pStyle}>
            Techकृति is not just a fest—it's a movement, where brilliant minds collide, ideas ignite, and the impossible becomes reality.<p></p>
The name "Techkriti" is a fusion of "Tech" (Technology) and "Kriti" (a Sanskrit word meaning creation or masterpiece). It symbolizes the art of technological creation, where innovation, intelligence, and creativity come together to shape the future.<p></p>
Techkriti represents a platform for thinkers, creators, and tech enthusiasts to showcase their brilliance, push the limits of technology, and bring groundbreaking ideas to life. It's more than a fest—it's a celebration of technological excellence and visionary innovation!<p></p>
💡 Techkriti – Where Ideas Evolve, and the Future Begins! 🚀
          </p>
        </div>
      </Slide>
    </div>
  );
}

export default AboutSection;