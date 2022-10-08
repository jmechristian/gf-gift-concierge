import React from 'react';

const TopText = () => {
  return (
    <div className='flex flex-col justify-between items-center h-full'>
      <div className='flex flex-col py-14 px-4 text-center gap-12'>
        <div className='flex flex-col gap-2'>
          <div className='text-light text-5xl font-canela px-8'>
            Holiday Gifting So Easy
          </div>
          <div className='text-2xl font-canela text-light'>
            (You'll <span className='italic'>almost</span> feel guilty.)
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='text-lg font-canela'>
            <p>
              Hands-free concierge gifting from luxury brands. We'll wrap, ship,
              and include a personalized, handwritten note to the special people
              in your life.
            </p>
          </div>
          <div className='flex bg-black text-white justify-center items-center py-3'>
            <div className='font-engravers text-xl leading-none pb-1'>
              Get Started Below
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopText;
