import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Bottom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(null);
  const formRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
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
            formRef.current.reset();
            setSubmitted(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className='flex flex-col lg:flex-row gap-12 px-8 lg:px-12 xl:px-0 py-14 lg:py-20 w-full md:w-4/5 md:mx-auto lg:w-full max-w-6xl'
      id='start'
    >
      <div className='lg:w-4/5 flex flex-col gap-4'>
        <div className='text-5xl font-canela text-light'>
          All The Credit, None of the Stress
        </div>
        <div className='text-lg lg:text-xl font-canela text-light'>
          Welcome to seamless gift giving. Get in touch to leverage our
          expertise and impeccable style to bring awe and joy this holiday
          season.
        </div>
      </div>
      <form
        ref={formRef}
        className='grid grid-cols-1 gap-6 w-full xl:pl-24'
        onSubmit={formSubmitHandler}
      >
        <div className='font-canela text-light'>
          <input
            type='text'
            placeholder='Name*'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full bg-neutral-200 focus:ring-0 focus:border-base-yellow'
          />
        </div>
        <div className='font-canela text-light'>
          <input
            type='text'
            placeholder='Email*'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full bg-neutral-200 text-black focus:ring-0 focus:border-base-yellow'
          />
        </div>
        <div className='font-canela text-light'>
          <textarea
            rows={4}
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Give us a brief description of your needs includng budget, timeline, and quantity.*'
            className='w-full bg-neutral-200 focus:ring-0 focus:border-base-yellow'
          />
        </div>
        <div className='font-canela w-full text-right -mt-6 text-sm'>
          *Required
        </div>
        <button
          className='bg-black text-white text-xl font-engravers py-3'
          type='submit'
        >
          <div className='mb-1'>
            {isLoading ? 'Grabbing The Wrapping Paper...' : 'Be a Holiday Hero'}
          </div>
        </button>
      </form>
    </section>
  );
};

export default Bottom;
