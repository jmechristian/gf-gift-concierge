import React from 'react';
import TopText from './TopText';
import TopImages from './TopImages';

const Top = () => {
  return (
    <section className='h-full'>
      <TopText />
      <div className='block lg:hidden'>
        <TopImages />
      </div>
    </section>
  );
};

export default Top;
