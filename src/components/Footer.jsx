import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
            <div className="max-w-7xl mx-auto px-6">
                <ul className="flex flex-wrap justify-center gap-8 mb-6 list-none">
                    <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
                    <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
                    <li><a href="#projects" className="hover:text-white transition-colors duration-200">Portfolio</a></li>
                    <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
                    <li>
                        <a href="https://linkedin.com/in/karthikeyan51" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/karthikeyanCoder" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                            GitHub
                        </a>
                    </li>
                </ul>
                <p>© {currentYear} Karthikeyan. Built with ❤️ and React.</p>
            </div>
        </footer>
    );
};

export default Footer;
