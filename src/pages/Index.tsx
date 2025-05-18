
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, BrainCircuit, BarChart2 } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-edu-background">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <BookOpen className="h-6 w-6 text-edu-primary mr-2" />
            <h1 className="text-xl font-bold text-edu-text">Academic Journey Mapper</h1>
          </div>
          <Button onClick={() => navigate('/dashboard')}>Enter Dashboard</Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Track Your Academic Journey</h1>
          <p className="text-xl text-edu-lightText max-w-2xl mx-auto">
            A comprehensive platform to monitor your progress, plan your study sessions, and discover your learning style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white card-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-edu-primary" />
              </div>
              <CardTitle>Study Dashboard</CardTitle>
              <CardDescription>Track your courses, assignments, and progress</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={() => navigate('/dashboard')}>View Dashboard</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white card-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-teal-100 w-16 h-16 flex items-center justify-center mb-4">
                <BrainCircuit className="h-8 w-8 text-edu-secondary" />
              </div>
              <CardTitle>Learning Assessment</CardTitle>
              <CardDescription>Discover your learning style and preferences</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={() => navigate('/questionnaire')}>Take Assessment</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white card-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-amber-100 w-16 h-16 flex items-center justify-center mb-4">
                <BarChart2 className="h-8 w-8 text-edu-accent" />
              </div>
              <CardTitle>Progress Analysis</CardTitle>
              <CardDescription>Detailed analytics of your academic performance</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={() => navigate('/progress')}>View Progress</Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-white border-t border-edu-border py-6">
        <div className="container mx-auto px-4 text-center text-edu-lightText">
          <p>&copy; 2025 Academic Journey Mapper</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
