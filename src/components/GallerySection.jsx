// src/components/GallerySection.jsx
import React from 'react';
import { galleryImages } from '../data/gallery.js';
import { motion } from 'framer-motion';
import { Slide } from 'react-awesome-reveal';

function GallerySection() {
  const sectionStyle = {
    padding: '3rem 2rem',
    textAlign: 'center',
    // backgroundColor: '#1a1a1a', // Alternate background color
    position: 'relative',
    zIndex: 1,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  };

  const imgContainerStyle = {
    overflow: 'hidden',
    borderRadius: '8px',
  };

  const imgStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  return (
    <div style={sectionStyle}>
      <Slide direction="up" triggerOnce>
        <h1>Glimpses of the Past</h1>
        <p>Memories from the previous edition of Techकृति.</p>
        
        <div style={gridStyle}>
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              style={imgContainerStyle}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={image.src} alt={`Gallery ${image.id}`} style={imgStyle} />
            </motion.div>
          ))}
        </div>
      </Slide>
    </div>
  );
}

export default GallerySection;