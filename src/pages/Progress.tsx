
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockCourses, mockAssignments, mockWeeklyPlan } from '@/data/mockData';
import { ArrowLeft } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { format, addDays, startOfWeek } from 'date-fns';

const Progress = () => {
  const navigate = useNavigate();

  const handleReturnToDashboard = () => {
    navigate('/');
  };

  // Generate weekly progress data
  const generateWeeklyProgressData = () => {
    const startDate = startOfWeek(new Date());
    const data = [];

    for (let i = 0; i < 8; i++) {
      const currentDate = addDays(startDate, i);
      const dateStr = format(currentDate, 'EEE');

      data.push({
        name: dateStr,
        completed: Math.floor(Math.random() * 5) + 1,
        planned: Math.floor(Math.random() * 3) + 4,
      });
    }

    return data;
  };

  const weeklyProgressData = generateWeeklyProgressData();

  // Calculate course statistics
  const totalCompletedCoursePercentage = Math.round(
    mockCourses.reduce((sum, course) => sum + course.progress, 0) / mockCourses.length
  );

  const completedAssignments = mockAssignments.filter(a => a.status === 'completed').length;
  const totalAssignments = mockAssignments.length;
  const assignmentCompletionRate = Math.round((completedAssignments / totalAssignments) * 100);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={handleReturnToDashboard} 
          className="text-edu-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Progress</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-edu-primary">{totalCompletedCoursePercentage}%</div>
              <p className="text-edu-lightText mt-2">Overall Course Completion</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-edu-secondary">
                {completedAssignments}/{totalAssignments}
              </div>
              <p className="text-edu-lightText mt-2">Assignments Completed</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-edu-accent">
                {mockCourses.length}
              </div>
              <p className="text-edu-lightText mt-2">Active Courses</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Weekly Study Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={weeklyProgressData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" name="Completed Tasks" fill="#26A69A" />
                  <Bar dataKey="planned" name="Planned Tasks" fill="#1E88E5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Course Progress Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={mockCourses.map(course => ({
                    name: course.title.split(' ')[0],
                    progress: course.progress,
                    color: course.color
                  }))}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="progress" 
                    stroke="#1E88E5" 
                    name="Progress (%)"
                    strokeWidth={2} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white mb-6">
        <CardHeader>
          <CardTitle>Course Performance Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 px-4">Course Name</th>
                  <th className="py-2 px-4">Progress</th>
                  <th className="py-2 px-4">Next Lesson</th>
                  <th className="py-2 px-4">Instructor</th>
                </tr>
              </thead>
              <tbody>
                {mockCourses.map(course => (
                  <tr key={course.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{course.title}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                          <div 
                            className="h-2.5 rounded-full" 
                            style={{ 
                              width: `${course.progress}%`,
                              backgroundColor: course.color 
                            }}
                          ></div>
                        </div>
                        <span>{course.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{course.nextLesson}</td>
                    <td className="py-3 px-4">{course.instructor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Progress;
