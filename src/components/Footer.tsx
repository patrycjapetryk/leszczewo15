import { createClient } from '@/prismicio';

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle('footer');

  const { phone, email } = footer.data;

  return (
    <footer className="flex w-full justify-between gap-2 bg-white pb-2 text-xs xs:text-sm xl:fixed xl:bottom-0 xl:left-4 xl:w-[30%] 1xl:bottom-1">
      <span>{phone}</span>
      <a href={`mailto: ${email}`}>{email}</a>
    </footer>
  );
}
