import React, { useEffect } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aadityaattri262@gmail.com",
      href: "mailto:aadityaattri262@gmail.com",
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aadi-atri1220",
      href: "https://www.linkedin.com/in/aadi-atri1220/",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Aadi1220",
      href: "https://github.com/Aadi1220",
      gradient: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <div
      id="Footer"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-16 md:py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Section - Contact Header */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Contact
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Feel free to reach out!
              </p>
            </div>
          </div>

          {/* Right Section - Contact Links */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="200">
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label !== "Email" ? "_blank" : undefined}
                  rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group block"
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 100)}
                >
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-gray-600/50 hover:bg-gray-700/40 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <contact.icon size={28} className="text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-400 mb-2">{contact.label}</p>
                      <p className="text-white font-medium text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className="mt-16 pt-8 border-t border-gray-700/30 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="text-gray-400 text-sm">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
    </div>
  );
};

export default Footer;
