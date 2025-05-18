
import { Student, Course, Assignment, WeeklyPlan, DailyTask } from "../models/student";
import { addDays, format } from "date-fns";

export const mockStudent: Student = {
  id: "s1",
  name: "Alex Johnson",
  profileImage: "https://i.pravatar.cc/300",
  email: "alex.j@university.edu",
  class: "Computer Science - Year 3",
  enrollmentYear: 2022,
  major: "Computer Science"
};

export const mockCourses: Course[] = [
  {
    id: "c1",
    title: "Advanced Data Structures",
    instructor: "Dr. Sarah Miller",
    progress: 65,
    nextLesson: "Binary Trees & Graph Theory",
    color: "#1E88E5"
  },
  {
    id: "c2",
    title: "Machine Learning Fundamentals",
    instructor: "Prof. James Wilson",
    progress: 42,
    nextLesson: "Neural Networks Introduction",
    color: "#26A69A"
  },
  {
    id: "c3",
    title: "Web Development with React",
    instructor: "Dr. Emily Chen",
    progress: 87,
    nextLesson: "State Management with Redux",
    color: "#7E57C2"
  },
  {
    id: "c4",
    title: "Software Engineering Practices",
    instructor: "Prof. Robert Brown",
    progress: 23,
    nextLesson: "Agile Methodologies",
    color: "#EF5350"
  }
];

const generateAssignments = (): Assignment[] => {
  const today = new Date();
  
  return [
    {
      id: "a1",
      title: "Data Structures Project",
      courseId: "c1",
      dueDate: addDays(today, 2),
      status: "pending",
      progress: 70
    },
    {
      id: "a2",
      title: "ML Algorithm Implementation",
      courseId: "c2",
      dueDate: addDays(today, 1),
      status: "pending",
      progress: 40
    },
    {
      id: "a3",
      title: "React Component Library",
      courseId: "c3",
      dueDate: addDays(today, 5),
      status: "pending",
      progress: 85
    },
    {
      id: "a4",
      title: "Code Review Documentation",
      courseId: "c4",
      dueDate: addDays(today, -1),
      status: "overdue",
      progress: 60
    },
    {
      id: "a5",
      title: "Final Project Proposal",
      courseId: "c1",
      dueDate: addDays(today, 7),
      status: "pending",
      progress: 20
    },
    {
      id: "a6",
      title: "Database Design Assignment",
      courseId: "c4",
      dueDate: addDays(today, 3),
      status: "pending",
      progress: 0
    }
  ];
};

const generateWeeklyPlan = (): WeeklyPlan[] => {
  const today = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weeklyPlan: WeeklyPlan[] = [];
  
  for (let i = 0; i < 7; i++) {
    const date = addDays(today, i);
    const dayName = days[date.getDay()];
    
    weeklyPlan.push({
      date: format(date, "yyyy-MM-dd"),
      dayName,
      tasks: generateDailyTasks(i, dayName)
    });
  }
  
  return weeklyPlan;
};

const generateDailyTasks = (dayOffset: number, dayName: string): DailyTask[] => {
  // Generate different tasks based on the day
  const tasksByDay: Record<string, DailyTask[]> = {
    "Monday": [
      {
        id: `task-mon-1`,
        title: "Watch Advanced Data Structures Lecture",
        courseId: "c1",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "9:00 AM - 9:45 AM"
      },
      {
        id: `task-mon-2`,
        title: "Work on ML Algorithm Implementation",
        courseId: "c2",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "11:00 AM - 11:45 AM"
      },
      {
        id: `task-mon-3`,
        title: "Start React Component Library",
        courseId: "c3",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "2:00 PM - 2:45 PM"
      }
    ],
    "Tuesday": [
      {
        id: `task-tue-1`,
        title: "Data Structures Lab Session",
        courseId: "c1",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "10:00 AM - 10:45 AM"
      },
      {
        id: `task-tue-2`,
        title: "Machine Learning Study Group",
        courseId: "c2",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "1:00 PM - 1:45 PM"
      }
    ],
    "Wednesday": [
      {
        id: `task-wed-1`,
        title: "Work on Code Review Documentation",
        courseId: "c4",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "9:00 AM - 9:45 AM"
      },
      {
        id: `task-wed-2`,
        title: "React Component Library Development",
        courseId: "c3",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "11:00 AM - 11:45 AM"
      },
      {
        id: `task-wed-3`,
        title: "Machine Learning Practice Problems",
        courseId: "c2",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "3:00 PM - 3:45 PM"
      }
    ],
    "Thursday": [
      {
        id: `task-thu-1`,
        title: "Final Project Proposal Draft",
        courseId: "c1",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "10:00 AM - 10:45 AM"
      },
      {
        id: `task-thu-2`,
        title: "Software Engineering Meeting",
        courseId: "c4",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "2:00 PM - 2:45 PM"
      }
    ],
    "Friday": [
      {
        id: `task-fri-1`,
        title: "Review Week's Materials",
        courseId: "c1",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "9:00 AM - 9:45 AM"
      },
      {
        id: `task-fri-2`,
        title: "React Project Development",
        courseId: "c3",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "1:00 PM - 1:45 PM"
      },
      {
        id: `task-fri-3`,
        title: "Database Design Assignment",
        courseId: "c4",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "3:00 PM - 3:45 PM"
      }
    ],
    "Saturday": [
      {
        id: `task-sat-1`,
        title: "Work on ML Algorithm Implementation",
        courseId: "c2",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "10:00 AM - 10:45 AM"
      }
    ],
    "Sunday": [
      {
        id: `task-sun-1`,
        title: "Prepare for Next Week",
        courseId: "c1",
        completed: dayOffset === 0 ? Math.random() > 0.5 : false,
        duration: 45,
        timeSlot: "4:00 PM - 4:45 PM"
      }
    ]
  };
  
  return tasksByDay[dayName] || [];
};

export const mockAssignments = generateAssignments();
export const mockWeeklyPlan = generateWeeklyPlan();
