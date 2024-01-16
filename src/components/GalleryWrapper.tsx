import { Metadata } from 'next';

export type childrenProps = { children: React.ReactNode };

export default async function GalleryWrapper({ children }: childrenProps) {
  return (
    <section className="mb-12 w-full xl:mb-0 xl:w-[67%]">{children}</section>
  );
}
