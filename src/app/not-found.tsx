import Image from 'next/image';

export default function Custom404() {
  return (
    <main className="flex min-h-[70vh] w-full items-center justify-center xs:min-h-[73vh] sm:min-h-[81vh] md:min-h-[87vh] lg:min-h-[85vh] xl:min-h-[90vh]">
      <div className="flex flex-col items-center gap-4">
        <Image src="/404.svg" width={99} height={46} alt="" />
        <p className="text-center">Taka strona nie istnieje</p>
      </div>
    </main>
  );
}
