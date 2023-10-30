import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='fr' className='box-border m-0 p-0 scroll-smooth'>
      <Head />
      <body className='text-white bg-dark min-h-full font-body tracking-wider text-sm md:text-base'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
