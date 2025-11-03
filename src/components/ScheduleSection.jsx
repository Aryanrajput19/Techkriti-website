// src/components/ScheduleSection.jsx
import React, { useState } from 'react';
import { day1Schedule, day2Schedule } from '../data/schedule.js';
import { Slide } from 'react-awesome-reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

function ScheduleSection() {
  // 1. Add state to track the active day
  const [activeDay, setActiveDay] = useState('day1');

  // --- STYLES ---

  const sectionStyle = {
    padding: '6rem 2rem',
    position: 'relative',
    zIndex: 1,
  };

  // 2. Styles for the new Tab buttons
  const tabContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem',
  };

  const tabStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ccc',
    backgroundColor: 'transparent',
    border: '2px solid #555',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const activeTabStyle = {
    color: '#121212',
    backgroundColor: '#00c1ff',
    borderColor: '#00c1ff',
  };
  
  // 3. Styles for the new Timeline layout
  const timelineContainerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
  };

  const timelineItemStyle = {
    position: 'relative',
    paddingLeft: '3rem', // Space for the line and dot
    paddingBottom: '3rem',
    borderLeft: '3px solid #555',
  };
  
  // Style for the "dot" on the timeline
  const timelineDotStyle = {
    position: 'absolute',
    left: '-12px', // (Dot width / 2) + (Line width / 2)
    top: '0',
    width: '21px',
    height: '21px',
    borderRadius: '50%',
    backgroundColor: '#00c1ff',
    border: '3px solid #121212',
  };

  const eventTitleStyle = {
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '0.5rem',
    marginTop: '-5px', // Aligns title with dot
  };

  const eventInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#ccc',
    marginBottom: '0.25rem',
  };

  // --- COMPONENT ---
  return (
    <div id="schedule" style={sectionStyle}>
      <Slide direction="up" triggerOnce>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Event Schedule</h1>
        
        {/* --- 4. The Tab Buttons --- */}
        <div style={tabContainerStyle}>
          <motion.button
            style={activeDay === 'day1' ? { ...tabStyle, ...activeTabStyle } : tabStyle}
            onClick={() => setActiveDay('day1')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Day 1
          </motion.button>
          <motion.button
            style={activeDay === 'day2' ? { ...tabStyle, ...activeTabStyle } : tabStyle}
            onClick={() => setActiveDay('day2')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Day 2
          </motion.button>
        </div>

        {/* --- 5. The Animated Content Area --- */}
        <div style={{minHeight: '400px'}}> {/* Ensures layout doesn't jump */}
          <AnimatePresence mode="wait"> {/* 'mode="wait"' makes one exit before the next enters */}
            <motion.div
              key={activeDay} // This is crucial for AnimatePresence
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* --- 6. The Timeline --- */}
              <div style={timelineContainerStyle}>
                {(activeDay === 'day1' ? day1Schedule : day2Schedule).map((item, index) => (
                  <div 
                    key={index} 
                    style={
                      // Makes the last item's border-left stop
                      index === (activeDay === 'day1' ? day1Schedule : day2Schedule).length - 1
                      ? { ...timelineItemStyle, borderLeft: '3px solid #121212' }
                      : timelineItemStyle
                    }
                  >
                    <div style={timelineDotStyle}></div>
                    <h3 style={eventTitleStyle}>{item.event}</h3>
                    <div style={eventInfoStyle}>
                      <FaClock /> {item.time}
                    </div>
                    <div style={eventInfoStyle}>
                      <FaMapMarkerAlt /> {item.venue}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
      </Slide>
    </div>
  );
}

export default ScheduleSection;