import { useState, useEffect, ReactNode, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection';

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
  skipLazyLoad?: boolean;
  onVisible?: () => void;
}

export function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = '100px 0px',
  placeholder,
  skipLazyLoad = false,
  onVisible
}: LazyLoadProps) {
  const [shouldRender, setShouldRender] = useState(skipLazyLoad);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { isIntersecting } = useIntersectionObserver(containerRef, {
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  });

  useEffect(() => {
    if (isIntersecting && !shouldRender) {
      setShouldRender(true);
      onVisible?.();
    }
  }, [isIntersecting, shouldRender, onVisible]);

  return (
    <div ref={containerRef}>
      {shouldRender ? children : placeholder || <div className="animate-pulse bg-gray-200 w-full h-40 rounded-lg"></div>}
    </div>
  );
}