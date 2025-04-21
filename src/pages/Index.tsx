import { useCallback, useEffect, useState, memo, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

// Lazy load non-critical components
const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));
const Projects = lazy(() => import('@/components/Projects'));
const Skills = lazy(() => import('@/components/Skills'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading fallback component for lazy-loaded sections
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[300px]">
    <div className="w-8 h-8 border-4 border-theme-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Index = memo(() => {
  const [isReady, setIsReady] = useState(false);
  
  // Memoize scroll handler for better performance
  const handleScroll = useCallback(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }, []);
  
  useEffect(() => {
    // Set a small delay to ensure all resources are loaded
    const readyTimer = setTimeout(() => setIsReady(true), 100);
    
    // Add scroll event with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    // Implement intersection observer for better performance than scroll events
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Optional: remove active class when not in view
          // entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      clearTimeout(readyTimer);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [handleScroll]);
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Header />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <motion.div variants={sectionVariants}>
            <Hero />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <About />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <Projects />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <Skills />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <Contact />
          </motion.div>
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </motion.div>
  );
});

export default Index;
