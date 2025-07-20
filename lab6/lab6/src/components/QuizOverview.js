import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Row, Col } from 'react-bootstrap';

export default function QuizOverview() {
  const { questions } = useSelector(state => state.quiz);

  return (
    <Container className="py-4">
      <h2 className="text-center bg-dark text-white py-3 mb-4">Quiz Review</h2>
      <Row>
        {questions.map((q, index) => (
          <Col key={q.id} xs={6} sm={4} md={3} lg={2} className="mb-3">
            <Card bg="success" text="dark" className="text-center">
              <Card.Body>
                <Card.Title className="mb-1">Question No {index + 1}</Card.Title>
                <Card.Text className="fw-bold">
                  {q.selectedAnswer ? 'Answered' : 'Not Answered'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
