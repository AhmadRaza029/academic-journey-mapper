
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Question, QuestionnaireAnswer } from '@/models/questionnaire';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface QuestionCardProps {
  question: Question;
  currentAnswer: QuestionnaireAnswer | undefined;
  onAnswerSelected: (answer: QuestionnaireAnswer) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentAnswer,
  onAnswerSelected
}) => {
  const handleChange = (optionId: string) => {
    onAnswerSelected({
      questionId: question.id,
      selectedOptionId: optionId
    });
  };

  // Determine if this is an educational assessment question (1-8) or an entitlement question (9+)
  const isEducationalQuestion = question.id <= 8;

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg">
      <CardContent className="p-6">
        <h3 className={`text-xl font-semibold mb-6 text-center ${isEducationalQuestion ? "text-blue-700" : "text-purple-700"}`}>
          {question.text}
        </h3>
        
        <RadioGroup
          value={currentAnswer?.selectedOptionId}
          onValueChange={handleChange}
          className="space-y-4"
        >
          {question.options.map((option) => (
            <div 
              key={option.id} 
              className={`flex items-center space-x-3 p-3 rounded-md border 
                ${isEducationalQuestion 
                  ? "hover:bg-blue-50 border-blue-200" 
                  : "hover:bg-purple-50 border-purple-200"}`}
            >
              <RadioGroupItem id={option.id} value={option.id} />
              <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
