'use client';

import { usePathname } from 'next/navigation';
import { PrismicNextLink } from '@prismicio/next';
import {
  CustomTypeModelLinkField,
  GroupField,
  KeyTextField,
  LinkField,
} from '@prismicio/client';

import {
  HeaderDocumentDataNavigationItem,
  Simplify,
} from '../../prismicio-types';

export type NavigationProps = {
  navigation: GroupField<Simplify<HeaderDocumentDataNavigationItem>>;
};
export type Link = {
  link: LinkField;
};

export default function Navigation({ navigation }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <ul className="flex w-full justify-between gap-4 whitespace-nowrap pl-[1px]  pr-1 text-sm uppercase tracking-tight xs:text-base sm:text-lg md:justify-end lg:gap-6 xl:gap-2 xl:text-sm 2xl:gap-4 2xl:text-base">
        {navigation.map(({ link, label }) => (
          <li
            key={label}
            className={
              label?.toLowerCase().replace(' ', '-') ===
              pathname.replace('/', '')
                ? `first:after:rotate-5 even:after:rotate-10 relative after:absolute after:left-1/3 after:top-[-10px] after:h-8 after:w-8 after:content-[url('../../public/icon.svg')]`
                : ''
            }
          >
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
