import { createClient } from '@/prismicio';

import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle('header');
  const { title, navigation } = header.data;

  return (
    <header className="mb-10 mt-4 flex w-full flex-col-reverse gap-4 bg-white xs:mb-12 xs:mt-5 sm:mt-4 md:mb-8 md:flex-row md:items-center xl:fixed xl:left-5 xl:top-1 xl:w-[30%]">
      <Logo title={title} />
      <Navigation navigation={navigation} />
    </header>
  );
}
