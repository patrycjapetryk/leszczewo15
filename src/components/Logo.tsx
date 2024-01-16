import { KeyTextField } from '@prismicio/client';
import Link from 'next/link';

export type TitleProps = {
  title: KeyTextField;
};

export default async function Logo({ title }: TitleProps) {
  return (
    <Link
      className="ml-[1px] mt-[1px] whitespace-nowrap font-display text-3xl uppercase tracking-tight xs:text-[2.5rem] lg:text-4xl xl:text-[1.7rem] 2xl:text-4xl"
      href="/"
    >
      {title}
    </Link>
  );
}
