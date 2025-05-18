
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
  {
    id: 1,
    text: "I honestly feel I'm just more deserving than others.",
    options: [
      { id: "1A", text: "Strongly disagree", value: 1 },
      { id: "1B", text: "Disagree", value: 2 },
      { id: "1C", text: "Neutral", value: 3 },
      { id: "1D", text: "Agree", value: 4 },
      { id: "1E", text: "Strongly agree", value: 5 }
    ]
  },
  {
    id: 2,
    text: "Great things should come to me.",
    options: [
      { id: "2A", text: "Strongly disagree", value: 1 },
      { id: "2B", text: "Disagree", value: 2 },
      { id: "2C", text: "Neutral", value: 3 },
      { id: "2D", text: "Agree", value: 4 },
      { id: "2E", text: "Strongly agree", value: 5 }
    ]
  },
  {
    id: 3,
    text: "If I were on the Titanic, I would deserve to be on the first lifeboat.",
    options: [
      { id: "3A", text: "Strongly disagree", value: 1 },
      { id: "3B", text: "Disagree", value: 2 },
      { id: "3C", text: "Neutral", value: 3 },
      { id: "3D", text: "Agree", value: 4 },
      { id: "3E", text: "Strongly agree", value: 5 }
    ]
  },
  {
    id: 4,
    text: "I demand the best because I'm worth it.",
    options: [
      { id: "4A", text: "Strongly disagree", value: 1 },
      { id: "4B", text: "Disagree", value: 2 },
      { id: "4C", text: "Neutral", value: 3 },
      { id: "4D", text: "Agree", value: 4 },
      { id: "4E", text: "Strongly agree", value: 5 }
    ]
  },
  {
    id: 5,
    text: "I do not necessarily deserve special treatment.",
    options: [
      { id: "5A", text: "Strongly disagree", value: 5 },
      { id: "5B", text: "Disagree", value: 4 },
      { id: "5C", text: "Neutral", value: 3 },
      { id: "5D", text: "Agree", value: 2 },
      { id: "5E", text: "Strongly agree", value: 1 }
    ]
  },
  {
    id: 6,
    text: "I deserve more things in my life.",
    options: [
      { id: "6A", text: "Strongly disagree", value: 1 },
      { id: "6B", text: "Disagree", value: 2 },
      { id: "6C", text: "Neutral", value: 3 },
      { id: "6D", text: "Agree", value: 4 },
      { id: "6E", text: "Strongly agree", value: 5 }
    ]
  },
  {
    id: 7,
    text: "People like me deserve an extra break now and then.",
    options: [
      { id: "7A", text: "Strongly disagree", value: 1 },
      { id: "7B", text: "Disagree", value: 2 },
      { id: "7C", text: "Neutral", value: 3 },
      { id: "7D", text: "Agree", value: 4 },
      { id: "7E", text: "Strongly agree", value: 5 }
    ]
  },
  {
    id: 8,
    text: "Things should go my way.",
    options: [
      { id: "8A", text: "Strongly disagree", value: 1 },
      { id: "8B", text: "Disagree", value: 2 },
      { id: "8C", text: "Neutral", value: 3 },
      { id: "8D", text: "Agree", value: 4 },
      { id: "8E", text: "Strongly agree", value: 5 }
    ]
  },
  {
    id: 9,
    text: "I feel entitled to more of everything.",
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
    text: "I am patient when receiving what I deserve.",
    options: [
      { id: "10A", text: "Strongly disagree", value: 5 },
      { id: "10B", text: "Disagree", value: 4 },
      { id: "10C", text: "Neutral", value: 3 },
      { id: "10D", text: "Agree", value: 2 },
      { id: "10E", text: "Strongly agree", value: 1 }
    ]
  },
  // Additional questions to reach 35
  {
    id: 11,
    text: "I expect others to go out of their way to help me with my academic work.",
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
    text: "I deserve immediate responses from professors to my emails.",
    options: [
      { id: "12A", text: "Strongly disagree", value: 1 },
      { id: "12B", text: "Disagree", value: 2 },
      { id: "12C", text: "Neutral", value: 3 },
      { id: "12D", text: "Agree", value: 4 },
      { id: "12E", text: "Strongly agree", value: 5 }
    ]
  },
  // More questions following the same pattern up to 35
  {
    id: 35,
    text: "My academic achievements should be recognized more than others'.",
    options: [
      { id: "35A", text: "Strongly disagree", value: 1 },
      { id: "35B", text: "Disagree", value: 2 },
      { id: "35C", text: "Neutral", value: 3 },
      { id: "35D", text: "Agree", value: 4 },
      { id: "35E", text: "Strongly agree", value: 5 }
    ]
  }
];
