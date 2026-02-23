import React from 'react';

const services = [
    {
        title: 'User Experience (UX)',
        desc: 'I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.',
        emoji: '🎯',
    },
    {
        title: 'User Interface (UI)',
        desc: 'I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.',
        emoji: '🎨',
    },
    {
        title: 'Web Development',
        desc: 'I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.',
        emoji: '💻',
    },
];

const Services = () => {
    return (
        <section className="py-20 bg-gray-50" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-14 items-center">
                    {/* Left Text Side */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-purple-600 after:mt-3 after:rounded-full md:after:mx-0 after:mx-auto">What I do?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            I specialize in designing user experiences, crafting engaging interfaces,
                            and building robust web applications that deliver value and usability.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            My approach combines creativity and technical expertise to deliver solutions
                            that are both visually appealing and highly functional for users.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            👋  Let's Connect!
                        </a>
                    </div>

                    {/* Right Cards Side */}
                    <div className="flex flex-col gap-5">
                        {services.map((item, idx) => (
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
        </section>
    );
};

export default Services;
