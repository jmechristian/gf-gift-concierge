import React from 'react';
import { motion } from 'framer-motion';

const TopImages = () => {
  const imageVariants = {
    hidden: {
      clipPath: 'polygon(100% 100%, 100% 100%, 0 100%, 0% 100%)',
      opacity: 0,
      scale: 1.2,
    },
    show: {
      clipPath: 'polygon(100% 100%, 100% 0%, 0% 0%, 0% 100%)',
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-center w-full h-full gap-3'>
        <motion.div
          variants={imageVariants}
          initial='hidden'
          animate='show'
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 100,
            mass: 1,
            delay: 0.5,
          }}
          className='bg-red-500 aspect-square lg:aspect-auto lg:h-60 lg:w-48 xl:h-80 xl:w-72 rounded'
          style={{
            backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1664598717/goldfinch/LMB_9843_dogmt9.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></motion.div>
        <motion.div
          variants={imageVariants}
          initial='hidden'
          animate='show'
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 100,
            mass: 1,
            delay: 0.75,
          }}
          className='bg-red-400 aspect-square lg:aspect-auto lg:h-60 lg:w-48 xl:h-80 xl:w-72 rounded'
          style={{
            backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1665273178/goldfinch/baccarat-everyday-classic-old-fashioned-tumblers-set-5_1000x_c4lztv.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></motion.div>
        <motion.div
          variants={imageVariants}
          initial='hidden'
          animate='show'
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 100,
            mass: 1,
            delay: 1,
          }}
          className='bg-red-800 aspect-square lg:aspect-auto lg:h-60 lg:w-48 xl:h-80 xl:w-72 rounded'
          style={{
            backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1665273722/goldfinch/Silver_gold_ornaments_qcdva5.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></motion.div>
        <motion.div
          variants={imageVariants}
          initial='hidden'
          animate='show'
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 100,
            mass: 1,
            delay: 1.25,
          }}
          className='bg-red-300 aspect-square lg:aspect-auto lg:h-60 lg:w-48 xl:h-80 xl:w-72 rounded'
          style={{
            backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1664598716/goldfinch/LMB_9725_jho5u4.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default TopImages;
