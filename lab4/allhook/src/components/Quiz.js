import React, { useState } from 'react';
import { Button, Container, Form, Card, Alert } from 'react-bootstrap';
export const quizData = [
  {
    question: 'What is ReactJS?',
    answers: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system'
    ],
    correctAnswer: 'A JavaScript library for building user interfaces'
  },
  {
    question: 'What is JSX?',
    answers: [
      'A programming language',
      'A file format',
      'A syntax extension for JavaScript'
    ],
    correctAnswer: 'A syntax extension for JavaScript'
  }
];



const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (questionIdx, answer) => {
    setUserAnswers(prev => ({ ...prev, [questionIdx]: answer }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizData.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setScore(0);
    setShowResult(false);
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4">React Quiz</h2>

      {showResult && (
        <div className="mb-4">
          <h3 style={{ color: 'red' }}>Quiz Completed!</h3>
          <p><strong>Your score: {score}</strong></p>
        </div>
      )}

      {quizData.map((q, idx) => (
        <Card key={idx} className="mb-3">
          <Card.Body>
            <Card.Title>{q.question}</Card.Title>
            <Form>
              {q.answers.map((a, i) => (
                <Form.Check
                  key={i}
                  type="radio"
                  name={`question-${idx}`}
                  label={a}
                  disabled={showResult}
                  checked={userAnswers[idx] === a}
                  onChange={() => handleChange(idx, a)}
                />
              ))}
            </Form>
            {showResult && (
              <Alert variant={userAnswers[idx] === q.correctAnswer ? 'success' : 'danger'}>
                {userAnswers[idx] === q.correctAnswer ? 'Correct!' : 'Incorrect.'}
              </Alert>
            )}
          </Card.Body>
        </Card>
      ))}

      {!showResult ? (
        <Button onClick={handleSubmit}>Submit</Button>
      ) : (
        <Button variant="secondary" onClick={handleReset}>Làm lại</Button>
      )}
    </Container>
  );
};

export default Quiz;