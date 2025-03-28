
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  BookOpen, 
  BarChart, 
  GraduationCap, 
  BrainCircuit, 
  User, 
  Award, 
  ClipboardList,
  LogOut,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

const DashboardLayout = () => {
  const menuItems = [
    { icon: BookOpen, label: 'My Subjects', path: '/dashboard' },
    { icon: BrainCircuit, label: 'AI Tutor', path: '/dashboard/ai-tutor' },
    { icon: ClipboardList, label: 'Quizzes', path: '/dashboard/quizzes' },
    { icon: Award, label: 'Results', path: '/dashboard/results' },
    { icon: BarChart, label: 'Progress', path: '/dashboard/progress' },
    { icon: GraduationCap, label: 'Resources', path: '/dashboard/resources' },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-full md:w-64 md:min-h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 glassmorphism-sidebar">
        <div className="p-4 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
          <div className="h-10 w-10 rounded-full bg-gradient-education flex items-center justify-center">
            <GraduationCap className="text-white h-5 w-5" />
          </div>
          <div>
            <h2 className="font-bold">KariWise</h2>
            <p className="text-xs text-muted-foreground">Student Dashboard</p>
          </div>
        </div>
        
        <div className="py-4">
          <nav className="space-y-1 px-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center px-4 py-3 text-sm rounded-lg transition-all duration-200",
                  "hover:bg-gray-100 dark:hover:bg-gray-700",
                  isActive 
                    ? "bg-gray-100 dark:bg-gray-700 text-primary" 
                    : "text-gray-600 dark:text-gray-300"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-full border-t border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Rahul Singh</p>
                <p className="text-xs text-muted-foreground">Class 10 - CBSE</p>
              </div>
            </div>
            
            <div className="space-y-1">
              <Link 
                to="/dashboard/settings" 
                className="flex items-center px-4 py-2 text-sm rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Settings className="mr-3 h-4 w-4" />
                Settings
              </Link>
              
              <Link 
                to="/login" 
                className="flex items-center px-4 py-2 text-sm rounded-lg text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <LogOut className="mr-3 h-4 w-4" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
