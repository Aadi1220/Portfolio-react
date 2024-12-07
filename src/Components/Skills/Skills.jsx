import React from "react";
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaJava, 
  FaGithub, 
  FaNodeJs, 
  FaBootstrap 
} from "react-icons/fa";
import { 
  SiCplusplus, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss 
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <br />
      <br />
      <div className="flex flex-wrap justify-around gap-10">
        <div className="flex flex-col items-center">
          <FaHtml5 color="#E34F26" size={50} />
          <p className="text-white mt-2">HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3 color="#1572B6" size={50} />
          <p className="text-white mt-2">CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJs color="#F7DF1E" size={50} />
          <p className="text-white mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact color="#61DAFB" size={50} />
          <p className="text-white mt-2">React.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiMongodb color="#47A248" size={50} />
          <p className="text-white mt-2">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <SiCplusplus color="#00599C" size={50} />
          <p className="text-white mt-2">C++</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJava color="#007396" size={50} />
          <p className="text-white mt-2">Java</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs color="#339933" size={50} />
          <p className="text-white mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiExpress color="#000000" size={50} />
          <p className="text-white mt-2">Express.js</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBootstrap color="#7952B3" size={50} />
          <p className="text-white mt-2">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss color="#38B2AC" size={50} />
          <p className="text-white mt-2">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGithub color="#FFFFFF" size={50} />
          <p className="text-white mt-2">GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
