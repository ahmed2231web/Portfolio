
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const FuturisticCursor = () => {
  const [isClicking, setIsClicking] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  
  // Use motion values for better performance
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Add spring physics for smoother movement
  const springConfig = { damping: 25, stiffness: 300 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  
  // Add an optimization for render cycles
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  
  // Reduce event handling frequency with throttling
  const throttledUpdate = useRef<{x: number, y: number}>({x: 0, y: 0});
  const throttleDelay = useRef<NodeJS.Timeout | null>(null);
  
  // Handle mouse events
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Store latest position
      throttledUpdate.current = { x: e.clientX, y: e.clientY };
      
      // Only apply direct updates if no throttle is in progress
      if (!throttleDelay.current) {
        throttleDelay.current = setTimeout(() => {
          cursorX.set(throttledUpdate.current.x);
          cursorY.set(throttledUpdate.current.y);
          throttleDelay.current = null;
        }, 5); // 5ms throttle for smoother performance
      }
      
      // Check if cursor is over a clickable element (less frequently)
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null || 
        target.closest('a, button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Hide the default cursor
    document.body.style.cursor = 'none';
    
    // Add hover/clickable effects to interactive elements
    const style = document.createElement('style');
    style.innerHTML = `
      a, button, [role="button"], [class*="btn"], input[type="submit"], input[type="button"] {
        cursor: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
      
      // Clean up any pending timeouts
      if (throttleDelay.current) {
        clearTimeout(throttleDelay.current);
      }
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [cursorX, cursorY]);
  
  return (
    <div className="pointer-events-none fixed inset-0 z-50" style={{ overflow: 'hidden' }}>
      {/* Main cursor */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: isPointer ? 'rgba(253, 238, 48, 1)' : 'white',
          mixBlendMode: 'difference',
          x: useTransform(smoothX, (x) => x - 6),
          y: useTransform(smoothY, (y) => y - 6)
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          opacity: isPointer ? 0.8 : 1
        }}
        transition={{
          type: "spring",
          duration: 0.3,
          mass: 0.3
        }}
      />
      
      {/* Outer ring - simplified to improve performance */}
      <motion.div
        className="absolute rounded-full pointer-events-none border-2"
        style={{
          width: '40px',
          height: '40px',
          x: useTransform(smoothX, (x) => x - 20),
          y: useTransform(smoothY, (y) => y - 20),
          borderColor: isPointer ? 'rgba(253, 238, 48, 0.8)' : 'rgba(255, 255, 255, 0.8)'
        }}
        animate={{
          scale: isClicking ? 0.5 : isPointer ? 1.2 : 1,
          opacity: isPointer ? 0.7 : 0.4
        }}
        transition={{
          type: "spring",
          duration: 0.4,
          mass: 0.4
        }}
      />
      
      {/* Inner particles - only shown when clicking */}
      {isClicking && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-theme-yellow"
              initial={{ 
                x: smoothX.get(), 
                y: smoothY.get(),
                scale: 0.2,
                opacity: 0.8 
              }}
              animate={{ 
                x: smoothX.get() + (Math.random() * 60 - 30), 
                y: smoothY.get() + (Math.random() * 60 - 30),
                scale: 0,
                opacity: 0 
              }}
              transition={{ duration: 0.6 + Math.random() * 0.2 }}
              style={{
                width: '6px',
                height: '6px',
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default FuturisticCursor;
