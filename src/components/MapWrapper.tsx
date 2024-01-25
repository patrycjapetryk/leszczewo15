import { Metadata } from 'next';

export type childrenProps = { children: React.ReactNode };

export default async function GalleryWrapper({ children }: childrenProps) {
  return (
    <section className="bg-sage mb-12 h-[77vh] w-full xl:mb-0 xl:h-[95.6vh] xl:w-[67%]">
      {children}
    </section>
  );
}
