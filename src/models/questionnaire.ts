
export interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    value: number;
  }[];
}

export interface QuestionnaireAnswer {
  questionId: number;
  selectedOptionId: string;
}

export interface QuestionnaireResult {
  category: string;
  score: number;
  interpretation: string;
}

export const questionsData: Question[] = [
  // Educational Assessment Questions
  {
    id: 1,
    text: "Academic Strengths and Weaknesses: (Choose the option that best describes you)",
    options: [
      { id: "1A", text: "I understand the main ideas well, but sometimes struggle with the step-by-step procedures.", value: 3 },
      { id: "1B", text: "I'm good at solving problems, but I find it hard to remember formulas and specific facts.", value: 3 },
      { id: "1C", text: "I feel pretty comfortable with most aspects of this subject.", value: 4 },
      { id: "1D", text: "I find the basic concepts challenging and need extra help to keep up.", value: 2 }
    ]
  },
  {
    id: 2,
    text: "Attention Span: (Choose the option that best describes your focus in class)",
    options: [
      { id: "2A", text: "I can usually focus for a long time without getting distracted.", value: 4 },
      { id: "2B", text: "I can focus for a while, but I need short breaks to stay engaged.", value: 3 },
      { id: "2C", text: "I get distracted easily and find it hard to pay attention for long periods.", value: 2 },
      { id: "2D", text: "It's very hard for me to focus, even for short activities.", value: 1 }
    ]
  },
  {
    id: 3,
    text: "Classroom Participation: (Choose the option that best describes your participation in class)",
    options: [
      { id: "3A", text: "I often raise my hand, ask questions, and share my ideas.", value: 4 },
      { id: "3B", text: "I participate when the teacher asks me directly.", value: 3 },
      { id: "3C", text: "I usually just listen and don't talk much in class.", value: 2 },
      { id: "3D", text: "I feel uncomfortable speaking in class.", value: 1 }
    ]
  },
  {
    id: 4,
    text: "Quiz Scores: (Choose the option that best describes your quiz performance)",
    options: [
      { id: "4A", text: "I usually get very high scores on quizzes.", value: 4 },
      { id: "4B", text: "I usually get good scores on quizzes.", value: 3 },
      { id: "4C", text: "My quiz scores are usually just average.", value: 2 },
      { id: "4D", text: "I often get low scores on quizzes.", value: 1 }
    ]
  },
  {
    id: 5,
    text: "Preferred Learning Style: (Choose the option that best describes how you learn)",
    options: [
      { id: "5A", text: "I learn best when I see pictures, diagrams, and videos.", value: 4 },
      { id: "5B", text: "I learn best by listening to lectures and discussions.", value: 3 },
      { id: "5C", text: "I learn best by doing things myself, like experiments or hands-on activities.", value: 4 },
      { id: "5D", text: "I learn best by reading textbooks and writing notes.", value: 3 }
    ]
  },
  {
    id: 6,
    text: "Emotional State: (Choose the option that best describes how you generally feel about learning this subject)",
    options: [
      { id: "6A", text: "I usually feel positive and interested in learning this subject.", value: 4 },
      { id: "6B", text: "Sometimes I feel a bit worried or frustrated when learning this.", value: 3 },
      { id: "6C", text: "I often feel unmotivated or not interested in this subject.", value: 2 },
      { id: "6D", text: "I get quite stressed or upset when learning this subject and need a lot of support.", value: 1 }
    ]
  },
  {
    id: 7,
    text: "Homework Submission Timelines: (Choose the option that best describes when you usually hand in homework)",
    options: [
      { id: "7A", text: "I always submit my homework on time.", value: 4 },
      { id: "7B", text: "I usually submit my homework on time, but sometimes it's a little late.", value: 3 },
      { id: "7C", text: "My homework is often late.", value: 2 },
      { id: "7D", text: "I rarely hand in my homework.", value: 1 }
    ]
  },
  {
    id: 8,
    text: "Confidence Level: (Choose the option that best describes how confident you feel in this subject)",
    options: [
      { id: "8A", text: "I feel very confident in my ability to do well in this subject.", value: 4 },
      { id: "8B", text: "I feel somewhat confident, but I sometimes doubt myself.", value: 3 },
      { id: "8C", text: "I don't feel very confident in this subject.", value: 2 },
      { id: "8D", text: "I have very little confidence in my ability to learn this subject.", value: 1 }
    ]
  },
  
  // Original Psychological Entitlement Questions
  {
    id: 9,
    text: "I honestly feel I'm just more deserving than others.",
    options: [
      { id: "9A", text: "Strongly disagree", value: 1 },
      { id: "9B", text: "Disagree", value: 2 },
      { id: "9C", text: "Neutral", value: 3 },
      { id: "9D", text: "Agree", value: 4 },
      { id: "9E", text: "Strongly agree", value: 5 }
    ]
  },
  {
    id: 10,
    text: "Great things should come to me.",
    options: [
      { id: "10A", text: "Strongly disagree", value: 1 },
      { id: "10B", text: "Disagree", value: 2 },
      { id: "10C", text: "Neutral", value: 3 },
      { id: "10D", text: "Agree", value: 4 },
      { id: "10E", text: "Strongly agree", value: 5 }
    ]
  },
  
  // Continue with remaining entitlement questions or truncate as needed
  {
    id: 11,
    text: "If I were on the Titanic, I would deserve to be on the first lifeboat.",
    options: [
      { id: "11A", text: "Strongly disagree", value: 1 },
      { id: "11B", text: "Disagree", value: 2 },
      { id: "11C", text: "Neutral", value: 3 },
      { id: "11D", text: "Agree", value: 4 },
      { id: "11E", text: "Strongly agree", value: 5 }
    ]
  },
  {
    id: 12,
    text: "I demand the best because I'm worth it.",
    options: [
      { id: "12A", text: "Strongly disagree", value: 1 },
      { id: "12B", text: "Disagree", value: 2 },
      { id: "12C", text: "Neutral", value: 3 },
      { id: "12D", text: "Agree", value: 4 },
      { id: "12E", text: "Strongly agree", value: 5 }
    ]
  },
  {
    id: 13,
    text: "I do not necessarily deserve special treatment.",
    options: [
      { id: "13A", text: "Strongly disagree", value: 5 },
      { id: "13B", text: "Disagree", value: 4 },
      { id: "13C", text: "Neutral", value: 3 },
      { id: "13D", text: "Agree", value: 2 },
      { id: "13E", text: "Strongly agree", value: 1 }
    ]
  },
  {
    id: 14,
    text: "I deserve more things in my life.",
    options: [
      { id: "14A", text: "Strongly disagree", value: 1 },
      { id: "14B", text: "Disagree", value: 2 },
      { id: "14C", text: "Neutral", value: 3 },
      { id: "14D", text: "Agree", value: 4 },
      { id: "14E", text: "Strongly agree", value: 5 }
    ]
  },
  {
    id: 15,
    text: "People like me deserve an extra break now and then.",
    options: [
      { id: "15A", text: "Strongly disagree", value: 1 },
      { id: "15B", text: "Disagree", value: 2 },
      { id: "15C", text: "Neutral", value: 3 },
      { id: "15D", text: "Agree", value: 4 },
      { id: "15E", text: "Strongly agree", value: 5 }
    ]
  }
];
