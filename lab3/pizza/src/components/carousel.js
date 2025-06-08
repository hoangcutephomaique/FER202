import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const carouselImages = [
    {
        img: './pizza1.jpg',
        title: 'Neapolitan Pizza',
        description: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!'
    },
    {
        img: './pizza2.jpg',
        title: 'Margherita Pizza',
        description: 'If you are looking for traditional Italian pizza, the Margherita is the best option!'
    },
    {
        img: './pizza3.jpg',
        title: 'Mushroom Pizza',
        description: 'If you are looking for traditional Italian pizza, the Mushroom is the best option!'
    },
    {
        img: './pizza4.jpg',
        title: 'Pesto Pizza',
        description: 'If you are looking for traditional Italian pizza, the Pesto is the best option!'
    },
    {
        img: './pizza5.jpg',
        title: 'Pepperoni Pizza',
        description: 'If you are looking for traditional Italian pizza, the Pepperoni is the best option!'
    },
];

function PizzaCarousel() {
    return (
        <Carousel>
            {carouselImages.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={item.img}
                        alt={`Slide ${index + 1}`}
                        style={{ maxHeight: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default PizzaCarousel;
