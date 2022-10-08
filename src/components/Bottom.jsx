import React, { useState, useRef } from 'react';

const Bottom = () => {
  const [loading, isLoading] = useState(false);
  const formRef = useRef();

  return (
    <section className='flex flex-col gap-12 px-8 py-14 w-full' id='start'>
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
          <div className='mb-1'>Connect With The Finch</div>
        </button>
      </form>
    </section>
  );
};

export default Bottom;