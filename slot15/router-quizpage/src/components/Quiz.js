import React, { useState, useContext } from 'react';
import { Button, Container, Form, Card, Alert } from 'react-bootstrap';
import QuizContext from './QuizContext';

const Quiz = ({ onAddQuestion }) => {
  const { quizData } = useContext(QuizContext);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (questionIdx, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionIdx]: answer }));
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
          <p>
            <strong>Your score: {score}</strong>
          </p>
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
                {userAnswers[idx] === q.correctAnswer ? 'Correct!' : `Incorrect. Correct answer: ${q.correctAnswer}`}
              </Alert>
            )}
          </Card.Body>
        </Card>
      ))}

      <div className="d-flex justify-content-between">
        {!showResult ? (
          <Button onClick={handleSubmit}>Submit</Button>
        ) : (
          <Button variant="secondary" onClick={handleReset}>
            Try Again
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Quiz;
