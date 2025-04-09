
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
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
  Zap,
  BadgeCheck,
  Layers,
} from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

interface SkillLevel {
  name: string;
  level: number;
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

const skillLevels: SkillLevel[] = [
  { name: 'React', level: 95, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
  { name: 'Node.js', level: 85, color: 'bg-green-500' },
  { name: 'UI/UX Design', level: 80, color: 'bg-pink-500' },
  { name: 'Next.js', level: 78, color: 'bg-gray-800' },
];

const Skills = () => {
  const { ref: titleRef, isVisible: isTitleVisible } = useScrollAnimation();
  const refs = Array(skillCategories.length).fill(0).map(() => useScrollAnimation({ threshold: 0.1 }));
  const progressRefs = Array(skillLevels.length).fill(0).map(() => useScrollAnimation({ threshold: 0.1 }));

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

  const floatVariants = {
    hidden: { y: 0 },
    visible: { 
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section id="skills" className="section-padding px-6 md:px-10 py-24 relative overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background z-0"></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-40 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          ref={titleRef} 
          className={`mb-16 text-center ${isTitleVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I've mastered to create exceptional digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto mt-6 rounded-full"></div>
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
                className="overflow-hidden backdrop-blur-sm bg-card/90 border border-primary/10 p-6 h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="flex items-center mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} mr-4 text-white transform transition-all duration-300 group-hover:scale-110`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-secondary/80 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-primary/20 hover:scale-105 hover:shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Skill levels section */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Proficiency Levels
          </h3>
          
          <div className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/10 p-8 shadow-lg">
            {skillLevels.map((skill, index) => (
              <div 
                key={skill.name}
                ref={progressRefs[index].ref} 
                className="mb-6 last:mb-0"
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress 
                  value={progressRefs[index].isVisible ? skill.level : 0} 
                  className="h-2 transition-all duration-1000 ease-in-out"
                  indicatorClassName={`${skill.color} transition-transform duration-1000 ease-out`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            My Expertise Areas
          </h3>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <motion.div 
                className="flex flex-col items-center text-center p-6 bg-card/70 backdrop-blur-sm rounded-2xl border border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all h-full"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  variants={floatVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-5 transform transition-transform"
                >
                  <FileCode size={30} className="text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold mb-3">Frontend Development</h4>
                <p className="text-muted-foreground">Building responsive and interactive user interfaces with modern frameworks</p>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <motion.div 
                className="flex flex-col items-center text-center p-6 bg-card/70 backdrop-blur-sm rounded-2xl border border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all h-full"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  variants={floatVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mb-5 transform transition-transform"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Database size={30} className="text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold mb-3">Backend Development</h4>
                <p className="text-muted-foreground">Creating robust APIs and efficient database systems for seamless data flow</p>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <motion.div 
                className="flex flex-col items-center text-center p-6 bg-card/70 backdrop-blur-sm rounded-2xl border border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all h-full"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  variants={floatVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-pink-400 flex items-center justify-center mb-5 transform transition-transform"
                  style={{ animationDelay: "0.8s" }}
                >
                  <Smartphone size={30} className="text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold mb-3">Mobile Development</h4>
                <p className="text-muted-foreground">Building cross-platform mobile applications that deliver exceptional user experiences</p>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <motion.div 
                className="flex flex-col items-center text-center p-6 bg-card/70 backdrop-blur-sm rounded-2xl border border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all h-full"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  variants={floatVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-400 flex items-center justify-center mb-5 transform transition-transform"
                  style={{ animationDelay: "1.2s" }}
                >
                  <Sparkles size={30} className="text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold mb-3">UI/UX Design</h4>
                <p className="text-muted-foreground">Crafting beautiful and intuitive user experiences that delight and engage</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech stack section */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            My Tech Stack
          </h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: 'React', icon: <Zap /> },
              { name: 'Node.js', icon: <Server /> },
              { name: 'TypeScript', icon: <Code /> },
              { name: 'MongoDB', icon: <Database /> },
              { name: 'Next.js', icon: <Layers /> },
              { name: 'Tailwind', icon: <Sparkles /> },
              { name: 'GraphQL', icon: <CircuitBoard /> },
              { name: 'Git', icon: <GitBranch /> }
            ].map((tech) => (
              <motion.div 
                key={tech.name}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-md border border-primary/20 group-hover:border-primary transition-colors">
                  <div className="text-primary">{tech.icon}</div>
                </div>
                <p className="mt-2 text-sm font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
