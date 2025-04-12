
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref: titleRef, isVisible: isTitleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: isFormVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: isInfoVisible } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: 'Thank you for reaching out. I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding px-6 md:px-10 bg-theme-charcoal/20">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef} 
          className={`mb-10 ${isTitleVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 pb-2 border-b-2 border-theme-teal inline-block text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-white/70 mt-2">
            Have a question or want to work together?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div 
            ref={formRef} 
            className={`lg:col-span-2 ${isFormVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <Card className="p-6 bg-theme-charcoal/30 border border-theme-teal/20 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium text-white">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-theme-charcoal/20 border-theme-teal/30 text-white placeholder-white/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium text-white">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="bg-theme-charcoal/20 border-theme-teal/30 text-white placeholder-white/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium text-white">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="bg-theme-charcoal/20 border-theme-teal/30 text-white placeholder-white/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="min-h-[150px] bg-theme-charcoal/20 border-theme-teal/30 text-white placeholder-white/50"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-theme-teal text-theme-charcoal hover:bg-theme-teal/90" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
          
          <div 
            ref={infoRef} 
            className={`lg:col-span-1 ${isInfoVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
          >
            <Card className="p-6 bg-theme-charcoal/30 border border-theme-teal/20 shadow-lg h-full">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-theme-teal/20 mr-3">
                    <Mail size={20} className="text-theme-teal" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:ahmed@example.com" className="text-theme-teal hover:underline">
                      ahmed@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-theme-teal/20 mr-3">
                    <Phone size={20} className="text-theme-teal" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+1234567890" className="text-theme-teal hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-theme-teal/20 mr-3">
                    <MapPin size={20} className="text-theme-teal" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-white/70">New York, USA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4 text-white">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/ahmed2231web" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-theme-teal/20 hover:bg-theme-teal hover:text-theme-charcoal transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} className="text-theme-teal hover:text-theme-charcoal" />
                  </a>
                  <a 
                    href="https://linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-theme-teal/20 hover:bg-theme-teal hover:text-theme-charcoal transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="text-theme-teal hover:text-theme-charcoal" />
                  </a>
                  <a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-theme-teal/20 hover:bg-theme-teal hover:text-theme-charcoal transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} className="text-theme-teal hover:text-theme-charcoal" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
