
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const FuturisticCursor = () => {
  const [isClicking, setIsClicking] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // More aggressive spring settings for smoother movement
  const springConfig = { damping: 15, stiffness: 150, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Use RAF for smoother updates
  useEffect(() => {
    let rafId: number;
    
    const updateCursor = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        
        // Check for clickable elements
        const target = e.target as HTMLElement;
        setIsPointer(
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.onclick !== null || 
          target.closest('a, button') !== null ||
          window.getComputedStyle(target).cursor === 'pointer'
        );
      });
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    window.addEventListener('mousemove', updateCursor, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    document.body.style.cursor = 'none';
    
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: isPointer ? 'rgba(253, 238, 48, 0.8)' : 'white',
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.8 : 1
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 }
        }}
      />
      
      <motion.div
        className="absolute rounded-full border-2"
        style={{
          width: '40px',
          height: '40px',
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: isPointer ? 'rgba(253, 238, 48, 0.5)' : 'rgba(255, 255, 255, 0.5)'
        }}
        animate={{
          scale: isClicking ? 0.5 : isPointer ? 1.2 : 1
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 }
        }}
      />
    </div>
  );
};

export default FuturisticCursor;
