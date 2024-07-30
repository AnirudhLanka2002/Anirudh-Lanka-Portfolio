import React from 'react';

const Contact = () => {
  return (
    <div id='Contact'>
        <h1 className='text-[40px] sm:text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center transition-all scroll-smooth duration-300'>
            Contact Me
        </h1>
        <div className='max-w-2xl mt-[-50px] mx-8 sm:mx-auto bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 p-8'>
            <div className='mb-6'>
            <h3 className=' text-[16px] sm:text-[20px] font-bold text-white text-center mb-2 transition-all scroll-smooth duration-300'>Anirudh Sai Lanka</h3>
            <p className='text-white font-semibold'>Phone: +91 80887 17845</p>
            <p className='text-white font-semibold'>Email: anirudh2002sai1234@gmail.com</p>
            <p className='text-white font-semibold'>LinkedIn: www.linkedin.com/in/anirudh-sai-lanka-62b1a5247</p>
        </div>
        </div>
        <div className='mt-8 text-center text-black text-sm bg-slate-300'>
            &copy; Anirudh Sai Lanka 2024 Inc. All rights reserved
        </div>
        </div>
    );
};

export default Contact;
