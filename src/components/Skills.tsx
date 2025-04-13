
import { Card } from '@/components/ui/card';
import {
  Code,
  Server,
  GitBranch,
  PenTool,
  Zap,
  Database,
  Globe,
  Palette
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  gradient: string;
  iconBg: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code size={24} strokeWidth={1.5} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
    gradient: 'from-theme-yellow to-amber-500/50',
    iconBg: 'bg-amber-500/20',
  },
  {
    title: 'Backend',
    icon: <Server size={24} strokeWidth={1.5} />,
    skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Authentication'],
    gradient: 'from-theme-yellow to-emerald-500/50',
    iconBg: 'bg-emerald-500/20',
  },
  {
    title: 'Tools & Methods',
    icon: <GitBranch size={24} strokeWidth={1.5} />,
    skills: ['Git', 'GitHub', 'VS Code', 'Agile', 'CI/CD', 'Testing', 'Performance Optimization'],
    gradient: 'from-theme-yellow to-blue-500/50',
    iconBg: 'bg-blue-500/20',
  },
  {
    title: 'Design',
    icon: <PenTool size={24} strokeWidth={1.5} />,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Wireframing', 'Prototyping', 'Responsive Design'],
    gradient: 'from-theme-yellow to-purple-500/50',
    iconBg: 'bg-purple-500/20',
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
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-yellow-soft neon-glow-softer">
            Skills & Expertise
          </h2>
          <p className="text-lg text-theme-white/70 max-w-2xl mx-auto">
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
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <Card className="overflow-hidden bg-black/60 backdrop-blur-md border border-white/10 p-6 h-full relative shadow-lg">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-lg p-[1px] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-30`}></div>
                  </div>
                  
                  {/* Glass effect overlay */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-white/5"></div>
                  
                  {/* Glowing corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-theme-yellow/40"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-theme-yellow/40"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-theme-yellow/40"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-theme-yellow/40"></div>
                  
                  {/* Scanline animation */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-theme-yellow/50 to-transparent animate-scanline"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${category.iconBg} mr-4 relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-theme-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative text-theme-yellow">{category.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-theme-white/90 group-hover:text-theme-yellow transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.span 
                          key={skill} 
                          className="bg-black/70 border border-white/10 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-theme-yellow/10 hover:border-theme-yellow/50 cursor-default text-white/80 hover:text-theme-yellow"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.05 * i, duration: 0.3 }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
