
import { Card } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: bioRef, isVisible: isBioVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: isCard1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: isCard2Visible } = useScrollAnimation();
  const { ref: card3Ref, isVisible: isCard3Visible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 pb-2 border-b-2 border-primary inline-block">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div 
            ref={bioRef} 
            className={`lg:col-span-2 space-y-6 ${isBioVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <p className="text-lg">
              Hello! I'm Ahmed, a web developer passionate about building digital experiences that are both beautiful and functional. 
              My journey in web development began with a curiosity about how websites work, which led me to dive deep into 
              programming and design.
            </p>
            
            <p className="text-lg">
              I enjoy working with modern technologies and frameworks to create responsive, user-friendly applications. 
              Whether it's frontend development, backend systems, or full-stack solutions, I approach each project 
              with enthusiasm and attention to detail.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you might find me exploring new technologies, contributing to open source, 
              or seeking inspiration from the work of fellow developers and designers.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">My development philosophy:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Write clean, maintainable code</li>
                <li>Create intuitive user experiences</li>
                <li>Build with performance and accessibility in mind</li>
                <li>Continuously learn and adapt to new technologies</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <Card 
              ref={card1Ref}
              className={`p-6 shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${isCard1Visible ? 'animate-slide-in' : 'opacity-0'}`}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">Education</h3>
              <p className="font-medium">Computer Science</p>
              <p className="text-muted-foreground">University Name, 2018-2022</p>
            </Card>
            
            <Card 
              ref={card2Ref}
              className={`p-6 shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${isCard2Visible ? 'animate-slide-in' : 'opacity-0'} delay-100`}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">Experience</h3>
              <p className="font-medium">Web Developer</p>
              <p className="text-muted-foreground">Company Name, 2022-Present</p>
            </Card>
            
            <Card 
              ref={card3Ref}
              className={`p-6 shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${isCard3Visible ? 'animate-slide-in' : 'opacity-0'} delay-200`}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">Interests</h3>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-secondary px-3 py-1 rounded-full text-sm">Web Development</li>
                <li className="bg-secondary px-3 py-1 rounded-full text-sm">UI/UX Design</li>
                <li className="bg-secondary px-3 py-1 rounded-full text-sm">Open Source</li>
                <li className="bg-secondary px-3 py-1 rounded-full text-sm">New Technologies</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
