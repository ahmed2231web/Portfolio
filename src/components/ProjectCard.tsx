
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  categories: string[];
}

interface ProjectCardProps {
  project: ProjectProps;
  className?: string;
  isVisible: boolean;
}

const ProjectCard = ({ project, className, isVisible }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card 
        className={cn(
          "overflow-hidden group transition-all duration-500 h-full flex flex-col bg-card/90 backdrop-blur-sm border-primary/10",
          isHovered ? 'shadow-lg shadow-primary/10' : 'shadow-md',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300",
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          >
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform transition-transform duration-300"
                style={{ transform: isHovered ? 'translateY(0)' : 'translateY(100%)' }}
            >
              <h4 className="text-xl font-bold">{project.title}</h4>
              <div className="mt-2 flex gap-1">
                {project.categories.slice(0, 2).map((category) => (
                  <Badge key={category} variant="outline" className="text-xs text-white border-white/30 bg-white/10">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <CardHeader className="py-4">
          <div className="flex flex-wrap gap-1 mb-2">
            {project.categories.map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
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
                <Badge variant="outline" className="text-xs transition-colors hover:bg-primary/10">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
        
        <CardFooter className="pt-0 flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild className="group/btn">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="w-4 h-4 mr-1" />
                Code
                <span className="w-0 h-0 overflow-hidden group-hover/btn:w-4 group-hover/btn:ml-1 transition-all duration-300 ease-in-out">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            </Button>
          )}
          
          {project.liveUrl && (
            <Button size="sm" asChild className="group/btn bg-gradient-to-r from-primary/90 to-primary/80 hover:from-primary hover:to-primary/90">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Demo
                <span className="w-0 h-0 overflow-hidden group-hover/btn:w-4 group-hover/btn:ml-1 transition-all duration-300 ease-in-out">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            </Button>
          )}
        </CardFooter>
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className={cn(
            "absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/30 to-transparent -rotate-45 transform origin-top-right transition-opacity duration-300",
            isHovered ? 'opacity-100' : 'opacity-0'
          )}></div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
