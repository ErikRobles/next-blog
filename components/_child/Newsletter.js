import React from 'react';

const Newsletter = () => {
  return (
    <section className='bg-gray-50 mt-20'>
      <div className='container mx-auto md:px-20 py-16 text-center'>
        <h1 className='font-bold text-3xl'>Subscribe to our Newsletter</h1>
        <div className='py-4'>
          <input
            type='text'
            className='shadow border rounded w-9/12 pt-3 pb-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-3'
            placeholder='Enter your email'
          />
          <button className='bg-orange-400 px-20 py-2.5 rounded-full xl:rounded-l-lg text-white text-xl shadow border-b-orange-400'>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
