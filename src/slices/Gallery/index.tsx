import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default async function Gallery({ slice }: GalleryProps) {
  const { variation, slice_type, primary } = slice;

  if (variation === 'vertical') {
    const { photo1, photo2, description1, description2 } = primary;

    return (
      <section data-slice-type={slice_type} data-slice-variation={variation}>
        <figure>
          <PrismicNextImage field={photo1} imgixParams={{ q: 80 }} />
          <figcaption>{description1}</figcaption>
        </figure>
        <figure>
          <PrismicNextImage field={photo2} imgixParams={{ q: 80 }} />
          <figcaption>{description2}</figcaption>
        </figure>
      </section>
    );
  } else if (variation === 'default') {
    const { photo, description } = primary;

    return (
      <section data-slice-type={slice_type} data-slice-variation={variation}>
        <figure>
          <PrismicNextImage field={photo} imgixParams={{ q: 80 }} />
          <figcaption>{description}</figcaption>
        </figure>
      </section>
    );
  }
}
