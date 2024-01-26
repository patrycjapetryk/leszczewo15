import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Content } from '@prismicio/client';
import { createClient } from '@/prismicio';

import ArticlesWrapper from '@/components/ArticlesWrapper';
import MapWrapper from '@/components/MapWrapper';
import Places from '@/components/Places';
import { PrismicRichText } from '@prismicio/react';

export type Params = { uid: string };
export type MapProps = Content.MapDocument;
export type PlacesProps = Content.PlacesDocument;

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID<MapProps>('map', params.uid)
    .catch(() => notFound());

  const { map, description } = page.data;

  const places = await client.getSingle<PlacesProps>('places');

  return (
    <main className="w-full xl:flex xl:justify-end">
      <ArticlesWrapper>
        <PrismicRichText
          field={description}
          components={{
            paragraph: ({ children }) => <p>{children}</p>,
          }}
        />
        {params.uid === 'okolica' && <Places data={places.data} />}
      </ArticlesWrapper>

      <MapWrapper>
        <div
          className="h-full w-full"
          dangerouslySetInnerHTML={map ? { __html: map } : { __html: '' }}
        />
      </MapWrapper>
    </main>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType('map');

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
  const page = await client.getByUID('map', params.uid).catch(() => notFound());

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
