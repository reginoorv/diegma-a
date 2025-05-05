import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
  placeholder?: string; // URL for the placeholder image
  blurEffect?: boolean;
  onLoad?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  objectFit = 'cover',
  priority = false,
  placeholder = '',
  blurEffect = false,
  onLoad,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(placeholder || src);
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg'>('lg');

  // Handle screen size detection for responsive images
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('sm');
      } else if (width < 1024) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle image loading and placeholder
  useEffect(() => {
    // Skip for priority images or already loaded images
    if (priority || isLoaded) return;

    // Create a new image to preload
    const img = new Image();
    
    // Function to run when the source image is loaded
    const onSourceLoaded = () => {
      setImgSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };

    // Load the image
    img.onload = onSourceLoaded;
    img.src = src;

    // Cleanup
    return () => {
      img.onload = null;
    };
  }, [src, priority, isLoaded, onLoad]);

  // Optimize image URL based on screenSize
  const optimizedSrc = (url: string) => {
    if (!url || !url.startsWith('http')) return url;
    
    // Only optimize for remote images (e.g., Unsplash)
    try {
      const parsedUrl = new URL(url);
      
      // Handle Unsplash images
      if (parsedUrl.hostname === 'images.unsplash.com') {
        const widthParam = width ? `&w=${width}` : '';
        const qualityParam = '&q=80'; // Good balance between quality and file size
        const formatParam = '&fm=webp'; // Modern format with good compression
        
        // Add responsive sizing based on screen size
        let responsiveWidth = '';
        if (!width) {
          if (screenSize === 'sm') {
            responsiveWidth = '&w=640';
          } else if (screenSize === 'md') {
            responsiveWidth = '&w=1024';
          } else {
            responsiveWidth = '&w=1920';
          }
        }

        // Build optimized URL with parameters
        if (url.includes('?')) {
          return `${url}${widthParam || responsiveWidth}${qualityParam}${formatParam}`;
        } else {
          return `${url}?${widthParam || responsiveWidth.substring(1)}${qualityParam}${formatParam}`;
        }
      }
    } catch (e) {
      // If URL parsing fails, return original URL
      console.warn('Failed to optimize image URL:', url);
    }
    
    return url;
  };

  return (
    <div 
      className={cn(
        "overflow-hidden relative",
        className
      )}
      style={{ 
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto'
      }}
    >
      <img
        src={optimizedSrc(imgSrc)}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : loading}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'transition-opacity duration-500',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          objectFit === 'none' && 'object-none',
          objectFit === 'scale-down' && 'object-scale-down',
          !isLoaded && blurEffect ? 'opacity-0' : 'opacity-100',
          'w-full h-full'
        )}
      />
      
      {/* Blur placeholder - only shown while image is loading */}
      {!isLoaded && blurEffect && placeholder && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-md opacity-50 transition-opacity duration-500"
          aria-hidden="true"
        />
      )}
    </div>
  );
}