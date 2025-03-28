
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download, 
  ExternalLink, 
  Clock, 
  Star,
  Search,
  Filter,
  BookOpen as BookOpenIcon
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const resourceCategories = [
  { id: 'notes', label: 'Notes & PDFs', icon: FileText },
  { id: 'videos', label: 'Video Lessons', icon: Video },
  { id: 'textbooks', label: 'Textbooks', icon: BookOpen },
];

interface Resource {
  id: number;
  title: string;
  description: string;
  subject: string;
  type: 'notes' | 'videos' | 'textbooks';
  rating: number;
  duration?: string;
  pages?: number;
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'Quadratic Equations Made Easy',
    description: 'Comprehensive notes covering all aspects of quadratic equations with practice problems.',
    subject: 'Mathematics',
    type: 'notes',
    rating: 4.8,
    pages: 25
  },
  {
    id: 2,
    title: 'Newton\'s Laws of Motion',
    description: 'Detailed explanation of all three laws with real-world examples and applications.',
    subject: 'Physics',
    type: 'notes',
    rating: 4.5,
    pages: 32
  },
  {
    id: 3,
    title: 'Understanding Chemical Bonding',
    description: 'Video tutorial explaining ionic, covalent, and metallic bonds with 3D visualizations.',
    subject: 'Chemistry',
    type: 'videos',
    rating: 4.9,
    duration: '45 min'
  },
  {
    id: 4,
    title: 'Cell Structure and Functions',
    description: 'Video series covering cell organelles, functions, and processes in detail.',
    subject: 'Biology',
    type: 'videos',
    rating: 4.7,
    duration: '1h 20min'
  },
  {
    id: 5,
    title: 'Comprehensive Mathematics Textbook',
    description: 'Complete textbook covering all topics in the CBSE Class 10 Mathematics syllabus.',
    subject: 'Mathematics',
    type: 'textbooks',
    rating: 4.6,
    pages: 350
  },
  {
    id: 6,
    title: 'Modern Physics for High School',
    description: 'Advanced textbook covering modern physics concepts for high school students.',
    subject: 'Physics',
    type: 'textbooks',
    rating: 4.4,
    pages: 280
  }
];

const Resources = () => {
  const renderResource = (resource: Resource) => (
    <Card key={resource.id} className="neo-glassmorphism card-3d">
      <div className="card-inner">
        <CardHeader className="pb-2">
          <div className="flex justify-between">
            <Badge>{resource.subject}</Badge>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="text-sm">{resource.rating}</span>
            </div>
          </div>
          <CardTitle>{resource.title}</CardTitle>
          <CardDescription>{resource.description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center text-sm text-muted-foreground">
            {resource.type === 'notes' && (
              <>
                <FileText className="h-4 w-4 mr-1" />
                <span>{resource.pages} pages</span>
              </>
            )}
            {resource.type === 'videos' && (
              <>
                <Clock className="h-4 w-4 mr-1" />
                <span>{resource.duration}</span>
              </>
            )}
            {resource.type === 'textbooks' && (
              <>
                <BookOpenIcon className="h-4 w-4 mr-1" />
                <span>{resource.pages} pages</span>
              </>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <ExternalLink className="h-4 w-4 mr-2" />
            View
          </Button>
          <Button size="sm" className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </CardFooter>
      </div>
    </Card>
  );

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Learning Resources</h1>
        <p className="text-muted-foreground">
          Access study materials, videos, and textbooks for all subjects
        </p>
      </header>
      
      {/* Search and filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search resources..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>
      
      {/* Featured resource */}
      <Card className="neo-glassmorphism mb-8 overflow-hidden">
        <div className="bg-gradient-education p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Premium Resource Collection</h3>
            <p className="opacity-90 mb-4">
              Access our complete library of premium study materials for all subjects
            </p>
            <Badge className="bg-white text-primary hover:bg-white/90">New</Badge>
          </div>
          <Button className="bg-white text-primary hover:bg-white/90">
            Explore
          </Button>
        </div>
      </Card>
      
      {/* Resource tabs */}
      <Tabs defaultValue="notes" className="w-full">
        <TabsList className="w-full mb-6">
          {resourceCategories.map(category => (
            <TabsTrigger 
              key={category.id} 
              value={category.id} 
              className="flex-1"
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {resourceCategories.map(category => (
          <TabsContent key={category.id} value={category.id} className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .filter(resource => resource.type === category.id)
                .map(renderResource)}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Resources;
