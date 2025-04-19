
import React from 'react';
import { Card } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart, Link as LinkIcon, Github, Cpu, Code, Brain, LineChart, Sparkles, Rocket, Star } from 'lucide-react';

const About = () => {
  const { ref: bioRef, isVisible: isBioVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: isCard1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: isCard2Visible } = useScrollAnimation();
  const { ref: card3Ref, isVisible: isCard3Visible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding px-6 md:px-10 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background z-0"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 pb-2 border-b-2 border-primary inline-block gradient-text">
            About Me <span className="text-theme-yellow">✨</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          <motion.div 
            ref={bioRef} 
            className="lg:col-span-2 space-y-6 glass-effect p-8 rounded-xl shadow-neon-sm hover:shadow-neon-md transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Cpu className="h-6 w-6 text-theme-yellow" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-theme-yellow">Ahmed Kayani</h3>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="flex items-start gap-2">
                <Rocket className="h-5 w-5 mt-1 text-theme-yellow" />
                A passionate Software Developer with over 2 years of experience in building intelligent solutions and scalable applications 🚀
              </p>
              
              <p className="flex items-start gap-2">
                <Brain className="h-5 w-5 mt-1 text-theme-yellow" />
                Expert in Python backend development, with a focus on AI/ML solutions and developing intelligent AI agents that solve real-world problems 🤖
              </p>
              
              <p className="flex items-start gap-2">
                <Star className="h-5 w-5 mt-1 text-theme-yellow" />
                Created multiple successful projects including ChatterSphere - a real-time chat application with Django and WebSockets, showcasing expertise in building interactive applications ⭐
              </p>

              <p className="flex items-start gap-2">
                <LineChart className="h-5 w-5 mt-1 text-theme-yellow" />
                Skilled in developing RESTful APIs, database design, and implementing scalable architectures using modern technologies like FastAPI and PostgreSQL 📈
              </p>

              <p className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 mt-1 text-theme-yellow" />
                Currently leading the development of AgroConnect, an innovative agricultural technology platform, and building AI-powered review analysis systems that leverage cutting-edge NLP techniques ✨
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-theme-yellow/90 italic">
                "Passionate about creating technology that makes a difference and continuously exploring new ways to push the boundaries of what's possible with AI and software development."
              </p>
            </div>
          </motion.div>
          
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card 
                ref={card1Ref}
                className="p-6 backdrop-blur-sm bg-card/90 border border-primary/10 overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-500/10 p-2 rounded-full text-blue-500 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary group-hover:translate-x-1 transition-transform">Education</h3>
                </div>
                <p className="font-medium mt-2">Software Engineering</p>
                <p className="text-muted-foreground">University of Gujrat, 2021-present</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card 
                ref={card2Ref}
                className="p-6 backdrop-blur-sm bg-card/90 border border-primary/10 overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-500/10 p-2 rounded-full text-green-500 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary group-hover:translate-x-1 transition-transform">Experience</h3>
                </div>
                <p className="font-medium mt-2">Software Developer</p>
                <p className="text-muted-foreground">Self-Employed, 2023-Present</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card 
                ref={card3Ref}
                className="p-6 backdrop-blur-sm bg-card/90 border border-primary/10 overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-rose-500/10 p-2 rounded-full text-rose-500 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary group-hover:translate-x-1 transition-transform">Interests</h3>
                </div>
                <ul className="flex flex-wrap gap-2 mt-3">
                  {[
                    "Python Development",
                    "Backend Development",
                    "ML & AI Development",
                    "AI Agent Development",
                    "LLMs & NLP",
                    "System Design"
                  ].map((interest, i) => (
                    <li 
                      key={i} 
                      className="bg-secondary/80 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-primary/20 hover:scale-105 hover:shadow-sm cursor-default"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
