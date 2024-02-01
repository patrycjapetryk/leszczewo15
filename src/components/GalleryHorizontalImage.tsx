import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export type GalleryProps = SliceComponentProps<Content.GallerySlice> & {
  slice: {
    slice_type: 'gallery';
    slice_label: null;
    id: string;
  } & Content.GallerySliceDefault;
};

export default function Gallery({ slice }: GalleryProps) {
  const { variation, slice_type, primary } = slice;

  const { photo, description, priority } = primary;

  return (
    <section data-slice-type={slice_type} data-slice-variation={variation}>
      <figure className="w-full">
        <PrismicNextImage
          className="w-full bg-sage"
          field={photo}
          imgixParams={{ q: 50 }}
          priority={priority ? true : false}
        />
        <figcaption className="mb-4 mt-1 text-sm tracking-tighter">
          {description}
        </figcaption>
      </figure>
    </section>
  );
}
