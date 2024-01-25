'use client';

import { useEffect, useState } from 'react';
import { Content } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';
import { Simplify } from '../../prismicio-types';
import { components } from '@/slices';

export type SlicesProps = {
  data: Simplify<Content.PlacesDocumentData>;
};

export default function Places({ data }: SlicesProps) {
  const [isMobile, setIsMobile] = useState(true);
  const [showTeaser, setShowTeaser] = useState(true);

  const slices = data.slices;

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setIsMobile(false);
        setShowTeaser(false);
      } else {
        setIsMobile(true);
        setShowTeaser(true);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleReadMoreClick = () => {
    setShowTeaser((showTeaser) => !showTeaser);
  };

  if (showTeaser && isMobile) {
    return (
      <p className="flex flex-col gap-3">
        <span className="block cursor-pointer" onClick={handleReadMoreClick}>
          Czytaj więcej
        </span>
      </p>
    );
  } else if (!showTeaser && isMobile) {
    return (
      <div className="flex flex-col gap-3">
        <SliceZone slices={slices} components={components} />
        <span className="block cursor-pointer" onClick={handleReadMoreClick}>
          Czytaj mniej
        </span>
      </div>
    );
  } else {
    return <SliceZone slices={slices} components={components} />;
  }
}
