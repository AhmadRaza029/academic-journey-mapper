
import React from 'react';
import { Student } from '@/models/student';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from '@/components/ui/card';

interface StudentProfileProps {
  student: Student;
}

const StudentProfile: React.FC<StudentProfileProps> = ({ student }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('');
  };

  return (
    <Card className="flex items-center p-4 bg-white shadow-sm rounded-lg border border-edu-border">
      <Avatar className="h-14 w-14">
        <AvatarImage src={student.profileImage} alt={student.name} />
        <AvatarFallback className="bg-edu-primary text-white">
          {getInitials(student.name)}
        </AvatarFallback>
      </Avatar>
      <div className="ml-4">
        <h2 className="text-xl font-bold text-edu-text">{student.name}</h2>
        <p className="text-edu-lightText">{student.class}</p>
      </div>
    </Card>
  );
};

export default StudentProfile;
