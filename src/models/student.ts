
export interface Student {
  id: string;
  name: string;
  profileImage: string;
  email: string;
  class: string;
  enrollmentYear: number;
  major: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  progress: number; // 0-100
  nextLesson: string;
  color: string;
}

export interface Assignment {
  id: string;
  title: string;
  courseId: string;
  dueDate: Date;
  status: 'pending' | 'completed' | 'overdue';
  progress: number; // 0-100
}

export interface DailyTask {
  id: string;
  title: string;
  courseId: string;
  completed: boolean;
  duration: number; // in minutes
  timeSlot: string; // e.g. "9:00 AM - 9:45 AM"
}

export interface WeeklyPlan {
  date: string; // ISO date string
  dayName: string; // e.g. "Monday"
  tasks: DailyTask[];
}
