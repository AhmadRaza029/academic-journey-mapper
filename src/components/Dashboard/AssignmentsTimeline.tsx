
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Assignment } from '@/models/student';
import { format, isAfter, isBefore, addDays, isEqual } from 'date-fns';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface AssignmentsTimelineProps {
  assignments: Assignment[];
}

const AssignmentsTimeline: React.FC<AssignmentsTimelineProps> = ({ assignments }) => {
  const today = new Date();
  const sortedAssignments = [...assignments].sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

  const getStatusColor = (dueDate: Date, status: string) => {
    if (status === 'completed') return 'bg-edu-success';
    if (status === 'overdue') return 'bg-edu-error';
    
    const daysUntilDue = Math.round((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysUntilDue <= 1) return 'bg-edu-warning';
    if (daysUntilDue <= 3) return 'bg-edu-accent';
    return 'bg-edu-primary';
  };

  // Create chart data
  const chartData = [];
  const startDate = new Date();
  for (let i = 0; i < 7; i++) {
    const currentDate = addDays(startDate, i);
    const dateStr = format(currentDate, 'EEE');
    
    const assignmentsForDay = assignments.filter(assignment => 
      isEqual(new Date(assignment.dueDate).setHours(0, 0, 0, 0), 
              new Date(currentDate).setHours(0, 0, 0, 0))
    );
    
    chartData.push({
      name: dateStr,
      assignments: assignmentsForDay.length,
      color: assignmentsForDay.length > 0 
        ? getStatusColor(currentDate, assignmentsForDay[0].status).replace('bg-', '') 
        : 'bg-edu-primary'
    });
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Upcoming Deadlines</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[120px] mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip 
                formatter={(value) => [`${value} assignment(s)`, 'Assignments']}
                labelFormatter={(label) => `${label}`}
              />
              <Bar 
                dataKey="assignments" 
                fill="#1E88E5"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
          {sortedAssignments.slice(0, 4).map(assignment => (
            <div key={assignment.id} className="flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <div>
                  <h4 className="text-sm font-medium">{assignment.title}</h4>
                  <p className="text-xs text-edu-lightText">
                    Due {format(new Date(assignment.dueDate), 'MMM dd')}
                  </p>
                </div>
                <div 
                  className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(assignment.dueDate, assignment.status)} text-white`}
                >
                  {assignment.status === 'overdue' ? 'Overdue' : 
                   assignment.status === 'completed' ? 'Completed' : 
                   `${Math.round((assignment.dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))}d left`}
                </div>
              </div>
              <Progress value={assignment.progress} className="h-1" />
            </div>
          ))}
          
          {sortedAssignments.length > 4 && (
            <button className="text-sm text-edu-primary font-medium hover:underline w-full text-center mt-2">
              View all ({sortedAssignments.length})
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssignmentsTimeline;
