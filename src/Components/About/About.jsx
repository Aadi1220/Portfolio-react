import React, { useEffect } from "react";
import { ChevronRight, Code, Database, Server, Palette, Star, Award, Target } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutImg from "../../assets/avatar2.png";

const About = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const skills = [
    {
      title: "Frontend Developer",
      description: "Proficient in React.js, HTML, CSS, and JavaScript, with experience in creating dynamic and responsive user interfaces. Skilled in modern frameworks like Bootstrap and Tailwind CSS to enhance design and styling.",
      gradient: "from-cyan-400 to-blue-500",
      icon: Palette,
      level: 90
    },
    {
      title: "Backend Developer", 
      description: "Skilled in Node.js and Express.js, focused on building secure and scalable server-side applications.",
      gradient: "from-purple-400 to-pink-500",
      icon: Server,
      level: 85
    },
    {
      title: "Programming Skills",
      description: "Knowledge of Java, Python, and C++, allowing for problem-solving across diverse software development scenarios.",
      gradient: "from-green-400 to-emerald-500",
      icon: Code,
      level: 80
    },
    {
      title: "Database Knowledge",
      description: "Understanding of MongoDB and MySQL, capable of designing and integrating databases into data-driven applications.",
      gradient: "from-orange-400 to-red-500",
      icon: Database,
      level: 75
    }
  ];

  const stats = [
    { 
      number: "Internship", 
      label: "Internship @ Techspie", 
      gradient: "from-purple-400 to-pink-500",
      icon: Award
    },
    { 
      number: "Several", 
      label: "Completed Projects", 
      gradient: "from-green-400 to-emerald-500",
      icon: Target
    }
  ];

  const techStack = [
    "React.js", "Node.js", "MongoDB", "Express.js", 
    "JavaScript", "Python", "Java", "C++", 
    "HTML5", "CSS3", "Tailwind", "Bootstrap"
  ];

  return (
    <div
      id="About"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden py-20"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top-left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 mx-6 md:mx-12 lg:mx-24">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              About Me
            </span>
          </h2>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <Star className="text-cyan-400" size={20} />
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            <Star className="text-purple-400" size={20} />
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </div>

        {/* Main Content - New Layout */}
        <div className="space-y-16">
          
          {/* Profile Section */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-center">
            
            {/* Avatar - Takes 2 columns */}
            <div 
              className="xl:col-span-2 flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="relative group">
                {/* Multiple Glow Layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse delay-1000"></div>
                
                {/* Image Container */}
                <div className="relative">
                  <div className="w-80 h-96 lg:w-96 lg:h-[450px] rounded-3xl border-4 border-gray-700/40 p-3 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg shadow-2xl group-hover:border-cyan-400/40 transition-all duration-700 group-hover:scale-105">
                    <img 
                      className="w-full h-full object-cover rounded-2xl" 
                      src={AboutImg} 
                      alt="About Aaditya Atri" 
                    />
                  </div>
                  
                  {/* Enhanced Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce opacity-90 shadow-lg"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce delay-1000 opacity-90 shadow-lg"></div>
                  <div className="absolute top-1/4 -left-6 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-70"></div>
                  <div className="absolute bottom-1/4 -right-6 w-5 h-5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse opacity-80"></div>
                </div>
              </div>
            </div>

            {/* Skills Grid - Takes 3 columns */}
            <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 150)}
                >
                  <div className="h-full p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-lg border border-gray-700/40 rounded-2xl hover:border-gray-600/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group-hover:bg-gray-800/60">
                    
                    {/* Skill Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${skill.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <skill.icon size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                          {skill.title}
                        </h3>
                        <div className="mt-2 bg-gray-700/50 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 group-hover:animate-pulse`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Skill Description */}
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats and Tech Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Experience Stats */}
            <div 
              className="space-y-6"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Experience
                </span>
              </h3>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/40 rounded-2xl hover:border-gray-600/60 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={700 + (index * 100)}
                >
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <stat.icon size={32} className="text-white" />
                    </div>
                    <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div 
              className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/40 rounded-2xl p-8"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <h3 className="text-3xl font-bold mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Technology Arsenal
                </span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech}
                    className="group p-4 bg-gradient-to-br from-gray-700/40 to-gray-800/40 border border-gray-600/40 rounded-xl hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-cyan-400/10 hover:to-purple-500/10 transition-all duration-300 cursor-default text-center hover:scale-105 hover:shadow-lg"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium text-sm">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              {/* Inspirational Quote */}
              <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/60 to-gray-900/60 border border-gray-700/40 rounded-xl text-center">
                <div className="text-5xl text-cyan-400 mb-3 opacity-60">"</div>
                <p className="text-gray-300 italic leading-relaxed text-lg mb-3">
                  Code is like humor. When you have to explain it, it's bad.
                </p>
                <div className="text-sm text-gray-500 font-medium">- Cory House</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
