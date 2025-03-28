
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ClipboardList, Clock, Award, CheckCircle, BookOpen, Zap, BarChart, Timer } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface Quiz {
  id: number;
  title: string;
  subject: string;
  questions: number;
  duration: number;
  dueDate?: string;
  status: 'upcoming' | 'available' | 'completed';
  score?: number;
}

const upcomingQuizzes: Quiz[] = [
  {
    id: 1,
    title: 'Wave Motion and Properties',
    subject: 'Physics',
    questions: 20,
    duration: 30,
    dueDate: 'Tomorrow',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Chemical Bonding',
    subject: 'Chemistry',
    questions: 15,
    duration: 25,
    dueDate: 'In 3 days',
    status: 'upcoming'
  }
];

const availableQuizzes: Quiz[] = [
  {
    id: 3,
    title: 'Linear Equations',
    subject: 'Mathematics',
    questions: 15,
    duration: 25,
    status: 'available'
  },
  {
    id: 4,
    title: 'Cell Structure and Functions',
    subject: 'Biology',
    questions: 20,
    duration: 30,
    status: 'available'
  },
  {
    id: 5,
    title: 'Indian Independence Movement',
    subject: 'History',
    questions: 25,
    duration: 35,
    status: 'available'
  }
];

const completedQuizzes: Quiz[] = [
  {
    id: 6,
    title: 'Algebraic Expressions',
    subject: 'Mathematics',
    questions: 20,
    duration: 30,
    status: 'completed',
    score: 92
  },
  {
    id: 7,
    title: 'Force and Laws of Motion',
    subject: 'Physics',
    questions: 15,
    duration: 25,
    status: 'completed',
    score: 85
  },
  {
    id: 8,
    title: 'Acids, Bases and Salts',
    subject: 'Chemistry',
    questions: 20,
    duration: 30,
    status: 'completed',
    score: 78
  }
];

const Quizzes = () => {
  const [activeTabValue, setActiveTabValue] = useState('available');
  
  const renderQuizCard = (quiz: Quiz) => (
    <Card key={quiz.id} className="neo-glassmorphism card-3d">
      <div className="card-inner">
        <CardHeader className="pb-2">
          <div className="flex justify-between">
            <Badge 
              variant={
                quiz.status === 'upcoming' 
                  ? 'outline' 
                  : quiz.status === 'available' 
                    ? 'secondary' 
                    : 'default'
              }
              className={
                quiz.status === 'completed' && (quiz.score || 0) >= 90 
                  ? 'bg-green-500' 
                  : undefined
              }
            >
              {quiz.status === 'upcoming' 
                ? 'Upcoming' 
                : quiz.status === 'available' 
                  ? 'Available' 
                  : `Completed - ${quiz.score}/100`}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {quiz.subject}
            </span>
          </div>
          <CardTitle className="text-xl">{quiz.title}</CardTitle>
          <CardDescription>
            <div className="flex items-center mt-1">
              <ClipboardList className="h-4 w-4 mr-1" />
              <span>{quiz.questions} questions</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{quiz.duration} min</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          {quiz.status === 'upcoming' && (
            <div className="text-sm">
              <span className="font-medium">Due: </span>
              <span>{quiz.dueDate}</span>
            </div>
          )}
          {quiz.status === 'completed' && (
            <div>
              <div className="mb-1 flex justify-between items-center">
                <span className="text-sm font-medium">Score</span>
                <span className="text-sm font-medium">{quiz.score}%</span>
              </div>
              <Progress value={quiz.score} className="h-2" />
            </div>
          )}
        </CardContent>
        <CardFooter>
          {quiz.status === 'upcoming' && (
            <Button variant="outline" className="w-full">Set reminder</Button>
          )}
          {quiz.status === 'available' && (
            <Button className="w-full">Start Quiz</Button>
          )}
          {quiz.status === 'completed' && (
            <Button variant="outline" className="w-full">View Results</Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Quizzes</h1>
        <p className="text-muted-foreground">
          Test your knowledge and track your progress with interactive quizzes
        </p>
      </header>
      
      {/* Quiz stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card className="neo-glassmorphism">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground text-sm">Completed</p>
                <p className="text-2xl font-bold">{completedQuizzes.length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground text-sm">Available</p>
                <p className="text-2xl font-bold">{availableQuizzes.length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground text-sm">Average Score</p>
                <p className="text-2xl font-bold">
                  {Math.round(
                    completedQuizzes.reduce((acc, quiz) => acc + (quiz.score || 0), 0) / 
                    completedQuizzes.length
                  )}%
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Featured quiz */}
      <Card className="neo-glassmorphism mb-8 overflow-hidden">
        <div className="bg-gradient-education p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Weekly Challenge Quiz</h3>
              <p className="opacity-90 mb-4">Test your knowledge across all subjects</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <ClipboardList className="h-4 w-4 mr-1" />
                  <span>25 questions</span>
                </div>
                <div className="flex items-center">
                  <Timer className="h-4 w-4 mr-1" />
                  <span>45 minutes</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-1" />
                  <span>Earn 2x points</span>
                </div>
              </div>
            </div>
            <div>
              <Button className="bg-white text-primary hover:bg-white/90 hover:text-primary">
                Start Challenge
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Top scorers this week</h4>
              <p className="text-sm text-muted-foreground">Compete with your peers</p>
            </div>
            <Button variant="ghost" size="sm">View Leaderboard</Button>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <span className="font-medium text-yellow-600">1</span>
                </div>
                <span>Aditya Sharma</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">98</span>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <span className="font-medium text-gray-600">2</span>
                </div>
                <span>Priya Patel</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">95</span>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <span className="font-medium text-orange-600">3</span>
                </div>
                <span>Rahul Singh</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">92</span>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Quiz tabs */}
      <Tabs 
        value={activeTabValue} 
        onValueChange={setActiveTabValue}
        className="w-full"
      >
        <TabsList className="w-full mb-6">
          <TabsTrigger value="available" className="flex-1">Available</TabsTrigger>
          <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
          <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableQuizzes.map(renderQuizCard)}
          </div>
        </TabsContent>
        
        <TabsContent value="upcoming" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingQuizzes.map(renderQuizCard)}
          </div>
        </TabsContent>
        
        <TabsContent value="completed" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedQuizzes.map(renderQuizCard)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Quizzes;
