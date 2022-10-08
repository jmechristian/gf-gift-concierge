import React from 'react';

const Mid = () => {
  return (
    <section className='bg-black text-white flex flex-col py-12 px-8 lg:px-12 gap-10 md:items-center'>
      <div className='max-w-6xl md:w-4/5 lg:w-full'>
        <div className='flex flex-col lg:flex-row lg:w-full lg:justify-between gap-6 lg:gap-12'>
          <div className='flex flex-col gap-2 w-full'>
            <div className='font-engravers text-3xl'>1. Inquire</div>
            <div className='font-canela text-lg text-neutral-400'>
              Fill out the information form below to connect with one of our
              expert luxury gifters.
            </div>
          </div>
          <div className='flex flex-col gap-2  w-full'>
            <div className='font-engravers text-3xl'>2. Shop</div>
            <div className='font-canela text-lg text-neutral-400'>
              Once connected our expert gifters will work with you to choose
              from a currated selection of high-end brands to find the perfect
              gifts.
            </div>
          </div>
          <div className='flex flex-col gap-2  w-full'>
            <div className='font-engravers text-3xl'>3. Gift</div>
            <div className='font-canela text-lg text-neutral-400'>
              After your gifts are choosen, we'll wrap, handwrite a personalized
              note, and ship for free.* Local delivery is available in select
              locales.^
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-6 lg:mt-12 border-t-neutral-400 border-t pt-6  w-full md:w-4/5 lg:w-full'>
          <div className='font-engravers text-sm text-neutral-400'>
            *Free shipping on orders over $200
          </div>
          <div className='font-engravers text-sm text-neutral-400'>
            ^Local delivery available in Alexandria, Arlington, and DC.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mid;
