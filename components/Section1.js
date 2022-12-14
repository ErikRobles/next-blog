import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import Spinner from './_child/Spinner';
import Error from './_child/Error';
import useFetcher from '../lib/fetcher';

const Section1 = () => {
  const { data, isLoading, isError } = useFetcher('/api/trending');
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  SwiperCore.use([Autoplay]);

  return (
    <section className='py-16 px-3 dec-image'>
      <div className='container mx-auto md:px-20'>
        <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>
        <Swiper slidesPerView={1} autoplay={{ delay: 5000 }} loop='true'>
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <Slide data={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

function Slide({ data }) {
  const { id, title, subtitle, category, published, img, description, author } =
    data;

  return (
    <div className='grid md:grid-cols-2 gap-3'>
      <div className='image'>
        <Link href={`/posts/${id}`}>
          <a>
            <Image src={img || ''} width={600} height={600} alt='' />
          </a>
        </Link>
      </div>
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={`/posts/${id}`}>
            <a className='text-orange-600 hover:text-orange-800'>
              {category || 'No Category'}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className='text-gray-800 hover:text-gray-600'>
              {' '}
              - {published || 'No Date Listed'}
            </a>
          </Link>
        </div>
        <div className='title'>
          <Link href={`/posts/${id}`}>
            <a className='text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600'>
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

export default Section1;
