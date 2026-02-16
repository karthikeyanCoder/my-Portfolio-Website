import React from 'react';
import profileImg from '../assets/profile.png';
import resume from '../assets/resume/Karthikeyan_FullStack_Resume.pdf.pdf';

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 py-20 md:py-32 overflow-hidden relative" id="hero">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left order-2 md:order-1 fade-in">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                        Hello, I'm<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Karthikeyan</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                        I'm a <span className="font-semibold text-purple-700">Full Stack Developer</span>, crafting scalable{' '}
                        <span className="font-semibold text-purple-700">SaaS solutions</span>. With{' '}
                        <span className="font-semibold text-purple-700">React</span>,{' '}
                        <span className="font-semibold text-purple-700">Node.js</span>, and{' '}
                        <span className="font-semibold text-purple-700">MongoDB</span>, I design and build high-performance web applications
                        that blend clean code, scalability, and great user experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            👋 Say Hello!
                        </a>
                        <a
                            href={resume}
                            download="Karthikeyan_FullStack_Resume.pdf"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-purple-600 font-semibold border-2 border-purple-600 rounded-xl hover:bg-purple-600 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="flex justify-center order-1 md:order-2 fade-in delay-200">
                    <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-3xl blur-sm opacity-70"></div>
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-b from-purple-100 to-pink-100 flex items-center justify-center">
                            <img
                                src={profileImg}
                                alt="Karthikeyan — Full Stack Developer"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
