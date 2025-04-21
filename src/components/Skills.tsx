import { motion } from 'framer-motion';
import { Brain, Cpu, Code, Zap, Layers, Database, Server, Globe } from 'lucide-react';
import { useState } from 'react';

const SKILLS = [
  {
    area: "Backend",
    icon: "cpu",
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "REST APIs",
      "Databases",
      "PostgreSQL",
      "SQLite",
    ]
  },
  {
    area: "AI / ML",
    icon: "brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "NLP",
      "OpenAI & LLMs",
      "Scikit-learn",
    ]
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(SKILLS[0].area);
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain':
        return <Brain className="w-5 h-5" />;
      case 'cpu':
        return <Cpu className="w-5 h-5" />;
      case 'code':
        return <Code className="w-5 h-5" />;
      case 'zap':
        return <Zap className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-10 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 tech-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 circuit-overlay opacity-30 pointer-events-none"></div>
      
      {/* Animated elements */}
      <motion.div
        className="absolute top-40 left-20 w-40 h-40 rounded-full bg-theme-yellow/5 blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text-yellow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-theme-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My expertise spans across various technologies, with a focus on backend development and AI/ML.
          </motion.p>
        </div>
        
        {/* Skills tabs */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-4">
            {SKILLS.map((skillGroup) => (
              <motion.button
                key={skillGroup.area}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeTab === skillGroup.area 
                    ? 'bg-theme-yellow text-black font-medium shadow-lg shadow-theme-yellow/20' 
                    : 'bg-white/5 text-theme-white/70 hover:bg-white/10'
                }`}
                onClick={() => setActiveTab(skillGroup.area)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {getIcon(skillGroup.icon)}
                {skillGroup.area}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Skills content */}
        <div className="relative">
          {SKILLS.map((skillGroup) => (
            <motion.div
              key={skillGroup.area}
              className={`${activeTab === skillGroup.area ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skillGroup.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="bg-white/5 backdrop-blur-sm border border-theme-yellow/20 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-theme-yellow/10 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-12 h-12 rounded-full bg-theme-yellow/10 flex items-center justify-center mb-3">
                      {skill.includes("Database") ? (
                        <Database className="w-6 h-6 text-theme-yellow" />
                      ) : skill.includes("API") ? (
                        <Server className="w-6 h-6 text-theme-yellow" />
                      ) : skill.includes("Python") ? (
                        <Code className="w-6 h-6 text-theme-yellow" />
                      ) : skill.includes("ML") || skill.includes("Learning") ? (
                        <Brain className="w-6 h-6 text-theme-yellow" />
                      ) : (
                        <Globe className="w-6 h-6 text-theme-yellow" />
                      )}
                    </div>
                    <h3 className="text-theme-white font-medium">{skill}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 border border-theme-yellow/20 w-16 h-16 rounded-md"></div>
        <div className="absolute top-20 right-20 border border-theme-yellow/20 w-24 h-8"></div>
      </div>
    </section>
  );
};

export default Skills;
