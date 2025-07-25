import React, { useEffect } from "react";
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ title, main, technologies, githubLink, liveLink }) => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div
      className="group relative w-full max-w-sm bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-gray-700/30 rounded-2xl shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-500 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating Sparkle */}
      <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles size={16} className="animate-pulse text-cyan-400" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 space-y-4">
        
        {/* Project Title */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300 leading-tight">
            {title}
          </h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full rounded-full"></div>
        </div>

        {/* Project Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300 line-clamp-3">
          {main}
        </p>

        {/* Technologies Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Code2 size={16} className="text-cyan-400" />
            <h4 className="text-gray-400 font-semibold text-sm">Tech Stack</h4>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-gray-700/50 border border-gray-600/50 rounded-full text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-cyan-500 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:scale-105">
                <ExternalLink size={16} />
                Live
              </button>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full border-2 border-gray-600 bg-gray-800/50 hover:border-cyan-400 hover:bg-cyan-400/10 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-cyan-400/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm backdrop-blur-sm hover:scale-105">
                <Github size={16} />
                Code
              </button>
            </a>
          )}
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default ProjectCard;
