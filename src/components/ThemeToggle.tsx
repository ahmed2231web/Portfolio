
import { Moon, Sun, Sparkle } from 'lucide-react';
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
      className="w-10 h-10 rounded-full relative overflow-hidden bg-secondary/70 border border-primary/10 shadow-sm"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === 'light' ? (
          <div className="relative">
            <Sun className="h-5 w-5 text-primary icon-3d" />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="absolute -inset-3 rounded-full border-2 border-primary/20"
            />
          </div>
        ) : (
          <div className="relative">
            <Moon className="h-5 w-5 text-primary icon-3d" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              className="absolute -top-1 -right-1"
            >
              <Sparkle className="h-3 w-3 text-accent" />
            </motion.div>
          </div>
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
