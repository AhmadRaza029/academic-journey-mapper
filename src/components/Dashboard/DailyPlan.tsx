
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DailyTask, WeeklyPlan } from '@/models/student';
import { format } from 'date-fns';
import { Checkbox } from '@/components/ui/checkbox';

interface DailyPlanProps {
  weeklyPlan: WeeklyPlan[];
}

const DailyPlan: React.FC<DailyPlanProps> = ({ weeklyPlan }) => {
  const today = new Date();
  const todayFormatted = format(today, 'yyyy-MM-dd');
  
  const todaysPlan = weeklyPlan.find(day => day.date === todayFormatted) || weeklyPlan[0];
  
  // Helper function to group tasks by time slots
  const groupTasksByTimeSlot = (tasks: DailyTask[]) => {
    return tasks.reduce<Record<string, DailyTask[]>>((acc, task) => {
      if (!acc[task.timeSlot]) {
        acc[task.timeSlot] = [];
      }
      acc[task.timeSlot].push(task);
      return acc;
    }, {});
  };

  const groupedTasks = groupTasksByTimeSlot(todaysPlan.tasks);
  const timeSlots = Object.keys(groupedTasks).sort((a, b) => {
    // Simple sort by assuming format "HH:MM AM/PM - HH:MM AM/PM"
    const aTime = a.split(' - ')[0];
    const bTime = b.split(' - ')[0];
    return aTime.localeCompare(bTime);
  });

  const handleTaskToggle = (taskId: string) => {
    // In a real app, this would update the task status
    console.log(`Toggling task: ${taskId}`);
  };
  
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center text-lg font-semibold">
          <div>Today's Study Plan</div>
          <div className="text-sm font-normal text-edu-lightText">
            {format(new Date(todaysPlan.date), 'EEEE, MMMM d')}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-[300px] overflow-y-auto pr-2">
          {timeSlots.length > 0 ? (
            <div className="space-y-6">
              {timeSlots.map((timeSlot) => (
                <div key={timeSlot} className="relative pl-4 border-l-2 border-edu-primary">
                  <div className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-edu-primary"></div>
                  <p className="mb-2 text-sm font-medium text-edu-primary">{timeSlot}</p>
                  
                  <div className="space-y-2">
                    {groupedTasks[timeSlot].map((task) => (
                      <div key={task.id} className="flex items-start space-x-3">
                        <Checkbox 
                          id={task.id}
                          checked={task.completed}
                          onCheckedChange={() => handleTaskToggle(task.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <label 
                            htmlFor={task.id} 
                            className={`font-medium cursor-pointer ${task.completed ? 'line-through text-edu-lightText' : ''}`}
                          >
                            {task.title}
                          </label>
                          <p className="text-xs text-edu-lightText">
                            {task.duration} min study session
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p>No study plan for today.</p>
              <button className="mt-2 text-edu-primary hover:underline text-sm">
                Create a plan
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyPlan;
