
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="glassmorphism sticky top-0 z-50 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <GraduationCap className="h-8 w-8 text-education-primary" />
          <span className="text-gradient">KariWise</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <Link to="/" className="font-medium hover:text-education-primary transition-colors">
              Home
            </Link>
            <Link to="/features" className="font-medium hover:text-education-primary transition-colors">
              Features
            </Link>
            <Link to="/about" className="font-medium hover:text-education-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium hover:text-education-primary transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 
            <X className="h-6 w-6" /> : 
            <Menu className="h-6 w-6" />
          }
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism p-4 shadow-lg animate-slide-in-bottom">
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-medium py-2 hover:text-education-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="font-medium py-2 hover:text-education-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/about" 
              className="font-medium py-2 hover:text-education-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="font-medium py-2 hover:text-education-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-3 pt-3 border-t">
              <Button variant="outline" asChild onClick={() => setIsMenuOpen(false)}>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild onClick={() => setIsMenuOpen(false)}>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
