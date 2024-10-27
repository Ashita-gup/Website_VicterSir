import 'leaflet/dist/leaflet.css';

import Navbar from './components/Navbar';
import './App.css';
import Experience from './components/Experience';
import Education from './components/Education';
import Research from './components/Research';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import Loading from './components/Loading';
import Home from './components/Home';
import Projects from './components/Projects';

import Activities from './components/Activities';

import Contact from './components/Contact';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('light');
  
  const [firstClick, setFirstClick] = useState(true);
 

  

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1a1918';
      document.body.style.color = '#ffffff';
      
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#f5e7e0';
      document.body.style.color = '#000000';
      
    }
  };

  useEffect(() => {
    // Set default background color to #f5e7e0 when the app first loads
    document.body.style.backgroundColor = '#f5e7e0';
    document.body.style.color = '#000000';

    const handleUserInteraction = () => {
      if (firstClick) {
        setFirstClick(false);
        // Scroll to the home section on the first click
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
      }
      // No need to hide loading; let the user interact
    };

    // Add event listeners for user interactions
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      // Cleanup event listeners on unmount
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [firstClick]);

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div id="loading">
        <Loading mode={mode} />
      </div>
      <div id="home">
        <Home mode={mode} />
      </div>
      <div id="experience">
        <Experience mode={mode} />
      </div>
      <div id="education">
        <Education mode={mode} />
      </div>
      <div id="research">
        <Research mode={mode} />
      </div>
      <div id="projects">
        <Projects mode={mode} />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="publications">
        <Publications mode={mode} />
      </div>
      <div id="activities">
        <Activities mode={mode} />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
