import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard, { ProjectProps } from './ProjectCard';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { 
  Globe, 
  FileCode, 
  Terminal, 
  Layers, 
  Package, 
  Bookmark, 
  Star, 
  Code 
} from 'lucide-react';

// Updated project data without liveUrl
const projectsData: ProjectProps[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/ahmed2231web/project1',
    categories: ['Web Development', 'Full Stack'],
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects and skills with smooth animations.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/ahmed2231web/project2',
    categories: ['Web Development', 'UI/UX'],
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop functionality, priority levels, and due dates.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['React', 'Redux', 'Firebase'],
    githubUrl: 'https://github.com/ahmed2231web/project3',
    categories: ['Web Development', 'Frontend'],
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data for multiple locations.',
    image: 'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['JavaScript', 'API Integration', 'CSS'],
    githubUrl: 'https://github.com/ahmed2231web/project4',
    categories: ['Web Development', 'Frontend'],
  },
  {
    id: '5',
    title: 'Fitness Tracker',
    description: 'A fitness tracking application that allows users to set goals, track workouts, and visualize progress.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['React Native', 'Firebase', 'Charts.js'],
    githubUrl: 'https://github.com/ahmed2231web/project5',
    categories: ['Mobile Development', 'UI/UX'],
  },
  {
    id: '6',
    title: 'Recipe Finder',
    description: 'A recipe finder application that allows users to search for recipes by ingredients or dietary restrictions.',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    githubUrl: 'https://github.com/ahmed2231web/project6',
    categories: ['Web Development', 'Frontend'],
  },
];

const categories = ['All', 'Web Development', 'UI/UX', 'Frontend', 'Full Stack', 'Mobile Development'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref: titleRef, isVisible: isTitleVisible } = useScrollAnimation();
  const { ref: filterRef, isVisible: isFilterVisible } = useScrollAnimation();
  
  // Animation refs for staggered appearance of project cards
  const refs = Array(projectsData.length).fill(0).map(() => useScrollAnimation({ threshold: 0.1 }));

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="section-padding px-6 md:px-10 bg-gradient-to-b from-secondary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef} 
          className={`${isTitleVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 pb-2 border-b-2 border-primary inline-block">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            A collection of projects that showcase my skills and experience
          </p>
        </div>

        <div 
          ref={filterRef} 
          className={`mb-8 flex flex-wrap gap-2 ${isFilterVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {getProjectIcon(category)}
              <span>{category}</span>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={project.id} ref={refs[index].ref}>
              <ProjectCard 
                project={project} 
                isVisible={refs[index].isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to get icon based on category
const getProjectIcon = (category: string) => {
  switch(category.toLowerCase()) {
    case 'web development': 
      return <Globe className="w-4 h-4 mr-1" />;
    case 'frontend': 
      return <FileCode className="w-4 h-4 mr-1" />;
    case 'backend': 
      return <Terminal className="w-4 h-4 mr-1" />;
    case 'full stack': 
      return <Layers className="w-4 h-4 mr-1" />;
    case 'ui/ux':
      return <Package className="w-4 h-4 mr-1" />;
    case 'mobile development':
      return <Bookmark className="w-4 h-4 mr-1" />;
    case 'all':
      return <Star className="w-4 h-4 mr-1" />;
    default: 
      return <Code className="w-4 h-4 mr-1" />;
  }
};

export default Projects;
