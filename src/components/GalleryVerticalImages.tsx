import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export type GalleryProps = SliceComponentProps<Content.GallerySlice> & {
  slice: {
    slice_type: 'gallery';
    slice_label: null;
    id: string;
  } & Content.GallerySliceVertical;
};

export default function GalleryVerticalImages({ slice }: GalleryProps) {
  const { variation, slice_type, primary } = slice;
  const { photo1, photo2, description1, description2 } = primary;

  return (
    <section
      className="flex w-full gap-2 xs:gap-3 xl:gap-4"
      data-slice-type={slice_type}
      data-slice-variation={variation}
    >
      <figure className="w-full">
        <PrismicNextImage
          className="w-full bg-sage"
          field={photo1}
          imgixParams={{ q: 50 }}
        />
        <figcaption className="mb-4 mt-1 text-sm tracking-tighter">
          {description1}
        </figcaption>
      </figure>

      <figure className="w-full">
        <PrismicNextImage
          className="w-full bg-sage"
          field={photo2}
          imgixParams={{ q: 50 }}
        />
        <figcaption className="mb-4 mt-1 text-sm tracking-tighter">
          {description2}
        </figcaption>
      </figure>
    </section>
  );
}
