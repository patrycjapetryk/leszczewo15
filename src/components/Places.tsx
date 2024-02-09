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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [showTeaser, setShowTeaser] = useState(true);

  const slices = data.slices;

  useEffect(() => {
    setIsLoaded(true);

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

  if (isLoaded && isMobile && showTeaser) {
    return (
      <p className="mt-6 flex flex-col gap-3">
        <span className="block cursor-pointer" onClick={handleReadMoreClick}>
          Czytaj więcej
        </span>
      </p>
    );
  } else if (isLoaded && isMobile && !showTeaser) {
    return (
      <div className="mt-6 flex flex-col gap-3">
        <SliceZone slices={slices} components={components} />
        <span className="block cursor-pointer" onClick={handleReadMoreClick}>
          Czytaj mniej
        </span>
      </div>
    );
  } else if (isLoaded) {
    return (
      <div className="mt-6">
        <SliceZone slices={slices} components={components} />
      </div>
    );
  } else {
    return '';
  }
}
