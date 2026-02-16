import React from 'react';
import fullstackImg from '../assets/fullstack.png';
import pythonImg from '../assets/python.png';

const projects = [
    {
        title: 'SaaS Dashboard',
        desc: 'A comprehensive admin dashboard with real-time analytics, user management, and interactive data visualizations built with modern web technologies.',
        tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
        image: fullstackImg,
    },
    {
        title: 'Python Automation Tool',
        desc: 'An automation platform that streamlines repetitive tasks using Python scripts with a clean web interface for configuration and monitoring.',
        tags: ['Python', 'Flask', 'REST API', 'Automation'],
        image: pythonImg,
    },
    {
        title: 'E-Commerce Platform',
        desc: 'Full-stack e-commerce solution with secure payments, product catalog, shopping cart, and admin panel for order management.',
        tags: ['React', 'Express', 'MongoDB', 'Stripe'],
        image: null,
    },
];

const Projects = () => {
    return (
        <section className="py-20 bg-white" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
                    <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                            <div className="h-48 bg-purple-50 overflow-hidden relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 text-5xl">
                                        🛒
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors duration-300"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-semibold rounded-full border border-purple-100"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
