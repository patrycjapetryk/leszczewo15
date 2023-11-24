import { createClient } from '@/prismicio';
import Link from 'next/link';

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return (
    <footer className='flex w-full px-4 py-2 text-xs'>
      <Link href='/'>
        ©{new Date().getFullYear()} {settings.data.title}
      </Link>
    </footer>
  );
}
