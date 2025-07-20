import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card } from 'react-bootstrap';

export default function QuizReview() {
  const { questions } = useSelector(state => state.quiz);

  return (
    <Container className="py-4">
      <h2 className="text-center bg-dark text-white py-3 mb-4">Quiz Review</h2>
      {questions.map((q, idx) => {
        const isCorrect = q.selectedAnswer === q.correctAnswer;
        return (
          <Card
            key={q.id}
            className="mb-3"
            bg={isCorrect ? 'success' : 'danger'}
            text="white"
          >
            <Card.Body>
              <Card.Title>
                <strong>Q{idx + 1}.</strong> {q.question}
              </Card.Title>
              {q.options.map((opt, i) => (
                <div key={i} className="form-check mb-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    checked={q.selectedAnswer === opt}
                    readOnly
                  />
                  <label className="form-check-label">{opt}</label>
                </div>
              ))}
              <div className="bg-light text-dark mt-3 p-2 rounded">
                <strong>Right answer is:</strong> {q.correctAnswer}
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}
