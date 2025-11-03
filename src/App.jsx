// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import EventDetailPage from './pages/EventDetailPage.jsx';
// 1. Import new page

function App() {
  const contentStyle = {
    position: 'relative',
    zIndex: 1
  };

  return (
    <>
      <ParticleBackground />
      <div style={contentStyle}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events/:eventSlug" element={<EventDetailPage />} />
           {/* 2. Add new route */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;