
import { Card } from '@/components/ui/card';
import {
  Code,
  FileCode,
  CircuitBoard,
  Database,
  GitBranch,
  PenTool,
  LineChart,
  Server,
  Globe,
  Cpu,
  Sparkles,
  Smartphone,
} from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code size={24} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Backend',
    icon: <Server size={24} />,
    skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Authentication'],
    color: 'from-emerald-500 to-green-400',
  },
  {
    title: 'Tools & Methods',
    icon: <GitBranch size={24} />,
    skills: ['Git', 'GitHub', 'VS Code', 'Agile', 'CI/CD', 'Testing', 'Performance Optimization'],
    color: 'from-purple-500 to-indigo-400',
  },
  {
    title: 'Design',
    icon: <PenTool size={24} />,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Wireframing', 'Prototyping', 'Responsive Design'],
    color: 'from-rose-500 to-pink-400',
  },
];

const Skills = () => {
  const { ref: titleRef, isVisible: isTitleVisible } = useScrollAnimation();
  const refs = Array(skillCategories.length).fill(0).map(() => useScrollAnimation({ threshold: 0.1 }));

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
    <section id="skills" className="section-padding px-6 md:px-10 py-24 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div 
          ref={titleRef} 
          className={`mb-16 text-center ${isTitleVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I've mastered to create exceptional digital experiences
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card 
                className="overflow-hidden backdrop-blur-sm bg-card/90 border border-primary/10 p-6 h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} mr-4 text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-secondary/80 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-primary/20 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            My Expertise Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex flex-col items-center text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <FileCode size={30} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Frontend Development</h4>
                <p className="text-muted-foreground">Building responsive and interactive user interfaces</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex flex-col items-center text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Database size={30} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Backend Development</h4>
                <p className="text-muted-foreground">Creating robust APIs and efficient database systems</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex flex-col items-center text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Smartphone size={30} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Mobile Development</h4>
                <p className="text-muted-foreground">Building cross-platform mobile applications</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex flex-col items-center text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Sparkles size={30} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">UI/UX Design</h4>
                <p className="text-muted-foreground">Crafting beautiful and intuitive user experiences</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech stack section */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            My Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Next.js', 'Tailwind CSS'].map((tech) => (
              <motion.div 
                key={tech}
                className="text-center"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-md border border-primary/10">
                  <span className="font-bold text-primary">{tech.charAt(0)}</span>
                </div>
                <p className="mt-2 text-sm font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
