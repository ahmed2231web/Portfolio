import { useEffect } from 'react';

/**
 * Component to prefetch critical resources for better performance
 * This helps reduce network requests during navigation and improves LCP
 */
const ResourcePrefetcher = () => {
  useEffect(() => {
    // Function to prefetch images
    const prefetchImage = (url: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    };

    // Function to preconnect to critical domains
    const preconnect = (url: string) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Critical images to prefetch (add your important ones here)
    const criticalImages = [
      '/lovable-uploads/7d370591-d37b-4ad2-9719-1faaa766c3d6.png',
      // Add other critical images here
    ];

    // Domains to preconnect to
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.jsdelivr.net'
    ];

    // Preconnect to important domains
    domains.forEach(preconnect);

    // Use requestIdleCallback for non-critical prefetching
    if ('requestIdleCallback' in window) {
      // @ts-ignore - TypeScript doesn't have good types for this API
      window.requestIdleCallback(() => {
        criticalImages.forEach(prefetchImage);
      });
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => {
        criticalImages.forEach(prefetchImage);
      }, 1000);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ResourcePrefetcher;
