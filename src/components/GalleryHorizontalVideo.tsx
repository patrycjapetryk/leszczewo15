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
  } & Content.GallerySliceVideo;
};

export default function GalleryHorizontalVideo({ slice }: GalleryProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { variation, slice_type, primary } = slice;
  const { video, description } = primary;

  return (
    <section
      className="w-full"
      data-slice-type={slice_type}
      data-slice-variation={variation}
    >
      <figure className="w-full">
        <div className="relative w-full overflow-hidden bg-sage pt-[67.5%]">
          {isMounted && video && (
            <iframe
              src={`https://player.vimeo.com/video/${video}?background=1&quality=1080p`}
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute left-[-0.5%] top-0 h-[101%] w-[101%]"
              title="Leszczewo 15 Jezioro Gałęziste"
            />
          )}
        </div>

        <figcaption className="mb-4 mt-1 text-sm tracking-tighter">
          {description}
        </figcaption>
      </figure>
    </section>
  );
}
