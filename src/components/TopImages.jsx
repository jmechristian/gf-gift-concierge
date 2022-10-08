import React from 'react';

const TopImages = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='grid grid-cols-2 w-full h-full gap-2'>
        <div className='bg-red-500 aspect-square'></div>
        <div className='bg-red-400 aspect-square'></div>
        <div className='bg-red-300 aspect-square'></div>
        <div className='bg-red-800 aspect-square'></div>
      </div>
    </div>
  );
};

export default TopImages;
