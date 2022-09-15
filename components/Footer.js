import Link from 'next/link';
import React from 'react';
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im';
import Newsletter from './_child/Newsletter';

const Footer = () => {
  // get full year
  const year = new Date().getFullYear();
  return (
    <footer className='bg-gray-50'>
      <Newsletter />
      <div className='container mx-auto flex justify-center py-12'>
        <div className='py-5'>
          <div className='flex gap-6 justify-center'>
            <Link href='/'>
              <a>
                <ImFacebook color='#888' />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <ImTwitter color='#888' />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <ImInstagram color='#888' />
              </a>
            </Link>
          </div>
          <p className='py-5 text-gray-400'>
            Copyright &copy;{year} All Rights Reserved | Erik Robles
          </p>
          <p className='text-gray-400 text-center'>Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
