import { useState, useEffect } from 'react';
import { Menu, X, Zap, CircuitBoard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ThemeToggle from './ThemeToggle';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();

  // Handle scroll event to change header styling and track active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Find which section is currently in view
      const sections = navItems.map(item => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 px-6 md:px-10",
        isScrolled 
          ? "py-3 bg-black/80 backdrop-blur-lg shadow-neon-sm border-b border-theme-yellow/20"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold relative group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text-yellow text-3xl font-extrabold relative z-10 neon-glow tracking-wider">
            Ahmed
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-theme-yellow/60 rounded-full transform transition-all duration-300 group-hover:h-1"></span>
          </span>
          
          {/* Enhanced futuristic elements */}
          <div className="absolute -inset-1 rounded-md border border-theme-yellow/30 -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute -inset-2 bg-theme-yellow/5 rounded-lg blur-md -z-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <CircuitBoard className="absolute -right-6 -bottom-2 h-4 w-4 text-theme-yellow animate-pulse" />
          <span className="absolute -right-1 top-0 h-2 w-2 bg-theme-yellow rounded-full animate-ping opacity-70"></span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.ul 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <a 
                  href={item.href}
                  className={cn(
                    "font-medium relative transition-colors",
                    activeSection === item.href.substring(1) 
                      ? "text-theme-yellow" 
                      : "text-theme-white hover:text-theme-yellow"
                  )}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-theme-yellow shadow-neon-sm rounded-full"
                      layoutId="underline"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="/Ahmed_Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                className="border-theme-yellow/50 text-theme-yellow hover:bg-theme-yellow/10 hover:border-theme-yellow shadow-neon-sm hover:shadow-neon-md transition-all"
              >
                Resume
              </Button>
            </a>
            <ThemeToggle />
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="md:hidden text-theme-yellow border border-theme-yellow/20 hover:bg-theme-yellow/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <motion.div 
          className={cn(
            "fixed inset-0 bg-black/95 backdrop-blur-md z-40 pt-20 pb-6 px-6 transform transition-transform duration-300 ease-in-out tech-pattern",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          initial={false}
          animate={mobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Add close button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 p-2 text-theme-yellow hover:bg-theme-yellow/10 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="absolute inset-0 circuit-overlay opacity-20"></div>
          
          <nav className="flex flex-col h-full relative z-10">
            <ul className="flex flex-col space-y-6 text-center">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <a 
                    href={item.href} 
                    onClick={closeMobileMenu}
                    className={cn(
                      "text-xl font-medium transition-colors block py-2 relative group",
                      activeSection === item.href.substring(1) ? "text-theme-yellow neon-glow" : "text-theme-white hover:text-theme-yellow"
                    )}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-theme-yellow group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <a 
                  href="/Ahmed_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-2 mt-6"
                  onClick={closeMobileMenu}
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-theme-yellow text-theme-yellow hover:bg-theme-yellow/10 shadow-neon-sm"
                  >
                    Resume
                  </Button>
                </a>
              </motion.li>
            </ul>
            
            <motion.div 
              className="mt-auto flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={mobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <a href="https://github.com" className="text-theme-white hover:text-theme-yellow transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-theme-white hover:text-theme-yellow transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-theme-white hover:text-theme-yellow transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1 1 0 100-2 1 1 0 000 2zm7 7h-2v-4c0-.6-.4-1-1-1s-1 .4-1 1v4h-2v-6h2v1.39c.36-.63 1.26-.78 1.8-.78 1.54 0 2.2 1.31 2.2 3v2.39z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
