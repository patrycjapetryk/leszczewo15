import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

export type PlacesProps = SliceComponentProps<Content.PlacesSlice>;

export default async function Places({ slice }: PlacesProps) {
  const { title, text } = slice.primary;

  return (
    <article
      className="mb-6"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
