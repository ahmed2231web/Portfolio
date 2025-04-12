import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 md:px-10 relative overflow-hidden bg-[#2c3e50]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#34495e] to-transparent opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3498db]/20 to-transparent"></div>
      
      {/* Geometric shapes */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="175" cy="175" r="175" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="350" y2="350" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" className="text-primary"/>
              <stop offset="1" stopColor="currentColor" className="text-primary" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <a href="#home" className="inline-block mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#3498db] to-[#2980b9] bg-clip-text text-transparent">Ahmed</h2>
            </a>
            <p className="text-white/80 max-w-md mb-6">
              A passionate full-stack developer focused on building beautiful interfaces & experiences. Always eager to learn and collaborate on interesting projects.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/ahmed2231web" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="GitHub"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="LinkedIn"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Twitter"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a 
                href="mailto:ahmed@example.com" 
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Email"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>New York, USA</li>
              <li>
                <a href="mailto:ahmed@example.com" className="hover:text-primary transition-colors">ahmed@example.com</a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            © {currentYear} Ahmed. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-sm text-white/70 flex items-center">
              Built with <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
