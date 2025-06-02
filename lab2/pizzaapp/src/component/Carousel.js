import React from 'react';

const carouselImages = [
    {
        img: './pizza1.jpg',
        title: 'Neponetan Pizza',
        decription: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!'
    },
    {
        img: './pizza2.jpg',
        title: 'Margherita Pizza',
        decription: 'If you are looking for traditional Italian pizza, the Margherita is the best option!'
    },
    {
        img: './pizza3.jpg',
        title: 'Mushroom Pizza',
        decription: 'If you are looking for traditional Italian pizza, the Mushroom is the best option!'
    },
    {
        img: './pizza4.jpg',
        title: 'Pesto Pizza',
        decription: 'If you are looking for traditional Italian pizza, the Pesto is the best option!'
    },
    {
        img: './pizza5.jpg',
        title: 'Pepperoni Pizza',
        decription: 'If you are looking for traditional Italian pizza, the Pepperoni is the best option!'
    },
];

function Carousel() {
    return (
        <div id="pizzaCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {carouselImages.map((item, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={item.img} className="d-block w-100" alt={`Pizza ${index + 1}`} style={{ maxHeight: '500px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>{item.title}</h1>
                            <p>{item.decription}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
