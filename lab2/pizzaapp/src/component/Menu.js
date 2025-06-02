import React from 'react';

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
        <section className="container my-5">
            <h2 className="text-start mb-4">Our Menu</h2>
            <div className="row justify-content-center text-start">
                {pizza.map((item, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card h-100">
                            {item.tag && (
                                <span className={`badge bg-warning text-dark position-absolute m-2`}>
                                    {item.tag}
                                </span>
                            )}
                            <img src={item.img} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title text-start">{item.title}</h5>
                                <p className="card-text">
                                    {item.salePrice ? (
                                        <div>
                                            <span className="text-muted text-decoration-line-through ">{item.price}</span>
                                            <span className="ms-2 text-warning fw-bold">{item.salePrice}</span>
                                        </div>
                                    ) : (
                                        <span>{item.price}</span>
                                    )}
                                </p>
                                <button className="btn btn-dark w-100">Buy</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Menu;
