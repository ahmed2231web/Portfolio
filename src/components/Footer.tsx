import { Heart, Github, Linkedin, Mail, Cpu, CircuitBoard, ExternalLink, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 sm:px-6 md:px-10 relative overflow-hidden bg-black">
      {/* Background elements with improved visuals */}
      <div className="absolute inset-0 tech-pattern opacity-20 pointer-events-none"></div>
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-theme-yellow/5 to-transparent opacity-40 pointer-events-none"
      ></div>
      
      {/* Animated top border with improved glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-theme-yellow/70 to-transparent shadow-[0_0_15px_0_rgba(253,238,48,0.5)]"></div>
      
      {/* Multiple animated glowing elements for better visual interest */}
      <motion.div
        className="absolute top-20 left-[20%] w-40 h-40 rounded-full bg-theme-yellow/10 blur-3xl"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-theme-yellow/5 blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.9, 1.2, 0.9],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Circuit elements with better styling */}
      <div className="absolute top-10 left-10 border border-theme-yellow/30 w-16 h-16 rounded-md bg-black/50 backdrop-blur-sm"></div>
      <div className="absolute bottom-20 right-20 border border-theme-yellow/30 w-24 h-8 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Improved responsive grid with better spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info section - takes full width on mobile, then 2 columns on larger screens */}
          <div className="sm:col-span-2">
            <a 
              href="#home" 
              className="inline-block mb-4 group relative hover:scale-105 transition-transform"
            >
              <h2 className="text-3xl font-bold gradient-text-yellow neon-glow">Ahmed</h2>
              <CircuitBoard className="absolute -right-6 -bottom-2 h-4 w-4 text-theme-yellow/60" />
            </a>
            <p className="text-theme-white/80 max-w-md mb-6 text-base leading-relaxed">
              Building intelligent solutions with Python, AI/ML, and innovative technologies. Let's create something amazing together! 🚀
            </p>
            {/* Improved social links with animations */}
            <div className="flex space-x-6">
              <motion.a 
                href="https://github.com/ahmed2231web" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-theme-white/70 hover:text-theme-yellow transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-theme-yellow/30 bg-black/50 backdrop-blur-sm hover:border-theme-yellow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/ahmed-kayani-100a9a254" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-theme-white/70 hover:text-theme-yellow transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-theme-yellow/30 bg-black/50 backdrop-blur-sm hover:border-theme-yellow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="mailto:ahmedkayani2230@gmail.com"
                className="text-theme-white/70 hover:text-theme-yellow transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-theme-yellow/30 bg-black/50 backdrop-blur-sm hover:border-theme-yellow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links and Contact now in a responsive grid */}
          <div className="space-y-8 sm:space-y-0">
            {/* Quick Links with improved styling */}
            <div className="backdrop-blur-sm p-5 rounded-lg border border-theme-yellow/20 bg-black/40 hover:bg-black/60 transition-colors h-full shadow-lg shadow-black/20">
              <h3 className="text-lg font-semibold mb-5 text-theme-yellow">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-theme-white/70 hover:text-theme-yellow transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-theme-yellow rounded-full group-hover:scale-150 transition-transform"></span>
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact section with improved styling */}
          <div>
            <div className="backdrop-blur-sm p-5 rounded-lg bg-black/40 border border-theme-yellow/20 hover:bg-black/60 transition-colors h-full shadow-lg shadow-black/20">
              <h3 className="text-lg font-semibold mb-5 text-theme-yellow">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-theme-white/70">
                  <MapPin className="w-4 h-4 text-theme-yellow mt-1 flex-shrink-0" />
                  <span>Pakistan</span>
                </li>
                <li>
                  <a 
                    href="mailto:ahmedkayani2230@gmail.com" 
                    className="flex items-start gap-3 text-theme-white/70 hover:text-theme-yellow transition-colors"
                  >
                    <Mail className="w-4 h-4 text-theme-yellow mt-1 flex-shrink-0" />
                    <span className="break-all">ahmedkayani2230@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+923114816990" 
                    className="flex items-start gap-3 text-theme-white/70 hover:text-theme-yellow transition-colors"
                  >
                    <Phone className="w-4 h-4 text-theme-yellow mt-1 flex-shrink-0" />
                    <span>+92 311 4816990</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright with improved styling and removed "using React & Tailwind CSS" */}
        <div className="mt-16 pt-6 border-t border-theme-yellow/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-theme-white/70 mb-4 sm:mb-0">
            &copy; {currentYear} Ahmed Kayani. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-sm text-theme-white/70 flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-theme-yellow animate-pulse" />
            </p>
          </div>
        </div>
        
        {/* Enhanced decorative circuit lines */}
        <div className="absolute bottom-0 left-10 w-20 h-[1px] bg-gradient-to-r from-theme-yellow/50 to-transparent"></div>
        <div className="absolute bottom-0 left-10 w-[1px] h-10 bg-gradient-to-t from-theme-yellow/50 to-transparent"></div>
        <div className="absolute bottom-0 right-10 w-20 h-[1px] bg-gradient-to-l from-theme-yellow/50 to-transparent"></div>
        <div className="absolute bottom-0 right-10 w-[1px] h-10 bg-gradient-to-t from-theme-yellow/50 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
