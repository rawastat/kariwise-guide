
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BrainCircuit, BookOpen, BarChart, Map, ChevronRight, Sparkles, GitBranch, Bot } from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer for animations
  useEffect(() => {
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
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => observer.observe(card));
    
    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!featuresRef.current) return;
      
      const cards = featuresRef.current.querySelectorAll('.neo-glassmorphism');
      const particles = featuresRef.current.querySelectorAll('.particle');
      
      cards.forEach((card) => {
        const speed = 0.04;
        const x = (window.innerWidth / 2 - e.pageX) * speed;
        const y = (window.innerHeight / 2 - e.pageY) * speed;
        (card as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px) perspective(1000px) rotateX(${y * 0.02}deg) rotateY(${-x * 0.02}deg)`;
      });
      
      particles.forEach((particle, index) => {
        const speed = 0.05 + (index % 3) * 0.03;
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
          {[...Array(10)].map((_, i) => (
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
              Advanced AI Features
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Discover how KariWise uses cutting-edge AI technology to transform the educational experience and make learning more personalized than ever.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main features section */}
      <section ref={featuresRef} className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Tutor */}
            <Card className="neo-glassmorphism p-6 feature-card">
              <div className="h-14 w-14 rounded-xl bg-education-primary/10 text-education-primary flex items-center justify-center mb-6">
                <Bot className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Personal Tutor</h3>
              <p className="text-muted-foreground mb-4">
                Receive personalized tutoring 24/7 with our AI that adapts to your learning style and pace, providing customized explanations and examples.
              </p>
              <Button variant="ghost" className="group mt-2">
                Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
            
            {/* Adaptive Learning */}
            <Card className="neo-glassmorphism p-6 feature-card">
              <div className="h-14 w-14 rounded-xl bg-education-primary/10 text-education-primary flex items-center justify-center mb-6">
                <BrainCircuit className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Adaptive Learning</h3>
              <p className="text-muted-foreground mb-4">
                Our AI dynamically adjusts content difficulty based on your performance, ensuring you're always being challenged at the right level.
              </p>
              <Button variant="ghost" className="group mt-2">
                Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
            
            {/* Interactive Study Materials */}
            <Card className="neo-glassmorphism p-6 feature-card">
              <div className="h-14 w-14 rounded-xl bg-education-primary/10 text-education-primary flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Content</h3>
              <p className="text-muted-foreground mb-4">
                Engage with interactive 3D models, simulations, and exercises that make complex concepts easier to understand and remember.
              </p>
              <Button variant="ghost" className="group mt-2">
                Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
            
            {/* Progress Tracking */}
            <Card className="neo-glassmorphism p-6 feature-card">
              <div className="h-14 w-14 rounded-xl bg-education-primary/10 text-education-primary flex items-center justify-center mb-6">
                <BarChart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Track your learning progress with detailed analytics, identify strengths and weaknesses, and receive recommendations for improvement.
              </p>
              <Button variant="ghost" className="group mt-2">
                Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
            
            {/* Career Mapping */}
            <Card className="neo-glassmorphism p-6 feature-card">
              <div className="h-14 w-14 rounded-xl bg-education-primary/10 text-education-primary flex items-center justify-center mb-6">
                <Map className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Pathfinder</h3>
              <p className="text-muted-foreground mb-4">
                Discover potential career paths based on your interests, strengths, and learning patterns with our AI-powered career guidance system.
              </p>
              <Button variant="ghost" className="group mt-2">
                Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
            
            {/* Smart Recommendations */}
            <Card className="neo-glassmorphism p-6 feature-card">
              <div className="h-14 w-14 rounded-xl bg-education-primary/10 text-education-primary flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Recommendations</h3>
              <p className="text-muted-foreground mb-4">
                Receive personalized content recommendations based on your interests, learning history, and goals to maximize your educational journey.
              </p>
              <Button variant="ghost" className="group mt-2">
                Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Advanced AI section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-education-secondary/10 via-transparent to-education-primary/10 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Advanced AI Technology</h2>
              <p className="text-muted-foreground mb-8">
                KariWise leverages the latest advancements in artificial intelligence to create a truly personalized learning experience:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-education-primary/10 text-education-primary flex items-center justify-center flex-shrink-0">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Natural Language Processing</h3>
                    <p className="text-muted-foreground">Our AI understands and responds to natural language, making interactions feel conversational and intuitive.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-education-primary/10 text-education-primary flex items-center justify-center flex-shrink-0">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Machine Learning</h3>
                    <p className="text-muted-foreground">The system continuously learns from student interactions to improve recommendations and teaching methods.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-education-primary/10 text-education-primary flex items-center justify-center flex-shrink-0">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Neural Networks</h3>
                    <p className="text-muted-foreground">Advanced neural networks analyze learning patterns to identify optimal teaching methods for each student.</p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8">
                Explore AI Features
              </Button>
            </div>
            
            <div className="perspective-container animate-on-scroll">
              <div className="neo-glassmorphism p-8 relative overflow-hidden card-3d">
                <div className="card-inner">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-education-primary/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-education-secondary/20 rounded-full blur-3xl"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3" 
                    alt="Student using AI learning platform" 
                    className="w-full h-auto rounded-lg mb-6 shadow-lg depth-1"
                  />
                  
                  <div className="space-y-3">
                    <div className="h-3 bg-education-primary/30 rounded-full w-full"></div>
                    <div className="h-3 bg-education-primary/20 rounded-full w-4/5"></div>
                    <div className="h-3 bg-education-primary/10 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features;
