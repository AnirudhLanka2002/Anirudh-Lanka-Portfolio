"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/app/utils/motion";
import Image from "next/image";

const Hero_Content = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-10 sm:px-20 mt-20 sm:mt-32 mb-12 w-full z-[20]'
    >
      <div className='relative top-8 h-full w-full flex flex-col gap-3 sm:gap-1 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-sm sm:text-3xl text-bold text-white max-w-[700px] w-auto h-auto'
        >
          <span className='text-3xl sm:text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all scroll-smooth duration-300'>
            Anirudh Sai Lanka
          </span>
            An enthusiastic AI-ML Engineer and Problem Solver
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-sm sm:text-lg text-gray-300 my-5 max-w-[700px] transition-all scroll-smooth duration-300'
        >
          I&apos;m a dedicated AI and Machine Learning Engineer with a passion for harnessing data to create innovative models that address complex challenges. My commitment to ethical AI development drives me to ensure that the solutions I build are not only effective but also fair, beneficial, and transparent to society. I strive to make a positive impact through my work, advancing the field while upholding the highest standards of integrity and responsibility.
        </motion.p>

        <motion.a
          href="/Anirudh_Sai_Lanka_Resume2.pdf" // Update this path to the actual path of your resume PDF
          download="Anirudh_Sai_Lanka_Resume2.pdf"
          variants={slideInFromLeft(1)}
          className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
          My Resume...
        </motion.a>
      </div>
      
      <motion.div
      variants={slideInFromRight(0.8)}
      className="w-full h-full flex justify-center items-center px-3"
      >
        {/* <div className="glassmorphism w-96 h-96 flex justify-center items-center absolute -z-3" />
        <div className="glassmorphism w-96 h-96 flex justify-center items-center absolute -z-2" /> */}
        <div className="rounded-lg overflow-hidden relative top-8">
          <Image
            src="/my_face.jpg"
            alt="myface"
            height={410}
            width={410}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero_Content;
