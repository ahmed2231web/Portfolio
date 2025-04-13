
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
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code size={24} strokeWidth={1.5} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
    gradient: 'from-theme-yellow via-theme-yellow/50 to-transparent',
  },
  {
    title: 'Backend',
    icon: <Server size={24} strokeWidth={1.5} />,
    skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Authentication'],
    gradient: 'from-theme-yellow via-theme-yellow/50 to-transparent',
  },
  {
    title: 'Tools & Methods',
    icon: <GitBranch size={24} strokeWidth={1.5} />,
    skills: ['Git', 'GitHub', 'VS Code', 'Agile', 'CI/CD', 'Testing', 'Performance Optimization'],
    gradient: 'from-theme-yellow via-theme-yellow/50 to-transparent',
  },
  {
    title: 'Design',
    icon: <PenTool size={24} strokeWidth={1.5} />,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Wireframing', 'Prototyping', 'Responsive Design'],
    gradient: 'from-theme-yellow via-theme-yellow/50 to-transparent',
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
    
    // Create a scanline effect when hovering
    const scanline = card.querySelector('.scanline') as HTMLElement;
    if (scanline) {
      scanline.style.opacity = '1';
    }
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    
    // Hide scanline on mouse leave
    const scanline = e.currentTarget.querySelector('.scanline') as HTMLElement;
    if (scanline) {
      scanline.style.opacity = '0';
    }
  };

  return (
    <section id="skills" className="section-padding px-6 md:px-10 py-24 relative overflow-hidden bg-black">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 tech-pattern z-0 opacity-20"></div>
      <div className="absolute inset-0 circuit-overlay z-0 opacity-30"></div>
      
      {/* Animated geometric shapes with enhanced effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-theme-yellow/10 rounded-full blur-3xl animate-pulse-yellow"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-theme-yellow/5 rounded-full blur-3xl" style={{animationDelay: '1s'}}></div>
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
            <span className="absolute -inset-1 rounded-full blur-md bg-theme-yellow/20"></span>
            <Zap className="w-8 h-8 text-theme-yellow relative" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-yellow neon-glow">
            Skills & Expertise
          </h2>
          <p className="text-lg text-theme-white/80 max-w-2xl mx-auto">
            Technologies and tools I've mastered to create exceptional digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-theme-yellow via-theme-white to-theme-yellow/30 mx-auto mt-6 rounded-full shadow-neon-sm"></div>
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
                className="overflow-hidden bg-theme-gray-dark/30 backdrop-blur-sm border border-theme-yellow/20 p-6 h-full transform transition-all duration-500 hover:shadow-neon-sm group relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Futuristic scanline effect */}
                <div className="scanline absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-theme-yellow/50 to-transparent transform translate-y-0 animate-[scanline_2s_linear_infinite]"></div>
                </div>
                
                {/* Tech border */}
                <div className="absolute inset-0 border border-theme-yellow/20 rounded-md z-0"></div>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-theme-yellow/40 border-l-theme-yellow/40"></div>
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-r-[12px] border-t-theme-yellow/40 border-r-theme-yellow/40"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[12px] border-l-[12px] border-b-theme-yellow/40 border-l-theme-yellow/40"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[12px] border-r-[12px] border-b-theme-yellow/40 border-r-theme-yellow/40"></div>
                
                {/* Content with relative positioning for proper layering */}
                <div className="relative z-10">
                  <div className="flex items-center mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} mr-4 text-black transform transition-all duration-300 group-hover:scale-110 shadow-neon-sm group-hover:shadow-neon-md`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-theme-white group-hover:text-theme-yellow transition-colors neon-glow">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span 
                        key={skill} 
                        className="bg-black/50 border border-theme-yellow/30 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-theme-yellow/20 hover:scale-105 hover:border-theme-yellow cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Digital circuit corner effects */}
                <svg width="20" height="20" className="absolute top-0 left-0 text-theme-yellow/40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2H2V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="20" height="20" className="absolute top-0 right-0 text-theme-yellow/40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2H22V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="20" height="20" className="absolute bottom-0 left-0 text-theme-yellow/40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 22H2V16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="20" height="20" className="absolute bottom-0 right-0 text-theme-yellow/40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 22H22V16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
