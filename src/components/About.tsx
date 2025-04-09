
import { Card } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
  const { ref: bioRef, isVisible: isBioVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: isCard1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: isCard2Visible } = useScrollAnimation();
  const { ref: card3Ref, isVisible: isCard3Visible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding px-6 md:px-10 relative overflow-hidden">
      {/* Background elements */}
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
            About Me
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          <motion.div 
            ref={bioRef} 
            className="lg:col-span-2 space-y-6 glass-effect p-6 rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Ahmed</h3>
            </div>
            
            <p className="text-lg leading-relaxed">
              Hello! I'm Ahmed, a passionate web developer creating responsive and user-friendly applications 
              with clean, maintainable code. I focus on delivering exceptional digital experiences that 
              combine beautiful design with optimal performance.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 p-1 rounded-full mr-2">
                  <span className="block h-2 w-2 rounded-full bg-primary"></span>
                </span>
                My development philosophy:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {["Write clean, maintainable code", "Create intuitive user experiences", 
                  "Build with performance in mind", "Focus on accessibility & inclusion"].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center bg-secondary/50 rounded-lg p-3 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <span className="text-primary mr-2">•</span> {item}
                  </motion.li>
                ))}
              </ul>
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
                <p className="font-medium mt-2">Computer Science</p>
                <p className="text-muted-foreground">University Name, 2018-2022</p>
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
                <p className="font-medium mt-2">Web Developer</p>
                <p className="text-muted-foreground">Company Name, 2022-Present</p>
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
                  {["Web Development", "UI/UX Design", "Open Source", "New Technologies"].map((interest, i) => (
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
