
import { ArrowDown } from 'lucide-react';
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
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background -z-10"></div>
      
      {/* Animated particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary rounded-full opacity-20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing circles */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
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
            <motion.h2 
              className="text-xl md:text-2xl font-medium text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hi, my name is
            </motion.h2>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Ahmed.
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-5xl font-medium text-muted-foreground"
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
            className="max-w-xl text-lg md:text-xl text-muted-foreground"
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
              <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transform transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg hover:shadow-primary/20">
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary transform transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                Get In Touch
              </Button>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Custom shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-primary/5 fill-current">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
          </svg>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <span className="text-sm mb-2 text-muted-foreground">Scroll</span>
        <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
