import React from 'react';
import TopImages from './TopImages';
import { motion } from 'framer-motion';

const TopText = () => {
  const headlineVariants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 100,
        mass: 1,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: -30,
    },
  };

  const subheadlineVariants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 100,
        mass: 1,
        delay: 1.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <div className='flex flex-col justify-between items-center h-full col-span-2'>
      <div className='flex flex-col py-14 lg:py-0 lg:mt-12 lg:mb-16 px-4 w-full text-center gap-12 md:gap-8 xl:gap-12 items-center'>
        <motion.div
          className='flex flex-col gap-2'
          variants={headlineVariants}
          initial='hidden'
          animate='enter'
        >
          <div
            className='font-thin text-5xl lg:text-7xl font-canela px-8 text-black'
            variants={headlineVariants}
            initial='hidden'
            animate='enter'
          >
            Holiday Gifting So Easy
          </div>
          <div className='text-2xl xl:text-4xl font-canela font-thin text-black'>
            (You'll <span className='italic'>almost</span> feel guilty.)
          </div>
        </motion.div>
        <div className='hidden lg:block'>
          <TopImages />
        </div>
        <div className='flex flex-col gap-6 md:w-4/5 lg:w-1/2 text-center'>
          <motion.div
            className='text-lg lg:text-xl xl:text-2xl font-canela text-black font-thin'
            variants={subheadlineVariants}
            initial='hidden'
            animate='enter'
          >
            Hands-free, concierge gifting from luxury brands. We'll wrap, ship,
            and include a personalized, handwritten note for the special people
            in your life.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopText;
