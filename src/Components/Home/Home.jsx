import React, { useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, Code2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import avatarImg from "../../assets/avatar1.png";
import TextChange from "../TextChange";

const Home = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row w-full justify-between items-center min-h-screen px-6 py-20 md:px-12 lg:px-20">
        {/* Left Content */}
        <div className="lg:w-3/5 lg:pr-10 text-center lg:text-left order-2 lg:order-1">
          {/* Greeting Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <Code2 size={16} className="text-cyan-400" />
            <span>Full-Stack Developer</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <TextChange />
          </h1>

          {/* Location */}
          <div 
            className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-gray-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <MapPin size={18} className="text-cyan-400" />
            <span className="text-sm md:text-base">Sonipat, Haryana, India</span>
          </div>

          {/* Description */}
          <div 
            className="space-y-4 mb-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              Hi, I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Aaditya Atri</span>, a passionate web developer with a strong background in Computer Applications.
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl">
              I specialize in the <span className="font-semibold text-cyan-400">MERN stack</span> and love crafting dynamic, user-friendly web applications. I believe in writing clean, efficient, and scalable code while staying up-to-date with the latest web development trends.
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div 
            className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'Tailwind'].map((tech, index) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs md:text-sm bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div 
            className="flex justify-center lg:justify-start gap-6 mt-12"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            {[
              { 
                icon: Github, 
                href: "https://github.com/Aadi1220", 
                label: "GitHub",
                color: "hover:text-gray-300 hover:border-gray-300/50 hover:bg-gray-300/10"
              },
              { 
                icon: Linkedin, 
                href: "https://www.linkedin.com/in/aadi-atri1220/", 
                label: "LinkedIn",
                color: "hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10"
              },
              { 
                icon: Mail, 
                href: "mailto:aadityaattri262@gmail.com", 
                label: "Email",
                color: "hover:text-red-400 hover:border-red-400/50 hover:bg-red-400/10"
              }
            ].map(({ icon: Icon, href, label, color }, index) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className={`group flex flex-col items-center gap-2 p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm ${color}`}
                aria-label={label}
              >
                <Icon size={24} className="transition-colors duration-300" />
                <span className="text-xs font-medium text-gray-400 group-hover:text-current transition-colors duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Connect Text */}
          <p 
            className="text-center lg:text-left text-sm text-gray-400 mt-6"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Let's connect and build something amazing together!
          </p>
        </div>

        {/* Right Content - Avatar */}
        <div 
          className="lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="relative group">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Avatar Container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="w-full h-full rounded-full border-4 border-gradient-to-r from-cyan-400 to-purple-600 p-1 bg-gradient-to-r from-cyan-400 to-purple-600 shadow-2xl shadow-cyan-500/25 group-hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
                <img
                  className="w-full h-full object-cover rounded-full bg-gray-900"
                  src={avatarImg}
                  alt="Aaditya Atri - Full Stack Developer"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-1000 opacity-80"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
