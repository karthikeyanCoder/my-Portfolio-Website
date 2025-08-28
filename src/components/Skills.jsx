import React from 'react';

const Skills = () => {
  const skillCategories = [
    { title: 'Tools', skills: ['AI Agents (n8n)', 'Git', 'Docker', 'Postman', 'AWS Basics'] },
    { title: 'Frontend', skills: ['React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { title: 'Backend', skills: ['Node.js', 'Express.js', 'RESTful APIs'] },
    { title: 'Database', skills: ['MongoDB'] },
    { title: 'Additional', skills: ['UI/UX Collaboration (Figma)', 'Responsive Design', 'JavaScript/ES6'] },
  ];

  return (
    <section id="skills" className="card mb-10">
      <h2 className="text-3xl gradient-text mb-6 text-center">Core Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="p-4 border border-white/5 rounded-md transition-all">
            <h3 className="text-xl text-[hsl(var(--accent-blue))] font-semibold mb-2">{category.title}</h3>
            <ul className="list-disc pl-5 text-[hsl(var(--text-muted))] text-sm">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;