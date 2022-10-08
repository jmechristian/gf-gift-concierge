import React from 'react';
import TopImages from './TopImages';

const TopText = () => {
  return (
    <div className='flex flex-col justify-between items-center h-full col-span-2'>
      <div className='flex flex-col py-14 lg:py-0 mt-12 mb-16 px-4 w-full text-center gap-12 md:gap-8 xl:gap-12 items-center'>
        <div className='flex flex-col gap-2'>
          <div className='text-light text-5xl xl:text-7xl font-canela px-8'>
            Holiday Gifting So Easy
          </div>
          <div className='text-2xl xl:text-4xl font-canela text-light'>
            (You'll <span className='italic'>almost</span> feel guilty.)
          </div>
        </div>
        <div className='hidden lg:block'>
          <TopImages />
        </div>
        <div className='flex flex-col gap-6 md:w-4/5 lg:w-1/2 text-center'>
          <div className='text-lg xl:text-2xl font-canela'>
            <p>
              Hands-free concierge gifting from luxury brands. We'll wrap, ship,
              and include a personalized, handwritten for the special people in
              your life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopText;
