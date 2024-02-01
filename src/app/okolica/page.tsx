import { Metadata } from 'next';

import { SliceZone } from '@prismicio/react';
import { Content } from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

import ArticlesWrapper from '@/components/ArticlesWrapper';
import GalleryWrapper from '@/components/GalleryWrapper';
import Places from '@/components/Places';
import Link from 'next/link';

export type PlacesProps = Content.PlacesDocument & {
  data: {
    gallery: {
      uid: Pick<Content.GalleryDocument, 'uid'>;
    };
  };
};

export default async function Index() {
  const client = createClient();
  const places = await client.getSingle<PlacesProps>('places');

  const { description } = places.data;

  const galleryUid = places.data.gallery.uid as string;
  const gallery = await client.getByUID('gallery', galleryUid);

  return (
    <main className="w-full xl:flex xl:justify-end">
      <ArticlesWrapper>
        <p className="mb-6">{description}</p>
        <Link className="mb-6 block" href="/mapa/okolica">
          Znajdź na mapie
        </Link>
        <Places data={places.data} />
      </ArticlesWrapper>

      <GalleryWrapper>
        <SliceZone slices={gallery.data.slices} components={components} />
      </GalleryWrapper>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const places = await client.getSingle<PlacesProps>('places');

  return {
    title: places.data.meta_title,
    description: places.data.meta_description,
    openGraph: {
      title: places.data.meta_title || undefined,
      images: [
        {
          url: places.data.meta_image.url || '',
        },
      ],
    },
  };
}
