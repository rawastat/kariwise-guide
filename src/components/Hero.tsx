
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Star, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dot-pattern -z-10 opacity-30"></div>
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-education-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-education-secondary/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-education-primary/10 text-education-primary text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              AI-Powered Learning Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Personal <span className="text-gradient">AI Learning Guide</span> and Career Assistant
            </h1>
            
            <p className="text-lg text-muted-foreground">
              An intelligent educational platform that adapts to your learning style, helps with your studies, and guides your career path with personalized recommendations.
            </p>
            
            <div className="space-y-4">
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
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/signup">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
          </div>
          
          {/* Hero image/illustration */}
          <div className="lg:w-1/2 relative">
            <div className="glassmorphism rounded-2xl p-1 shadow-xl">
              <div className="relative bg-gradient-education rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Student using AI learning platform"
                  className="w-full h-full object-cover rounded-xl opacity-90 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">AI-Powered Learning</h3>
                    <p className="text-white/80">Personalized education tailored to your needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 glassmorphism p-4 rounded-lg animate-float shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-education-primary flex items-center justify-center text-white">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Interactive Learning</p>
                  <p className="text-xs text-muted-foreground">Quizzes & Lessons</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glassmorphism p-4 rounded-lg animate-float shadow-lg animation-delay-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-education-secondary flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Career Guidance</p>
                  <p className="text-xs text-muted-foreground">Find Your Path</p>
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
