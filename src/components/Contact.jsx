import React, { useState } from 'react';
import connectImg from '../assets/connect.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:karthikeyanvjay70@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nLocation: ${formData.location}n\n${formData.message}`
        )}`;
        window.open(mailtoLink, '_blank');
    };

    return (
        <section className="py-20 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side — Image & Info */}
                    <div className="flex flex-col gap-8">
                        {/* Image Container */}
                        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-3xl p-10 flex items-center justify-center relative overflow-hidden shadow-lg">
                            <img
                                src={connectImg}
                                alt="Connect"
                                className="w-full max-w-[300px] h-auto rounded-xl object-cover shadow-sm"
                            />
                        </div>

                        {/* Contact Info Items */}
                        <div className="flex flex-col gap-6">
                            {/* Address */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 font-medium">Address:</div>
                                    <div className="text-[0.95rem] font-bold text-gray-900">Chennai, Tamil Nadu, India</div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 font-medium">My Email:</div>
                                    <a href="mailto:karthikeyanvjay70@gmail.com" className="text-[0.95rem] font-bold text-gray-900 hover:text-purple-600 transition-colors">
                                        karthikeyanvjay70@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 font-medium">Call Me Now:</div>
                                    <div className="text-[0.95rem] font-bold text-gray-900">+91 9994615214</div>
                                </div>
                            </div>
                        </div>

                        {/* LinkedIn Icon */}
                        <a
                            href="https://linkedin.com/in/karthikeyan51"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-600 text-white hover:bg-purple-700 hover:-translate-y-1 transition-all duration-300 shadow-md"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>

                    {/* Right Side — Form & Text */}
                    <div className="bg-white">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                            Let's Build Something Great
                        </h2>
                        <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-8">
                            I'm eager to contribute to dynamic teams and innovative projects that challenge my problem-solving abilities. Whether you're looking for a dedicated developer or want to collaborate on exciting projects, I'd love to connect and explore opportunities together.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name*"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full py-3.5 border-b-2 border-gray-100 outline-none text-[0.95rem] text-gray-900 bg-transparent focus:border-purple-500 transition-colors font-sans placeholder-gray-400"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full py-3.5 border-b-2 border-gray-100 outline-none text-[0.95rem] text-gray-900 bg-transparent focus:border-purple-500 transition-colors font-sans placeholder-gray-400"
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Location*"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full py-3.5 border-b-2 border-gray-100 outline-none text-[0.95rem] text-gray-900 bg-transparent focus:border-purple-500 transition-colors font-sans placeholder-gray-400"
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject*"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full py-3.5 border-b-2 border-gray-100 outline-none text-[0.95rem] text-gray-900 bg-transparent focus:border-purple-500 transition-colors font-sans placeholder-gray-400"
                            />

                            <textarea
                                name="message"
                                placeholder="Message*"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full py-3.5 border-b-2 border-gray-100 outline-none text-[0.95rem] text-gray-900 bg-transparent focus:border-purple-500 transition-colors font-sans placeholder-gray-400 resize-y"
                            />

                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple-600 text-white font-bold text-[0.95rem] rounded-xl self-start transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:-translate-y-1 shadow-purple-200"
                            >
                                Submit
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
