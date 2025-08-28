import React from "react";
import profilePic from "../assets/profile.jpg"; 

const Hero = () => {
  return (
    <section id="hero" className="card mb-10">
      <div className="flex flex-col items-center text-center">
        {/* Professional Profile Image */}
        <div className="mb-6">
          <img
            src={profilePic}
            alt="Karthikeyan M - Full Stack Developer"
            className="profile-pic"
          />
        </div>

        {/* Title with Subtle Gradient */}
        <h1 className="text-4xl gradient-text mb-3">Karthikeyan M</h1>
        <h2 className="text-xl text-[hsl(var(--accent-blue))] font-semibold mb-4">Full Stack Developer</h2>

        {/* Contact Info */}
        <p className="text-[hsl(var(--text-muted))] mb-4 text-sm md:text-base">
          📞 +91-9994615214 | 📧{" "}
          <a href="mailto:karthikeyanvijay70@gmail.com" className="text-[hsl(var(--accent-blue))] hover:underline">
            karthikeyanvijay70@gmail.com
          </a>{" "}
          | 📍 Chennai, Tamil Nadu, India
        </p>

        {/* Links with Professional Buttons */}
        <div className="flex justify-center space-x-4 mb-6 flex-wrap gap-2">
          <a href="https://www.linkedin.com/in/karthikeyan51/" target="_blank" rel="noopener noreferrer" className="btn">
            LinkedIn
          </a>
          <a href="https://github.com/karthikeyanCoder" target="_blank" rel="noopener noreferrer" className="btn">
            GitHub
          </a>
          <a href="https://karthikeyan-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="btn">
            Portfolio
          </a>
        </div>

        {/* About - Scannable and Professional */}
        <p className="text-[hsl(var(--text-muted))] max-w-3xl leading-relaxed text-sm md:text-base">
          Results-driven Full Stack Developer with expertise in{" "}
          <span className="font-semibold text-[hsl(var(--accent-blue))]">React.js, Node.js, MongoDB, and JavaScript</span>.
          Delivered scalable web applications, AI chatbots, TTS integrations, and e-commerce platforms. Skilled in end-to-end development, RESTful API design, and system optimization. Recognized for{" "}
          <span className="font-semibold text-[hsl(var(--accent-blue))]">problem-solving, collaboration, and building user-focused solutions</span> that drive measurable business impact.
        </p>
      </div>
    </section>
  );
};

export default Hero;