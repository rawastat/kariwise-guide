
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Calendar, Download, ExternalLink, TrendingUp, Award, ChevronRight } from 'lucide-react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Result {
  id: number;
  title: string;
  subject: string;
  score: number;
  maxScore: number;
  date: string;
  improvement?: number;
}

const recentResults: Result[] = [
  {
    id: 1,
    title: 'Quadratic Equations',
    subject: 'Mathematics',
    score: 92,
    maxScore: 100,
    date: '2 days ago',
    improvement: 8
  },
  {
    id: 2,
    title: 'Force and Laws of Motion',
    subject: 'Physics',
    score: 85,
    maxScore: 100,
    date: '1 week ago',
    improvement: 5
  },
  {
    id: 3,
    title: 'Acids, Bases and Salts',
    subject: 'Chemistry',
    score: 78,
    maxScore: 100,
    date: '2 weeks ago',
    improvement: -3
  },
  {
    id: 4,
    title: 'Cell Structure and Functions',
    subject: 'Biology',
    score: 88,
    maxScore: 100,
    date: '3 weeks ago',
    improvement: 12
  },
  {
    id: 5,
    title: 'Indian Independence Movement',
    subject: 'History',
    score: 75,
    maxScore: 100,
    date: '1 month ago'
  }
];

const subjectPerformanceData = [
  { subject: 'Mathematics', score: 92, average: 76 },
  { subject: 'Physics', score: 85, average: 72 },
  { subject: 'Chemistry', score: 78, average: 70 },
  { subject: 'Biology', score: 88, average: 75 },
  { subject: 'History', score: 75, average: 68 }
];

const performanceTrendData = [
  { month: 'Jan', score: 65 },
  { month: 'Feb', score: 68 },
  { month: 'Mar', score: 72 },
  { month: 'Apr', score: 78 },
  { month: 'May', score: 82 },
  { month: 'Jun', score: 85 }
];

const Results = () => {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Results & Performance</h1>
        <p className="text-muted-foreground">
          Track your performance and progress over time
        </p>
      </header>
      
      {/* Performance overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="neo-glassmorphism">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground text-sm">Average Score</p>
                <p className="text-2xl font-bold">
                  {Math.round(
                    recentResults.reduce((acc, result) => acc + (result.score || 0), 0) / 
                    recentResults.length
                  )}%
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground text-sm">Tests Taken</p>
                <p className="text-2xl font-bold">{recentResults.length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground text-sm">Improvement</p>
                <p className="text-2xl font-bold text-green-500">+12%</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="neo-glassmorphism">
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
            <CardDescription>
              Your performance compared to class average
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={subjectPerformanceData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 30,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" name="Your Score" fill="#8884d8" />
                  <Bar dataKey="average" name="Class Average" fill="#82ca9d" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="neo-glassmorphism">
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
            <CardDescription>
              Your progress over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={performanceTrendData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 30,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" name="Score" fill="#6366F1" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Achievement */}
      <div className="mb-8">
        <Card className="neo-glassmorphism overflow-hidden">
          <div className="bg-gradient-education p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Top Performer Badge</h3>
                  <p className="opacity-90">Mathematics - 3 Weeks Streak</p>
                </div>
              </div>
              <Button className="bg-white text-primary hover:bg-white/90">Share</Button>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Recent results */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Results</h2>
        <div className="space-y-4">
          {recentResults.map((result) => (
            <Card key={result.id} className="neo-glassmorphism overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center mb-1">
                    <span className="font-medium text-lg">{result.title}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{result.subject}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{result.date}</span>
                    {result.improvement && (
                      <div className={`ml-4 flex items-center ${
                        result.improvement > 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {result.improvement > 0 ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingUp className="h-4 w-4 mr-1 transform rotate-180" />
                        )}
                        <span>{result.improvement > 0 ? '+' : ''}{result.improvement}%</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-6">
                    <div className="text-3xl font-bold flex items-baseline">
                      {result.score}
                      <span className="text-lg text-muted-foreground ml-1">/{result.maxScore}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {Math.round((result.score / result.maxScore) * 100)}% Score
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
