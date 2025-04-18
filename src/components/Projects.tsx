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

const projectsData: ProjectProps[] = [
  {
    id: '1',
    title: 'AgroConnect',
    description: 'An advanced e-commerce platform for agriculture with features like farmer-buyer connections and crop AI recommendations.',
    image: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['Python', 'Django', 'React', 'AI/ML'],
    githubUrl: 'https://github.com/ahmed2231web/Final-Year-Project',
    categories: ['Full Stack', 'AI/ML'],
  },
  {
    id: '2',
    title: 'AI Agent for App Review Analysis',
    description: 'AI system analyzing app reviews with specialized agents for insights, helping developers understand user feedback better.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['Python', 'NLP', 'Machine Learning'],
    githubUrl: 'https://github.com/ahmed2231web/AI-Agent-for-App-Review-Analysis',
    categories: ['AI/ML', 'Backend'],
  },
  {
    id: '3',
    title: 'Ollama RAG',
    description: 'Retrieval Augmented Generation system for document Q&A using Ollama, enabling intelligent document analysis.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['Python', 'LLMs', 'RAG'],
    githubUrl: 'https://github.com/ahmed2231web/Ollama_RAG',
    categories: ['AI/ML', 'Backend'],
  },
  {
    id: '4',
    title: 'AI Telegram Bot',
    description: 'Telegram bot with vision and crypto insights powered by Google Gemini, providing automated analysis and responses.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['Python', 'Gemini', 'API'],
    githubUrl: 'https://github.com/ahmed2231web/AI-Telegram-Bot',
    categories: ['AI/ML', 'Backend'],
  }
];

const categories = ['All', 'Web Development', 'UI/UX', 'Frontend', 'Full Stack', 'Mobile Development', 'AI/ML', 'Backend'];

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
      case 'ai/ml':
        return <Code className="w-4 h-4 mr-1" />;
    default: 
      return <Code className="w-4 h-4 mr-1" />;
  }
};

export default Projects;
