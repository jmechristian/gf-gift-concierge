import React from 'react';

const TopImages = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-center w-full h-full gap-3'>
        <div
          className='bg-red-500 aspect-square lg:aspect-auto lg:h-60 lg:w-48 xl:h-80 xl:w-72 rounded'
          style={{
            backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1664598717/goldfinch/LMB_9843_dogmt9.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div
          className='bg-red-400 aspect-square lg:aspect-auto lg:h-60 lg:w-48 xl:h-80 xl:w-72 rounded'
          style={{
            backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1664598717/goldfinch/LMB_9753_jmwrpr.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div
          className='bg-red-300 aspect-square lg:aspect-auto lg:h-60 lg:w-48 xl:h-80 xl:w-72 rounded'
          style={{
            backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1664598716/goldfinch/LMB_9715_ldb2dc.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div
          className='bg-red-800 aspect-square lg:aspect-auto lg:h-60 lg:w-48 xl:h-80 xl:w-72 rounded'
          style={{
            backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1664598716/goldfinch/LMB_9751_o1dstu.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </div>
    </div>
  );
};

export default TopImages;
