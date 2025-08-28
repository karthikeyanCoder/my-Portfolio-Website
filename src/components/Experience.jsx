import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="card mb-10">
      <h2 className="text-3xl gradient-text mb-6 text-center">Experience</h2>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[hsl(var(--accent-blue))]">Full Stack Developer</h3>
        <p className="text-[hsl(var(--text-muted))] text-sm">Logical Minds IT Solutions, Chennai, India | June 2024 – Present</p>
        <ul className="list-disc pl-5 mt-2 text-[hsl(var(--text-muted))] text-sm">
          <li>Developed e-commerce platforms, course websites, and robotics backend services using React.js, Node.js, and MongoDB, ensuring scalable and secure full-stack solutions.</li>
          <li>Built secure RESTful APIs, interactive dashboards, and automation workflows, improving overall system performance and user experience.</li>
          <li>Deployed applications using Docker and CI/CD pipelines, reducing release time by 25% and enhancing deployment efficiency.</li>
        </ul>
      </div>
    
    </section>
  );
};

export default Experience;