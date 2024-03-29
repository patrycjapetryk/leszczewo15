import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import { Content } from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

import ArticlesWrapper from '@/components/ArticlesWrapper';
import GalleryWrapper from '@/components/GalleryWrapper';
import Article from '@/components/Article';

export type Params = { uid: string };
export type PageProps = Content.PageDocument & {
  data: {
    gallery: {
      uid: Pick<Content.GalleryDocument, 'uid'>;
    };
  };
};

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID<PageProps>('page', params.uid)
    .catch(() => notFound());

  const { description, slices, teaser } = page.data;

  const galleryUid = page.data.gallery.uid as string;
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

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType('page', {
    predicates: [prismic.filter.not('my.page.uid', 'home')],
  });

  return pages.map((page) => {
    return { uid: page.uid };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID('page', params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || '',
        },
      ],
    },
  };
}
