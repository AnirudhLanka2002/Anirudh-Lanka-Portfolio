import { Socials } from "../constants";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 fixed top-0 shadow-lg bg-opacity-50 backdrop-blur-md z-50 px-2 md:px-10">
      <div className="w-full h-full flex items-center justify-between mx-auto">
        <div className="flex items-center gap-3 ms:gap-6 transition-all scroll-smooth duration-300">
          <div className="flex gap-3 items-center justify-between bg-opacity-20 backdrop-filter backdrop-blur-lg border border-purple-600 bg-purple-500 px-2 py-1 md:px-4 md:py-2 rounded-full text-gray-200 text-xs md:text-base">
            <a href="#about-me" className="font-bold cursor-pointer">
              About me
            </a>
            <a href="#skills" className="font-bold cursor-pointer">
              Skills
            </a>
            <a href="#project_main" className="font-bold cursor-pointer">
              Projects
            </a>
            <a href="#experiences" className="font-bold cursor-pointer">
              Experiences
            </a>
            <a href="#Contact" className="font-bold cursor-pointer">
              Contact Me
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3 md:gap-7">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              className="relative group flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.src}
                alt={social.name}
                width={social.width}
                height={social.height}
                className="social-icon"
                style={{ marginTop: "0", marginBottom: "0", verticalAlign: "middle" }}
              />
              <span className="tooltip absolute left-1/2 transform -translate-x-1/2 -bottom-full opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded py-1 px-2 transition-opacity duration-300">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>      
    </div>
  );
};

export default Navbar;
