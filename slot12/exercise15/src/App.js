import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Tab, Tabs } from 'react-bootstrap';
import Counter from './components/Counter';
import ChangeNameAge from './components/ChangeNameAge';
import ItemList from './components/ItemList';
import QuestionBank from './components/QuestionBank';

function App() {
  return (
    <Container className="mt-4">
      <Navbar bg="primary" variant="dark" className="mb-4 justify-content-center">
        <Navbar.Brand href="#home">Exercise 15 - useReducer</Navbar.Brand>
      </Navbar>
      <Tabs defaultActiveKey="counter" id="tabs" className="mb-3">
        <Tab eventKey="counter" title="Counter">
          <Counter />
        </Tab>
        <Tab eventKey="form" title="Change Name & Age">
          <ChangeNameAge />
        </Tab>
        <Tab eventKey="items" title="Item List">
          <ItemList />
        </Tab>
        <Tab eventKey="quiz" title="Question Bank">
          <QuestionBank />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;