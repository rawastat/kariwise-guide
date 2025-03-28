
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Star, GraduationCap, BrainCircuit, Sparkles } from 'lucide-react';

const Hero = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate position relative to the center of the screen
      const moveX = (clientX - windowWidth / 2) / 25;
      const moveY = (clientY - windowHeight / 2) / 25;
      
      // Apply the transform - subtle movement for 3D effect
      orbRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section className="relative min-h-[90vh] flex items-center py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 -z-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-education-primary/30 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-education-secondary/30 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-education-accent/20 rounded-full blur-[80px] -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism text-education-primary text-sm font-medium animate-fade-in">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="bg-gradient-education bg-clip-text text-transparent font-semibold">AI-Powered Learning Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Your Personal <span className="text-gradient relative">
                AI Learning Guide
                <span className="absolute -inset-1 bg-education-primary/10 blur-md rounded-lg -z-10"></span>
              </span> and Career Assistant
            </h1>
            
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              An intelligent educational platform that adapts to your learning style, helps with your studies, and guides your career path with personalized recommendations.
            </p>
            
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-education-primary flex-shrink-0 mt-0.5" />
                <p>Personalized learning based on your IQ, interests & syllabus</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-education-primary flex-shrink-0 mt-0.5" />
                <p>24/7 AI chatbot & voice assistant for instant help</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-education-primary flex-shrink-0 mt-0.5" />
                <p>Career guidance & preparation for government exams</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button size="lg" className="bg-gradient-education hover:opacity-90 transition-all shadow-lg shadow-education-primary/20" asChild>
                <Link to="/signup" className="flex items-center gap-2">
                  Get Started Free
                  <Sparkles className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="glassmorphism border-education-primary/20 hover:bg-education-primary/5" asChild>
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
          </div>
          
          {/* Hero 3D-looking illustration */}
          <div className="lg:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div ref={orbRef} className="relative z-10 transition-transform duration-300 ease-out">
              <div className="absolute -inset-10 bg-gradient-to-r from-education-primary/20 to-education-secondary/20 blur-3xl rounded-full -z-10"></div>
              <div className="neo-glassmorphism rounded-2xl shadow-2xl">
                <div className="relative bg-gradient-education rounded-xl overflow-hidden p-1">
                  <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                      alt="Student using AI learning platform"
                      className="w-full h-full object-cover rounded-lg transition-all hover:scale-105 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">AI-Powered Learning</h3>
                      <p className="text-white/80">Personalized education tailored to your needs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements with 3D perspective */}
              <div className="absolute -top-10 -right-10 neo-glassmorphism p-4 rounded-lg animate-float shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-education-primary to-education-secondary flex items-center justify-center text-white shadow-inner">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Interactive Learning</p>
                    <p className="text-xs text-muted-foreground">Quizzes & Lessons</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 neo-glassmorphism p-4 rounded-lg animate-float animation-delay-500 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-education-secondary to-education-accent flex items-center justify-center text-white shadow-inner">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Career Guidance</p>
                    <p className="text-xs text-muted-foreground">Find Your Path</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 neo-glassmorphism p-4 rounded-lg animate-float animation-delay-700 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-education-accent to-education-primary flex items-center justify-center text-white shadow-inner">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">AI Assessment</p>
                    <p className="text-xs text-muted-foreground">Learning Style Analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
