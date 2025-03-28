
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, BarChart2, Award, ChevronRight } from 'lucide-react';

const subjects = [
  {
    id: 1,
    name: 'Mathematics',
    icon: 'M',
    color: 'bg-blue-500',
    progress: 78,
    lastActivity: '2 hours ago',
    nextLesson: 'Quadratic Equations',
    streak: 7,
  },
  {
    id: 2,
    name: 'Physics',
    icon: 'P',
    color: 'bg-purple-500',
    progress: 64,
    lastActivity: 'Yesterday',
    nextLesson: 'Wave Motion',
    streak: 5,
  },
  {
    id: 3,
    name: 'Chemistry',
    icon: 'C',
    color: 'bg-green-500',
    progress: 45,
    lastActivity: '3 days ago',
    nextLesson: 'Periodic Table',
    streak: 2,
  },
  {
    id: 4,
    name: 'Biology',
    icon: 'B',
    color: 'bg-yellow-500',
    progress: 89,
    lastActivity: 'Today',
    nextLesson: 'Human Anatomy',
    streak: 10,
  }
];

const Dashboard = () => {
  // Animation effect for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.subject-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Rahul!</h1>
        <p className="text-muted-foreground">
          Continue your learning journey. You've been making great progress!
        </p>
      </header>
      
      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="neo-glassmorphism">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total Subjects</p>
                <p className="text-2xl font-bold">4</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Study Time</p>
                <p className="text-2xl font-bold">24h</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                <BarChart2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Avg. Score</p>
                <p className="text-2xl font-bold">76%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Achievements</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Subjects grid */}
      <h2 className="text-xl font-bold mb-4">Your Subjects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {subjects.map((subject) => (
          <div key={subject.id} className="subject-card animate-on-scroll feature-card">
            <Card className="h-full neo-glassmorphism card-3d">
              <div className="card-inner">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className={`h-10 w-10 rounded-full ${subject.color} flex items-center justify-center text-white font-bold`}>
                      {subject.icon}
                    </div>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {subject.lastActivity}
                    </span>
                  </div>
                  <CardTitle>{subject.name}</CardTitle>
                  <CardDescription>Next: {subject.nextLesson}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="mb-1 flex justify-between items-center">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-medium">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1 text-yellow-500" />
                    <span className="text-sm">{subject.streak} day streak</span>
                  </div>
                  <Button size="sm" variant="ghost" className="p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </div>
        ))}
      </div>
      
      {/* Quick access */}
      <h2 className="text-xl font-bold mb-4">Quick Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="neo-glassmorphism">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BrainCircuit className="h-5 w-5 mr-2 text-primary" />
              AI Tutor
            </CardTitle>
            <CardDescription>Get instant help with your studies</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">Start a session</Button>
          </CardFooter>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ClipboardList className="h-5 w-5 mr-2 text-primary" />
              Upcoming Quiz
            </CardTitle>
            <CardDescription>Physics: Wave Motion (Tomorrow)</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" variant="outline">Prepare now</Button>
          </CardFooter>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              Latest Results
            </CardTitle>
            <CardDescription>Mathematics: 92/100</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" variant="outline">View all results</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
