import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Next Blog App</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
