import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PrismicRichText, SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import { Content } from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID<
      Content.PageDocument & {
        data: {
          gallery: {
            uid: Pick<Content.GalleryDocument, 'uid'>;
          };
        };
      }
    >('page', params.uid)
    .catch(() => notFound());

  const { description, slices } = page.data;

  const galleryUid = page.data.gallery.uid as string;
  const gallery = await client.getByUID('gallery', galleryUid);

  return (
    <main>
      <section>
        <PrismicRichText
          field={description}
          components={{
            paragraph: ({ children }) => <p className='text-m'>{children}</p>,
          }}
        />
        <SliceZone slices={slices} components={components} />
      </section>

      <section>
        <SliceZone slices={gallery.data.slices} components={components} />
      </section>
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

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID('page', params.uid).catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
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
