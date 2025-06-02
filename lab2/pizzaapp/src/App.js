import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const carouselImages = [
        {
            img: './pizza1.jpg',
            title:'Neponetan Pizza',
            decription: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!'
        },
        {
            img:  './pizza2.jpg',
            title:'Margherita Pizza',
            decription: 'If you are looking for traditional Italian pizza, the Margherita is the best option!'
        },
        {
            img: './pizza3.jpg',
            title:'Mushroom Pizza',
            decription: 'If you are looking for traditional Italian pizza, the Mushroom is the best option!'
        },
        {
            img: './pizza4.jpg',
            title:'Pesto Pizza',
            decription: 'If you are looking for traditional Italian pizza, the Pesto is the best option!'
        },
        {
            img: './pizza5.jpg',
            title:'Pepperoni Pizza',
            decription: 'If you are looking for traditional Italian pizza, the Pepperoni is the best option!'
        },
    ];

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

    return (
        <div className="bg-dark text-white">
            {/* Header/Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                <div className="container p-3">
                    <a className="navbar-brand fw-bold" href="#">Pizza House</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                        </ul>
                        <form className="d-flex" style={{marginRight:'10%'}}>
                            <input className="form-control " type="search" placeholder="Search" style={{width:'100%'}} />
                            <button className="btn btn-danger"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Hero Carousel */}
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

            {/* Menu Section */}
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

            {/* Booking Form */}
            <section className="container text-white">
                <h2 className="text-center mb-4">Book Your Table</h2>
                <form className="row g-3">
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Your Name *" required />
                    </div>
                    <div className="col-md-4">
                        <input type="email" className="form-control" placeholder="Your Email *" required />
                    </div>
                    <div className="col-md-4">
                        <select className="form-select" required>
                            <option>Select a Service</option>
                            <option>Dine In</option>
                            <option>Take Away</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" rows="4" placeholder="Please write your comment" />
                    </div>
                    <div className="col-12 text-start">
                        <button type="submit" className="btn btn-warning px-5 text-light">Send Message</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default App;
