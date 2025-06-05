import React from 'react';
import { Container } from 'react-bootstrap';

function Content() {
  return (
    <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5">
      <Container className="text-center">
        <h2 className="mb-4">About</h2>
        <p className="lead">This is the about section of the website.</p>
        <h2 className="mt-5 mb-4">Contact</h2>
        <p className="lead">For any inquiries, please contact us at user@example.com.</p>
      </Container>
    </main>
  );
}

export default Content;