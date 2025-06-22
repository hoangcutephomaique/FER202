import React, { useReducer } from 'react';
import { Card, Form } from 'react-bootstrap';

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.value };
    case 'SET_AGE':
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: '', age: '' });

  return (
    <Card className="p-4">
      <h2>Change Name & Age</h2>
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={state.name}
          onChange={(e) => dispatch({ type: 'SET_NAME', value: e.target.value })}
          placeholder="Input name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age:</Form.Label>
        <Form.Control
          type="text"
          value={state.age}
          onChange={(e) => dispatch({ type: 'SET_AGE', value: e.target.value })}
          placeholder="Input age"
        />
      </Form.Group>
      <h4>Result:</h4>
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
    </Card>
  );
}

export default ChangeNameAge;