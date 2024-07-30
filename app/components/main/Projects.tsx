import React from 'react';
import ProjectData from '../sub/project_data';

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center px-5 mt-[-390px] sm:-mt-12' id='project_main'>
      <h1 className='text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-16 text-center'>
        My Projects
      </h1>
      <div className='grid grid-cols-1 mt-[-20px] sm:grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-screen-lg'>
        <ProjectData
          src="/project_base_img1.png"
          title="Personal Portfolio Website"
          description='Created with Next.js and Framer Motion, this website serves as a dynamic and engaging showcase for my work thus far.'
        />
        <ProjectData
          src="/isometric.mp4"
          title="YTRC (Upcoming)"
          description="A deep learning project where we used transfer learning to create a way to convert YouTube video's audio to Regional Languages."
        />
        <ProjectData
          src="/trocr_pic.png"
          title="YOLOV8+Tr-OCR (Upcoming)"
          description='A hybrid system to read License Plates of Indian Vehicles more efficiently using Transformers.'
        />
        <ProjectData
          src="/ss1.png"
          title="Emotion Based YT Song Recommender"
          description='Uses OpenCV and Mediapipe to read and predict a person&apos;s facial expressions and recommend songs on youtube on the basis of his language and singer choice.'
        />
        <ProjectData
          src="/isometric.mp4"
          title="RESNET-50 CIFAR"
          description="Performed the classification of CIFAR dataset's data using RESNET-50. This taught me how RESNET-50 works and how to use it."
        />
      <ProjectData
          src="/isometric.mp4"
          title="EchoVision (Upcoming)"
          description="This is my biggest project yet. Can't reveal much as of now...stay tuned!"
        />
      </div>
    </div>
  );
};

export default Projects;
