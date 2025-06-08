import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom">
            <Container className="p-3">
                <Navbar.Brand href="#">Pizza House</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" active>Home</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex" style={{ marginRight: '10%' }}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                        />
                        <Button variant="danger">
                            <FaSearch />
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
