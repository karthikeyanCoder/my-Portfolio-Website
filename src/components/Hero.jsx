import React from 'react';
import profileImg from '../assets/profile.png';
import resume from '../assets/resume/Karthikeyan_FullStack_Resume.pdf.pdf';

const Hero = () => {
    return (
        <section
            className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 py-16 md:py-28 overflow-hidden relative"
            id="hero"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left order-2 md:order-1 fade-in">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
  Hello, I'm<br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
    Karthikeyan
  </span>
</h1>

<p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
  I'm a <span className="font-semibold text-purple-700">Full Stack Developer</span> building scalable{' '}
  <span className="font-semibold text-purple-700">AI-powered SaaS & CRM products</span>. With{' '}
  <span className="font-semibold text-purple-700">React</span>,{' '}
  <span className="font-semibold text-purple-700">Node.js</span>, and{' '}
  <span className="font-semibold text-purple-700">MongoDB</span>, I design and develop high-performance web applications
  focused on clean architecture, intelligent automation, scalability, and exceptional user experience.
</p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:justify-start mt-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-red-500 text-white font-semibold rounded-xl shadow-md hover:bg-red-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            Let's Connect!
                        </a>
                        <a
                            href={resume}
                            download="Karthikeyan_FullStack_Resume.pdf"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-purple-600 font-semibold border-2 border-purple-600 rounded-xl shadow-md hover:bg-purple-600 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="flex justify-center order-1 md:order-2 fade-in delay-200">
                    <div className="relative w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem]">
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
