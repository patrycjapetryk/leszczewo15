import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return (
    <header className='flex w-full justify-between text-sm'>
      <Link className='px-4 py-2 uppercase font-display text-xl' href='/'>
        {settings.data.title}
      </Link>
      <nav className='px-4 py-2 '>
        <ul className='flex'>
          {settings.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink field={link} className='p-3 uppercase'>
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
