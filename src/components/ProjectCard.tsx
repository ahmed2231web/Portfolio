
import { useState, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Code, Layers, Terminal, Globe, Bookmark, Star, Package, FileCode } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  categories: string[];
}

interface ProjectCardProps {
  project: ProjectProps;
  className?: string;
  isVisible: boolean;
}

const ProjectCard = ({ project, className, isVisible }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    const tiltX = (y - 0.5) * 10; // -5 to +5 degrees
    const tiltY = (0.5 - x) * 10; // -5 to +5 degrees
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };
  
  // Get icon based on category
  const getProjectIcon = (category: string) => {
    const iconStyle = "w-4 h-4 mr-1";
    
    switch(category.toLowerCase()) {
      case 'web': 
        return <Globe className={iconStyle} />;
      case 'frontend': 
        return <FileCode className={iconStyle} />;
      case 'backend': 
        return <Terminal className={iconStyle} />;
      case 'fullstack': 
        return <Layers className={iconStyle} />;
      case 'ui/ux':
        return <Package className={iconStyle} />;
      case 'mobile development':
        return <Bookmark className={iconStyle} />;
      default: 
        return <Code className={iconStyle} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="card-3d-effect"
    >
      <Card 
        ref={cardRef}
        className={cn(
          "overflow-hidden group transition-all duration-500 h-full flex flex-col backdrop-blur-sm border-primary/10",
          isHovered ? 'shadow-lg shadow-primary/30 border-primary/30' : 'shadow-md',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseLeave();
        }}
        onMouseMove={handleMouseMove}
      >
        <div className="relative overflow-hidden pt-[56.25%]">
          <img 
            src={project.image} 
            alt={project.title}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transform transition-transform duration-500",
              isHovered ? 'scale-110' : 'scale-100'
            )}
          />
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300",
              isHovered ? 'opacity-100' : 'opacity-30'
            )}
          >
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform transition-transform duration-300"
                style={{ transform: isHovered ? 'translateY(0)' : 'translateY(100%)' }}
            >
              <h4 className="text-xl font-bold">{project.title}</h4>
              <div className="mt-2 flex gap-1">
                {project.categories.slice(0, 2).map((category) => (
                  <Badge key={category} variant="outline" className="text-xs text-white border-white/30 bg-white/10">
                    {getProjectIcon(category)}
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Featured star marker */}
          {project.id === '1' && (
            <div className="absolute top-3 right-3 text-amber-400 animate-pulse-glow">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-6 h-6 drop-shadow-[0_0_3px_rgba(251,191,36,0.8)]" fill="currentColor" />
              </motion.div>
            </div>
          )}
        </div>
        
        <CardHeader className="py-4">
          <div className="flex flex-wrap gap-1 mb-2">
            {project.categories.map((category) => (
              <Badge key={category} variant="secondary" className="text-xs flex items-center">
                {getProjectIcon(category)}
                {category}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl font-bold group-hover:gradient-text transition-colors duration-300">{project.title}</h3>
        </CardHeader>
        
        <CardContent className="pb-4 flex-grow">
          <p className="text-muted-foreground">{project.description}</p>
          
          <motion.div 
            className="flex flex-wrap gap-1 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {project.tags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
              >
                <Badge variant="outline" className="text-xs transition-colors hover:bg-accent/10">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
        
        <CardFooter className="pt-0">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild className="group/btn overflow-hidden relative w-full">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out"></span>
                <Github className="w-5 h-5 mr-2 transition-transform group-hover/btn:scale-110 duration-300" />
                <span className="font-medium">View Code</span>
              </a>
            </Button>
          )}
        </CardFooter>
        
        {/* Enhanced decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className={cn(
            "absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/30 via-primary/20 to-transparent -rotate-45 transform origin-top-right transition-opacity duration-300",
            isHovered ? 'opacity-100' : 'opacity-0'
          )}></div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
