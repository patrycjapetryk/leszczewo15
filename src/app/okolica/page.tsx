import { Metadata } from 'next';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
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
          Zobacz na mapie
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
  const home = await client.getByUID('page', 'home');

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image.url || '',
        },
      ],
    },
  };
}