import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';

const Bottom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const formRef = useRef();
  const bottomRef = useRef();

  const inView = useInView(bottomRef, { amount: 0.25 });
  const formInView = useInView(formRef, { amount: 0.25 });

  const variants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 100,
        mass: 1,
        delay: 0.15,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      description.trim() === ''
    ) {
      setError('Please fill out all required fields');
    } else {
      setError(false);
      setIsLoading(true);

      emailjs
        .sendForm(
          'service_pmwa7qn',
          'template_njuvwx5',
          formRef.current,
          'ARes42PsI77aAMQEV'
        )
        .then(
          (response) => {
            if (response.status === 200) {
              setSubmitted(true);
              setName('');
              setEmail('');
              setDescription('');
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <motion.section
      className='flex flex-col lg:flex-row gap-12 px-8 lg:px-12 xl:px-0 py-14 lg:py-20 w-full md:w-4/5 md:mx-auto lg:w-full max-w-6xl'
      id='start'
    >
      <motion.div
        className='lg:w-4/5 flex flex-col gap-6'
        ref={bottomRef}
        variants={variants}
        initial='hidden'
        animate={inView ? 'enter' : 'hidden'}
      >
        <div className='text-5xl font-canela font-thin text-black'>
          All The Credit, None of the Stress
        </div>
        <div className='text-lg lg:text-xl font-canela font-thin text-black'>
          Welcome to seamless gift giving. Get in touch to leverage our
          expertise and impeccable style to bring awe and joy this holiday
          season.
        </div>
      </motion.div>
      <motion.form
        ref={formRef}
        variants={variants}
        initial='hidden'
        animate={formInView ? 'enter' : 'hidden'}
        className='grid grid-cols-1 gap-6 w-full xl:pl-24'
        onSubmit={formSubmitHandler}
      >
        <div className='font-canela font-thin'>
          <input
            type='text'
            placeholder='Name*'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full bg-neutral-200 focus:ring-0 focus:border-base-yellow'
            style={{
              border: '1px solid #6b7280',
              backgroundColor: 'rgb(229,229,229)',
            }}
          />
        </div>
        <div className='font-canela font-thin'>
          <input
            type='text'
            placeholder='Email*'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full bg-neutral-200 text-black focus:ring-0 focus:border-base-yellow'
            style={{
              border: '1px solid #6b7280',
              backgroundColor: 'rgb(229,229,229)',
            }}
          />
        </div>
        <div className='font-canela font-thin'>
          <textarea
            rows={4}
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Give us a brief description of your needs includng budget, timeline, and quantity.*'
            className='w-full bg-neutral-200 focus:ring-0 focus:border-base-yellow'
          />
        </div>
        <div className='font-canela w-full text-right -mt-6 flex justify-between'>
          {error ? <div className='text-red-600'>{error}</div> : <div></div>}
          <div>*Required</div>
        </div>
        {submitted ? (
          <button
            className='bg-neutral-700 text-white text-xl font-engravers py-3'
            type='submit'
            disabled
          >
            <div className='mb-1 font-engravers text-xl'>
              Thank You We’ll Be In Touch Soon
            </div>
          </button>
        ) : (
          <button
            className='bg-black text-white font-engravers py-3'
            type='submit'
          >
            <div className='mb-1 font-engravers text-xl'>
              {isLoading
                ? 'Grabbing The Wrapping Paper...'
                : 'Be a Holiday Hero'}
            </div>
          </button>
        )}
      </motion.form>
    </motion.section>
  );
};

export default Bottom;
