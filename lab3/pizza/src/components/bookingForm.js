import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookingForm() {
    return (
        <Container className="text-white ">
            <h2 className="text-center mb-4">Book Your Table</h2>
            <Form>
                <Row className="g-3">
                    <Col md={4}>
                        <Form.Control type="text" placeholder="Your Name *" required />
                    </Col>
                    <Col md={4}>
                        <Form.Control type="email" placeholder="Your Email *" required />
                    </Col>
                    <Col md={4}>
                        <Form.Select required>
                            <option value="">Select a Service</option>
                            <option value="Dine In">Dine In</option>
                            <option value="Take Away">Take Away</option>
                        </Form.Select>
                    </Col>
                    <Col md={12}>
                        <Form.Control as="textarea" rows={4} placeholder="Please write your comment" />
                    </Col>
                    <Col md={12} className="text-start">
                        <Button type="submit" variant="warning" className="px-5 text-light">
                            Send Message
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default BookingForm;
