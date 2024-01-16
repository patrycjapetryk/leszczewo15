import { PrismicNextLink } from '@prismicio/next';

import { GroupField } from '@prismicio/client';
import {
  HeaderDocumentDataNavigationItem,
  Simplify,
} from '../../prismicio-types';

export type NavigationProps = {
  navigation: GroupField<Simplify<HeaderDocumentDataNavigationItem>>;
};

export default async function Navigation({ navigation }: NavigationProps) {
  return (
    <nav className="w-full">
      <ul className="flex w-full justify-between gap-4 pl-[1px] pr-1 md:justify-end lg:gap-6 xl:gap-2 2xl:gap-4">
        {navigation.map(({ link, label }) => (
          <li
            key={label}
            className="whitespace-nowrap text-sm uppercase tracking-tight xs:text-base sm:text-lg xl:text-sm 2xl:text-base"
          >
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
