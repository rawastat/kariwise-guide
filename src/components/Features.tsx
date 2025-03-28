
import React, { useRef, useEffect } from 'react';
import { 
  Bot, 
  BookText, 
  BookOpen, 
  GraduationCap, 
  LineChart, 
  Mic, 
  BrainCircuit, 
  Rocket,
  BookCheck,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-education-primary" />,
    title: "AI Learning Assessment",
    description: "Interactive tests to assess IQ, learning style & aptitude for personalized education."
  },
  {
    icon: <BookText className="w-10 h-10 text-education-primary" />,
    title: "Syllabus-Aligned Learning",
    description: "AI teaches students according to NCERT, CBSE and other board syllabi with adaptive content."
  },
  {
    icon: <Bot className="w-10 h-10 text-education-primary" />,
    title: "24/7 AI Chatbot",
    description: "Instant answers to academic questions, homework help, and study guidance anytime."
  },
  {
    icon: <Mic className="w-10 h-10 text-education-primary" />,
    title: "Voice Assistant",
    description: "Learn hands-free with voice-activated learning and get spoken explanations to queries."
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-education-primary" />,
    title: "Career Guidance",
    description: "AI analyzes aptitude to suggest suitable career paths and necessary preparation."
  },
  {
    icon: <Rocket className="w-10 h-10 text-education-primary" />,
    title: "Exam Preparation",
    description: "Structured guidance for government exams like UPSC, SSC, Banking, and more."
  },
  {
    icon: <BookCheck className="w-10 h-10 text-education-primary" />,
    title: "Interactive Quizzes",
    description: "Engaging quizzes that adapt to your learning pace and reinforce knowledge."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-education-primary" />,
    title: "Progress Tracking",
    description: "Detailed analytics on learning patterns, strengths, and areas for improvement."
  }
];

const Features = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-24 relative" id="features">
      {/* Animated background */}
      <div className="absolute inset-0 bg-dot-pattern -z-10 opacity-30"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-education-secondary/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-education-primary/20 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-gradient">AI Features</span> for Students
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge AI with educational expertise to deliver a comprehensive learning and guidance system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={(el) => (cardsRef.current[index] = el)}
              className="feature-card opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="neo-glassmorphism border-0 hover:shadow-xl transition-all duration-500 overflow-hidden group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-education-primary/10 via-education-secondary/10 to-education-accent/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader>
                  <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-education-primary/20 to-education-secondary/20 mb-3 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0.5 rounded-xl bg-white/50 dark:bg-black/50 blur-sm"></div>
                    <div className="relative z-10">{feature.icon}</div>
                  </div>
                  <CardTitle className="relative z-10 group-hover:text-gradient transition-all duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base relative z-10">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
