import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-white)' }}>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;