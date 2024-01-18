import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default async function Gallery({ slice }: GalleryProps) {
  const { variation, slice_type, primary } = slice;

  if (variation === 'vertical') {
    const { photo1, photo2, description1, description2 } = primary;

    return (
      <section
        className="flex w-full gap-2 xs:gap-3 xl:gap-4"
        data-slice-type={slice_type}
        data-slice-variation={variation}
      >
        <figure className="w-full">
          <PrismicNextImage
            className="w-full"
            field={photo1}
            imgixParams={{ q: 80 }}
          />
          <figcaption className="mb-4 mt-1 text-sm tracking-tighter">
            {description1}
          </figcaption>
        </figure>

        <figure className="w-full">
          <PrismicNextImage
            className="w-full"
            field={photo2}
            imgixParams={{ q: 80 }}
          />
          <figcaption className="mb-4 mt-1 text-sm tracking-tighter">
            {description2}
          </figcaption>
        </figure>
      </section>
    );
  } else if (variation === 'default') {
    const { photo, description, priority } = primary;

    return (
      <section data-slice-type={slice_type} data-slice-variation={variation}>
        <figure className="w-full">
          <PrismicNextImage
            className="w-full"
            field={photo}
            imgixParams={{ q: 80 }}
            priority={priority ? true : false}
          />
          <figcaption className="mb-4 mt-1 text-sm tracking-tighter">
            {description}
          </figcaption>
        </figure>
      </section>
    );
  }
}
