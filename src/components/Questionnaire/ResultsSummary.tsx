
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Question, QuestionnaireAnswer } from '@/models/questionnaire';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ResultsSummaryProps {
  questions: Question[];
  answers: QuestionnaireAnswer[];
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ questions, answers }) => {
  // Calculate average score
  const totalScore = answers.reduce((total, answer) => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return total;
    
    const selectedOption = question.options.find(o => o.id === answer.selectedOptionId);
    return total + (selectedOption?.value || 0);
  }, 0);
  
  const averageScore = Math.round((totalScore / answers.length) * 10) / 10;
  const maxScore = 5; // Assuming 5-point scale
  
  // Create data for the chart
  const chartData = [
    { name: 'Your Score', value: averageScore },
    { name: 'Remaining', value: maxScore - averageScore }
  ];
  
  const COLORS = ['#1E88E5', '#ECEFF1'];
  
  const scoreInterpretation = () => {
    if (averageScore >= 4) return "High psychological entitlement";
    if (averageScore >= 3) return "Moderate psychological entitlement";
    if (averageScore >= 2) return "Slight psychological entitlement";
    return "Low psychological entitlement";
  };
  
  const recommendations = () => {
    if (averageScore >= 4) return [
      "Consider practicing more gratitude in daily activities",
      "Reflect on collaborative teamwork successes",
      "Engage in activities that highlight mutual support and interdependence"
    ];
    if (averageScore >= 3) return [
      "Practice active listening in group settings",
      "Contribute to community-oriented projects",
      "Focus on shared successes rather than individual recognition"
    ];
    if (averageScore >= 2) return [
      "Continue developing collaborative skills",
      "Maintain your balanced approach to expectations",
      "Recognize efforts of peers and acknowledge their contributions"
    ];
    return [
      "Your healthy perspective supports positive relationships",
      "Continue your collaborative approach to academic work",
      "Share your balanced mindset with peers who may struggle in this area"
    ];
  };
  
  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Your Results</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/3 h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} / ${maxScore}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Average Score: {averageScore} / {maxScore}</h3>
              <p className="text-lg font-medium mb-4">{scoreInterpretation()}</p>
              <div>
                <h4 className="font-semibold mb-2">Recommendations:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {recommendations().map((rec, i) => (
                    <li key={i} className="text-sm">{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsSummary;
