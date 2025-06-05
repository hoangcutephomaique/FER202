import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <header className="bg-orange text-center py-4">
      <Container>
        <img
          src="./fpt_education.png"
          alt="FPT Education"
          className="img-fluid"
          style={{ maxWidth: '300px', marginBottom: '10px' }}
        />
        <h1 className="text-orange mt-2 mb-3">FPT UNIVERSITY</h1>
        <Navbar expand="lg" className="justify-content-center">
          <Nav className="nav-fill w-0">
            <Nav.Link href="#" className="text-white mx-4">Home</Nav.Link>
            <Nav.Link href="#" className="text-white mx-4">About</Nav.Link>
            <Nav.Link href="#" className="text-white mx-4">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;