import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default App;