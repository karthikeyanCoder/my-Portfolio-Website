import React from 'react';
import expImg from '../assets/exp.png';

const experiences = [
    {
        role: 'Full Stack Developer',
        company: 'Logical Minds It Solutions',
        date: '2024 — Feb 2026',
        desc: 'Building scalable SaaS applications and dynamic web solutions using React, Node.js, and MongoDB. Collaborating with clients to deliver clean, maintainable code with great user experience.',
    },
    // {
    //     role: 'Frontend Developer Intern',
    //     company: 'Various Projects',
    //     date: '2020 — 2022',
    //     desc: 'Developed responsive web interfaces using HTML, CSS, JavaScript, and React. Gained experience working in agile teams and delivering features on tight deadlines.',
    // },
];

const Experience = () => {
    return (
        <section className="py-20 bg-gray-50" id="experience">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
                    <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="fade-in order-2 md:order-1 flex justify-center">
                        <div className="p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-3xl shadow-lg relative overflow-hidden">
                            <img
                                src={expImg}
                                alt="Experience"
                                className="w-full max-w-[350px] h-auto rounded-xl object-cover shadow-sm mx-auto"
                            />
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="relative border-l-4 border-purple-200 ml-4 space-y-12">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative pl-8">
                                    <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-sm ring-2 ring-purple-100"></div>
                                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                    <div className="text-purple-600 font-semibold mb-1">{exp.company}</div>
                                    <div className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">{exp.date}</div>
                                    <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
