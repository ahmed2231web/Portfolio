
import { Moon, Sun, Sparkle, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleTheme}
      className="w-12 h-12 rounded-full relative overflow-hidden bg-theme-tiffany/20 border border-theme-pink/20 shadow-md hover:shadow-lg transition-all"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: '800px' }}
      >
        {theme === 'light' ? (
          <div className="relative transform-gpu transition-all hover:scale-110">
            <Sun className="h-6 w-6 text-theme-pink drop-shadow-[0_0_8px_rgba(247,86,124,0.5)] transform-gpu transition-transform hover:rotate-12" />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="absolute -inset-3 rounded-full border-2 border-theme-pink/20"
            />
            <motion.div
              initial={{ opacity: 0, x: -15, y: -15 }}
              animate={{ opacity: [0, 1, 0], x: [-15, -5, 5], y: [-15, -10, -20] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="absolute -top-1 -right-3"
            >
              <Star className="h-3 w-3 text-theme-pink fill-theme-pink" strokeWidth={1} />
            </motion.div>
          </div>
        ) : (
          <div className="relative transform-gpu transition-all hover:scale-110">
            <Moon className="h-6 w-6 text-theme-tiffany drop-shadow-[0_0_8px_rgba(153,225,217,0.5)] transform-gpu transition-transform hover:rotate-12" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              className="absolute -top-1 -right-1"
            >
              <Sparkle className="h-3 w-3 text-theme-tiffany fill-theme-tiffany" strokeWidth={1} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 }}
              className="absolute -bottom-1 -left-2"
            >
              <Star className="h-2 w-2 text-theme-tiffany" strokeWidth={1} />
            </motion.div>
          </div>
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
