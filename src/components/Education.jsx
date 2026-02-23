import React from 'react';

const educationData = [
    {
        degree: 'Master of Science',
        field: 'Computer Science',
        college: 'Hindusthan College Of Arts And Science',
        year: '2020 - 2022',
        location: 'Coimbatore',
        emoji: '🎓',
    },
    {
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        college: 'Muthayammal College Of Arts And Science',
        year: '2018 - 2020',
        location: 'Rasipuram',
        emoji: '🎓',
    },
];

const Education = () => {
    return (
        <section className="py-20 bg-gray-50" id="education">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
                    <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Education Cards */}
                    <div className="flex flex-col gap-6">
                        {educationData.map((edu, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-600 border-t border-r border-b border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 grid grid-cols-[auto_1fr] gap-5 items-start"
                            >
                                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl">
                                    {edu.emoji}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                                    <div className="font-semibold text-gray-700 mb-1">{edu.field}</div>
                                    <div className="text-purple-600 font-medium text-sm mb-1">{edu.college}</div>
                                    <div className="text-sm text-purple-500 font-medium">{edu.year} · {edu.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Illustration Side */}
                    {/* <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-3xl p-10 flex items-center justify-center min-h-[300px] relative overflow-hidden shadow-lg mx-auto w-full max-w-md md:max-w-full">
                        <img
                            src={educationImg}
                            alt="Education"
                            className="w-full max-w-[300px] h-auto rounded-xl object-cover shadow-sm transform hover:scale-105 transition-transform duration-500"
                        />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Education;
