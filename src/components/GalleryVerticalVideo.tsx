'use client';

import { useEffect, useState } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export type GalleryProps = SliceComponentProps<Content.GallerySlice> & {
  slice: {
    slice_type: 'gallery';
    slice_label: null;
    id: string;
  } & Content.GallerySliceVerticalVideo;
};

export default function GalleryVerticalVideo({ slice }: GalleryProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { variation, slice_type, primary } = slice;
  const { photo, video, description1, description2, left_video } = primary;

  return (
    <section
      className={`flex w-full gap-2 xs:gap-3  xl:gap-4 ${left_video ? 'flex-row-reverse' : 'flex-row'}`}
      data-slice-type={slice_type}
      data-slice-variation={variation}
    >
      <figure className="w-full">
        <PrismicNextImage
          className="w-full bg-sage"
          field={photo}
          imgixParams={{ q: 50 }}
        />
        <figcaption className="mb-4 mt-1 text-sm tracking-tighter">
          {description1}
        </figcaption>
      </figure>

      <figure className="w-full">
        <div className="relative w-full overflow-hidden bg-sage pt-[128.89%]">
          {isMounted && video && (
            <iframe
              src={`https://player.vimeo.com/video/${video}?background=1`}
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute left-[-0.5%] top-0 h-[101%] w-[101%]"
            />
          )}
        </div>

        <figcaption className="mb-4 mt-1 text-sm tracking-tighter">
          {description2}
        </figcaption>
      </figure>
    </section>
  );
}
