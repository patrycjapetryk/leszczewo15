'use client';

import { useEffect, useState } from 'react';
import { KeyTextField, RichTextField } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

export type TextProps = {
  description: RichTextField;
  teaser: KeyTextField;
};

export default function Article({ description, teaser }: TextProps) {
  const [isMobile, setIsMobile] = useState(true);
  const [showTeaser, setShowTeaser] = useState(true);

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
        <span>{`${teaser}..`}</span>
        <span className="block cursor-pointer" onClick={handleReadMoreClick}>
          Czytaj więcej
        </span>
      </p>
    );
  } else if (!showTeaser && isMobile) {
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
  } else {
    return (
      <PrismicRichText
        field={description}
        components={{
          paragraph: ({ children }) => <p>{children}</p>,
        }}
      />
    );
  }
}
