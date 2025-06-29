import React from 'react';
import { Card, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Question({ data, index }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Q{index + 1}: {data.question}</Card.Title>
        <Form>
          {data.options.map((opt, i) => (
            <Form.Check
              key={i}
              type="radio"
              label={opt}
              name={`question-${index}`}
              id={`q${index}-opt${i}`}
            />
          ))}
        </Form>
      </Card.Body>
    </Card>
  );
}

Question.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    answer: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default Question;
