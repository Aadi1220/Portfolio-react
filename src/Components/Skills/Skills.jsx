import React, { useEffect } from "react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaJava, 
  FaGithub, 
  FaNodeJs, 
  FaBootstrap,
  FaPython
} from "react-icons/fa";
import { 
  SiCplusplus, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss,
  SiMysql
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const skillsData = [
    {
      icon: FaHtml5,
      name: "HTML5",
      category: "Frontend",
      color: "#E34F26",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: FaCss3Alt,
      name: "CSS3",
      category: "Frontend",
      color: "#1572B6",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-600/10"
    },
    {
      icon: FaJs,
      name: "JavaScript",
      category: "Programming",
      color: "#F7DF1E",
      gradient: "from-yellow-400 to-yellow-600",
      bgGradient: "from-yellow-400/10 to-yellow-600/10"
    },
    {
      icon: FaReact,
      name: "React.js",
      category: "Frontend",
      color: "#61DAFB",
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-400/10 to-blue-500/10"
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      category: "Database",
      color: "#47A248",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-600/10"
    },
    {
      icon: SiCplusplus,
      name: "C++",
      category: "Programming",
      color: "#00599C",
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-600/10 to-purple-600/10"
    },
    {
      icon: FaJava,
      name: "Java",
      category: "Programming",
      color: "#007396",
      gradient: "from-red-500 to-orange-600",
      bgGradient: "from-red-500/10 to-orange-600/10"
    },
    {
      icon: FaPython,
      name: "Python",
      category: "Programming",
      color: "#3776AB",
      gradient: "from-blue-400 to-yellow-400",
      bgGradient: "from-blue-400/10 to-yellow-400/10"
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
      category: "Backend",
      color: "#339933",
      gradient: "from-green-600 to-green-700",
      bgGradient: "from-green-600/10 to-green-700/10"
    },
    {
      icon: SiExpress,
      name: "Express.js",
      category: "Backend",
      color: "#000000",
      gradient: "from-gray-600 to-gray-800",
      bgGradient: "from-gray-600/10 to-gray-800/10"
    },
    {
      icon: FaBootstrap,
      name: "Bootstrap",
      category: "Framework",
      color: "#7952B3",
      gradient: "from-purple-600 to-purple-700",
      bgGradient: "from-purple-600/10 to-purple-700/10"
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      category: "Framework",
      color: "#38B2AC",
      gradient: "from-teal-400 to-cyan-500",
      bgGradient: "from-teal-400/10 to-cyan-500/10"
    },
   
    {
      icon: FaGithub,
      name: "GitHub",
      category: "Tools",
      color: "#FFFFFF",
      gradient: "from-gray-400 to-gray-600",
      bgGradient: "from-gray-400/10 to-gray-600/10"
    }
  ];

  const categories = ["Frontend", "Backend", "Programming", "Database", "Framework", "Tools"];

  return (
    <div 
      id="Skills" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-cyan-900/10"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Skills
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Pills */}
        <div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {categories.map((category, index) => (
            <span 
              key={category}
              className="px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-full text-sm font-medium text-gray-300 backdrop-blur-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 max-w-7xl mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              {/* Glowing Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-gray-600/50 group-hover:shadow-2xl">
                {/* Icon Container */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${skill.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={32} className="text-white" />
                </div>

                {/* Skill Name */}
                <h3 className="text-base md:text-lg font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <span className="inline-block px-2 py-1 text-xs bg-gray-700/50 rounded-full text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {skill.category}
                </span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Always learning and expanding my skill set to stay current with the latest technologies and best practices in web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
