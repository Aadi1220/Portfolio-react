import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:aadityaattri262@gmail.com" className="hover:underline">
            aadityaattri262@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/aaditya-atri-241841177"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/aaditya-atri-241841177
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/Aadi1220"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Aadi1220
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
