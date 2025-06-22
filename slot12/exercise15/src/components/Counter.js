import React, { useReducer } from 'react';
import { Button, Card } from 'react-bootstrap';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Card className="text-center p-4">
      <h2>Counter: {state.count}</h2>
      <div>
        <Button variant="success" className="m-2" onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
        <Button variant="warning" className="m-2" onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
        <Button variant="secondary" className="m-2" onClick={() => dispatch({ type: 'RESET' })}>Reset</Button>
      </div>
    </Card>
  );
}

export default Counter;