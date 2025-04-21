
import { Heart, Github, Linkedin, Mail, Cpu, CircuitBoard } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 sm:px-6 md:px-10 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 tech-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 circuit-overlay opacity-30 pointer-events-none"></div>
      
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-yellow/50 to-transparent"></div>
      
      {/* Animated elements */}
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-theme-yellow/5 blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Circuit elements */}
      <div className="absolute top-10 left-10 border border-theme-yellow/20 w-16 h-16 rounded-md"></div>
      <div className="absolute bottom-20 right-20 border border-theme-yellow/20 w-24 h-8"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Responsive grid: stack Quick Links and Contact below main on mobile */}
        <div className="flex flex-col gap-10 md:grid md:grid-cols-4 md:gap-10">
          {/* Info */}
          <div className="md:col-span-2">
            <a href="#home" className="inline-block mb-4 group relative">
              <h2 className="text-2xl font-bold gradient-text-yellow neon-glow">Ahmed</h2>
              <CircuitBoard className="absolute -right-6 -bottom-2 h-4 w-4 text-theme-yellow/40" />
            </a>
            <p className="text-theme-white/70 max-w-md mb-6">
              Building intelligent solutions with Python, AI/ML, and innovative technologies. Let's create something amazing together! 🚀
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/ahmed2231web" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-theme-yellow/10 border border-theme-yellow/30 hover:bg-theme-yellow/20 hover:text-theme-yellow text-theme-white transition-colors"
                whileHover={{ y: -3, transition: { duration: 0.2 }, boxShadow: "0 0 8px rgba(253, 238, 48, 0.5)" }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/ahmed-kayani-10ba94224" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-theme-yellow/10 border border-theme-yellow/30 hover:bg-theme-yellow/20 hover:text-theme-yellow text-theme-white transition-colors"
                whileHover={{ y: -3, transition: { duration: 0.2 }, boxShadow: "0 0 8px rgba(253, 238, 48, 0.5)" }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links and Contact - stack on mobile */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:gap-0 md:col-span-2">
            {/* Quick Links */}
            <div className="flex-1 backdrop-blur-sm p-4 rounded-md bg-white/5 border border-theme-yellow/20 mb-2 md:mb-4 md:mr-0 mr-2 min-w-[0]">
              <h3 className="text-lg font-semibold mb-4 text-theme-yellow">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-theme-white/70 hover:text-theme-yellow transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-theme-yellow rounded-full"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-theme-white/70 hover:text-theme-yellow transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-theme-yellow rounded-full"></span>
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-theme-white/70 hover:text-theme-yellow transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-theme-yellow rounded-full"></span>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-theme-white/70 hover:text-theme-yellow transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-theme-yellow rounded-full"></span>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-theme-white/70 hover:text-theme-yellow transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-theme-yellow rounded-full"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex-1 backdrop-blur-sm p-4 rounded-md bg-white/5 border border-theme-yellow/20 md:ml-4 min-w-[0]">
              <h3 className="text-lg font-semibold mb-4 text-theme-yellow">Contact</h3>
              <ul className="space-y-2 text-theme-white/70">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-theme-yellow rounded-full"></span>
                  Pakistan
                </li>
                <li>
                  <a href="mailto:ahmedkayani2230@gmail.com" className="hover:text-theme-yellow transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-theme-yellow rounded-full"></span>
                    ahmedkayani2230@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923114816990" className="hover:text-theme-yellow transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-theme-yellow rounded-full"></span>
                    +92 311 4816990
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright and Built with */}
        <div className="mt-12 pt-6 border-t border-theme-yellow/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-theme-white/60 mb-4 md:mb-0">
            © {currentYear} Ahmed. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-sm text-theme-white/60 flex items-center">
              Built with <Heart className="w-4 h-4 mx-1 text-theme-yellow animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
        
        {/* Decorative circuit lines */}
        <div className="absolute bottom-0 left-10 w-20 h-[1px] bg-theme-yellow/30"></div>
        <div className="absolute bottom-0 left-10 w-[1px] h-10 bg-theme-yellow/30"></div>
        <div className="absolute bottom-0 right-10 w-20 h-[1px] bg-theme-yellow/30"></div>
        <div className="absolute bottom-0 right-10 w-[1px] h-10 bg-theme-yellow/30"></div>
      </div>
    </footer>
  );
};

export default Footer;

