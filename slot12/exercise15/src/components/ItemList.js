import React, { useReducer, useState } from 'react';
import { Button, Form, ListGroup, Card } from 'react-bootstrap';

function listReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.item] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState('');

  const handleAddItem = () => {
    if (newItemName.trim() !== '') {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: 'ADD_ITEM', item: newItem });
      setNewItemName('');
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  return (
    <Card className="p-4">
      <h2>Item List</h2>
      <Form.Group className="mb-3">
        <Form.Label>Enter Item:</Form.Label>
        <Form.Control
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Enter item name"
        />
      </Form.Group>
      <Button variant="primary" onClick={handleAddItem}>Add Item</Button>

      <ListGroup className="mt-4">
        {state.items.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between">
            {item.name}
            <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item.id)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default ItemList;