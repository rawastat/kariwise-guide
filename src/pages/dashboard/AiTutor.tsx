
import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Mic, Bot, User, Play, Pause, BookOpen, Lightbulb, GraduationCap } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm your AI learning assistant. How can I help you today with your studies?",
    sender: 'bot',
    timestamp: new Date(Date.now() - 60000)
  }
];

const suggestedQuestions = [
  "Explain photosynthesis in simple terms",
  "Help me solve this quadratic equation: x² + 5x + 6 = 0",
  "What are the key events of World War II?",
  "Explain Newton's laws of motion"
];

const AiTutor = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('chat');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on your learning profile, I recommend focusing on algebraic equations today. Would you like to see some practice problems?",
        "I've analyzed your recent quiz results. You're doing great in science but might need to review some history concepts. Shall we work on that?",
        "For your exam preparation, I suggest starting with these key concepts first. I can create a structured study plan for you.",
        "Looking at your progress, you've been consistent with your mathematics studies. Keep up the great work! Let me know if you need help with any specific topic."
      ];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        setInputValue("Can you explain photosynthesis in a way that's easy to understand?");
      }, 2000);
    }
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">AI Tutor</h1>
        <p className="text-muted-foreground">
          Your personal AI learning assistant is ready to help with any subject
        </p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <Tabs defaultValue="chat" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full mb-4">
              <TabsTrigger value="chat" className="flex-1">Text Chat</TabsTrigger>
              <TabsTrigger value="voice" className="flex-1">Voice Assistant</TabsTrigger>
            </TabsList>
            
            <Card className="neo-glassmorphism mb-4">
              <TabsContent value="chat" className="m-0">
                <CardHeader className="bg-gradient-education text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle>KariWise AI Tutor</CardTitle>
                      <CardDescription className="text-white/70">
                        Ask me anything about your studies
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-[500px] flex flex-col">
                    <div className="flex-1 overflow-y-auto p-4">
                      {messages.map((message) => (
                        <div 
                          key={message.id}
                          className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl p-4 ${
                              message.sender === 'user'
                                ? 'bg-primary text-white rounded-tr-none'
                                : 'bg-gray-100 dark:bg-gray-800 rounded-tl-none'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              {message.sender === 'user' ? (
                                <>
                                  <span className="text-xs opacity-80">You</span>
                                  <User className="w-3 h-3 opacity-80" />
                                </>
                              ) : (
                                <>
                                  <Bot className="w-3 h-3 opacity-80" />
                                  <span className="text-xs opacity-80">KariWise AI</span>
                                </>
                              )}
                            </div>
                            <p>{message.text}</p>
                            <span className="text-xs block mt-1 opacity-70">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                    
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-2">
                      <Input
                        placeholder="Ask about any subject..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1"
                      />
                      <Button 
                        variant="secondary"
                        className={`rounded-full ${isRecording ? 'bg-red-500 text-white hover:bg-red-600' : ''}`}
                        onClick={toggleRecording}
                      >
                        <Mic className="w-5 h-5" />
                      </Button>
                      <Button className="rounded-full" onClick={handleSendMessage}>
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
              
              <TabsContent value="voice" className="m-0">
                <CardHeader className="bg-gradient-education text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Mic className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle>Voice Assistant</CardTitle>
                      <CardDescription className="text-white/70">
                        Talk to me and I'll respond with voice
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-8 transition-all ${isRecording ? 'bg-red-100 dark:bg-red-900 scale-110 pulse' : 'bg-primary/10'}`}>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className={`w-20 h-20 rounded-full ${isRecording ? 'bg-red-500 text-white hover:bg-red-600 hover:text-white' : 'bg-primary text-white hover:bg-primary/90'}`}
                        onClick={toggleRecording}
                      >
                        <Mic className="w-8 h-8" />
                      </Button>
                    </div>
                    
                    <p className="text-center mb-8">
                      {isRecording 
                        ? "I'm listening..." 
                        : "Tap the microphone and ask me anything about your studies"}
                    </p>
                    
                    {activeTab === 'voice' && messages.length > 1 && (
                      <div className="w-full max-w-md">
                        <h3 className="font-medium mb-2">Last response:</h3>
                        <Card className="mb-4">
                          <CardContent className="p-4">
                            <p>{messages[messages.length - 1].text}</p>
                          </CardContent>
                        </Card>
                        
                        <div className="flex justify-center">
                          <Button 
                            variant="outline" 
                            className="flex gap-2"
                            onClick={togglePlayback}
                          >
                            {isPlaying ? (
                              <>
                                <Pause className="w-4 h-4" />
                                Pause
                              </>
                            ) : (
                              <>
                                <Play className="w-4 h-4" />
                                Play response
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </TabsContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="flex gap-2 justify-center">
                <BookOpen className="w-5 h-5" />
                Subject Help
              </Button>
              <Button variant="outline" className="flex gap-2 justify-center">
                <GraduationCap className="w-5 h-5" />
                Exam Prep
              </Button>
            </div>
          </Tabs>
        </div>
        
        <div className="col-span-1">
          <Card className="neo-glassmorphism mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                Suggested Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {suggestedQuestions.map((question, index) => (
                  <Button 
                    key={index} 
                    variant="ghost" 
                    className="w-full justify-start text-left h-auto py-3"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="neo-glassmorphism">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Recent Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">Photosynthesis</h4>
                  <p className="text-sm text-muted-foreground">Biology · 2 days ago</p>
                </div>
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">Quadratic Equations</h4>
                  <p className="text-sm text-muted-foreground">Mathematics · Today</p>
                </div>
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">World War II</h4>
                  <p className="text-sm text-muted-foreground">History · 1 week ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AiTutor;
