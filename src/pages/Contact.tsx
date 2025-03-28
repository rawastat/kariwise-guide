
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setSubmitted(true);
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset submitted state after a while
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };
  
  // 3D and animation effects
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    // 3D tilt effect for contact form
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('mousemove', (e: any) => {
        const card = contactForm as HTMLElement;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 40;
        const angleY = (centerX - x) / 40;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });
      
      contactForm.addEventListener('mouseleave', () => {
        const card = contactForm as HTMLElement;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.transition = 'transform 0.5s ease';
      });
    }
    
    // Particle effect for contact info cards
    const cards = document.querySelectorAll('.contact-info-card');
    document.addEventListener('mousemove', (e) => {
      cards.forEach((card, index) => {
        const speed = 0.02 + (index % 3) * 0.01;
        const x = (window.innerWidth / 2 - e.pageX) * speed;
        const y = (window.innerHeight / 2 - e.pageY) * speed;
        (card as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-education-primary/10 via-transparent to-education-secondary/10 pointer-events-none"></div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-${3 + (i % 3) * 2} h-${3 + (i % 3) * 2} rounded-full bg-education-primary/20 particle`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animated-gradient-text">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Have questions about KariWise? Our team is here to help you with anything you need.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="animate-on-scroll">
              <Card className="neo-glassmorphism p-8 contact-form">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="neo-glassmorphism border-white/20"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="neo-glassmorphism border-white/20"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="neo-glassmorphism border-white/20 min-h-[120px]"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full group" disabled={submitted}>
                      {submitted ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" /> Message Sent
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
            
            {/* Contact info */}
            <div className="space-y-8">
              <div className="neo-glassmorphism p-6 rounded-xl contact-info-card animate-on-scroll">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-education-primary/10 text-education-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground mb-2">Our friendly team is here to help.</p>
                    <a href="mailto:info@kariwise.org" className="text-education-primary hover:underline">
                      info@kariwise.org
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="neo-glassmorphism p-6 rounded-xl contact-info-card animate-on-scroll animation-delay-300">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-education-primary/10 text-education-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground mb-2">Mon-Fri from 9am to 5pm.</p>
                    <a href="tel:+911234567890" className="text-education-primary hover:underline">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="neo-glassmorphism p-6 rounded-xl contact-info-card animate-on-scroll animation-delay-500">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-education-primary/10 text-education-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                    <p className="text-muted-foreground mb-2">Come say hello at our office.</p>
                    <address className="not-italic text-education-primary">
                      Renukiran Welfare Foundation<br />
                      New Delhi, India
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="neo-glassmorphism p-6 rounded-xl overflow-hidden animate-on-scroll animation-delay-700">
                <div className="aspect-video rounded-lg bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4095113118073!2d77.20656851508095!3d28.54571798245054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26f903969d7%3A0x8983d1eb4e53456d!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1620172799701!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-16 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-education-secondary/5 via-transparent to-education-primary/5 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about KariWise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="neo-glassmorphism p-6 rounded-xl animate-on-scroll">
              <h3 className="text-lg font-medium mb-2">Is KariWise available for all age groups?</h3>
              <p className="text-muted-foreground">
                Yes, KariWise offers tailored learning experiences for students of all ages, from primary school to higher education.
              </p>
            </div>
            
            <div className="neo-glassmorphism p-6 rounded-xl animate-on-scroll animation-delay-300">
              <h3 className="text-lg font-medium mb-2">How does the AI tutor work?</h3>
              <p className="text-muted-foreground">
                Our AI tutor analyzes your learning patterns, strengths, and areas for improvement to provide personalized guidance and support.
              </p>
            </div>
            
            <div className="neo-glassmorphism p-6 rounded-xl animate-on-scroll animation-delay-500">
              <h3 className="text-lg font-medium mb-2">Do you offer a free trial?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 14-day free trial so you can experience the full benefits of KariWise before committing.
              </p>
            </div>
            
            <div className="neo-glassmorphism p-6 rounded-xl animate-on-scroll animation-delay-700">
              <h3 className="text-lg font-medium mb-2">How secure is my data on KariWise?</h3>
              <p className="text-muted-foreground">
                We take data security seriously. All data is encrypted and stored securely, and we never share your information with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
