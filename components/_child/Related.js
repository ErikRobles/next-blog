import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useFetcher from '../../lib/fetcher';
import Author from './Author';
import Spinner from './Spinner';
import Error from './Error';

const Related = () => {
  const { data, isLoading, isError } = useFetcher('/api/posts');
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section>
      <h1 className='font-bold text-3xl py-10'>Related</h1>
      <div className='flex flex-col gap-10'>
        {data.map((value, index) => (
          <Post key={index} data={value}></Post>
        ))}
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
              height={200}
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

export default Related;
