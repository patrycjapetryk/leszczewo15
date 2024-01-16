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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${redHatMono.variable} ${chewy.variable}`}>
      <body className="min-h-screen w-full min-w-[320px] px-3 py-0 font-body text-stone-600 xs:px-4 xs:py-0 xl:p-5">
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
