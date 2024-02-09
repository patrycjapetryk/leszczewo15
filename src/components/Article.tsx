'use client';

import { useEffect, useState } from 'react';
import { KeyTextField, RichTextField } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

export type TextProps = {
  description: RichTextField;
  teaser: KeyTextField;
};

export default function Article({ description, teaser }: TextProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>();
  const [showTeaser, setShowTeaser] = useState<boolean>();

  useEffect(() => {
    setIsLoaded(true);

    if (window.innerWidth >= 1280) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setShowTeaser(true);
    }

    function handleResize() {
      if (window.innerWidth >= 1280) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleReadMoreClick = () => {
    setShowTeaser((showTeaser) => !showTeaser);
  };

  if (isLoaded && isMobile && showTeaser) {
    return (
      <p className="flex flex-col gap-3">
        <span>{`${teaser}..`}</span>
        <span className="block cursor-pointer" onClick={handleReadMoreClick}>
          Czytaj więcej
        </span>
      </p>
    );
  } else if (isLoaded && isMobile && !showTeaser) {
    return (
      <div className="flex flex-col gap-3">
        <PrismicRichText
          field={description}
          components={{
            paragraph: ({ children }) => <p>{children}</p>,
          }}
        />
        <span className="block cursor-pointer" onClick={handleReadMoreClick}>
          Czytaj mniej
        </span>
      </div>
    );
  } else if (isLoaded) {
    return (
      <PrismicRichText
        field={description}
        components={{
          paragraph: ({ children }) => <p>{children}</p>,
        }}
      />
    );
  } else {
    return '';
  }
}
