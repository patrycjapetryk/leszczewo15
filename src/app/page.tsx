import { Metadata } from 'next';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import { Content } from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

import ArticlesWrapper from '@/components/ArticlesWrapper';
import GalleryWrapper from '@/components/GalleryWrapper';
import Article from '@/components/Article';

export type PageProps = Content.PageDocument & {
  data: {
    gallery: {
      uid: Pick<Content.GalleryDocument, 'uid'>;
    };
  };
};

export default async function Index() {
  const client = createClient();
  const home = await client.getByUID<PageProps>('page', 'home');

  const { description, slices, teaser } = home.data;

  const galleryUid = home.data.gallery.uid as string;
  const gallery = await client.getByUID('gallery', galleryUid);

  return (
    <main className="w-full xl:flex xl:justify-end">
      <ArticlesWrapper>
        <Article description={description} teaser={teaser} />
        <SliceZone slices={slices} components={components} />
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
    title: home.data.meta_title,
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
