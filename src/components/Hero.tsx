import { ArrowDown, Sparkles, CircuitBoard, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypingEffect from './TypingEffect';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Suspense } from 'react';

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
        
        {/* Enhanced futuristic geometric elements */}
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
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-2 bg-theme-yellow/10"
          animate={{
            width: ['8rem', '2rem', '8rem'],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-16 h-16 border border-theme-yellow/20 rounded-full"
          animate={{
            borderWidth: ['1px', '2px', '1px'],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side content */}
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
              className="text-4xl sm:text-5xl md:text-7xl font-bold gradient-text-yellow pb-2 neon-glow-softer-subtle tracking-wider"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Ahmed.
            </motion.h1>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-5xl font-medium text-theme-white flex items-center flex-wrap"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <span className="mr-2">I</span>
              <TypingEffect texts={[
                "create software solutions.",
                "build AI applications.",
                "develop intelligent agents.",
                "design user experiences."
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
            Software Engineer with expertise in Python, backend development, and AI solutions. 
            Creator of intelligent AI agents and data-driven applications, specializing in 
            LLMs and natural language processing to solve real-world challenges.
          </motion.div>

          <motion.div 
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isCtaVisible ? 1 : 0, y: isCtaVisible ? 0 : 30 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="https://github.com/ahmed2231web" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto group"
            >
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

        {/* Right side animated content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 1, type: "spring" }}
          className="h-[400px] w-full hidden lg:flex items-center justify-center relative"
        >
          <div className="relative w-full h-full max-w-md flex items-center justify-center">
            {/* Animated code blocks */}
            <motion.div 
              className="absolute w-64 h-64 bg-black/40 backdrop-blur-sm rounded-lg border border-theme-yellow/30 p-4 z-10 text-left"
              initial={{ x: 0, y: 0, rotateZ: 0 }}
              animate={{ 
                x: [0, 20, 0], 
                y: [0, -20, 0],
                rotateZ: [0, 5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="text-theme-yellow/90 font-mono text-sm"
              >
                <div className="flex items-center gap-1 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <motion.div>
                  <span className="text-blue-400">class</span> <span className="text-green-400">Developer</span>:
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-orange-400">__init__</span>(self):
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.<span className="text-purple-400">name</span> = <span className="text-orange-400">'Ahmed'</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.<span className="text-purple-400">skills</span> = [<span className="text-orange-400">'Python'</span>, <span className="text-orange-400">'AI/ML'</span>]
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.<span className="text-purple-400">passion</span> = <span className="text-orange-400">'Building AI solutions'</span>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute w-48 h-48 bg-black/30 backdrop-blur-sm rounded-lg border border-theme-yellow/20 p-3 z-0 rotate-6"
              style={{ left: '30%', bottom: '15%' }}
              initial={{ x: 0, y: 0, rotateZ: 6 }}
              animate={{ 
                x: [0, -15, 0], 
                y: [0, 15, 0],
                rotateZ: [6, 0, 6]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="text-theme-yellow/80 font-mono text-xs">
                <div className="mb-2 pb-1 border-b border-theme-yellow/20 flex items-center">
                  <CircuitBoard className="w-4 h-4 mr-1" />
                  <span>design.css</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.8 }}
                >
                  .container {"{"}
                  <br />
                  &nbsp;&nbsp;display: flex;
                  <br />
                  &nbsp;&nbsp;background: <span className="text-blue-400">#fdee30</span>;
                  <br />
                  {"}"}
                </motion.div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-10 right-24 w-20 h-20 border-2 border-theme-yellow/30 rounded-full z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 360, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="absolute bottom-16 left-10 w-32 h-2 bg-gradient-to-r from-theme-yellow/50 to-transparent"
              animate={{
                scaleX: [1, 0.5, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
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
