import React, { useState, useRef } from 'react';

const Bottom = () => {
  const [loading, isLoading] = useState(false);
  const formRef = useRef();

  return (
    <section
      className='flex flex-col lg:flex-row gap-12 px-8 lg:px-12 xl:px-0 py-14 lg:py-20 w-full md:w-4/5 md:mx-auto lg:w-full max-w-6xl'
      id='start'
    >
      <div className='text-5xl font-canela text-light'>
        All The Credit, None of the Stress
      </div>
      <form ref={formRef} className='grid grid-cols-1 gap-6 w-full'>
        <div className='font-canela text-light'>
          <input
            type='text'
            placeholder='Name'
            className='w-full bg-neutral-200 focus:ring-0 focus:border-base-yellow'
          />
        </div>
        <div className='font-canela text-light'>
          <input
            type='text'
            placeholder='Email'
            className='w-full bg-neutral-200 text-black focus:ring-0 focus:border-base-yellow'
          />
        </div>
        <div className='font-canela text-light'>
          <textarea
            rows={4}
            placeholder='Give us a brief description of your needs includng budget, timeline, and quantity.'
            className='w-full bg-neutral-200 focus:ring-0 focus:border-base-yellow'
          />
        </div>
        <button className='bg-black text-white text-xl font-engravers py-3'>
          <div className='mb-1'>Be a Holiday Hero</div>
        </button>
      </form>
    </section>
  );
};

export default Bottom;
