
import { ArrowDown, Sparkles, Circuit, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypingEffect from './TypingEffect';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const { ref: subtitleRef, isVisible: isSubtitleVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const { ref: ctaRef, isVisible: isCtaVisible } = useScrollAnimation({
    threshold: 0.1,
  });
  
  const isMobile = useIsMobile();

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-20 px-4 sm:px-6 md:px-10 relative overflow-hidden"
    >
      {/* Futuristic background with tech grid pattern */}
      <div className="absolute inset-0 bg-black z-[-2]"></div>
      <div className="absolute inset-0 tech-pattern z-[-1] opacity-30"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] right-[20%] w-32 h-32 bg-theme-yellow/5 rounded-full blur-3xl animate-pulse-yellow"></div>
        <div className="absolute bottom-[15%] left-[10%] w-40 h-40 bg-theme-yellow/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Circuit board lines */}
        <div className="absolute inset-0 circuit-overlay"></div>
        
        {/* Geometric elements */}
        <motion.div 
          className="absolute top-20 right-10 w-16 h-32 border-2 border-theme-yellow/20"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-24 h-24 border-2 border-theme-yellow/10 rounded-full"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-3"
          >
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl font-medium text-theme-white flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="relative inline-flex">
                <Cpu className="h-5 w-5 text-theme-yellow animate-pulse" />
                <span className="absolute inset-0 rounded-full animate-ping bg-theme-yellow/30 duration-1000"></span>
              </span>
              Hi, my name is
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold gradient-text-yellow pb-2 neon-glow"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Ahmed.
            </motion.h1>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-5xl font-medium text-theme-white"
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
            className="max-w-xl text-base sm:text-lg md:text-xl text-theme-white/90"
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
            <a href="#projects" className="w-full sm:w-auto group">
              <Button 
                size={isMobile ? "default" : "lg"}
                className="w-full sm:w-auto px-6 sm:px-8 py-6 sm:py-6 bg-theme-yellow text-theme-black hover:bg-theme-yellow/90 transform transition-all duration-300 hover:-translate-y-1 shadow-neon-sm hover:shadow-neon-md group-hover:animate-pulse-yellow font-semibold text-base relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-theme-yellow via-white to-theme-yellow opacity-0 group-hover:opacity-20 transition-opacity"></span>
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto group">
              <Button 
                variant="outline" 
                size={isMobile ? "default" : "lg"}
                className="w-full sm:w-auto px-6 sm:px-8 py-6 sm:py-6 border-theme-yellow text-theme-yellow hover:border-theme-yellow hover:bg-theme-yellow/10 transform transition-all duration-300 hover:-translate-y-1 font-semibold text-base relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-theme-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
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
        <span className="text-sm mb-2 text-theme-white">Scroll</span>
        <ArrowDown className="w-5 h-5 text-theme-yellow animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
