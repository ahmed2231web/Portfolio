
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <Card 
      className={cn(
        "overflow-hidden group transition-all duration-500 h-full flex flex-col",
        isVisible ? 'animate-scale-in' : 'opacity-0',
        isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow-md',
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
            isHovered ? 'scale-105' : 'scale-100'
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="text-lg font-bold">{project.title}</h4>
          </div>
        </div>
      </div>
      
      <CardHeader className="py-3">
        <div className="flex flex-wrap gap-1 mb-2">
          {project.categories.map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold">{project.title}</h3>
      </CardHeader>
      
      <CardContent className="pb-4 flex-grow">
        <p className="text-muted-foreground">{project.description}</p>
        
        <div className="flex flex-wrap gap-1 mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 flex gap-2">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-1" />
              Code
            </a>
          </Button>
        )}
        
        {project.liveUrl && (
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
