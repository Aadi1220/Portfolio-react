import React from "react";
import avatarImg from "../../assets/avatar1.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-5 md:p-20">
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-2xl md:text-6xl font-bold leading-normal tracking-tighter mb-4">
          <TextChange />
        </h1>
        <p className="text-sm md:text-xl tracking-tight mb-6">
          Hi, I'm <span className="font-semibold text-[#8ca2db]">Aaditya Atri</span>, a passionate web developer from Sonipat, Haryana. With a strong background in Computer Applications, I have a deep interest in crafting dynamic and user-friendly web applications.  I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), and I enjoy solving complex problems with innovative solutions.Currently, I'm focusing on building full-stack web applications, and I love exploring new technologies and tools to improve both the user experience and the development process. I believe in writing clean, efficient, and scalable code, and I continuously work on honing my skills to stay up to date with the latest trends in web development.
        </p>
        <button className="mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div className="mt-10 md:mt-0">
        <img
          className="w-32 h-32 md:w-64 md:h-64 object-cover rounded-full mx-auto"
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
