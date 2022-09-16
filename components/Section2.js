import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Author from './_child/Author';
import useFetcher from '../lib/fetcher';
import Spinner from './_child/Spinner';
import Error from './_child/Error';

const Section2 = () => {
  const { data, isLoading, isError } = useFetcher('api/posts');
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className='container mx-auto px-3 md:px-20 py-10'>
      <h1 className='font-bold text-4xl text-center py-12'>Latest Posts</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
        {data.map((value, index) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </section>
  );
};

function Post({ data }) {
  const { id, title, subtitle, category, published, img, author } = data;

  return (
    <div className='item'>
      <div className='images'>
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || '/'}
              className='rounded'
              width={500}
              height={350}
              alt=''
            />
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
            <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>
              {title || 'No Title'}
            </a>
          </Link>
        </div>
        <p className='text-gray-500 py-3'>{subtitle || 'Subtitle'}</p>
        {author ? <Author {...author} /> : ''}
      </div>
    </div>
  );
}

export default Section2;
