'use client';

import { useState, useEffect, useRef, FC, ReactNode, useCallback, Fragment } from 'react';

type InfiniteScrollPropsType = {
  children: ReactNode[];
};

export const InfiniteScroll: FC<InfiniteScrollPropsType> = ({ children }) => {
  const [visibleItems, setVisibleItems] = useState(1);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    if (loaderRef.current) {
      const { bottom } = loaderRef.current.getBoundingClientRect();
      if (bottom <= window.innerHeight) {
        setVisibleItems((prev) => Math.min(prev + 1, children.length));
      }
    }
  }, [children.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {children.slice(0, visibleItems).map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
      <div ref={loaderRef} />
    </>
  );
};
