import React from "react";
import SkillDataProvider from "../sub/SkillData";
import { Skill_data } from "../constants"; // Assuming Skill_data is imported correctly

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-8 h-full overflow-hidden pb-80 py-16 sm:py-12 mb-5"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="text-center max-w-lg">
        <h2 className="text-[40px] sm:text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-1 transition-all scroll-smooth duration-300">
          My Skills
        </h2>
      </div>

      <div className="grid grid-cols-5 gap-5 w-full max-w-screen-lg">
        {Skill_data.map((image, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden border border-gray-200 bg-white bg-opacity-20 backdrop-blur-md p-2 flex flex-col justify-center items-center text-center"
          >
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <p className="text-xs sm:text-sm text-gray-400 mt-2">{image.skill_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
