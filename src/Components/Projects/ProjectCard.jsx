import React from "react";

const ProjectCard = ({ title, main, technologies, githubLink, liveLink }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col w-full sm:w-80 bg-[#1a202c] shadow-lg hover:shadow-2xl hover:scale-105 duration-300 rounded-2xl">
      <h3 className="px-4 text-xl md:text-2xl font-bold text-white">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">{main}</p>

      <div className="px-4 py-2">
        <h4 className="text-sm md:text-md font-semibold text-gray-400">Technologies Used:</h4>
        <ul className="list-disc list-inside text-sm md:text-md text-gray-300">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 p-2 md:p-4 flex flex-wrap justify-between gap-3">
        {/* Live Website Button */}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] hover:bg-[#3b4d7b] shadow-md hover:shadow-lg">
              Live Website
            </button>
          </a>
        )}
        {/* Source Code Button */}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] hover:bg-[#3b4d7b] shadow-md hover:shadow-lg">
              Source Code
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
