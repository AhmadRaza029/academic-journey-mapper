
import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  onClick
}) => {
  return (
    <Card 
      onClick={onClick}
      className="p-4 cursor-pointer bg-white border border-edu-border card-shadow flex flex-col items-center text-center h-full"
    >
      <div 
        className="p-3 rounded-full mb-3" 
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon size={24} style={{ color }} />
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-edu-lightText">{description}</p>
    </Card>
  );
};

export default ActionCard;
