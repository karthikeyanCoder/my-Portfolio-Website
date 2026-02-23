import React from 'react';

const certs = [
    {
        title: 'Full Stack Web Development',
        issuer: 'Udemy',
        year: '2023',
        emoji: '🏅',
    },
    {
        title: 'Python Programming',
        issuer: 'Coursera',
        year: '2022',
        emoji: '🐍',
    },
    // {
    //     title: 'MongoDB for Developers',
    //     issuer: 'MongoDB University',
    //     year: '2023',
    //     emoji: '🍃',
    // },
    // {
    //     title: 'React — The Complete Guide',
    //     issuer: 'Udemy',
    //     year: '2023',
    //     emoji: '⚛️',
    // },
];

const Certifications = () => {
    return (
        <section className="py-20 bg-white" id="certifications">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
                    <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certs.map((cert, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group"
                        >
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                {cert.emoji}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-[0.95rem] leading-tight mb-1">{cert.title}</h4>
                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{cert.issuer} · {cert.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
