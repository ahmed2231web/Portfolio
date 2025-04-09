
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

  // Enhanced animated particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 15 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.5 + 0.2
  }));

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Enhanced futuristic background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10"></div>
      
      {/* Enhanced animated particles with varying sizes and animation speeds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-5">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-primary rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              opacity: particle.opacity
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
              scale: [1, Math.random() * 0.5 + 1, 1]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced glowing circles with more vibrant colors */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      
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
              className="text-xl md:text-2xl font-medium text-primary flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="relative inline-flex">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 duration-1000"></span>
              </span>
              Hi, my name is
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-glow"
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
              <Button 
                size="lg" 
                className="px-8 bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transform transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </a>
            <a href="#contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 hover:border-primary transform transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md relative overflow-hidden group"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Enhanced custom shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-primary/5 fill-current">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
          </svg>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with more vibrant animation */}
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
        <span className="text-sm mb-2 text-muted-foreground">Scroll</span>
        <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
