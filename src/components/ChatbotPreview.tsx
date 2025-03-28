
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Send, 
  Mic, 
  BookOpen, 
  Lightbulb, 
  GraduationCap, 
  BarChart, 
  User,
  Bot
} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm your AI learning assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(Date.now() - 60000)
  }
];

const ChatbotPreview = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);

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
        "For your UPSC preparation, I suggest starting with Indian Polity. I can create a structured study plan for you.",
        "Looking at your progress, you've been consistent with your studies. Keep up the great work! Let me know if you need help with any specific topic."
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
        setInputValue("Can you explain photosynthesis to me?");
      }, 2000);
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your <span className="text-gradient">AI Assistant</span> is Always Ready
          </h2>
          <p className="text-lg text-muted-foreground">
            Get instant help with studies, doubts, and career guidance through our intelligent chatbot.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glassmorphism rounded-2xl overflow-hidden shadow-xl">
            {/* Chatbot header */}
            <div className="bg-gradient-education p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">KariWise AI Assistant</h3>
                  <p className="text-xs opacity-80">Always ready to help</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Lightbulb className="w-4 h-4 mr-1" />
                  Suggest Topics
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <BarChart className="w-4 h-4 mr-1" />
                  View Progress
                </Button>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="h-[400px] overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.sender === 'user'
                        ? 'bg-education-primary text-white rounded-tr-none'
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
            </div>
            
            {/* Chat input */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex gap-2">
              <Input
                placeholder="Ask about any subject or career path..."
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
          
          {/* Feature buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <Button variant="outline" className="flex gap-2 justify-center">
              <BookOpen className="w-5 h-5" />
              Subject Help
            </Button>
            <Button variant="outline" className="flex gap-2 justify-center">
              <GraduationCap className="w-5 h-5" />
              Career Advice
            </Button>
            <Button variant="outline" className="flex gap-2 justify-center">
              <Lightbulb className="w-5 h-5" />
              Exam Preparation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotPreview;
