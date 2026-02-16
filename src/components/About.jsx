import React from 'react';
import aboutImg from '../assets/img-1.png';

const drives = [
    {
        title: 'Continuous Learning',
        desc: 'Always staying up-to-date with the latest trends in software development and modern frameworks',
        emoji: '📚',
    },
    {
        title: 'Problem-Solving',
        desc: 'Using creativity and analytical skills to find innovative solutions in fast-paced environments',
        emoji: '🧩',
    },
    {
        title: 'Team Collaboration',
        desc: 'Working well in teams and contributing to projects that challenge my abilities',
        emoji: '🤝',
    },
];

const About = () => {
    return (
        <section className="py-20 bg-gray-50" id="about">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Me</h2>
                    <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Illustration Side */}
                    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-3xl p-10 flex flex-col items-center justify-center min-h-[360px] relative overflow-hidden shadow-lg">
                        <img
                            src={aboutImg}
                            alt="Passionate Developer"
                            className="w-full max-w-[300px] h-auto mb-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="text-lg text-gray-900 font-bold font-display">
                            Passionate Developer
                        </div>
                    </div>

                    {/* Cards Side */}
                    <div className="flex flex-col gap-5">
                        {drives.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white border-l-4 border-purple-600 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-t border-r border-b border-gray-100"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl mt-1 flex-shrink-0">
                                        {item.emoji}
                                    </span>
                                    <div>
                                        <h3 className="font-display text-lg font-bold mb-2 text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-[0.95rem]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
