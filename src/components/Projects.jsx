import React from 'react';
import fullstackImg from '../assets/fullstackImg.png';
import hrDashboardImg from '../assets/hrDashboardImg.png';

const projects = [
    {
        title: 'AI-Based E-Commerce Recommendation System',
        desc: 'Designed and developed a modular, scalable e-commerce system with AI-powered recommendation engines, real-time analytics dashboards, and secure role-based access control. Implemented user behavior tracking, purchase pattern analysis, and product similarity models to deliver personalized experiences while maintaining high performance and data integrity.',
        tags: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB',
            'AI / Recommendation Engine',
            'Behavioral Analytics',
            'RBAC',
            'JWT & Secure APIs',
            'Chart.js',
            'System Design',
            'Microservice-Ready Architecture'
        ],
        image: fullstackImg,
    }
    ,
    {
        title: 'HR Timesheet & Workforce Management Dashboard',
        desc: 'A scalable HR management system designed to track employee timesheets, attendance, and productivity with real-time analytics. The platform includes role-based access for HR, managers, and employees, automated timesheet approvals, payroll-ready reports, leave tracking, and performance insights through interactive dashboards. Built with a focus on data accuracy, security, and operational efficiency.',
        tags: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB',
            'HR Management System',
            'Timesheet Automation',
            'Attendance Tracking',
            'Role-Based Access Control (RBAC)',
            'JWT Authentication',
            'Chart.js',
            'Reporting & Analytics',
            'Scalable Architecture'
        ],
        image: hrDashboardImg,
    }

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
