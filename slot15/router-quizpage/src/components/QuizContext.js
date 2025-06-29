import React, { createContext } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const quizData = [
    {
      question: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Who wrote "Hamlet"?',
      answers: ['Shakespeare', 'Hemingway', 'Tolstoy', 'Dante'],
      correctAnswer: 'Shakespeare'
    }
  ];

  return (
    <QuizContext.Provider value={{ quizData }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;