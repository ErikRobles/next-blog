import Link from 'next/link';
import React from 'react';
import Author from './_child/Author';
import Image from 'next/image';
import Spinner from './_child/Spinner';
import Error from './_child/Error';
import useFetcher from '../lib/fetcher';
const Section4 = () => {
  const { data, isLoading, isError } = useFetcher('/api/popular');
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className='container mx-auto md:px-20 py-16 px-3'>
      <div className='grid lg:grid-cols-2 mr-3'>
        <div className='item'>
          <h1 className='font-bold text-4xl py-12'>Business</h1>
          <div className='flex flex-col gap-6'>
            {data[1] ? <Post data={data[1]} /> : ''}
            {data[2] ? <Post data={data[2]} /> : ''}
            {data[3] ? <Post data={data[3]} /> : ''}
          </div>
        </div>
        <div className='item'>
          <h1 className='font-bold text-4xl py-12'>Travel</h1>
          <div className='flex flex-col gap-6'>
            {data[4] ? <Post data={data[4]} /> : ''}
            {data[5] ? <Post data={data[5]} /> : ''}
            {data[2] ? <Post data={data[2]} /> : ''}
          </div>
        </div>
      </div>
    </section>
  );
};

function Post({ data }) {
  const { id, title, category, img, published, author } = data;
  return (
    <div className='flex gap-5'>
      <div className='image flex flex-col justify-col justify-start'>
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || ''}
              className='rounded'
              width={300}
              height={250}
              alt=''
            />
          </a>
        </Link>
      </div>
      <div className='info flex flex-col justify-center'>
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
            <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>
              {title || 'No Title'}
            </a>
          </Link>
        </div>
        {author ? <Author {...author} /> : ''}
      </div>
    </div>
  );
}

export default Section4;
