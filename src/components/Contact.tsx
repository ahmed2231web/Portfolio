import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, MapPin, Phone, Github, Linkedin, SendHorizonal } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  // Animation hooks
  const { ref: titleRef, isVisible: isTitleVisible } = useScrollAnimation();
  const { ref: formContainerRef, isVisible: isFormVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: isInfoVisible } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);

    try {
      // Create the data object in the format FormSubmit expects
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _subject: "New Portfolio Contact Message",
        _captcha: "false",
        _template: "table",
        _autoresponse: "Thank you for contacting Ahmed. I will get back to you soon!"
      };

      // Send the form data using fetch API
      const response = await fetch('https://formsubmit.co/ajax/attaahmed5656@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
      });

      if (response.ok) {
        // Show success toast
        toast({
          title: 'Message sent!',
          description: 'Your message has been sent successfully. I will get back to you soon.',
        });

        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setIsSuccess(true);

        // Reset success state after a few seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(`Failed to send message`);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      
      // Fallback to mailto if FormSubmit fails
      try {
        const subject = encodeURIComponent("Contact from Portfolio");
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        
        window.location.href = `mailto:attaahmed5656@gmail.com?subject=${subject}&body=${body}`;
        
        toast({
          title: 'Using email client instead',
          description: 'We encountered an issue with direct email. Your email client has been opened instead.',
        });
      } catch (mailtoError) {
        toast({
          title: 'Message failed to send',
          description: 'There was an error sending your message. Please try again later or contact me directly.',
          variant: 'destructive',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.01,
      boxShadow: "0 0 0 2px rgba(253, 238, 48, 0.3)",
      borderColor: "rgba(253, 238, 48, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return <section id="contact" className="section-padding px-6 md:px-10 bg-black relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 tech-pattern opacity-10"></div>
    <div className="absolute inset-0 circuit-overlay opacity-20"></div>
    
    {/* Animated background blobs */}
    <motion.div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-theme-yellow/5 blur-3xl" animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.3, 0.2]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
    <motion.div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-theme-yellow/5 blur-3xl" animate={{
      scale: [1.2, 1, 1.2],
      opacity: [0.2, 0.3, 0.2]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }} />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div ref={titleRef} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: isTitleVisible ? 1 : 0,
        y: isTitleVisible ? 0 : 20
      }} transition={{
        duration: 0.6
      }} className="mb-12 text-center">
        <span className="inline-block relative mb-2">
          <span className="absolute -inset-1 rounded-full blur-md bg-theme-yellow/20"></span>
          <Mail className="w-8 h-8 text-theme-yellow relative" />
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text-yellow-soft neon-glow-softer">
          Get In Touch
        </h2>
        <p className="text-lg text-white/70 mt-2 max-w-xl mx-auto">
          Have a question or want to work together? Send me a message and let's create something amazing together.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-theme-yellow via-white to-theme-yellow/30 mx-auto mt-6 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div ref={formContainerRef} initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: isFormVisible ? 1 : 0,
          x: isFormVisible ? 0 : -50
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="lg:col-span-2">
          <Card className="relative overflow-hidden border border-white/10 bg-black shadow-xl">
            {/* Gradient border effect */}
            <div className="absolute inset-0 p-[1px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-theme-yellow/30 via-transparent to-theme-yellow/20 opacity-50"></div>
            </div>
            
            {/* Content */}
            <div className="relative p-6">
              {isSuccess ? <motion.div initial={{
                opacity: 0,
                scale: 0.5
              }} animate={{
                opacity: 1,
                scale: 1
              }} className="py-12 flex flex-col items-center justify-center text-center">
                <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-theme-yellow/20 to-green-500/20">
                  <CheckCircle2 className="w-12 h-12 text-theme-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/70">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div> : <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div className="space-y-2" whileHover="focus" initial="initial">
                    <label htmlFor="name" className="block font-medium text-white/90">
                      Name
                    </label>
                    <motion.div variants={inputVariants}>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="bg-black/50 border-white/10 text-white placeholder-white/40 focus:border-theme-yellow/50 focus:ring-theme-yellow/30 transition-all" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div className="space-y-2" whileHover="focus" initial="initial">
                    <label htmlFor="email" className="block font-medium text-white/90">
                      Email
                    </label>
                    <motion.div variants={inputVariants}>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required className="bg-black/50 border-white/10 text-white placeholder-white/40 focus:border-theme-yellow/50 focus:ring-theme-yellow/30 transition-all" />
                    </motion.div>
                  </motion.div>
                </div>
                
                <motion.div className="space-y-2" whileHover="focus" initial="initial">
                  <label htmlFor="subject" className="block font-medium text-white/90">
                    Subject
                  </label>
                  <motion.div variants={inputVariants}>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="bg-black/50 border-white/10 text-white placeholder-white/40 focus:border-theme-yellow/50 focus:ring-theme-yellow/30 transition-all" />
                  </motion.div>
                </motion.div>
                
                <motion.div className="space-y-2" whileHover="focus" initial="initial">
                  <label htmlFor="message" className="block font-medium text-white/90">
                    Message
                  </label>
                  <motion.div variants={inputVariants}>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message" required className="min-h-[150px] bg-black/50 border-white/10 text-white placeholder-white/40 focus:border-theme-yellow/50 focus:ring-theme-yellow/30 transition-all resize-none" />
                  </motion.div>
                </motion.div>
                
                <motion.div whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }}>
                  <Button type="submit" className="w-full bg-theme-yellow text-black hover:bg-theme-yellow/90 font-medium py-6 flex items-center justify-center gap-2 relative overflow-hidden group" disabled={isSubmitting}>
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <SendHorizonal className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-theme-yellow via-amber-400 to-theme-yellow opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </motion.div>
              </form>}
            </div>
          </Card>
        </motion.div>
        
        <motion.div ref={infoRef} initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: isInfoVisible ? 1 : 0,
          x: isInfoVisible ? 0 : 50
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
          <Card className="relative overflow-hidden border border-white/10 bg-black shadow-xl h-full">
            {/* Gradient border effect */}
            <div className="absolute inset-0 p-[1px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-theme-yellow/30 via-transparent to-theme-yellow/20 opacity-50"></div>
            </div>
            
            {/* Content */}
            <div className="relative p-6">
              <h3 className="text-xl font-bold mb-8 text-white/90 border-b border-white/10 pb-3">Contact Information</h3>
              
              <div className="space-y-8">
                <motion.div className="flex items-start" whileHover={{
                  x: 5
                }} transition={{
                  type: "spring",
                  stiffness: 400
                }}>
                  <motion.div className="flex items-center justify-center w-10 h-10 rounded-full bg-theme-yellow/20 mr-4" whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(253, 238, 48, 0.3)"
                }}>
                    <Mail size={18} className="text-theme-yellow" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-white/90">Email</p>
                    <a href="mailto:attaahmed6655@gmail.com" className="text-theme-yellow hover:underline">
                      attaahmed6655@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" whileHover={{
                  x: 5
                }} transition={{
                  type: "spring",
                  stiffness: 400
                }}>
                  <motion.div className="flex items-center justify-center w-10 h-10 rounded-full bg-theme-yellow/20 mr-4" whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(253, 238, 48, 0.3)"
                }}>
                    <Phone size={18} className="text-theme-yellow" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-white/90">Phone</p>
                    <a href="tel:+923055968655" className="text-theme-yellow hover:underline">+92 310 5569835</a>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" whileHover={{
                  x: 5
                }} transition={{
                  type: "spring",
                  stiffness: 400
                }}>
                  <motion.div className="flex items-center justify-center w-10 h-10 rounded-full bg-theme-yellow/20 mr-4" whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(253, 238, 48, 0.3)"
                }}>
                    <MapPin size={18} className="text-theme-yellow" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-white/90">Location</p>
                    <p className="text-white/70">Jhelum, Pakistan</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4 text-white/90">Connect with me</h4>
                <div className="flex space-x-4">
                  <motion.a href="https://github.com/ahmed2231web" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-theme-yellow/20 transition-colors relative overflow-hidden group" whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.95
                }} aria-label="GitHub">
                    <span className="absolute inset-0 bg-theme-yellow opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <Github size={18} className="text-theme-yellow group-hover:text-black relative z-10" />
                  </motion.a>
                  <motion.a href="https://www.linkedin.com/in/ahmed-kayani-10ba94224" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-theme-yellow/20 transition-colors relative overflow-hidden group" whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.95
                }} aria-label="LinkedIn">
                    <span className="absolute inset-0 bg-theme-yellow opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <Linkedin size={18} className="text-theme-yellow group-hover:text-black relative z-10" />
                  </motion.a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Contact;
