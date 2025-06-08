import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const pizza = [
    {
        img: './menu1.jpg',
        title: 'Margherita Pizza',
        price: '$40.00',
        salePrice: '$24.00',
        tag: 'SALE',
    },
    {
        img: './menu2.jpg',
        title: 'Mushroom Pizza',
        price: '$25.00',
        salePrice: null,
        tag: null,
    },
    {
        img: './menu3.jpg',
        title: 'Hawaiian Pizza',
        price: '$30.00',
        salePrice: null,
        tag: 'NEW',
    },
    {
        img: './menu4.jpg',
        title: 'Pesto Pizza',
        price: '$50.00',
        salePrice: '$16.00',
        tag: 'SALE',
    },
];

function Menu() {
    return (
        <Container className="my-5">
            <h2 className="mb-4">Our Menu</h2>
            <Row className="justify-content-center">
                {pizza.map((item, index) => (
                    <Col md={3} key={index} className="mb-4">
                        <Card className="h-100 position-relative">
                            {item.tag && (
                                <Badge
                                    bg={item.tag === 'SALE' ? 'warning' : 'info'}
                                    text={item.tag === 'SALE' ? 'dark' : 'white'}
                                    className="position-absolute top-0 start-0 m-2"
                                >
                                    {item.tag}
                                </Badge>
                            )}
                            <Card.Img variant="top" src={item.img} alt={item.title} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.salePrice ? (
                                        <>
                                            <span className="text-muted text-decoration-line-through">{item.price}</span>{' '}
                                            <span className="text-warning fw-bold">{item.salePrice}</span>
                                        </>
                                    ) : (
                                        <span>{item.price}</span>
                                    )}
                                </Card.Text>
                                <Button variant="dark" className="w-100">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Menu;
