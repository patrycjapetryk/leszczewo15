import { Metadata } from 'next';
import Image from 'next/image';
import { createClient } from '@/prismicio';

export default function Custom404() {
  return (
    <main className="flex min-h-[71vh] w-full items-center justify-center xs:min-h-[75vh] sm:min-h-[82vh] md:min-h-[87vh] lg:min-h-[85vh] xl:min-h-[90vh] 1xl:min-h-[90vh]">
      <div className="mb-12 flex flex-col items-center gap-4 md:mb-0">
        <Image
          src="/404.svg"
          className="w-[80px] sm:w-[99px]"
          width="99"
          height="46"
          alt="Błąd 404"
        />
        <p className="text-center">Taka strona nie istnieje</p>
      </div>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  return {
    title: 'Błąd 404',
    description: 'Taka strona nie istnieje',
  };
}
