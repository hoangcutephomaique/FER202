import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAnswer,
  goToNext,
  goToPrev,
  goToFirst,
  goToLast,
  submitQuiz
} from '../redux/quizSlice';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // ✅ Thêm dòng này

export default function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Thêm dòng này

  const { questions, currentIndex } = useSelector(state => state.quiz);
  const currentQ = questions[currentIndex];

  return (
    <Container className="py-4">
      <h2 className="text-center bg-dark text-white py-3 mb-4">JavaScript Quiz</h2>

      <Card className="mb-4">
        <Card.Body>
          <h5><strong>Q.{currentQ.id}</strong> {currentQ.question}</h5>
          <Row className="mt-3">
            {currentQ.options.map((opt, idx) => (
              <Col md={6} className="mb-2" key={idx}>
                <Button
                  variant={currentQ.selectedAnswer === opt ? 'primary' : 'outline-primary'}
                  className="w-100 text-start bg-opacity-25"
                  onClick={() => dispatch(selectAnswer({ id: currentQ.id, answer: opt }))}
                >
                  <input
                    type="radio"
                    checked={currentQ.selectedAnswer === opt}
                    readOnly
                    className="me-2"
                  />
                  {opt}
                </Button>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Navigation */}
      <div className="d-flex justify-content-center gap-2 mb-4">
        <Button variant="primary" onClick={() => dispatch(goToFirst())}>First</Button>
        <Button variant="primary" onClick={() => dispatch(goToPrev())}>Prev</Button>
        <Button variant="primary" onClick={() => dispatch(goToNext())}>Next</Button>
        <Button variant="primary" onClick={() => dispatch(goToLast())}>Last</Button>
      </div>

      {/* Actions */}
      <div className="d-flex justify-content-center gap-3">
        <Button variant="info" onClick={() => navigate('/')}>Quiz</Button>
        <Button variant="info" onClick={() => navigate('/overview')}>Quiz Review</Button>
        <Button
          variant="info"
          onClick={() => {
            dispatch(submitQuiz());
            navigate('/review');
          }}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
}
