
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  LineChart, 
  Activity, 
  Clock, 
  Calendar, 
  TrendingUp, 
  Award, 
  CheckCircle,
  BookOpen,
  BarChart2
} from 'lucide-react';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const studyTimeData = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 3.2 },
  { day: 'Wed', hours: 1.8 },
  { day: 'Thu', hours: 4.0 },
  { day: 'Fri', hours: 2.7 },
  { day: 'Sat', hours: 5.1 },
  { day: 'Sun', hours: 3.5 }
];

const subjectTimeDistribution = [
  { name: 'Mathematics', value: 35 },
  { name: 'Physics', value: 25 },
  { name: 'Chemistry', value: 20 },
  { name: 'Biology', value: 15 },
  { name: 'History', value: 5 }
];

const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#ffc658'];

const subjectProgress = [
  { name: 'Mathematics', completed: 78, total: 100 },
  { name: 'Physics', completed: 64, total: 100 },
  { name: 'Chemistry', completed: 45, total: 100 },
  { name: 'Biology', completed: 89, total: 100 },
  { name: 'History', completed: 32, total: 100 }
];

const achievements = [
  { name: 'Perfect Score', icon: Award, description: 'Score 100% in a quiz', progress: 75 },
  { name: 'Study Streak', icon: Calendar, description: 'Study 7 days in a row', progress: 100 },
  { name: 'Subject Master', icon: BookOpen, description: 'Complete all topics in a subject', progress: 60 },
  { name: 'Quiz Champion', icon: BarChart2, description: 'Complete 50 quizzes', progress: 42 }
];

const Progress = () => {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Progress Tracker</h1>
        <p className="text-muted-foreground">
          Monitor your learning journey and achievements
        </p>
      </header>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="neo-glassmorphism">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Course Completion</p>
                <p className="text-2xl font-bold">62%</p>
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
                <p className="text-2xl font-bold">22.8h</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Streak</p>
                <p className="text-2xl font-bold">7 days</p>
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
                <p className="text-2xl font-bold">12/20</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Study time graph */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="neo-glassmorphism">
          <CardHeader>
            <CardTitle>Daily Study Time</CardTitle>
            <CardDescription>
              Hours spent studying over the past week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart
                  data={studyTimeData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 30,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="hours" 
                    name="Study Hours" 
                    stroke="#6366F1" 
                    strokeWidth={3}
                    activeDot={{ r: 8 }} 
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardHeader>
            <CardTitle>Subject Time Distribution</CardTitle>
            <CardDescription>
              How you divide your study time between subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={subjectTimeDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {subjectTimeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Subject progress */}
      <Card className="neo-glassmorphism mb-8">
        <CardHeader>
          <CardTitle>Subject Progress</CardTitle>
          <CardDescription>
            Your progress in each subject area
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {subjectProgress.map((subject, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    <span className="font-medium">{subject.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {subject.completed}/{subject.total} Completed
                  </span>
                </div>
                <div className="flex items-center">
                  <Progress value={subject.completed} className="h-2 flex-1 mr-4" />
                  <span className="text-sm font-medium">{subject.completed}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Achievements */}
      <h2 className="text-xl font-bold mb-4">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {achievements.map((achievement, index) => (
          <Card key={index} className="neo-glassmorphism">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center mr-4 ${
                  achievement.progress === 100 
                    ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}>
                  {achievement.progress === 100 ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <achievement.icon className="h-6 w-6" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{achievement.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                  <div className="flex items-center">
                    <Progress value={achievement.progress} className="h-2 flex-1 mr-2" />
                    <span className="text-sm font-medium">{achievement.progress}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Weekly goals */}
      <Card className="neo-glassmorphism">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-primary" />
            Weekly Goals
          </CardTitle>
          <CardDescription>
            Your progress towards this week's learning goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Complete 5 quizzes</span>
                <span className="text-sm font-medium">3/5</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Study 20 hours</span>
                <span className="text-sm font-medium">15.5/20</span>
              </div>
              <Progress value={77} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Maintain 7-day streak</span>
                <span className="text-sm font-medium">7/7</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            
            <Button className="w-full">Set New Goals</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Progress;
