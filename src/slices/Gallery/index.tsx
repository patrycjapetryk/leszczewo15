import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import GalleryVerticalImages from '@/components/GalleryVerticalImages';
import GalleryVerticalVideo from '@/components/GalleryVerticalVideo';
import GalleryHorizontalImage from '@/components/GalleryHorizontalImage';
import GalleryHorizontalVideo from '@/components/GalleryHorizontalVideo';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default function Gallery({
  slice,
  index,
  slices,
  context,
}: GalleryProps) {
  const { variation } = slice;

  if (variation === 'vertical') {
    return (
      <GalleryVerticalImages
        slice={slice}
        index={index}
        slices={slices}
        context={context}
      />
    );
  } else if (variation === 'verticalVideo') {
    return (
      <GalleryVerticalVideo
        slice={slice}
        index={index}
        slices={slices}
        context={context}
      />
    );
  } else if (variation === 'video') {
    return (
      <GalleryHorizontalVideo
        slice={slice}
        index={index}
        slices={slices}
        context={context}
      />
    );
  } else if (variation === 'default') {
    return (
      <GalleryHorizontalImage
        slice={slice}
        index={index}
        slices={slices}
        context={context}
      />
    );
  }
}
