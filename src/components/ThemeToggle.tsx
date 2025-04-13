
import { Zap, Star, Sparkles, CircuitBoard } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  // Since we're only using dark mode, we'll set it on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Create a decorative button that shows a futuristic animation on click
  const handleClick = () => {
    // Just trigger the animation without changing theme
    const button = document.getElementById('theme-button');
    if (button) {
      button.classList.remove('animate-pulse-yellow');
      setTimeout(() => {
        button.classList.add('animate-pulse-yellow');
      }, 10);
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon"
      id="theme-button"
      onClick={handleClick}
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full relative overflow-hidden border border-theme-yellow/20 shadow-neon-sm hover:shadow-neon-md transition-all"
      aria-label="Theme button"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
        <div className="relative transform-gpu transition-all hover:scale-110">
          <CircuitBoard className="h-5 w-5 sm:h-6 sm:w-6 text-theme-yellow transform-gpu transition-transform hover:rotate-12" />
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="absolute -inset-3 rounded-full border border-theme-yellow/30"
          />
          
          <motion.div
            initial={{ opacity: 0, x: -15, y: -15 }}
            animate={{ opacity: [0, 1, 0], x: [-15, -5, 5], y: [-15, -10, -20] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="absolute -top-1 -right-3"
          >
            <Star className="h-2 w-2 sm:h-3 sm:w-3 text-theme-yellow" strokeWidth={1} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            className="absolute -top-1 -left-1"
          >
            <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 text-theme-yellow" strokeWidth={1} />
          </motion.div>
        </div>
      </motion.div>
      <span className="sr-only">Theme button</span>
    </Button>
  );
};

export default ThemeToggle;
