import React, { useState } from 'react';
import Question from './Question';
import Result from './Score';
import { Container } from 'react-bootstrap';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which language is used for React?',
    options: ['Python', 'C++', 'JavaScript', 'Ruby'],
    correctAnswer: 'JavaScript',
  },
  {
    question: 'What does CSS stand for?',
    options: ['Computer Style Sheets', 'Creative Style System', 'Cascading Style Sheets', 'Colorful Style Syntax'],
    correctAnswer: 'Cascading Style Sheets',
  }
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleReplay = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Quiz</h1>
      {!isQuizFinished ? (
        <Question
          questionData={questions[currentQuestionIndex]}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleAnswerSelect}
          onSubmitAnswer={handleSubmitAnswer}
        />
      ) : (
        <Result score={score} total={questions.length} onReplay={handleReplay} />
      )}
    </Container>
  );
};

export default QuizApp;
