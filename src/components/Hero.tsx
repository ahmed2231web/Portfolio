
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypingEffect from './TypingEffect';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const Hero = () => {
  const { ref: subtitleRef, isVisible: isSubtitleVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const { ref: ctaRef, isVisible: isCtaVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Updated background with more vibrant gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme-teal/50 via-theme-charcoal/30 to-theme-teal/40 -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] -z-10"></div>
      
      {/* Simplified geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-transparent border-4 border-theme-teal/40 transform rotate-45 -z-5"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-transparent border-4 border-theme-teal/30 rounded-md transform -rotate-12 -z-5"></div>
      
      <div className="max-w-7xl mx-auto w-full relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-8 md:space-y-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-3"
          >
            <motion.div 
              className="text-xl md:text-2xl font-medium text-white flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="relative inline-flex">
                <Sparkles className="h-5 w-5 text-white animate-pulse" />
                <span className="absolute inset-0 rounded-full animate-ping bg-white/20 duration-1000"></span>
              </span>
              Hi, my name is
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white drop-shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Ahmed.
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-5xl font-medium text-white"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              I <TypingEffect texts={[
                "build for the web.",
                "create user experiences.",
                "solve complex problems.",
                "turn ideas into reality."
              ]} />
            </motion.h2>
          </motion.div>

          <motion.div 
            ref={subtitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isSubtitleVisible ? 1 : 0, y: isSubtitleVisible ? 0 : 30 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="max-w-xl text-lg md:text-xl text-white/80"
          >
            I'm a passionate full-stack developer focused on creating exceptional digital experiences. 
            Currently, I specialize in building responsive, accessible, and high-performance web applications
            that solve real-world problems.
          </motion.div>

          <motion.div 
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isCtaVisible ? 1 : 0, y: isCtaVisible ? 0 : 30 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects">
              <Button 
                size="lg" 
                className="px-8 bg-theme-teal text-theme-charcoal hover:bg-theme-teal/90 transform transition-all duration-300 hover:-translate-y-1 shadow-md"
              >
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/60 text-white hover:border-white hover:bg-white/10 transform transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                Get In Touch
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.8, 
          duration: 0.8, 
          repeat: Infinity, 
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <span className="text-sm mb-2 text-white/70">Scroll</span>
        <ArrowDown className="w-5 h-5 text-white animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
