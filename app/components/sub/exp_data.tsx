import React from 'react';
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ExpData = ({ src, title, description }: Props) => {
  const isVideo = src.endsWith(".mp4");

  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
      <div className='relative w-full'>
        {isVideo ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            className='w-full h-auto object-cover rounded-t-lg'
          />
        ) : (
          <Image
            src={src}
            alt={title}
            layout="responsive"
            width={1920}
            height={1080}
            className='w-full h-auto object-cover rounded-t-lg'
          />
        )}
      </div>
      <div className='p-4'>
        <h1 className='text-xl sm:text-2xl font-semibold text-white transition-all scroll-smooth duration-300'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </div>
  );
};

export default ExpData;
