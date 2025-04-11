
import { Card } from '@/components/ui/card';
import {
  Layers,
  Server,
  GitBranch,
  PenTool,
  Zap,
  Cpu,
  Code,
  Database,
  CircuitBoard,
  Globe,
  FileCode,
  Palette
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code size={24} strokeWidth={1.5} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
    color: 'text-blue-500',
    gradient: 'from-blue-500 via-indigo-400 to-blue-600',
  },
  {
    title: 'Backend',
    icon: <Server size={24} strokeWidth={1.5} />,
    skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Authentication'],
    color: 'text-emerald-500',
    gradient: 'from-emerald-500 via-green-400 to-teal-500',
  },
  {
    title: 'Tools & Methods',
    icon: <GitBranch size={24} strokeWidth={1.5} />,
    skills: ['Git', 'GitHub', 'VS Code', 'Agile', 'CI/CD', 'Testing', 'Performance Optimization'],
    color: 'text-violet-500',
    gradient: 'from-violet-500 via-purple-400 to-violet-600',
  },
  {
    title: 'Design',
    icon: <PenTool size={24} strokeWidth={1.5} />,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Wireframing', 'Prototyping', 'Responsive Design'],
    color: 'text-rose-500',
    gradient: 'from-rose-500 via-pink-400 to-rose-600',
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // 3D rotation effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="skills" className="section-padding px-6 md:px-10 py-24 relative overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5 z-0"></div>
      
      {/* Animated geometric shapes with enhanced effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-40 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Added subtle grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block relative mb-2">
            <span className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-primary/30 via-accent/30 to-primary/20"></span>
            <Zap className="w-8 h-8 text-accent relative icon-3d" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I've mastered to create exceptional digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary/30 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card 
                className="overflow-hidden backdrop-blur-sm border border-primary/10 p-6 h-full transform transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 group card-3d-effect"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center mb-5 card-content">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} mr-4 text-white transform transition-all duration-300 group-hover:scale-110 icon-3d`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 card-content">
                  {category.skills.map((skill, i) => (
                    <motion.span 
                      key={skill} 
                      className="bg-secondary/80 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-primary/20 hover:scale-105 hover:shadow-sm cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Enhanced decorative element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-transparent via-primary/5 to-accent/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
