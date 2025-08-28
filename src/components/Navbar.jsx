import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        <h1 className="text-2xl font-['Sora'] font-bold gradient-text">Karthikeyan M</h1>
        <ul className="flex space-x-6 items-center">
          <li><a href="#skills" className="hover:text-[hsl(var(--accent-blue))]">Skills</a></li>
          <li><a href="#experience" className="hover:text-[hsl(var(--accent-blue))]">Experience</a></li>
          <li><a href="#projects" className="hover:text-[hsl(var(--accent-blue))]">Projects</a></li>
          <li><a href="#education" className="hover:text-[hsl(var(--accent-blue))]">Education</a></li>
          <li><a href="#certifications" className="hover:text-[hsl(var(--accent-blue))]">Certifications</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;