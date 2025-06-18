import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Result = ({ score, total, onReplay }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title> Quiz Completed!</Card.Title>
        <Card.Text>
          Your score: <strong>{score}</strong> out of <strong>{total}</strong>
        </Card.Text>
        <Button variant="success" onClick={onReplay}>
          Play Again
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Result;
