import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Chatbot for Pregnancy Risk Analysis (2023 – Personal Project)',
      description: [
        'Developed an intelligent AI chatbot using n8n for workflow automation, React.js for the frontend interface, and Node.js for backend logic, enabling real-time pregnancy risk assessments based on user inputs.',
        'Integrated machine learning models to analyze health data and provide personalized risk predictions, improving accuracy by 30% through iterative testing and optimization.',
        'Deployed on a scalable cloud environment, incorporating RESTful APIs for seamless data exchange; project enhanced user accessibility for healthcare applications.',
      ],
      technologies: 'n8n, React.js, Node.js, MongoDB, openAI, AI Agent',
      github: '[https://github.com/karthikeyanCoder]',
    },
    {
      title: 'Text-to-Speech (TTS) Content Converter (2023 – Personal Project)',
      description: [
        'Built a multilingual TTS application that converts text content into high-quality audio in any language, with specific support for Tamil and English, using Node.js for backend processing and API integrations.',
        'Implemented voice synthesis features with customizable accents and speeds, reducing conversion time by 40% through efficient algorithms and third-party TTS libraries.',
        'Designed a user-friendly interface with React.js, ensuring responsive design across devices; project supported educational and accessibility use cases, handling over 1,000 conversions in testing.',
      ],
      technologies: 'Node.js, React.js, TTS APIs, JavaScript, Multilingual Support.',
      github: '[https://github.com/karthikeyanCoder]', 
    },
  ];

  return (
    <section id="projects" className="card mb-10">
      <h2 className="text-3xl gradient-text mb-6 text-center">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="p-4 mb-6 border-b border-white/5 last:border-b-0">
          <h3 className="text-xl font-semibold text-[hsl(var(--accent-blue))]">{project.title}</h3>
          <ul className="list-disc pl-5 mt-2 text-[hsl(var(--text-muted))] text-sm">
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm"><strong>Technologies:</strong> {project.technologies}</p>
          <p className="text-sm">
            <strong>GitHub:</strong>{" "}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--accent-blue))] hover:underline">
              {project.github}
            </a>
          </p>
        </div>
      ))}
    </section>
  );
};

export default Projects;