
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-10 bg-secondary/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ahmed. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center">
          <p className="text-sm text-muted-foreground flex items-center">
            Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
