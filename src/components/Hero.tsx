
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypingEffect from './TypingEffect';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { ref: subtitleRef, isVisible: isSubtitleVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const { ref: ctaRef, isVisible: isCtaVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-10 bg-gradient-to-br from-background to-secondary/30"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col space-y-8 md:space-y-10">
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-medium text-primary animate-fade-in">
              Hi, my name is
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold animate-slide-in-left">
              Ahmed.
            </h1>
            <h2 className="text-3xl md:text-5xl font-medium text-muted-foreground animate-slide-in-right">
              I <TypingEffect texts={[
                "build for the web.",
                "create user experiences.",
                "solve problems.",
                "turn ideas into reality."
              ]} />
            </h2>
          </div>

          <div 
            ref={subtitleRef}
            className={`max-w-xl text-lg md:text-xl text-muted-foreground ${isSubtitleVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            I'm a passionate web developer focused on creating exceptional digital experiences. 
            Currently, I specialize in building responsive, accessible, and performant web applications.
          </div>

          <div 
            ref={ctaRef}
            className={`flex flex-col sm:flex-row gap-4 ${isCtaVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <a href="#projects">
              <Button size="lg">View My Work</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">Get In Touch</Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2 text-muted-foreground">Scroll</span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
