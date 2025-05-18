
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question, QuestionnaireAnswer } from '@/models/questionnaire';
import { questionsData } from '@/models/questionnaire';
import QuestionCard from '@/components/Questionnaire/QuestionCard';
import ProgressBar from '@/components/Questionnaire/ProgressBar';
import ResultsSummary from '@/components/Questionnaire/ResultsSummary';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  const currentQuestion = questionsData[currentQuestionIndex];
  const totalQuestions = questionsData.length;
  
  const currentAnswer = answers.find(
    answer => answer.questionId === currentQuestion?.id
  );
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleAnswerSelected = (answer: QuestionnaireAnswer) => {
    setAnswers(prevAnswers => {
      const existingIndex = prevAnswers.findIndex(a => a.questionId === answer.questionId);
      
      if (existingIndex >= 0) {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingIndex] = answer;
        return updatedAnswers;
      } else {
        return [...prevAnswers, answer];
      }
    });
  };
  
  const handleReturnToDashboard = () => {
    navigate('/');
  };
  
  const handleStartOver = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
  };
  
  if (showResults) {
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
        
        <ResultsSummary 
          questions={questionsData} 
          answers={answers} 
        />
        
        <div className="flex justify-center mt-8 space-x-4">
          <Button variant="outline" onClick={handleStartOver}>
            Start Over
          </Button>
          <Button onClick={handleReturnToDashboard}>
            Return to Dashboard
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-edu-background p-4">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
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
        
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Academic Personality Assessment</h1>
          <p className="text-edu-lightText mt-2">
            This questionnaire helps identify your psychological entitlement profile and learning preferences
          </p>
        </div>
        
        <ProgressBar 
          currentStep={currentQuestionIndex + 1} 
          totalSteps={totalQuestions} 
        />
        
        <div className="relative">
          <div className="questionnaire-bg absolute inset-0 pointer-events-none" />
          <QuestionCard 
            question={currentQuestion}
            currentAnswer={currentAnswer}
            onAnswerSelected={handleAnswerSelected}
          />
        </div>
        
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          <Button
            onClick={handleNextQuestion}
            disabled={!currentAnswer}
          >
            {currentQuestionIndex === totalQuestions - 1 ? (
              <>
                Complete
                <CheckCircle2 className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
