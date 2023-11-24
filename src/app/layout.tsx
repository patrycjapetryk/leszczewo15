import './globals.css';

import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';

import { Red_Hat_Mono, Chewy } from 'next/font/google';

import Header from '../components/Header';
import Footer from '../components/Footer';

export const redHatMono = Red_Hat_Mono({
  subsets: ['latin-ext'],
  weight: '500',
  variable: '--font-red-hat-mono',
  display: 'swap',
});

export const chewy = Chewy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-chewy',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pl' className={`${redHatMono.variable} ${chewy.variable}`}>
      <head>
        <link rel='icon' type='image/png' sizes='any' href='https://prismic.io/favicon.ico' />
      </head>
      <body className='font-body min-h-screen'>
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
