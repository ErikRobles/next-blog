import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Author = ({ name, img, designation }) => {
  if (!name && !img) return <></>;
  return (
    <div className='author flex py-5'>
      <div className='hidden sm:block'>
        <Image
          src={img || ''}
          width={50}
          height={50}
          className='rounded-full'
        />
      </div>
      <div className='block sm:hidden'>
        <Image
          src={img || ''}
          width={50}
          height={50}
          className='rounded-full'
        />
      </div>
      <div className='flex flex-col justify-center px-4'>
        <Link href='/'>
          <a className='text-md font-bold text-gray-800 hover:text-gray-600'>
            {name || 'No Name'}
          </a>
        </Link>
        <span className='text-sm text-gray-500'>{designation || ''}</span>
      </div>
    </div>
  );
};

export default Author;
