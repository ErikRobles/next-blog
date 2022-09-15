import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Author from './_child/Author';

const Section2 = () => {
  return (
    <section className='container mx-auto px-3 md:px-20 py-10'>
      <h1 className='font-bold text-4xl text-center py-12'>Latest Posts</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
};

function Post() {
  return (
    <div className='item'>
      <div className='images'>
        <Link href='/'>
          <a>
            <Image
              src={'/images/img1.jpg'}
              className='rounded'
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className='info flex justify-center flex-col py-4'>
        <div className='cat'>
          <Link href='/'>
            <a className='text-orange-600 hover:text-orange-800'>
              Business, Travel
            </a>
          </Link>
          <Link href='/'>
            <a className='text-gray-800 hover:text-gray-600'> - July 3, 2022</a>
          </Link>
        </div>
        <div className='title'>
          <Link href='/'>
            <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>
              Your most unhappy customers are your greatest source of learning.
            </a>
          </Link>
        </div>
        <p className='text-gray-500 py-3'>
          Even the all-powerful Painting has no control about the blind texts.
          It is an almost unorthographic life. One day however a small line of
          blind text by the name of Lorem Ipsum decided to leave for the World
          of Grammar.
        </p>
        <Author />
      </div>
    </div>
  );
}

export default Section2;
