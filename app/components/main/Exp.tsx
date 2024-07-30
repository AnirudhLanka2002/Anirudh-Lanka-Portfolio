import React from 'react';
import ExpData from '../sub/exp_data';

const Exp = () => {
  return (
    <div className='flex flex-col items-center justify-center py-4 px-5 -mt-16 sm:-mt-8' id='experiences'>
      <h1 className='text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-16 text-center transition-all scroll-smooth duration-300'>
        My Experiences
      </h1>
      <div className='grid grid-cols-1 mt-[-20px] sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-screen-lg'>
        <ExpData
          src="/isometric.mp4"
          title="Summer Research Intern @PES University"
          description='Working under the best professors to build a modern credit-based parking system.'
        />
        <ExpData
          src="/isometric.mp4"
          title="Head of Hospitality @MAAYA"
          description="MAAYA is the flagship event of PES University ECC and I was the head of the Hospotality Division. A challenging yet fun role and I learnt a lot about management through this experience."
        />
        <ExpData
          src="/isometric.mp4"
          title="Sponsorship and Marketing Team Member @Shunya"
          description='Worked with a determined team to being in sponsors for Shunya club events.'
        />
        </div>
    </div>
  );
};

export default Exp;
