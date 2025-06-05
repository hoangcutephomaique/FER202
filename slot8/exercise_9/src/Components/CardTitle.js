import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function ImgOverlayExample() {
    return (
        <Card style={{ maxWidth: '540px' }}>
            <Row>
                <Col md={4}>
                    <Card.Img src="./fpt_education.png" alt="" />
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>Hoai Nguyen - FPT Da Nang</Card.Title>
                        <Card.Text>Mobile: 0982827763</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>

    );
}

export default ImgOverlayExample;
