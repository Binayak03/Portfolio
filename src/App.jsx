import React, { useRef } from 'react';
import styles from './App.module.css';

import Navbar from './components/Navbar/Navbar';
import About from './components/about';
import Skills from './components/skills';
import Education from './components/education';
import Contact from './components/contact';





function App() {
  const aboutRef = useRef()
  const skillsRef = useRef()
  const eduRef = useRef()
  const contactRef = useRef()
  return (
    <div className={styles.App}>
      <Navbar refCollection={[aboutRef, skillsRef, eduRef, contactRef]}/>
      <About ref={aboutRef}/>
      <Skills ref={skillsRef}/>
      <Education ref={eduRef}/>
      <Contact ref={contactRef}/>
      <footer className={styles.footer}>© 2025 Binayak Bhattarai</footer>
    </div>
  );
}

export default App;