import React from 'react';
import Author from '../../components/_child/Author';
import Format from '../../layout/Format';
import Image from 'next/image';
import Related from '../../components/_child/Related';

const Page = () => {
  return (
    <Format>
      <section className='container mx-auto md:px-2 py-16 w-1/2'>
        <div className='flex justify-center'>
          <Author />
        </div>
        <div className='post py-10'>
          <h1 className='font-bold text-4xl text-center pb-5'>
            Your most unhappy customers are your greatest source of learning.
          </h1>
          <p className='text-gray-500 text-xl text-center'>
            Far far away, behind the word mountains, far from the countries
            Vokolia and Consonantia, there live three blind texts.
          </p>
        </div>
        <div className='py-10'>
          <Image src={'/images/img1.jpg'} width={900} height={600} />
        </div>
        <div className='content text-gray-600 text-lg flex flex-col gap-4'>
          <p className='text-gray-500 py-3'>
            Even the all-powerful Painting has no control about the blind texts.
            It is an almost unorthographic life. One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the World
            of Grammar.
          </p>
          <p className='text-gray-500 py-3'>
            Even the all-powerful Painting has no control about the blind texts.
            It is an almost unorthographic life. One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the World
            of Grammar.
          </p>
          <p className='text-gray-500 py-3'>
            Even the all-powerful Painting has no control about the blind texts.
            It is an almost unorthographic life. One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the World
            of Grammar.
          </p>
        </div>
        <Related />
      </section>
    </Format>
  );
};

export default Page;
