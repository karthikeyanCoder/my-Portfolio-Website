import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { label: 'Home', to: 'hero' },
        { label: 'About', to: 'about' },
        { label: 'Skills', to: 'skills' },
        { label: 'Portfolio', to: 'projects' },
        { label: 'Education', to: 'education' },
        { label: 'Services', to: 'services' },
    ];

    return (
        <nav className={`sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
            <Link
                to="hero"
                smooth={true}
                duration={500}
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => setMobileOpen(false)}
            >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 flex items-center justify-center text-white font-bold text-lg font-display transition-transform group-hover:scale-105">K</div>
                <span className="font-display font-bold text-xl text-gray-900 group-hover:text-purple-600 transition-colors">Karthikeyan</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-1">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass="!text-purple-600 !bg-purple-50"
                            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg cursor-pointer hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="hidden md:block">
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-500 text-white font-semibold text-sm rounded-full hover:bg-red-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                    Contact
                </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="p-2 text-2xl text-gray-800 hover:text-purple-600 transition-colors focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center py-8 gap-6 md:hidden border-t border-gray-100 animate-fade-in-down origin-top">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="text-lg font-medium text-gray-600 hover:text-purple-600 cursor-pointer w-full text-center py-2 hover:bg-gray-50 transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-red-500 text-white font-semibold text-base rounded-full hover:bg-red-600 transition-all cursor-pointer mt-2"
                        onClick={() => setMobileOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
