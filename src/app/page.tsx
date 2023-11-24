import { Metadata } from 'next';

import { PrismicRichText, SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import { Content } from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function Index() {
  const client = createClient();
  const home = await client.getByUID<
    Content.PageDocument & {
      data: {
        gallery: {
          uid: Pick<Content.GalleryDocument, 'uid'>;
        };
      };
    }
  >('page', 'home');

  const { description, slices } = home.data;

  const galleryUid = home.data.gallery.uid as string;
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
