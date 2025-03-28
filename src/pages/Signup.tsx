
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap, User, Mail, Lock, CheckCircle, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from "@/components/ui/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    grade: '',
    board: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Account created successfully",
        description: "Welcome to KariWise learning platform!",
      });
      
      // Navigate to dashboard
      navigate('/dashboard');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - signup form */}
      <div className="flex flex-1 items-center justify-center p-6 md:p-8 bg-gray-50 dark:bg-gray-900">
        <Card className="w-full max-w-md glassmorphism border-0">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <GraduationCap className="h-10 w-10 text-education-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
            <CardDescription>
              Join KariWise to get personalized learning and career guidance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="google">Google</TabsTrigger>
              </TabsList>
              <TabsContent value="email">
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="name" 
                            placeholder="Enter your full name" 
                            className="pl-10" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="email" 
                            type="email"
                            placeholder="name@example.com" 
                            className="pl-10" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="password" 
                            type="password" 
                            placeholder="Create a strong password" 
                            className="pl-10" 
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Password must be at least 8 characters and include a number and a special character.
                        </p>
                      </div>
                      
                      <Button 
                        type="button" 
                        onClick={nextStep} 
                        className="w-full"
                      >
                        Continue <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  
                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input 
                          id="age" 
                          type="number" 
                          placeholder="Enter your age" 
                          value={formData.age}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="grade">Class/Grade</Label>
                        <Input 
                          id="grade" 
                          placeholder="e.g., 10th, 12th, College 1st year" 
                          value={formData.grade}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="board">Education Board</Label>
                        <select 
                          id="board" 
                          className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={formData.board}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select your education board</option>
                          <option value="CBSE">CBSE</option>
                          <option value="ICSE">ICSE</option>
                          <option value="State Board">State Board</option>
                          <option value="College">College/University</option>
                        </select>
                      </div>
                      
                      <div className="flex justify-between">
                        <Button 
                          variant="outline" 
                          type="button"
                          onClick={prevStep}
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? "Creating Account..." : "Create Account"}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </TabsContent>
              <TabsContent value="google">
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      toast({
                        title: "Google Sign-up",
                        description: "Redirecting to Google authentication...",
                      });
                      setTimeout(() => navigate('/dashboard'), 1500);
                    }}
                  >
                    <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    Sign up with Google
                  </Button>
                  
                  <p className="text-sm text-center text-muted-foreground">
                    We'll ask for a few more details after you sign in with Google
                  </p>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-education-primary hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Right side - benefits */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-education items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="relative z-10 max-w-md text-white">
          <GraduationCap className="h-16 w-16 mb-6" />
          <h1 className="text-3xl font-bold mb-6">Start Your Learning Journey</h1>
          <p className="text-white/80 mb-10">
            Join thousands of students benefiting from KariWise's AI-powered learning platform.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-lg">Personalized Learning Experience</h3>
                <p className="text-white/70">AI tailors content based on your learning style, pace, and interests.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-lg">24/7 AI Tutor & Assistant</h3>
                <p className="text-white/70">Get help with studies and doubts anytime through our chatbot and voice assistant.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-lg">Career Guidance & Planning</h3>
                <p className="text-white/70">Discover suitable career paths based on your aptitude and interests.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-lg">Interactive Study Material</h3>
                <p className="text-white/70">Engaging quizzes, practice tests, and syllabus-aligned content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
