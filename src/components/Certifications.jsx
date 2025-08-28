
// export default Certifications;
import React, { useState, useEffect } from 'react';

// Assuming images are in src/assets/ – replace with your actual image paths
import certFullStack from '../assets/fullstack.png'; // Full Stack cert image
import certPython from '../assets/python.png'; // Python cert image

const certifications = [
  {
    title: 'Full Stack Development',
    issuer: 'NoviTech R&D Private Limited',
    image: certFullStack,
  },
  {
    title: 'Python Basics',
    issuer: 'Besant Technology Institute',
    image: certPython,
  },

];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  // Close modal on ESC key press for better UX
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="certifications" className="card mb-10">
      <h2 className="text-3xl gradient-text mb-6 text-center">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-4 border border-white/5 rounded-md transition-all hover:shadow-[var(--shadow-subtle)] hover:scale-105 cursor-pointer bg-[hsl(var(--card-dark))]"
            onClick={() => openModal(cert.image)}
          >
            {/* Certificate Image Container */}
            <div className="flex items-center justify-center h-60 rounded-md mb-3 overflow-hidden bg-black/50">
              <img
                src={cert.image}
                alt={`${cert.title} Certificate from ${cert.issuer}`}
                className="max-h-full max-w-full object-contain transition-transform duration-200 hover:scale-110"
                loading="lazy"
                onError={(e) => { e.target.src = 'fallback-image.png'; }} // Optional fallback
              />
            </div>

            {/* Certificate Info */}
            <h3 className="text-lg font-semibold text-[hsl(var(--accent-blue))]">{cert.title}</h3>
            <p className="text-sm text-[hsl(var(--text-muted))]">{cert.issuer}</p>
          </div>
        ))}
      </div>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal} 
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Image Modal"
        >
          <div className="relative max-w-4xl w-full p-4 md:p-8" onClick={(e) => e.stopPropagation()}> {/* Prevent close on content click */}
            <img
              src={selectedImage}
              alt="Full Certificate"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 btn bg-red-600 hover:bg-red-500 text-white px-3 py-1 text-sm rounded-full"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;