
import { Card } from '@/components/ui/card';
import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
  Database,
  GitBranch,
  PenTool,
  LineChart,
  Server,
  Globe,
} from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Html5 size={24} className="text-primary" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: <Server size={24} className="text-primary" />,
    skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Authentication'],
  },
  {
    title: 'Tools & Methods',
    icon: <GitBranch size={24} className="text-primary" />,
    skills: ['Git', 'GitHub', 'VS Code', 'Agile', 'CI/CD', 'Testing', 'Performance Optimization'],
  },
  {
    title: 'Design',
    icon: <PenTool size={24} className="text-primary" />,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Wireframing', 'Prototyping', 'Responsive Design'],
  },
];

const Skills = () => {
  const { ref: titleRef, isVisible: isTitleVisible } = useScrollAnimation();
  const refs = Array(skillCategories.length).fill(0).map(() => useScrollAnimation({ threshold: 0.1 }));

  return (
    <section id="skills" className="section-padding px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef} 
          className={`mb-10 ${isTitleVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 pb-2 border-b-2 border-primary inline-block">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              ref={refs[index].ref}
              className={`p-6 h-full transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                refs[index].isVisible ? 'animate-slide-in' : 'opacity-0'
              } delay-${index * 100}`}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-primary/10 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-secondary px-3 py-1 rounded-full text-sm transition-all hover:bg-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Experience Level</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Javascript size={40} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
              <p className="text-muted-foreground">Building responsive and interactive user interfaces</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Database size={40} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
              <p className="text-muted-foreground">Creating APIs and managing databases</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe size={40} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Web Performance</h4>
              <p className="text-muted-foreground">Optimizing websites for speed and SEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
