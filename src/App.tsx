import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import FuturisticCursor from "./components/FuturisticCursor";
import ResourcePrefetcher from "./components/ResourcePrefetcher";

// Lazy load components to improve initial load time
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Create a persistent query client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes
      gcTime: 10 * 60 * 1000, // Cache data for 10 minutes (formerly cacheTime)
    },
  },
});

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen w-screen bg-theme-dark">
    <div className="animate-pulse text-xl text-theme-primary font-bold">Loading...</div>
  </div>
);

const App = () => {
  // Only show the custom cursor on desktop
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  
  useEffect(() => {
    // More robust device detection
    const isMobile = 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
      window.innerWidth < 768;
    
    setShowCustomCursor(!isMobile);
    
    // Preload critical assets
    const preloadAssets = () => {
      // Add any critical images or resources here
    };
    
    preloadAssets();
    
    // Clean up any event listeners or resources
    return () => {
      // Clean up code here
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ResourcePrefetcher />
        <Toaster />
        <Sonner />
        {showCustomCursor && <FuturisticCursor />}
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
