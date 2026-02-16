import React from 'react';

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', icon: '⚛️' },
            { name: 'JavaScript', icon: '🟨' },
            { name: 'HTML5', icon: '🌐' },
            { name: 'CSS3', icon: '🎨' },
            { name: 'Tailwind', icon: '💨' },
            { name: 'Bootstrap', icon: '🅱️' },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: '🟢' },
            { name: 'Express', icon: '🚂' },
            { name: 'Python', icon: '🐍' },
            { name: 'REST APIs', icon: '🔗' },
        ],
    },
    {
        title: 'Database & Tools',
        skills: [
            { name: 'MongoDB', icon: '🍃' },
            { name: 'MySQL', icon: '🐬' },
            { name: 'Git', icon: '📦' },
            { name: 'GitHub', icon: '🐙' },
            { name: 'VS Code', icon: '💻' },
            { name: 'Postman', icon: '📮' },
        ],
    },
];

const Skills = () => {
    return (
        <section className="py-20 bg-gray-50" id="skills">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
                    <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col gap-12">
                    {skillCategories.map((cat, catIdx) => (
                        <div key={catIdx}>
                            <h3 className="text-xl font-bold text-purple-600 mb-6 font-display border-l-4 border-purple-600 pl-4">
                                {cat.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {cat.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all duration-300 flex items-center justify-center gap-3 group"
                                    >
                                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                                        <span className="font-medium text-gray-700">{skill.name}</span>
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
