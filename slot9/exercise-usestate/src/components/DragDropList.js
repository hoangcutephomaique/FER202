import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const DragDropList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => setDraggingIndex(index);
  const handleDragOver = (index) => {
    if (draggingIndex === null || draggingIndex === index) return;
    const newItems = [...items];
    const [dragged] = newItems.splice(draggingIndex, 1);
    newItems.splice(index, 0, dragged);
    setDraggingIndex(index);
    setItems(newItems);
  };
  const handleDragEnd = () => setDraggingIndex(null);

  return (
    <Card className="mb-4 p-3" style={{ backgroundColor: '#2c2f36', color: 'white', border: 'none' }}>
      <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '20px' }}>
        {items.map((item, i) => (
          <li
            key={i}
            draggable
            onDragStart={() => handleDragStart(i)}
            onDragOver={() => handleDragOver(i)}
            onDragEnd={handleDragEnd}
            style={{ cursor: 'grab', marginBottom: '10px' }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DragDropList;
