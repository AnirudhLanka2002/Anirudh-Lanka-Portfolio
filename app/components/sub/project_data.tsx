import React from 'react';
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectData = ({ src, title, description }: Props) => {
  const isVideo = src.endsWith(".mp4");

  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border-4 sm:border transition-all scroll-smooth border-[#2A0E61] bg-opacity-70 backdrop-filter backdrop-blur-lg'>
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          className='w-full h-[300px] object-cover'
        />
      ) : (
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className='w-full h-[300px] object-cover'
        />
      )}
      <div className='relative p-4'>
        <h1 className='text-xl sm:text-2xl font-semibold text-white transition-all scroll-smooth duration-300'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectData;
