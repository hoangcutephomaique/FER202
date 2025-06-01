import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
    const pizza = [
        {
            img: './pizza1.jpg',
            title: 'Pizza nướng muối tiêu',
            decription: 'cà chua, phô mai, rau củ',
        },
        {
            img: './pizza2.jpg',
            title: 'Pizza xào hành',
            decription: 'hành tím, nho đen, thanh long',
        },
        {
            img: './pizza3.jpg',
            title: 'Pizza sốt phô mai',
            decription: 'nấm, phô mai, trứng',
        },
        {
            img: './pizza4.jpg',
            title: 'Pizza cháy tỏi',
            decription: 'cà chua, phô mai, chinsu',
        },
        {
            img: './pizza5.jpg',
            title: 'Pizza rau củ',
            decription: 'dầu oliu, tiêu, rau củ',
        },
    ];
    const menu = ['./menu1.jpg', './menu2.jpg', './menu3.jpg'];
    return (
        <div className='container py-5'>
            <header className='text-center mb-5'>
                <h1 className='text-danger'><i class="fa-solid fa-house text-warning"></i> Cửa hàng Pizza <i className='fa-solid fa-pizza-slice text-warning' ></i> của Hoàng</h1>
                <p className='lead'>  Thơm ngon bổ dưỡng <i class="fa-regular fa-face-smile-wink text-warning"></i></p>
            </header>
            <section className="row g-4">
                {pizza.map((pizza, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card h-100 shadow-sm" style={{ width: '360px', height: '350px' }}>
                            <img src={pizza.img} className="card-img-top" alt={pizza.title} />
                            <div className="card-body">
                                <h5 className="card-title">{pizza.title}</h5>
                                <p className="card-text">{pizza.decription}</p>
                                <button className="btn btn-outline-danger w-100">Order Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <section className='mt-5 text-center'>
                <h2 className="mb-4 text-success"> <i class="fa-solid fa-clipboard text-dark"></i> Menu</h2>
                <div className='row justify-content-center'>
                    {
                        menu.map((menu, index) => (
                            <div className="col-md-4 mb-5" key={index}>
                                <img
                                    src={menu}
                                    alt={`Menu ${index + 1}`}
                                    style={{ width: '300px', height: 'auto' }}
                                    className="img-fluid rounded shadow "
                                />
                            </div>
                        )
                        )
                    }
                </div>
            </section>
        </div>
    );
}
export default App;
