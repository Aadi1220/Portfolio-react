import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white bg-[#121212]">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Homeaway (Airbnb Clone)"
          main="This is an Airbnb clone created with a focus on functionality and responsive design."
          technologies={[
            "HTML",
            "CSS",  
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Bootstrap",
          ]}
          githubLink="https://github.com/Aadi1220/HomeAway"
          liveLink="https://homeaway-2abd.onrender.com/listings/"  // Replace with your live website URL
        />
        <ProjectCard
          title="Music Player"
          main="A web-based music player with intuitive controls and a modern UI."
          technologies={["HTML", "CSS", "JavaScript"]}
          githubLink="https://github.com/Aadi1220/Music-Player"
        />
        <ProjectCard
          title="Simon Says Game"
          main="A memory game where players replicate a sequence of flashing colors, with increasing difficulty at each level."
          technologies={["HTML", "CSS", "JavaScript"]}
          githubLink="https://github.com/Aadi1220/Basic-Simon-Says-Game"
        />
        <ProjectCard
          title="Spotify Interface Clone"
          main="A clone of the Spotify interface with responsive design and basic UI elements."
          technologies={["HTML", "CSS"]}
          githubLink="https://github.com/Aadi1220/Spotify-interface"
        />
        <ProjectCard
          title="Electricity Billing System"
          main="A desktop application for managing electricity bills, featuring an intuitive Swing-based GUI and database integration."
          technologies={["Java", "Swing GUI", "SQL"]}
          githubLink="https://github.com/Aadi1220/Electricity-billing-system"
        />
      </div>
    </div>
  );
};

export default Projects;
