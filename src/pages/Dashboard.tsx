
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentProfile from '@/components/Dashboard/StudentProfile';
import ActionCard from '@/components/Dashboard/ActionCard';
import ProgressChart from '@/components/Dashboard/ProgressChart';
import AssignmentsTimeline from '@/components/Dashboard/AssignmentsTimeline';
import DailyPlan from '@/components/Dashboard/DailyPlan';
import { mockStudent, mockCourses, mockAssignments, mockWeeklyPlan } from '@/data/mockData';
import { BookOpen, PlayCircle, MessageSquare, BarChart2, BrainCircuit } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleActionClick = (action: string) => {
    if (action === 'questionnaire') {
      navigate('/questionnaire');
    } else if (action === 'progress') {
      navigate('/progress');
    } else {
      console.log(`Action clicked: ${action}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {/* Student Profile */}
        <StudentProfile student={mockStudent} />
        
        {/* Action Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <ActionCard 
            title="Start Learning" 
            description="Begin your daily lessons" 
            icon={BookOpen} 
            color="#1E88E5" 
            onClick={() => handleActionClick('start')}
          />
          <ActionCard 
            title="Continue Learning" 
            description="Pick up where you left off" 
            icon={PlayCircle} 
            color="#26A69A" 
            onClick={() => handleActionClick('continue')}
          />
          <ActionCard 
            title="Submit Feedback" 
            description="Share your course thoughts" 
            icon={MessageSquare} 
            color="#7E57C2" 
            onClick={() => handleActionClick('feedback')}
          />
          <ActionCard 
            title="View Progress" 
            description="Track your achievements" 
            icon={BarChart2} 
            color="#EF5350" 
            onClick={() => handleActionClick('progress')}
          />
          <ActionCard 
            title="Personality Quiz" 
            description="Discover your learning style" 
            icon={BrainCircuit} 
            color="#FF9800" 
            onClick={() => handleActionClick('questionnaire')}
          />
        </div>
        
        {/* Charts and Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProgressChart courses={mockCourses} />
          <AssignmentsTimeline assignments={mockAssignments} />
        </div>
        
        {/* Daily Plan */}
        <DailyPlan weeklyPlan={mockWeeklyPlan} />
      </div>
    </div>
  );
};

export default Dashboard;
