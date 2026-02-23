import React from 'react';
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Next.js', icon: '⏭️' },
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'JavaScript (ES6+)', icon: '🟨' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
    ],
  },
  {
    title: 'UI / Styling',
    skills: [
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'Material UI (MUI)', icon: '📘' },
      { name: 'DaisyUI', icon: '🌼' },
      { name: 'ShadCN UI', icon: '🧩' },
      { name: 'Responsive Design', icon: '📱' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'RESTful API Design', icon: '🔗' },
      { name: 'JWT Authentication', icon: '🔐' },
    //   { name: 'Python', icon: '🐍' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Mongoose ODM', icon: '🧬' },
    ],
  },
  {
    title: 'AI & Modern Tech',
    skills: [
      { name: 'AI Integration (APIs)', icon: '🤖' },
      { name: 'Workflow Automation (n8n)', icon: '🧠' },
      { name: 'AI Chatbots', icon: '💬' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Docker ', icon: '🐳' },
      { name: 'CI/CD', icon: '🔁' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Postman', icon: '📮' },
      { name: 'VS Code', icon: '💻' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-10 sm:gap-14">
          {skillCategories.map((cat, catIdx) => (
            <div key={catIdx} className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-4 sm:mb-6 font-display border-l-4 border-purple-600 pl-3 sm:pl-4">
                {cat.title}
              </h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-300 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group w-full max-w-xs"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                    <span className="font-medium text-gray-700 text-sm sm:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;