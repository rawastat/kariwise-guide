
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, BookOpen, ArrowRight, Building2, Users, Globe, Code, FileText, PenTool } from 'lucide-react';

const careerPaths = [
  {
    title: "Civil Services",
    icon: <Building2 className="w-6 h-6 text-education-primary" />,
    description: "Prepare for UPSC, state PSC, and other administrative exams with structured guidance.",
    paths: ["IAS", "IPS", "IFS", "State Civil Services"]
  },
  {
    title: "Engineering",
    icon: <Code className="w-6 h-6 text-education-primary" />,
    description: "Explore various engineering disciplines and prepare for entrance exams.",
    paths: ["Computer Science", "Mechanical", "Electrical", "Civil"]
  },
  {
    title: "Banking & Finance",
    icon: <FileText className="w-6 h-6 text-education-primary" />,
    description: "Get ready for banking, SSC, and other government financial sector exams.",
    paths: ["Bank PO", "SSC CGL", "RBI Grade B", "NABARD"]
  },
  {
    title: "Creative Fields",
    icon: <PenTool className="w-6 h-6 text-education-primary" />,
    description: "Develop skills in design, content creation, and digital media.",
    paths: ["UX/UI Design", "Content Creation", "Animation", "Digital Marketing"]
  },
  {
    title: "Healthcare",
    icon: <Users className="w-6 h-6 text-education-primary" />,
    description: "Prepare for medical entrance exams and healthcare careers.",
    paths: ["NEET", "AIIMS", "Pharmacy", "Allied Health"]
  },
  {
    title: "Global Opportunities",
    icon: <Globe className="w-6 h-6 text-education-primary" />,
    description: "Explore international education and career options with guidance.",
    paths: ["Study Abroad", "Foreign Languages", "International Relations"]
  }
];

const CareerGuidance = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative">
      <div className="absolute inset-0 bg-dot-pattern -z-10 opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-education-secondary/10 text-education-secondary text-sm font-medium">
            <GraduationCap className="w-4 h-4 mr-2" />
            Career Pathways
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect <span className="text-gradient">Career Path</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI analyzes your aptitude, interests, and academic performance to suggest the most suitable career options and guide your preparation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path, index) => (
            <Card key={index} className="glassmorphism border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-lg bg-education-primary/10 flex items-center justify-center">
                    {path.icon}
                  </div>
                  <Award className="w-6 h-6 text-education-accent" />
                </div>
                <CardTitle className="mt-4">{path.title}</CardTitle>
                <CardDescription className="text-base">{path.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {path.paths.map((subPath, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-education-primary"></div>
                      <span>{subPath}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between">
                  Explore Path <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="group">
            Take Career Assessment
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Our detailed assessment will help identify your strengths and ideal career paths
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerGuidance;
