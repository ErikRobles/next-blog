import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import fetcher from '../lib/fetcher';
import Author from './_child/Author';
import Error from './_child/Error';
import Spinner from './_child/Spinner';

const Section3 = () => {
  const { data, isLoading, isError } = fetcher('/api/popular');
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className='container mx-auto md:px-20 py-16 px-3'>
      <h1 className='font-bold text-4xl text-center py-12'>Most Popular</h1>
      <Swiper breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 30 } }}>
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <Post data={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

function Post({ data }) {
  const { id, title, subtitle, category, published, img, description, author } =
    data;
  return (
    <div className='grid mr-3'>
      <div className='images'>
        <Link href='/'>
          <a>
            <Image src={img || ''} width={600} height={400} />
          </a>
        </Link>
      </div>
      <div className='info flex justify-center flex-col py-4'>
        <div className='cat'>
          <Link href={`/posts/${id}`}>
            <a className='text-orange-600 hover:text-orange-800'>
              {category || 'No Category'}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className='text-gray-800 hover:text-gray-600'>
              {' '}
              - {published || 'No Date'}
            </a>
          </Link>
        </div>
        <div className='title'>
          <Link href={`/posts/${id}`}>
            <a className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'>
              {title || 'No Title'}
            </a>
          </Link>
        </div>
        <p className='text-gray-500 py-3'>{description || 'No Description'}</p>
        {author ? <Author {...author} /> : ''}
      </div>
    </div>
  );
}

export default Section3;
