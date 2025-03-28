
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, Users, Target, Building, Award, GraduationCap } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
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
    
    // 3D effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!aboutRef.current) return;
      
      const cards = aboutRef.current.querySelectorAll('.card-3d');
      const particles = aboutRef.current.querySelectorAll('.particle');
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 30;
        const angleY = (centerX - x) / 30;
        
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });
      
      particles.forEach((particle, index) => {
        const speed = 0.05 + (index % 3) * 0.02;
        const x = (window.innerWidth / 2 - e.pageX) * speed;
        const y = (window.innerHeight / 2 - e.pageY) * speed;
        (particle as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
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
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-${3 + (i % 3) * 2} h-${3 + (i % 3) * 2} rounded-full bg-education-primary/30 particle`}
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
              Our Mission & Vision
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              We're on a mission to democratize education through AI and make personalized learning accessible to everyone.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section ref={aboutRef} className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Transforming Education Through AI</h2>
              <p className="text-muted-foreground mb-6">
                At KariWise, we believe that quality education should be accessible to everyone, regardless of their background or circumstances. Our AI-powered platform breaks down barriers to learning by providing personalized, adaptive education that meets each student where they are.
              </p>
              <p className="text-muted-foreground mb-6">
                Founded in 2023 by the Renukiran Welfare Foundation, KariWise combines cutting-edge artificial intelligence with educational expertise to create a learning experience that adapts to each student's unique needs, learning style, and pace.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="neo-glassmorphism p-4 rounded-xl">
                  <div className="mb-2 text-education-primary">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-medium mb-1">10,000+</h3>
                  <p className="text-sm text-muted-foreground">Students Helped</p>
                </div>
                
                <div className="neo-glassmorphism p-4 rounded-xl">
                  <div className="mb-2 text-education-primary">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="font-medium mb-1">95%</h3>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </div>
            
            <div className="perspective-container animate-on-scroll order-1 lg:order-2">
              <div className="neo-glassmorphism p-8 relative overflow-hidden card-3d">
                <div className="card-inner">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-education-primary/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-education-secondary/20 rounded-full blur-3xl"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3" 
                    alt="Advanced technology" 
                    className="w-full h-auto rounded-lg mb-6 shadow-lg depth-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at KariWise, from product development to student interactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neo-glassmorphism p-8 rounded-xl animate-on-scroll">
              <div className="h-14 w-14 rounded-xl bg-education-primary/10 text-education-primary flex items-center justify-center mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe quality education should be accessible to all, regardless of location, background, or financial status.
              </p>
            </div>
            
            <div className="neo-glassmorphism p-8 rounded-xl animate-on-scroll animation-delay-300">
              <div className="h-14 w-14 rounded-xl bg-education-primary/10 text-education-primary flex items-center justify-center mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalization</h3>
              <p className="text-muted-foreground">
                Every student is unique, and we tailor our approach to match individual learning styles, paces, and goals.
              </p>
            </div>
            
            <div className="neo-glassmorphism p-8 rounded-xl animate-on-scroll animation-delay-500">
              <div className="h-14 w-14 rounded-xl bg-education-primary/10 text-education-primary flex items-center justify-center mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously evolve our technology and teaching methods to provide the most effective learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-education-secondary/5 via-transparent to-education-primary/5 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate educators, technologists, and visionaries behind KariWise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neo-glassmorphism p-6 rounded-xl animate-on-scroll">
              <div className="relative mb-6 perspective-container">
                <div className="h-48 bg-education-primary/10 rounded-lg overflow-hidden card-3d">
                  <div className="card-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Aanya Sharma</h3>
              <p className="text-sm text-education-primary mb-3">Founder & CEO</p>
              <p className="text-muted-foreground text-sm">
                Former professor with a vision to democratize education through technology and innovation.
              </p>
            </div>
            
            <div className="neo-glassmorphism p-6 rounded-xl animate-on-scroll animation-delay-300">
              <div className="relative mb-6 perspective-container">
                <div className="h-48 bg-education-primary/10 rounded-lg overflow-hidden card-3d">
                  <div className="card-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Vikram Mehta</h3>
              <p className="text-sm text-education-primary mb-3">CTO</p>
              <p className="text-muted-foreground text-sm">
                AI researcher and engineer with expertise in machine learning and educational technology.
              </p>
            </div>
            
            <div className="neo-glassmorphism p-6 rounded-xl animate-on-scroll animation-delay-500">
              <div className="relative mb-6 perspective-container">
                <div className="h-48 bg-education-primary/10 rounded-lg overflow-hidden card-3d">
                  <div className="card-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Priya Kapoor</h3>
              <p className="text-sm text-education-primary mb-3">Chief Education Officer</p>
              <p className="text-muted-foreground text-sm">
                Educational psychologist with 15+ years of experience in curriculum development and instructional design.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button>
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
      
      {/* Partners section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We collaborate with leading educational institutions and organizations to bring the best learning resources to our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-center p-6 neo-glassmorphism rounded-xl animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="h-16 w-16 flex items-center justify-center">
                  {i % 5 === 0 && <Building className="h-12 w-12 text-muted-foreground" />}
                  {i % 5 === 1 && <Award className="h-12 w-12 text-muted-foreground" />}
                  {i % 5 === 2 && <GraduationCap className="h-12 w-12 text-muted-foreground" />}
                  {i % 5 === 3 && <Building className="h-12 w-12 text-muted-foreground" />}
                  {i % 5 === 4 && <Award className="h-12 w-12 text-muted-foreground" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
