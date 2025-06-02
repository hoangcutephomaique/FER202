import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Carousel from './Carousel';
import Menu from './Menu';
import BookingForm from './BookingForm';
import Header from './Header';



function App1() {
    return (
        <div className="bg-dark text-white">
            <Header/>
            <Carousel/>
            <Menu/>
            <BookingForm/>
        </div>
    );
}

export default App1;
