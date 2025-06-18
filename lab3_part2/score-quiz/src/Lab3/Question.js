import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Question = ({ questionData, selectedAnswer, onSelectAnswer, onSubmitAnswer }) => {
  const { question, options } = questionData;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{question}</Card.Title>
        <Form>
          {options.map((option, idx) => (
            <Form.Check
              type="radio"
              key={idx}
              label={option}
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onSelectAnswer(option)}
              className="mb-2"
            />
          ))}
          <Button
            variant="primary"
            onClick={onSubmitAnswer}
            disabled={!selectedAnswer}
            className="mt-3"
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Question;
