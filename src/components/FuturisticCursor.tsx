
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FuturisticCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the cursor is over a clickable element
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

    window.addEventListener('mousemove', updateMousePosition);
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
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50" style={{ overflow: 'hidden' }}>
      {/* Main cursor */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isClicking ? 0.8 : 1,
          opacity: isPointer ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: isPointer ? 'rgba(253, 238, 48, 1)' : 'white',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Outer ring */}
      <motion.div
        className="absolute rounded-full pointer-events-none border-[1.5px]"
        animate={{
          x: position.x - 20, 
          y: position.y - 20,
          scale: isClicking ? 0.5 : isPointer ? 1.2 : 1,
          opacity: isPointer ? 0.7 : 0.4,
          borderColor: isPointer ? 'rgba(253, 238, 48, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
          mass: 0.8,
          delay: 0.02,
        }}
        style={{
          width: '40px',
          height: '40px',
        }}
      />
      
      {/* Inner particles/trails - shown when clicking or hovering interactive elements */}
      {isClicking && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-theme-yellow"
              initial={{ 
                x: position.x, 
                y: position.y,
                scale: 0.2,
                opacity: 0.8 
              }}
              animate={{ 
                x: position.x + (Math.random() * 100 - 50), 
                y: position.y + (Math.random() * 100 - 50),
                scale: 0,
                opacity: 0 
              }}
              transition={{ duration: 0.8 + Math.random() * 0.3 }}
              style={{
                width: '8px',
                height: '8px',
              }}
            />
          ))}
        </>
      )}
      
      {/* Floating elements that follow with delay when hovering interactive elements */}
      {isPointer && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`follow-${i}`}
              className="absolute rounded-full"
              animate={{
                x: position.x - 3,
                y: position.y - 3,
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                x: {
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  delay: 0.05 * (i + 1),
                },
                y: {
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  delay: 0.05 * (i + 1),
                },
                opacity: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.2 * i,
                },
              }}
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: 'rgba(253, 238, 48, ' + (0.6 - i * 0.15) + ')',
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default FuturisticCursor;
